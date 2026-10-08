export default function Home() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A headless e-commerce solution built with Next.js and Stripe.',
      year: '2024',
      url: '#'
    },
    {
      id: 2,
      title: 'AI Code Assistant',
      description: 'A smart CLI tool to help developers write and refactor code.',
      year: '2023',
      url: '#'
    },
    {
      id: 3,
      title: 'Personal Blog',
      description: 'A minimalist publishing platform with MDX support.',
      year: '2023',
      url: '#'
    }
  ];

  return (
    <div className="container">
      <header className="header animate-in">
        <h1 className="name">Your Name</h1>
        <p className="role">Software Engineer</p>
        <div className="status-container">
          <span className="status-dot"></span>
          <span className="status-text">Available for new opportunities</span>
        </div>
      </header>

      <main>
        <section className="section animate-in delay-1">
          <h2 className="section-title">Projects</h2>
          <div className="project-list">
            {projects.map((project) => (
              <article className="project-item" key={project.id}>
                <div className="project-header">
                  <a href={project.url} className="project-title project-link" target="_blank" rel="noopener noreferrer">
                    {project.title}
                    <ArrowIcon />
                  </a>
                  <span className="project-year">{project.year}</span>
                </div>
                <p className="project-desc">{project.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section animate-in delay-2">
          <h2 className="section-title">Connect</h2>
          <div className="links">
            <a href="#" target="_blank" rel="noopener noreferrer"><GitHubIcon /> GitHub</a>
            <a href="#" target="_blank" rel="noopener noreferrer"><TwitterIcon /> Twitter</a>
            <a href="mailto:hello@example.com"><EmailIcon /> Email</a>
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

function TwitterIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  );
}
