const Badge = ({ children }: { children: React.ReactNode }) => (
    <span className="rounded-full border border-sky-200/70 bg-sky-50/70 px-2 py-0.5 text-xs font-medium text-sky-800">
        {children}
    </span>
);

const Card = ({ children }: { children: React.ReactNode }) => (
    <div className="relative rounded-2xl border border-slate-200/70 bg-white/70 p-4 shadow-sm backdrop-blur">
        {children}
    </div>
);

const ITEMS = [
    {
        title: 'Software Engineer',
        company: 'Agency for Healthcare Administration (IT)',
        date: 'Jun 2025 – Present',
        location: 'Tallahassee, FL',
        badges: ['Azure DevOps', 'Power BI', 'SharePoint', 'REST APIs', 'QA/UAT'],
        points: [
            'Shipped CI/CD in Azure DevOps → 40% faster releases.',
            'Built KPI dashboards in Power BI/SharePoint.',
            'Automated QA & UAT → 40% fewer post‑deploy defects.',
        ],
    },
    {
        title: 'Research Assistant',
        company: 'Florida State University',
        date: 'Jan 2024 – May 2025',
        location: 'Tallahassee, FL',
        badges: ['Python', 'R', 'ETL', 'LLMs', 'SQL'],
        points: [
            'ETL for 100K+ records; reproducible pipelines.',
            'Schema tuning improved query speed and access.',
            'LLMs (GPT/Claude/LLaMA) to analyze unstructured data.',
        ],
    },
    {
        title: 'Member of Technical Staff',
        company: 'Zoho',
        date: 'May 2022 – May 2023',
        location: 'Chennai, TN',
        badges: ['Java', 'Multithreading', 'MySQL', 'PL/SQL', 'APIs'],
        points: [
            'Multithreaded flows → +25% throughput.',
            'Oracle→MySQL migration via robust ETL.',
            'Reliability: tuned SQL & fault tolerance (‑18% incidents).',
        ],
    },
    {
        title: 'Associate Software Engineer',
        company: 'MT Digital Labs',
        date: 'Jan 2021 – Dec 2021',
        location: 'Remote',
        badges: ['AWS', 'CodePipeline', 'React', 'MongoDB', 'MERN'],
        points: [
            'Deployed MERN on AWS; CI/CD cut release time ‑60%.',
            'Reusable React components improved velocity & UX.',
            'Optimized MongoDB/backend → ‑30% response times.',
        ],
    },
];

const ExperiencePage = () => {
    return (
        <section className="relative">
            <div className="absolute -inset-x-8 -top-8 -bottom-8 rounded-[3rem] bg-gradient-to-b from-sky-100/50 to-transparent blur-2xl" aria-hidden />

            <header className="relative mb-6 space-y-2">
                <p className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-sky-700">
                    Experience
                </p>
                <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl">
                    Roles where I shipped measurable impact
                </h1>
                <p className="max-w-3xl text-slate-700">
                    Highlights across healthcare, SaaS, and research. Faster releases, fewer defects, and robust data pipelines.
                </p>
            </header>

            <ol className="relative ml-4 border-l border-sky-200/70 pl-6">
                {ITEMS.map(({ title, company, date, location, badges, points }) => (
                    <li key={title} className="mb-6">
                        <Card>
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <h3 className="text-lg font-semibold text-slate-900">{title} — {company}</h3>
                                    <p className="text-sm text-slate-600">{date} · {location}</p>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {badges.map((badge) => (
                                        <Badge key={badge}>{badge}</Badge>
                                    ))}
                                </div>
                            </div>
                            <ul className="mt-3 list-disc space-y-1 pl-6 text-slate-800">
                                {points.map((point, idx) => (
                                    <li key={idx}>{point}</li>
                                ))}
                            </ul>
                        </Card>
                    </li>
                ))}
            </ol>
        </section>
    );
};

export default ExperiencePage;
