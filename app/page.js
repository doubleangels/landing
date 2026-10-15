const projects = [
  {
    title: 'Redact',
    description: 'Open source project by doubleangels.',
    url: 'https://github.com/doubleangels/redact',
  },
  {
    title: 'NextDNS Manager',
    description: 'Open source project by doubleangels.',
    url: 'https://github.com/doubleangels/nextdnsmanager',
  },
];

export default function Home() {
  return (
    <div className="container">
      <header className="header">
        <h1 className="name">doubleangels</h1>
        <p className="role">Software Engineer</p>
      </header>

      <main>
        <section className="section">
          <h2 className="section-title">Projects</h2>
          <div className="project-list">
            {projects.map((project) => (
              <article className="project-item" key={project.url}>
                <a href={project.url} className="project-title project-link" target="_blank" rel="noopener noreferrer">
                  {project.title}
                  <ArrowIcon />
                </a>
                <p className="project-desc">{project.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Connect</h2>
          <div className="links">
            <a href="https://github.com/doubleangels" target="_blank" rel="noopener noreferrer"><GitHubIcon /> GitHub</a>
          </div>
        </section>
      </main>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon arrow-icon">
      <line x1="7" y1="17" x2="17" y2="7"></line>
      <polyline points="7 7 17 7 17 17"></polyline>
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
  );
}
