'use client';

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

  return (
    <aside
      className={cn(
        'group sticky top-0 z-10 transition-[width] duration-300 ease-out',
        'h-dvh min-h-screen',
        collapsed ? 'w-16' : 'w-64',
      )}
    >
      <div
        className={cn(
          'relative h-full overflow-hidden p-4 pr-5 rounded-r-[2rem] bg-sky-100/40 supports-[backdrop-filter]:bg-sky-100/25 backdrop-blur-xl',
          'ring-1 ring-inset ring-sky-300/60 shadow-[0_10px_40px_rgba(14,165,233,0.15)] text-gray-900',
          'flex flex-col items-center',
        )}
      >
        <div className="pointer-events-none absolute -left-10 top-20 size-40 rounded-full bg-sky-300/40 blur-2xl" />
        <div className="pointer-events-none absolute left-24 top-1/3 size-28 rounded-full bg-cyan-300/40 blur-2xl" />
        <div className="pointer-events-none absolute -left-6 bottom-20 size-56 rounded-full bg-blue-400/30 blur-3xl" />

        <div className="mb-6 flex items-center justify-center gap-3">
          <button
            onClick={() => setCollapsed((v) => !v)}
            className={cn(
              'grid size-14 aspect-square place-items-center rounded-full overflow-hidden',
              'bg-gradient-to-b from-sky-100/80 to-sky-200/70 text-gray-900 shadow-lg ring-1 ring-inset ring-sky-300/80 backdrop-blur-md transition hover:from-sky-100 hover:to-sky-200',
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
              <span className="select-none text-base font-black tracking-wide">
                <span className="bg-gradient-to-r from-sky-500 to-sky-700 bg-clip-text text-transparent">
                  G
                </span>
                <span className="text-slate-700">C</span>
              </span>
            )}
          </button>
          {!collapsed && (
            <span className="select-none text-base font-extrabold uppercase tracking-[0.12em] text-slate-800">
              GAUTHAM CHADALAVADA
            </span>
          )}
        </div>

        <nav
          className={cn(
            'mt-6 text-gray-900',
            collapsed ? 'mt-10' : 'mt-6',
            'flex flex-col items-center gap-4 w-full',
          )}
          aria-label="Portfolio sections"
        >
          {(collapsed ? items : items.filter((i) => i.title !== 'Contact')).map(
            (item) => {
              const iconNode = item.icon ? (
                <span className="shrink-0 text-gray-900" aria-hidden>
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
                    'flex items-center rounded-full text-base font-medium text-gray-900 drop-shadow-sm',
                    'ring-1 ring-inset ring-sky-300/70 shadow-sm backdrop-blur-md transition-colors',
                    collapsed
                      ? 'justify-center size-12 p-0 bg-sky-100/60 hover:bg-sky-100/80'
                      : 'w-48 justify-start gap-3 px-4 py-2 bg-sky-100/70 hover:bg-sky-100/90',
                  )}
                >
                  {iconNode}
                  {!collapsed && <span className="truncate">{item.title}</span>}
                </Link>
              );
            },
          )}
        </nav>

        {/* Bottom contact details when expanded */}
        {!collapsed && (
          <div className="pointer-events-auto absolute inset-x-0 bottom-4 px-4">
            <div className="rounded-3xl bg-white/70 p-4 text-[13px] text-gray-900 shadow-sm ring-1 ring-inset ring-sky-200/70 backdrop-blur-md supports-[backdrop-filter]:bg-white/50">
              <div className="mb-2 flex items-center gap-2 font-semibold">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden
                  className="size-5 text-sky-800"
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
                  <span className="grid size-6 place-items-center rounded-full bg-sky-100 ring-1 ring-inset ring-sky-200">
                    @
                  </span>
                  <a
                    className="truncate underline decoration-sky-400/70 underline-offset-2 hover:decoration-sky-600"
                    href="mailto:gautham.chadalavada@gmail.com"
                  >
                    gautham.chadalavada@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="grid size-6 place-items-center rounded-full bg-sky-100 ring-1 ring-inset ring-sky-200">
                    ☎︎
                  </span>
                  <a
                    className="underline-offset-2 hover:underline"
                    href="tel:+18508250636"
                  >
                    +1-850-825-0636
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="grid size-6 place-items-center rounded-full bg-sky-100 ring-1 ring-inset ring-sky-200">
                    in
                  </span>
                  <a
                    className="truncate underline decoration-sky-400/70 underline-offset-2 hover:decoration-sky-600"
                    href="https://linkedin.com/in/gautham-c"
                    target="_blank"
                    rel="noreferrer"
                  >
                    linkedin.com/in/gautham-c
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="grid size-6 place-items-center rounded-full bg-sky-100 ring-1 ring-inset ring-sky-200">
                    GH
                  </span>
                  <a
                    className="truncate underline decoration-sky-400/70 underline-offset-2 hover:decoration-sky-600"
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
