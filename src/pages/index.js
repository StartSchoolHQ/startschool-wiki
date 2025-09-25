import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
// import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--secondary', styles.heroBanner)}>
      <div className="container">
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/LiveCoding/recordings">
            Live Coding
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/CollaborativeCoding/Project2/quiz-me-if-you-can">
            Collaborative Coding
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/CaseStudies/Session1/study04">
            Case Studies
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/generalinformation">
            General Information
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/FrontendDevelopment/frontendDevelopment">
            FE Development
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Your comprehensive guide to StartSchool coding success">
      <HomepageHeader />
      {/* <main>
        <HomepageFeatures />
      </main> */}
    </Layout>
  );
}
