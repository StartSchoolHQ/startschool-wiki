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
//   {
//     title: 'General information',
//     description: 'Find essential program details including which Program Manager to contact, performance review criteria, attendance policies, and important dates.',
//     link: '/docs/category/general-information',
//   },
  {
    title: 'Case studies',
    description: 'Explore real-world project case studies with detailed debriefs. Learn from practical examples and understand how concepts apply in actual development scenarios.',
    link: '/docs/category/case-studies',
  },
  {
    title: 'Collaborative coding',
    description: 'Practice pair programming and team coding exercises. Work with peers to solve real-world problems and improve both your technical and collaboration skills.',
    link: '/docs/category/collaborative-coding',
  },
  {
    title: 'Live coding',
    description: 'Access recordings from past Live coding sessions, review key concepts covered, and see upcoming topics planned for future sessions.',
    link: '/docs/LiveCoding/recordings',
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



