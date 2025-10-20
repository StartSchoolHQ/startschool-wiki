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
    subtitle: 'Love coding recordings and info', 
    description: 'Access recordings from past Live coding sessions and see what is planned for the future',
    link: '/docs/LiveCoding/recordings',
  },
  {
    title: 'Collaborative coding',
    subtitle: 'Collaborative coding tasks', 
    description: 'Improve your collaboration and coding skills by working together',
    link: '/docs/category/collaborative-coding',
  },
  {
    title: 'Case studies',
    subtitle: 'Case studies and debriefs', 
    description: 'Description',
    link: '/docs/category/case-studies',
  },
];

function SectionCard({title, subtitle, description, link}) {
  return (
    <div className={styles.card}>
      <Link to={link} className={styles.cardLink}>
        <h3>{title}</h3>
        <h2>{subtitle}</h2>
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



// import clsx from 'clsx';
// import Link from '@docusaurus/Link';
// import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// import Layout from '@theme/Layout';
// // import HomepageFeatures from '@site/src/components/HomepageFeatures';

// import Heading from '@theme/Heading';
// import styles from './index.module.css';

// function HomepageHeader() {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <header className={clsx('hero hero--secondary', styles.heroBanner)}>
//       <div className="container">
//         <p className="hero__subtitle">{siteConfig.tagline}</p>
//         <div className={styles.buttons}>
//           <Link
//             className="button button--secondary button--lg"
//             to="/docs/LiveCoding/recordings">
//             Live Coding
//           </Link>
//           <Link
//             className="button button--secondary button--lg"
//             to="/docs/category/collaborative-coding">
//             Collaborative Coding
//           </Link>
//           <Link
//             className="button button--secondary button--lg"
//             to="docs/category/case-studies">
//             Case Studies
//           </Link>
//           <Link
//             className="button button--secondary button--lg"
//             to="/docs/generalinformation">
//             General Information
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default function Home() {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <Layout
//       title={`Welcome to ${siteConfig.title}`}
//       description="Your comprehensive guide to StartSchool coding success">
//       <HomepageHeader />
//       {/* <main>
//         <HomepageFeatures />
//       </main> */}
//     </Layout>
//   );
// }
