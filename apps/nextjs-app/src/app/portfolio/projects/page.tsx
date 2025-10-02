import React from 'react';

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="rounded-full border border-slate-200/70 bg-slate-50 px-2 py-0.5 text-xs font-medium text-slate-700">
    {children}
  </span>
);

const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="relative rounded-2xl border border-slate-200/70 bg-white/70 p-4 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md">
    {children}
  </div>
);

type Project = {
  title: string;
  blurb: string;
  tech: string[];
  highlights: string[];
};

const PROJECTS: Project[] = [
  {
    title: 'HackerNews Web App',
    blurb:
      'Real‑time feed with filtering/search. Backend fetches & normalizes HN API JSON; frontend integrates REST endpoints and updates live.',
    tech: ['Python', 'JavaScript', 'REST APIs', 'Vite/React'],
    highlights: [
      'Streaming updates with client caching',
      'Search + multi‑filter UI',
      'Typed responses and error handling',
    ],
  },
  {
    title: 'SIMD‑Accelerated JSON Indexing Engine',
    blurb:
      'High‑performance Java parser with SIMD + multithreading and a dot/bracket query engine for nested enterprise JSON.',
    tech: ['Java', 'SIMD', 'Multithreading', 'Benchmarking'],
    highlights: [
      '≈60% faster on 1GB datasets',
      'Query engine for nested JSON',
      'Outperformed Gson/Jackson in tests',
    ],
  },
  {
    title: 'Inbox/GitHub Reply Assistant',
    blurb:
      'Draft kind, on-topic replies to emails or GitHub issues from pasted text — 100% client-side.',
    tech: ['web-llm', 'Prompt templates', 'Browser-only'],
    highlights: [
      'Paste email/issue → choose tone → generate draft → copy',
      'No API keys or server required',
      'Optional OAuth later for sending directly',
    ],
  },
  {
    title: '“What Changed?” Site Summarizer',
    blurb:
      'Track a handful of URLs/RSS feeds and publish daily diff summaries as a static site.',
    tech: ['GitHub Actions', 'Cloudflare Workers AI', 'Static JSON'],
    highlights: [
      'Daily cron via GitHub Actions',
      'Diff pages/RSS and summarize in 5–8 sentences',
      'Commits data.json; frontend renders latest changes',
    ],
  },
];

const ProjectsPage = () => {
  return (
    <section className="relative">
      <div
        className="absolute -inset-8 rounded-[3rem] bg-gradient-to-b from-amber-100/40 to-transparent blur-2xl"
        aria-hidden
      />

      <header className="relative mb-6 space-y-2">
        <p className="text-sm font-semibold tracking-wide text-amber-700">
          Projects
        </p>
        <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl">
          Work I’m proud of
        </h1>
        <p className="max-w-3xl text-slate-700">
          A mix of product UI and systems work: real‑time apps, high‑performance
          parsing, and clean API design.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2">
        {PROJECTS.map(({ title, blurb, tech, highlights }) => (
          <Card key={title}>
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
            </div>
            <p className="mt-2 text-sm text-slate-700">{blurb}</p>

            <div className="mt-3 flex flex-wrap gap-2">
              {tech.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>

            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-800">
              {highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;
