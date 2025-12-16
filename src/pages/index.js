import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

// Homepage sections
const sections = [
  {
    title: 'General Information',
    description:
      'Essential program details including which Program Manager to contact, performance review criteria, attendance policies, and important dates.',
    link: '/docs/category/general-information',
  },
  {
    title: 'Startup Module',
    description:
      'Intro, fundamentals and project-building steps.',
    link: '/docs/category/startup-module',
  },
  {
    title: 'Tech Module',
    description:
      'Programming, live coding, documentation & more.',
    link: '/tech',
  },
  {
    title: 'Qwasar Task Documentation',
    description:
      'Tips & tricks from previous students on tasks that required a bit of extra attention.',
    link: '/docs/category/onboarding',
  },
];

function SectionCard({ title, description, link }) {
  return (
    <div className={styles.card}>
      <Link to={link} className={styles.cardLink}>
        <h3>{title}</h3>
        <p>{description}</p>
      </Link>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title="StartSchool Modules"
      description="Choose module"
    >
      <main>
        <div className="container" style={{ marginTop: '4rem', marginBottom: '4rem' }}>
          {/* Card Grid */}
          <div className={styles.cardGrid}>
            {sections.map((section, idx) => (
              <SectionCard key={idx} {...section} />
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
