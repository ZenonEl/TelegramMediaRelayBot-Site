import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import clsx from "clsx";
import styles from "./index.module.css";
import Logo from "@site/static/img/Logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faBookDead,
  faCode,
  faCodeBranch,
  faCodeCommit,
  faCodeFork,
  faComputer,
  faDownload,
  faShare,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";
import Translate from "@docusaurus/Translate";
import { faBookBookmark } from "@fortawesome/free-solid-svg-icons/faBookBookmark";
import GitHubStats from "@site/src/components/GitHubStats";
import DemoShowcase from "@site/src/components/DemoShowcase";
import FAQ from "@site/src/components/FAQ";
import Testimonials from "@site/src/components/Testimonials";

function Feature({ titleKey, descriptionKey, icon }) {
  return (
    <div className={clsx("col col--4", styles.feature)}>
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

const GitHubButton = ({ variant = "star", href }) => {
  const isStarVariant = variant === "star";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(
        styles.githubButton,
        isStarVariant ? styles.starVariant : styles.profileVariant,
      )}
    >
      <span className={styles.buttonText}>
        <FontAwesomeIcon icon={faCode} size="1x" />{" "}
        <Translate id={isStarVariant ? "githubStar" : "githubProfile"} />
      </span>

      {isStarVariant && (
        <svg
          aria-hidden="true"
          viewBox="0 0 47.94 47.94"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.buttonIcon}
        >
          <path d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956C22.602,0.567,25.338,0.567,26.285,2.486z" />
        </svg>
      )}
    </a>
  );
};

export default function Home() {
  return (
    <Layout
      title="TelegramMediaRelayBot"
      description="Documentation for TelegramMediaRelayBot"
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <div className={styles.logoContainer}>
            <img
              src={Logo}
              alt="TelegramMediaRelayBot Logo"
              className={styles.logoImage}
            />
          </div>
          <h1 className="hero__title">
            <Translate id="title" />
          </h1>
          <div className={styles.githubButtonsContainer}>
            <GitHubButton
              variant="star"
              href="https://github.com/ZenonEl/TelegramMediaRelayBot"
            />
            <GitHubButton variant="profile" href="https://github.com/ZenonEl" />
          </div>
          <p className="hero__subtitle">
            <Translate id="subtitle" />
          </p>
          <p className="hero__description">
            <Translate id="description" />
          </p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--primary button--lg",
                styles.getStarted,
              )}
              to="/docs/"
            >
              <FontAwesomeIcon icon={faBookBookmark} size="1x" />{" "}
              <Translate id="getStarted" />
            </Link>
            <Link
              className={clsx(
                "button button--primary button--lg",
                styles.getStarted,
              )}
              to="https://github.com/ZenonEl/TelegramMediaRelayBot/releases/latest"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faDownload} size="1x" />{" "}
              <Translate id="downloadLatest" />
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* GitHub Statistics Section */}
        <section className={styles.statsSection}>
          <div className="container">
            <h2 className={styles.sectionTitle}>
              <Translate id="stats.title">Project Statistics</Translate>
            </h2>
            <GitHubStats />
          </div>
        </section>

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

        {/* Demo Showcase Section */}
        <DemoShowcase />

        {/* Testimonials Section */}
        <Testimonials />

        {/* FAQ Section */}
        <FAQ />
      </main>
    </Layout>
  );
}
