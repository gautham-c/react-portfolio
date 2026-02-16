'use client';

import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { cn } from '@/utils/cn';

import { Link } from './link';

const FallbackIcon = ({ label }: { label: string }) => (
  <span
    className="grid size-8 select-none place-items-center rounded-full bg-sky-200/60 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-sky-300/70"
    aria-hidden
  >
    {label?.[0]?.toUpperCase() ?? '?'}
  </span>
);

export type SidebarItem = {
  title: string;
  href: string;
  icon?: React.ReactNode;
};

export const Sidebar = ({ items }: { items: SidebarItem[] }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const pathname = usePathname();

  const isActivePath = (href: string) => {
    if (!pathname) return false;
    if (href === '/portfolio') return pathname === '/portfolio';
    return pathname.startsWith(`${href}`);
  };

  return (
    <aside
      className={cn(
        'group sticky top-0 z-10 transition-[width] duration-300 ease-out',
        'h-dvh min-h-screen',
        collapsed ? 'w-16' : 'w-72',
      )}
    >
      <div
        className={cn(
          'relative h-full overflow-hidden rounded-r-[2rem] bg-gradient-to-b from-white/90 via-white/70 to-cyan-50/60 supports-[backdrop-filter]:bg-white/60 backdrop-blur-xl',
          'ring-1 ring-inset ring-white/60 shadow-[0_20px_60px_rgba(45,140,240,0.18)] text-gray-900',
          'flex flex-col items-center px-2.5 pb-7 pt-5',
        )}
      >
        <div className="pointer-events-none absolute inset-x-6 top-28 h-40 rounded-full bg-sky-200/50 blur-3xl" />
        <div className="pointer-events-none absolute inset-x-10 top-1/2 h-36 rounded-full bg-cyan-200/45 blur-3xl" />
        <div className="pointer-events-none absolute inset-x-6 bottom-16 h-44 rounded-full bg-sky-100/40 blur-3xl" />

        <div className="mb-6 flex items-center justify-center gap-3">
          <button
            onClick={() => setCollapsed((v) => !v)}
            className={cn(
              'grid size-14 aspect-square place-items-center overflow-hidden rounded-2xl',
              'bg-gradient-to-b from-sky-100/80 to-sky-200/70 text-gray-900 shadow-lg ring-1 ring-inset ring-sky-200/80 backdrop-blur-md transition hover:-translate-y-0.5 hover:from-sky-100 hover:to-sky-200',
            )}
            aria-label="Toggle sidebar"
          >
            {/* logo image (place your file at apps/nextjs-app/public/gc-logo.png) */}
            {!logoError ? (
              <img
                src="/gc-logo.png"
                alt="Gautham Chadalavada logo"
                className="size-full rounded-full object-cover"
                onError={() => setLogoError(true)}
              />
            ) : (
              <span className="select-none text-base font-black tracking-wide text-slate-800">
                GC
              </span>
            )}
          </button>
          {!collapsed && (
            <div className="leading-tight">
              <p className="select-none text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Portfolio
              </p>
              <p className="select-none text-sm font-bold text-slate-900">
                Gautham Chadalavada
              </p>
            </div>
          )}
        </div>

        <nav
          className={cn(
            'mt-4 w-full text-gray-900',
            collapsed ? 'mt-10' : 'mt-6',
            'flex flex-col items-center gap-4 w-full',
          )}
          aria-label="Portfolio sections"
        >
          {(collapsed ? items : items.filter((i) => i.title !== 'Contact')).map(
            (item) => {
              const isActive = isActivePath(item.href);
              const iconNode = item.icon ? (
                <span
                  className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-sky-50 to-cyan-50 text-gray-900 ring-1 ring-inset ring-white/70 shadow-sm"
                  aria-hidden
                >
                  {item.icon}
                </span>
              ) : (
                <FallbackIcon label={item.title} />
              );

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-label={item.title}
                  title={item.title}
                  className={cn(
                    'flex items-center text-sm font-medium text-gray-900 drop-shadow-sm',
                    'ring-1 ring-inset ring-white/70 shadow-sm backdrop-blur-md transition-all',
                    collapsed
                      ? 'justify-center size-12 rounded-xl bg-white/80 hover:bg-sky-50'
                      : cn(
                          'w-full justify-start gap-3 rounded-2xl px-4 py-3',
                          isActive
                            ? 'bg-white text-slate-900 ring-sky-200/90 shadow-[0_10px_30px_rgba(45,140,240,0.15)]'
                            : 'bg-gradient-to-r from-white/75 via-white/55 to-white/75 hover:from-white/85 hover:via-white/70 hover:to-white/85',
                        ),
                  )}
                >
                  {iconNode}
                  {!collapsed && (
                    <div className="flex items-center justify-between w-full">
                      <span className="truncate">{item.title}</span>
                      {isActive && (
                        <span className="h-2 w-2 rounded-full bg-sky-500" />
                      )}
                    </div>
                  )}
                </Link>
              );
            },
          )}
        </nav>

        {/* Bottom contact details when expanded */}
        {!collapsed && (
          <div className="pointer-events-auto absolute inset-x-0 bottom-4 px-4">
            <div className="rounded-3xl bg-white/80 p-4 text-[13px] text-gray-900 shadow-md ring-1 ring-inset ring-slate-200/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
              <div className="mb-3 flex items-center gap-2 font-semibold">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden
                  className="size-5 text-sky-700"
                >
                  <path
                    fill="currentColor"
                    d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6Zm2 .4V6h16v.4L12 12 4 6.4Zm16 2.5-8 5.6-8-5.6V18h16V8.9Z"
                  />
                </svg>
                <span>Contact</span>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center gap-3 break-all">
                  <span className="grid size-7 place-items-center rounded-xl bg-sky-50 text-xs font-semibold text-slate-900 ring-1 ring-inset ring-sky-100">
                    @
                  </span>
                  <a
                    className="truncate text-[13px] font-medium underline decoration-sky-400/70 underline-offset-2 hover:decoration-sky-600"
                    href="mailto:gautham.chadalavada@gmail.com"
                  >
                    gautham.chadalavada@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="grid size-7 place-items-center rounded-xl bg-sky-50 text-xs font-semibold text-slate-900 ring-1 ring-inset ring-sky-100">
                    ☎︎
                  </span>
                  <a
                    className="text-[13px] font-medium underline-offset-2 hover:underline"
                    href="tel:+18508250636"
                  >
                    +1-850-825-0636
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="grid size-7 place-items-center rounded-xl bg-sky-50 text-[11px] font-semibold text-slate-900 ring-1 ring-inset ring-sky-100">
                    in
                  </span>
                  <a
                    className="truncate text-[13px] font-medium underline decoration-sky-400/70 underline-offset-2 hover:decoration-sky-600"
                    href="https://linkedin.com/in/gautham-c"
                    target="_blank"
                    rel="noreferrer"
                  >
                    linkedin.com/in/gautham-c
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="grid size-7 place-items-center rounded-xl bg-sky-50 text-[10px] font-semibold text-slate-900 ring-1 ring-inset ring-sky-100">
                    GH
                  </span>
                  <a
                    className="truncate text-[13px] font-medium underline decoration-sky-400/70 underline-offset-2 hover:decoration-sky-600"
                    href="https://github.com/gautham-c"
                    target="_blank"
                    rel="noreferrer"
                  >
                    github.com/gautham-c
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};
