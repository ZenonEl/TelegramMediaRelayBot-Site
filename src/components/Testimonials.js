import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuoteLeft,
  faStar,
  faUser,
  faChevronLeft,
  faChevronRight,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faTwitter,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./Testimonials.module.css";
import Translate from "@docusaurus/Translate";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Александр К.",
      role: "DevOps Engineer",
      avatar: "/img/testimonials/user1.jpg",
      rating: 5,
      text: "Устал постоянно скачивать видео с YouTube и пересылать коллегам вручную. С этим ботом просто кидаю ссылку с хештегом #work, и он сам всё скачивает и отправляет команде. Экономлю кучу времени каждый день!",
      platform: "github",
      verified: true,
      date: "2024-01-15",
    },
    {
      id: 2,
      name: "Maria S.",
      role: "Content Creator",
      avatar: "/img/testimonials/user2.jpg",
      rating: 5,
      text: 'My friends were always asking me to send them TikTok videos because they weren\'t registered there. Now I just throw links to the bot and it automatically forwards content to everyone. No more "can you send me this video?" messages!',
      platform: "twitter",
      verified: true,
      date: "2024-01-20",
    },
    {
      id: 3,
      name: "Дмитрий В.",
      role: "System Administrator",
      avatar: "/img/testimonials/user3.jpg",
      rating: 4,
      text: "Наконец-то решение для семейного чата! Родители постоянно просили скачать им что-то с YouTube или отправить мемы из Reddit. Теперь бот всё делает автоматически. Плюс поддержка Tor для приватности - отличная фича.",
      platform: "telegram",
      verified: true,
      date: "2024-01-25",
    },
    {
      id: 4,
      name: "Lisa Chen",
      role: "Digital Marketer",
      avatar: "/img/testimonials/user4.jpg",
      rating: 5,
      text: "The unique link system for adding contacts is genius! No more sharing usernames or phone numbers. Just exchange links once and you're connected. Perfect for professional networks where you want to share content but maintain privacy.",
      platform: "github",
      verified: true,
      date: "2024-02-01",
    },
    {
      id: 5,
      name: "Артём М.",
      role: "Software Developer",
      avatar: "/img/testimonials/user5.jpg",
      rating: 5,
      text: "Группировка контактов по категориям #family, #friends, #work - это находка! Теперь смешные видео идут друзьям, а полезные туториалы коллегам. Бот понимает контекст по хештегам и никого не спамит лишним контентом.",
      platform: "github",
      verified: true,
      date: "2024-02-10",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(nextTestimonial, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  const getPlatformIcon = (platform) => {
    switch (platform) {
      case "github":
        return faGithub;
      case "twitter":
        return faTwitter;
      case "telegram":
        return faTelegram;
      default:
        return faUser;
    }
  };

  const getPlatformColor = (platform) => {
    switch (platform) {
      case "github":
        return "#333";
      case "twitter":
        return "#1da1f2";
      case "telegram":
        return "#0088cc";
      default:
        return "#666";
    }
  };

  const currentItem = testimonials[currentTestimonial];

  return (
    <section className={styles.testimonialsSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            <FontAwesomeIcon icon={faHeart} className={styles.titleIcon} />
            <Translate id="testimonials.title">
              Что говорят пользователи
            </Translate>
          </h2>
          <p className={styles.sectionDescription}>
            <Translate id="testimonials.description">
              Отзывы реальных пользователей о TelegramMediaRelayBot
            </Translate>
          </p>
        </div>

        <div
          className={styles.testimonialsContainer}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className={styles.testimonialCard}>
            <div className={styles.quoteIcon}>
              <FontAwesomeIcon icon={faQuoteLeft} />
            </div>

            <div className={styles.testimonialContent}>
              <div className={styles.rating}>
                {[...Array(5)].map((_, index) => (
                  <FontAwesomeIcon
                    key={index}
                    icon={faStar}
                    className={`${styles.star} ${
                      index < currentItem.rating ? styles.filled : styles.empty
                    }`}
                  />
                ))}
              </div>

              <blockquote className={styles.testimonialText}>
                "{currentItem.text}"
              </blockquote>

              <div className={styles.authorInfo}>
                <div className={styles.avatar}>
                  <img
                    src={currentItem.avatar}
                    alt={currentItem.name}
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextElementSibling.style.display = "flex";
                    }}
                  />
                  <div
                    className={styles.avatarFallback}
                    style={{ display: "none" }}
                  >
                    <FontAwesomeIcon icon={faUser} />
                  </div>
                </div>

                <div className={styles.authorDetails}>
                  <div className={styles.authorName}>
                    {currentItem.name}
                    {currentItem.verified && (
                      <span
                        className={styles.verifiedBadge}
                        title="Verified User"
                      >
                        ✓
                      </span>
                    )}
                  </div>
                  <div className={styles.authorRole}>{currentItem.role}</div>
                  <div className={styles.platformInfo}>
                    <FontAwesomeIcon
                      icon={getPlatformIcon(currentItem.platform)}
                      style={{ color: getPlatformColor(currentItem.platform) }}
                    />
                    <span className={styles.date}>
                      {new Date(currentItem.date).toLocaleDateString("ru-RU")}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation arrows */}
            <button
              className={`${styles.navButton} ${styles.prevButton}`}
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>

            <button
              className={`${styles.navButton} ${styles.nextButton}`}
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>

          {/* Testimonial indicators */}
          <div className={styles.indicators}>
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`${styles.indicator} ${
                  index === currentTestimonial ? styles.active : ""
                }`}
                onClick={() => goToTestimonial(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className={styles.statisticsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>500+</div>
            <div className={styles.statLabel}>
              <Translate id="testimonials.happyUsers">
                Довольных пользователей
              </Translate>
            </div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statNumber}>1000+</div>
            <div className={styles.statLabel}>
              <Translate id="testimonials.supportedSites">
                Поддерживаемых сайтов
              </Translate>
            </div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statNumber}>24/7</div>
            <div className={styles.statLabel}>
              <Translate id="testimonials.availability">
                Работает непрерывно
              </Translate>
            </div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statNumber}>99.9%</div>
            <div className={styles.statLabel}>
              <Translate id="testimonials.uptime">
                Время безотказной работы
              </Translate>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className={styles.ctaSection}>
          <h3 className={styles.ctaTitle}>
            <Translate id="testimonials.ctaTitle">
              Присоединяйтесь к сообществу!
            </Translate>
          </h3>
          <p className={styles.ctaDescription}>
            <Translate id="testimonials.ctaDescription">
              Станьте частью растущего сообщества пользователей
              TelegramMediaRelayBot
            </Translate>
          </p>
          <div className={styles.ctaButtons}>
            <a
              href="https://github.com/ZenonEl/TelegramMediaRelayBot"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButton}
            >
              <FontAwesomeIcon icon={faGithub} />
              <Translate id="testimonials.starOnGitHub">
                Поставить звезду на GitHub
              </Translate>
            </a>
            <a
              href="docs/"
              className={`${styles.ctaButton} ${styles.secondary}`}
            >
              <Translate id="testimonials.getStarted">
                Начать использовать
              </Translate>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
