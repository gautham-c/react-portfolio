import { ReactNode } from 'react';

import { Sidebar } from '@/components/ui/sidebar';

// Icons for navigation
const IconUser = () => (
  <svg viewBox="0 0 24 24" aria-hidden className="size-5">
    <path
      fill="currentColor"
      d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
    />
  </svg>
);

const IconBriefcase = () => (
  <svg viewBox="0 0 24 24" aria-hidden className="size-5">
    <path
      fill="currentColor"
      d="M9 6V5a3 3 0 0 1 3-3h0a3 3 0 0 1 3 3v1h3a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h3Zm2 0h2V5a1 1 0 0 0-1-1h0a1 1 0 0 0-1 1v1Z"
    />
  </svg>
);

const IconGraduation = () => (
  <svg viewBox="0 0 24 24" aria-hidden className="size-5">
    <path
      fill="currentColor"
      d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9l-11-6z"
    />
  </svg>
);

const IconFolder = () => (
  <svg viewBox="0 0 24 24" aria-hidden className="size-5">
    <path
      fill="currentColor"
      d="M10 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2h-8l-2-2z"
    />
  </svg>
);

const IconCode = () => (
  <svg viewBox="0 0 24 24" aria-hidden className="size-5">
    <path
      fill="currentColor"
      d="M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4Zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4Z"
    />
  </svg>
);

const IconMail = () => (
  <svg viewBox="0 0 24 24" aria-hidden className="size-5">
    <path
      fill="currentColor"
      d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6Zm2 .4V6h16v.4L12 12 4 6.4Zm16 2.5-8 5.6-8-5.6V18h16V8.9Z"
    />
  </svg>
);

const items = [
  { title: 'About Me', href: '/portfolio', icon: <IconUser /> },
  {
    title: 'Experience',
    href: '/portfolio/experience',
    icon: <IconBriefcase />,
  },
  {
    title: 'Education',
    href: '/portfolio/education',
    icon: <IconGraduation />,
  },
  { title: 'Projects', href: '/portfolio/projects', icon: <IconFolder /> },
  { title: 'Skills', href: '/portfolio/skills', icon: <IconCode /> },
  { title: 'Contact', href: '/portfolio/contact', icon: <IconMail /> },
];

const PortfolioLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(59,130,246,0.08),transparent_60%)]">
      <div className="flex w-full items-start">
        <Sidebar items={items} />
        <main className="mx-auto max-w-6xl flex-1 p-8">{children}</main>
      </div>
    </div>
  );
};

export default PortfolioLayout;
