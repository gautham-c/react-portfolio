import React from 'react';

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="rounded-full border border-indigo-200/70 bg-indigo-50/70 px-2 py-0.5 text-xs font-medium text-indigo-800">
    {children}
  </span>
);

const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="relative rounded-2xl border border-slate-200/70 bg-white/70 p-4 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md">
    {children}
  </div>
);

// Only software-engineering–relevant coursework
const COURSEWORK = [
  {
    heading: 'Master in Science in Computer Science — Florida State University',
    items: [
      'Software Engineering',
      'Advanced Operating Systems',
      'Network Security (Active & Passive Attacks)',
      'Cryptography',
      'Advanced Data Science',
      'Artificial Intelligence',
      'Theory of Automata & Formal Languages',
      'Analytic Methods',
    ],
    badges: ['Systems', 'Security', 'Data', 'AI', 'Foundations'],
  },
  {
    heading:
      'Bachelors in Computer Science — Easwari Engineering College (Anna University)',
    items: [
      'Software Engineering',
      'Database Management Systems',
      'Algorithms & Data Structures',
      'Computer Networks',
      'Operating Systems',
    ],
    badges: ['Core CS', 'SE Fundamentals'],
  },
];

const EducationPage = () => {
  return (
    <section className="relative">
      <div
        className="absolute -inset-8 rounded-[3rem] bg-gradient-to-b from-indigo-100/50 to-transparent blur-2xl"
        aria-hidden
      />

      <header className="relative mb-6 space-y-2">
        <p className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-indigo-700">
          Education — Relevant Coursework
        </p>
        <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl">
          Software Engineering–focused classes
        </h1>
        <p className="max-w-3xl text-slate-700">
          A selection of courses aligned with systems, security, data, AI, and
          core CS fundamentals.
        </p>
      </header>

      <ol
        className="relative ml-4 space-y-6 border-l border-indigo-200/70 pl-6"
        aria-label="Coursework timeline"
      >
        {COURSEWORK.map(({ heading, items, badges }) => (
          <li key={heading} className="relative">
            <Card>
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold text-slate-900">
                  {heading}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {badges.map((b) => (
                    <Badge key={b}>{b}</Badge>
                  ))}
                </div>
              </div>
              <ul className="mt-3 grid gap-1 pl-6 text-slate-800 sm:grid-cols-2">
                {items.map((c) => (
                  <li key={c} className="list-disc">
                    {c}
                  </li>
                ))}
              </ul>
            </Card>
          </li>
        ))}
      </ol>

      {/* Research Papers */}
      <section className="relative mt-10">
        <header className="mb-3">
          <h2 className="text-2xl font-bold text-slate-900">Research papers</h2>
          <p className="text-slate-700">
            Publications related to imaging and deep learning.
          </p>
        </header>
        <div className="space-y-3">
          <Card>
            <h3 className="text-base font-semibold text-slate-900">
              Dehazing of Multispectral Images Using Contrastive Learning In
              CycleGAN
            </h3>
            <p className="text-sm text-slate-600">Springer (Book Chapter)</p>
            <a
              className="mt-2 inline-block rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-white hover:bg-slate-800"
              href="https://link.springer.com/chapter/10.1007/978-981-99-6906-7_35"
              target="_blank"
              rel="noopener noreferrer"
            >
              View publication
            </a>
          </Card>

          <Card>
            <h3 className="text-base font-semibold text-slate-900">
              Survey on Dehazing of Multispectral Images
            </h3>
            <p className="text-sm text-slate-600">
              Communications in Mathematics and Applications
            </p>
            <a
              className="mt-2 inline-block rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-white hover:bg-slate-800"
              href="https://www.proquest.com/openview/b4471c83500f8ab52030d994ba55f2c4/1?pq-origsite=gscholar&cbl=5542503"
              target="_blank"
              rel="noopener noreferrer"
            >
              View publication
            </a>
          </Card>
        </div>
      </section>
    </section>
  );
};

export default EducationPage;
