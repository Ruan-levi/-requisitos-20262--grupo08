-- Portal de Internacionalização · PostgreSQL Nhost
-- Apenas o banco Nhost novo. NÃO executar no banco de outro projeto.
-- Papéis de autenticação Nhost permanecem 'user'. 'administrador' é solicitação,
-- e autorização gerencial depende exclusivamente de portal_admin_grants.
begin;

create table if not exists public.portal_profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  display_name varchar(80) not null,
  role text not null default 'aluno' check (role in ('aluno','docente')),
  requested_role text not null default 'aluno'
    check(requested_role in ('aluno','docente','administrador')),
  created_at timestamptz not null default now()
);
create table if not exists public.portal_admin_grants (
  user_id uuid primary key references auth.users(id) on delete cascade,
  granted_by uuid references auth.users(id) on delete set null,
  granted_at timestamptz not null default now()
);
create table if not exists public.portal_saved_destinations (
  user_id uuid not null references auth.users(id) on delete cascade,
  destination_id varchar(50) not null check(destination_id ~ '^[a-z0-9-]{2,50}$'),
  created_at timestamptz not null default now(),
  primary key(user_id,destination_id)
);
create table if not exists public.portal_checklist_progress (
  user_id uuid not null references auth.users(id) on delete cascade,
  check_key varchar(70) not null check(check_key ~ '^[a-z0-9_:-]{2,70}$'),
  completed boolean not null default false,
  updated_at timestamptz not null default now(),
  primary key(user_id,check_key)
);
create table if not exists public.portal_editorial_entries (
  id uuid primary key default gen_random_uuid(),
  title varchar(160) not null check(char_length(trim(title))>=5),
  body text not null check(char_length(trim(body))>=12),
  source_url text not null check(source_url ~ '^https://'),
  status text not null default 'rascunho'
    check(status in ('rascunho','revisao','publicado')),
  author_id uuid not null references auth.users(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists portal_editorial_status_idx on public.portal_editorial_entries(status,created_at desc);

create or replace function public.portal_create_user_profile()
returns trigger language plpgsql security definer set search_path = public, pg_temp as $$
declare
  requested text := coalesce(new.metadata->>'requested_role','aluno');
begin
  if requested not in ('aluno','docente','administrador') then requested := 'aluno'; end if;
  insert into public.portal_profiles(user_id,display_name,role,requested_role)
  values (
    new.id,
    left(coalesce(nullif(new.display_name,''),'Visitante'),80),
    case when requested='docente' then 'docente' else 'aluno' end,
    requested
  )
  on conflict(user_id) do nothing;
  return new;
end; $$;
drop trigger if exists trg_portal_profile_insert on auth.users;
create trigger trg_portal_profile_insert
  after insert on auth.users for each row execute function public.portal_create_user_profile();

-- Caso a migração seja aplicada num projeto Nhost dedicado após testes já iniciados:
insert into public.portal_profiles(user_id,display_name,role,requested_role)
select u.id,left(coalesce(nullif(u.display_name,''),'Visitante'),80),
  case when u.metadata->>'requested_role'='docente' then 'docente' else 'aluno' end,
  case when u.metadata->>'requested_role' in ('aluno','docente','administrador')
    then u.metadata->>'requested_role' else 'aluno' end
from auth.users u
on conflict(user_id) do nothing;

-- O Hasura governa as regras GraphQL. Não conceder permissões SQL diretas
-- a usuários da web para contornar os filtros por x-hasura-user-id.
commit;
