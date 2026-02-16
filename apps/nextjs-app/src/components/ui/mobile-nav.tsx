'use client';

import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { cn } from '@/utils/cn';

import { Link } from './link';
import { SidebarItem } from './sidebar';

export const MobileNav = ({ items }: { items: SidebarItem[] }) => {
  const pathname = usePathname();
  const [logoError, setLogoError] = useState(false);

  return (
    <div className="sticky top-0 z-30 border-b border-sky-100/70 bg-white/80 px-4 py-3 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/70 lg:hidden">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="grid size-11 place-items-center overflow-hidden rounded-full bg-sky-50 ring-1 ring-inset ring-sky-200">
            {!logoError ? (
              <img
                src="/gc-logo.png"
                alt="Gautham Chadalavada logo"
                className="size-full rounded-full object-cover"
                onError={() => setLogoError(true)}
              />
            ) : (
              <span className="select-none text-sm font-black tracking-wide text-slate-800">
                GC
              </span>
            )}
          </div>
          <div className="leading-tight">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              Portfolio
            </p>
            <p className="text-sm font-bold text-slate-900">
              Gautham Chadalavada
            </p>
          </div>
        </div>
        <a
          href="mailto:gautham.chadalavada@gmail.com"
          className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition hover:bg-slate-800"
          aria-label="Email Gautham"
        >
          ✉️ Get in touch
        </a>
      </div>

      <nav
        aria-label="Mobile navigation"
        className="mt-3 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item) => {
          const isActive =
            pathname === item.href || pathname?.startsWith(`${item.href}/`);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'inline-flex flex-shrink-0 items-center gap-2 rounded-full border px-3 py-2 text-sm font-medium shadow-sm transition-colors',
                'bg-white/90 backdrop-blur',
                isActive
                  ? 'border-sky-300 text-sky-800'
                  : 'border-slate-200 text-slate-800 hover:border-sky-200 hover:text-sky-700',
              )}
            >
              <span className="grid size-7 place-items-center rounded-full bg-sky-100 text-[13px] font-semibold text-slate-900 ring-1 ring-inset ring-sky-200">
                {item.title?.[0] ?? '?'}
              </span>
              <span>{item.title}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};
