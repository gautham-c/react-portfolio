import React from 'react';

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="rounded-full border border-slate-200/70 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700">
    {children}
  </span>
);

const SectionCard = ({ title, items }: { title: string; items: string[] }) => (
  <div className="rounded-2xl border border-slate-200/70 bg-white/70 p-5 shadow-sm backdrop-blur">
    <div className="flex items-center justify-between">
      <h3 className="text-sm font-semibold tracking-wide text-slate-900">{title}</h3>
      <span className="h-px flex-1 ml-4 bg-gradient-to-r from-slate-200 via-slate-200/40 to-transparent" />
    </div>
    <div className="mt-3 flex flex-wrap gap-2">
      {items.map((i) => (
        <Badge key={i}>{i}</Badge>
      ))}
    </div>
  </div>
);

const SkillsPage = () => {
  const LANGUAGES = ['Java', 'Python', 'TypeScript', 'JavaScript', 'SQL', 'C/C++', 'R', 'Go'];
  const FRAMEWORKS = ['React', 'Next.js', 'Node.js', 'Express', 'Spring Boot', 'Vite', '.NET Core', 'Flutter'];
  const DATABASES = ['PostgreSQL', 'MySQL', 'MongoDB', 'SQLite', 'Oracle', 'SQL Server'];
  const CLOUD_DEVOPS = ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Git', 'GitHub Actions', 'Azure DevOps', 'CI/CD', 'Jenkins'];
  const APIS = ['REST', 'GraphQL', 'Postman', 'gRPC', 'Swagger/OpenAPI'];
  const TESTING = ['Vitest', 'Jest', 'Playwright', 'Testing Library', 'JUnit', 'PyTest'];
  const DATA_BI = ['Power BI', 'SharePoint', 'Pandas', 'NumPy', 'Tableau', 'Excel'];
  const AI_ML = ['LLMs', 'Transformers.js', 'RAG', 'Embeddings', 'scikit-learn', 'TensorFlow (basics)', 'PyTorch (basics)'];

  return (
    <section className="relative">
      <div className="absolute -inset-x-8 -top-8 -bottom-8 rounded-[3rem] bg-gradient-to-b from-fuchsia-100/50 to-transparent blur-2xl" aria-hidden />

      <header className="relative mb-6 space-y-2">
        <p className="text-sm font-semibold tracking-wide text-fuchsia-700">Skills</p>
        <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl">
          The toolbelt
        </h1>
        <p className="max-w-3xl text-slate-700">
          Practical technologies I use to ship reliable products across the stack.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <SectionCard title="Languages" items={LANGUAGES} />
        <SectionCard title="Frameworks & Runtime" items={FRAMEWORKS} />
        <SectionCard title="Databases" items={DATABASES} />
        <SectionCard title="Cloud & DevOps" items={CLOUD_DEVOPS} />
        <SectionCard title="APIs & Integration" items={APIS} />
        <SectionCard title="Testing" items={TESTING} />
        <SectionCard title="Data & BI" items={DATA_BI} />
        <SectionCard title="AI / ML" items={AI_ML} />
      </div>
    </section>
  );
};

export default SkillsPage;
