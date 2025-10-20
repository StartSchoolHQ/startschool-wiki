import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

const sections = [
  {
    title: 'Live coding',
    description: 'Access recordings from past Live coding sessions and see what is planned for the future',
    link: '/docs/LiveCoding/recordings',
  },
  {
    title: 'Collaborative coding',
    description: 'Improve your collaboration and coding skills by working together',
    link: '/docs/category/collaborative-coding',
  },
  {
    title: 'Case studies',
    description: 'Case studies and debriefs',
    link: '/docs/category/case-studies',
  },
];

function SectionCard({title, description, link}) {
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
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Cross Team Collaboration">
      <main>
        <div className="container" style={{marginTop: '4rem', marginBottom: '4rem'}}>
          <div className={styles.cardGrid}>
            {sections.map((props, idx) => (
              <SectionCard key={idx} {...props} />
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}



