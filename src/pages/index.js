import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './index.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faComputer, faDownload, faShare, faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import Translate from '@docusaurus/Translate';

function Feature({ titleKey, descriptionKey, icon }) {
  return (
    <div className={clsx('col col--4', styles.feature)}>
      <div className={styles.featureIcon}>
        {icon} {}
      </div>
      <h3>
        <Translate id={titleKey} />
      </h3>
      <p>
        <Translate id={descriptionKey} />
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <Layout title="Главная" description="Документация для TelegramMediaRelayBot">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">
            <Translate id="title" />
          </h1>
          <p className="hero__subtitle">
            <Translate id="subtitle" />
          </p>
          <p className="hero__description">
            <Translate id="description" />
          </p>
          <div className={styles.buttons}>
            <Link
              className={clsx('button button--primary button--lg', styles.getStarted)}
              to="/docs/">
              <Translate id="getStarted" />
            </Link>
            <Link
              className={clsx('button button--primary button--lg', styles.getStarted)}
              to="https://github.com/ZenonEl/TelegramMediaRelayBot/releases/latest"
              target="_blank"
              rel="noopener noreferrer">
              <Translate id="downloadLatest" />
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <Feature
                titleKey="feature1Title"
                descriptionKey="feature1Description"
                icon={<FontAwesomeIcon icon={faDownload} size="6x" />}
              />
              <Feature
                titleKey="feature2Title"
                descriptionKey="feature2Description"
                icon={<FontAwesomeIcon icon={faShare} size="6x" />}
              />
              <Feature
                titleKey="feature3Title"
                descriptionKey="feature3Description"
                icon={<FontAwesomeIcon icon={faShieldAlt} size="6x" />}
              />
              <Feature
                titleKey="feature4Title"
                descriptionKey="feature4Description"
                icon={<FontAwesomeIcon icon={faCode} size="3x" />}
              />
              <Feature
                titleKey="feature5Title"
                descriptionKey="feature5Description"
                icon={<FontAwesomeIcon icon={faComputer} size="3x" />}
              />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}