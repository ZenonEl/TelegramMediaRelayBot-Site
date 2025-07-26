import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faExpand,
  faChevronLeft,
  faChevronRight,
  faImage,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./DemoShowcase.module.css";
import Translate from "@docusaurus/Translate";

const DemoShowcase = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Demo data - replace with actual screenshots/videos
  const demoItems = [
    {
      id: 1,
      type: "image",
      src: "/img/demo/bot-start.png",
      title: "Bot Startup",
      description: "Starting the TelegramMediaRelayBot",
    },
    {
      id: 2,
      type: "image",
      src: "/img/demo/download-process.png",
      title: "Download Process",
      description: "Bot downloading media from YouTube",
    },
    {
      id: 3,
      type: "image",
      src: "/img/demo/relay-message.png",
      title: "Media Relay",
      description: "Automatically relaying downloaded media to contacts",
    },
    {
      id: 4,
      type: "video",
      src: "/img/demo/full-demo.mp4",
      title: "Full Demo",
      description: "Complete workflow demonstration",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % demoItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + demoItems.length) % demoItems.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  React.useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(nextSlide, 4000);
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  const currentItem = demoItems[currentSlide];

  return (
    <section className={styles.demoSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            <Translate id="demo.title">See It In Action</Translate>
          </h2>
          <p className={styles.sectionDescription}>
            <Translate id="demo.description">
              Watch how TelegramMediaRelayBot works with real examples
            </Translate>
          </p>
        </div>

        <div className={styles.demoContainer}>
          <div className={styles.demoViewer}>
            <div className={styles.mediaContainer}>
              {currentItem.type === "image" ? (
                <div className={styles.imageWrapper}>
                  <img
                    src={currentItem.src}
                    alt={currentItem.title}
                    className={styles.demoImage}
                    onError={(e) => {
                      // Fallback to placeholder
                      e.target.style.display = "none";
                      e.target.nextElementSibling.nextElementSibling.style.display =
                        "flex";
                    }}
                  />
                  <div className={styles.imageOverlay}>
                    <div className={styles.overlayContent}>
                      <h3>{currentItem.title}</h3>
                      <p>{currentItem.description}</p>
                    </div>
                  </div>
                  <div
                    className={styles.photoPlaceholder}
                    style={{ display: "none" }}
                  >
                    <FontAwesomeIcon
                      icon={faImage}
                      size="3x"
                      className={styles.placeholderIcon}
                    />
                    <p>Photo Demo Coming Soon</p>
                  </div>
                </div>
              ) : (
                <div className={styles.videoWrapper}>
                  <video
                    src={currentItem.src}
                    className={styles.demoVideo}
                    controls
                    poster={`/img/demo/${currentItem.id}-poster.jpg`}
                    onError={(e) => {
                      // Fallback to placeholder
                      e.target.style.display = "none";
                      e.target.nextElementSibling.style.display = "flex";
                    }}
                  >
                    Your browser does not support the video tag.
                  </video>
                  <div
                    className={styles.videoPlaceholder}
                    style={{ display: "none" }}
                  >
                    <FontAwesomeIcon icon={faPlay} size="3x" />
                    <p>Video Demo Coming Soon</p>
                  </div>
                </div>
              )}
            </div>

            {/* Navigation Controls */}
            <div className={styles.controls}>
              <button
                className={styles.navButton}
                onClick={prevSlide}
                aria-label="Previous slide"
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>

              <div className={styles.centerControls}>
                <button
                  className={styles.playButton}
                  onClick={togglePlay}
                  aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
                >
                  <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
                </button>

                <div className={styles.slideCounter}>
                  {currentSlide + 1} / {demoItems.length}
                </div>
              </div>

              <button
                className={styles.navButton}
                onClick={nextSlide}
                aria-label="Next slide"
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>

            {/* Slide Indicators */}
            <div className={styles.indicators}>
              {demoItems.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.indicator} ${
                    index === currentSlide ? styles.active : ""
                  }`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Slide Information */}
          <div className={styles.slideInfo}>
            <h3 className={styles.slideTitle}>{currentItem.title}</h3>
            <p className={styles.slideDescription}>{currentItem.description}</p>

            <div className={styles.features}>
              <div className={styles.feature}>
                <span className={styles.featureIcon}>🎯</span>
                <span>Automatic Detection</span>
              </div>
              <div className={styles.feature}>
                <span className={styles.featureIcon}>⚡</span>
                <span>Fast Processing</span>
              </div>
              <div className={styles.feature}>
                <span className={styles.featureIcon}>🔄</span>
                <span>Auto Relay</span>
              </div>
            </div>
          </div>
        </div>

        {/* Platform Support Grid */}
        <div className={styles.platformGrid}>
          <h3 className={styles.platformTitle}>
            <Translate id="demo.supportedPlatforms">
              Supported Platforms
            </Translate>
          </h3>
          <div className={styles.platforms}>
            {[
              { name: "YouTube", icon: "📺" },
              { name: "Reddit", icon: "🟠" },
              { name: "TikTok", icon: "🎵" },
              { name: "VK", icon: "🌐" },
              { name: "Pinterest", icon: "📌" },
              { name: "And More...", icon: "➕" },
            ].map((platform, index) => (
              <div key={index} className={styles.platform}>
                <span className={styles.platformIcon}>{platform.icon}</span>
                <span className={styles.platformName}>{platform.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoShowcase;
