import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faQuestionCircle,
  faRocket,
  faCog,
  faShieldAlt,
  faDownload,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./FAQ.module.css";
import Translate from "@docusaurus/Translate";

const FAQ = () => {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  const faqData = [
    {
      id: 1,
      icon: faRocket,
      questionKey: "faq.question1",
      question: "Как начать использовать TelegramMediaRelayBot?",
      answerKey: "faq.answer1",
      answer:
        "Установите .NET 8.0+, MySQL 8.0+ и yt-dlp. Скачайте бота с GitHub, создайте appsettings.json с вашим Bot Token от BotFather и настройками базы данных. После запуска используйте /start и обменяйтесь уникальными ссылками с контактами для создания вашей медиа-сети.",
      category: "getting-started",
    },
    {
      id: 2,
      icon: faGlobe,
      questionKey: "faq.question2",
      question: "Какие платформы поддерживает бот?",
      answerKey: "faq.answer2",
      answer:
        "Бот поддерживает 1000+ сайтов через yt-dlp и gallery-dl: YouTube, Reddit, TikTok, Pinterest, Instagram, Twitter, Twitch и многие другие. Это решает проблему, когда ваши друзья не зарегистрированы на определенных платформах или не хотят переходить по ссылкам.",
      category: "features",
    },
    {
      id: 3,
      icon: faCog,
      questionKey: "faq.question3",
      question: "Как настроить автоматическую пересылку медиа?",
      answerKey: "faq.answer3",
      answer:
        'Используйте команду /start и добавьте контакты через "Add Contact". Обменяйтесь уникальными ссылками с друзьями. После подтверждения просто отправьте ссылку + описание (с новой строки), и бот автоматически скачает и перешлет контент всем указанным получателям.',
      category: "configuration",
    },
    {
      id: 4,
      icon: faShieldAlt,
      questionKey: "faq.question4",
      question: "Безопасно ли использовать бота?",
      answerKey: "faq.answer4",
      answer:
        "Да, бот полностью безопасен. Весь код открыт и доступен на GitHub под лицензией AGPL 3.0. Бот работает локально на вашем сервере, не отправляет данные третьим лицам и поддерживает работу через Tor для дополнительной анонимности.",
      category: "security",
    },
    {
      id: 5,
      icon: faDownload,
      questionKey: "faq.question5",
      question: "Как использовать хештеги для организации контента?",
      answerKey: "faq.answer5",
      answer:
        "Добавляйте хештеги в описание после ссылки: #family, #work, #memes. Это помогает сортировать контент и легко находить его в истории чата. Можно использовать как встроенные, так и пользовательские хештеги для лучшей организации.",
      category: "features",
    },
    {
      id: 6,
      icon: faCog,
      questionKey: "faq.question6",
      question: "Зачем нужен этот бот, если можно просто отправить ссылку?",
      answerKey: "faq.answer6",
      answer:
        "Проблема в том, что друзья часто не зарегистрированы на платформах (TikTok, Reddit), слишком ленивы кликать по ссылкам или не хотят регистрироваться. Приходится вручную скачивать, пересылать и чистить память устройства. Бот автоматизирует весь этот процесс.",
      category: "features",
    },
    {
      id: 7,
      icon: faQuestionCircle,
      questionKey: "faq.question7",
      question: "Что делать, если бот не работает с определенным сайтом?",
      answerKey: "faq.answer7",
      answer:
        "Проверьте, что у вас установлена последняя версия yt-dlp. Если проблема сохраняется, создайте issue на GitHub с описанием проблемы и ссылкой на проблемный контент. Мы постараемся решить проблему в следующем обновлении.",
      category: "troubleshooting",
    },
    {
      id: 8,
      icon: faGlobe,
      questionKey: "faq.question8",
      question: "Можно ли использовать бота в группах Telegram?",
      answerKey: "faq.answer8",
      answer:
        "Да! Бот поддерживает работу в групповых чатах Telegram. Просто отправьте ссылку в группу, и бот скачает контент и отправит его прямо в групповой чат, плюс может переслать другим настроенным контактам согласно вашим правилам.",
      category: "features",
    },
  ];

  const categories = [
    {
      id: "getting-started",
      name: "Начало работы",
      icon: faRocket,
      color: "#28a745",
    },
    { id: "features", name: "Возможности", icon: faGlobe, color: "#007bff" },
    { id: "configuration", name: "Настройка", icon: faCog, color: "#ffc107" },
    {
      id: "security",
      name: "Безопасность",
      icon: faShieldAlt,
      color: "#dc3545",
    },
    {
      id: "maintenance",
      name: "Обслуживание",
      icon: faDownload,
      color: "#6f42c1",
    },
    {
      id: "troubleshooting",
      name: "Решение проблем",
      icon: faQuestionCircle,
      color: "#fd7e14",
    },
  ];

  return (
    <section className={styles.faqSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            <FontAwesomeIcon
              icon={faQuestionCircle}
              className={styles.titleIcon}
            />
            <Translate id="faq.title">Часто задаваемые вопросы</Translate>
          </h2>
          <p className={styles.sectionDescription}>
            <Translate id="faq.description">
              Найдите ответы на самые популярные вопросы о TelegramMediaRelayBot
            </Translate>
          </p>
        </div>

        {/* Category filters */}
        <div className={styles.categoryFilters}>
          {categories.map((category) => (
            <div
              key={category.id}
              className={styles.categoryCard}
              style={{ "--category-color": category.color }}
            >
              <FontAwesomeIcon
                icon={category.icon}
                className={styles.categoryIcon}
              />
              <span className={styles.categoryName}>{category.name}</span>
              <span className={styles.categoryCount}>
                {faqData.filter((item) => item.category === category.id).length}
              </span>
            </div>
          ))}
        </div>

        <div className={styles.faqContainer}>
          {faqData.map((item, index) => {
            const isOpen = openItem === index;
            const category = categories.find((cat) => cat.id === item.category);

            return (
              <div
                key={item.id}
                className={`${styles.faqItem} ${isOpen ? styles.open : ""}`}
                style={{ "--category-color": category?.color || "#007bff" }}
              >
                <button
                  className={styles.faqQuestion}
                  onClick={() => toggleItem(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                >
                  <div className={styles.questionContent}>
                    <FontAwesomeIcon
                      icon={item.icon}
                      className={styles.questionIcon}
                    />
                    <span className={styles.questionText}>
                      <Translate id={item.questionKey}>
                        {item.question}
                      </Translate>
                    </span>
                  </div>
                  <FontAwesomeIcon
                    icon={isOpen ? faChevronUp : faChevronDown}
                    className={styles.chevronIcon}
                  />
                </button>

                <div
                  id={`faq-answer-${item.id}`}
                  className={styles.faqAnswer}
                  aria-hidden={!isOpen}
                >
                  <div className={styles.answerContent}>
                    <p>
                      <Translate id={item.answerKey}>{item.answer}</Translate>
                    </p>
                    <div className={styles.categoryTag}>
                      <FontAwesomeIcon icon={category?.icon} />
                      {category?.name}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className={styles.helpSection}>
          <div className={styles.helpCard}>
            <h3>
              <Translate id="faq.stillNeedHelp">
                Всё ещё нужна помощь?
              </Translate>
            </h3>
            <p>
              <Translate id="faq.contactDescription">
                Если вы не нашли ответ на свой вопрос, создайте issue на GitHub
                или свяжитесь с разработчиком
              </Translate>
            </p>
            <div className={styles.helpButtons}>
              <a
                href="https://github.com/ZenonEl/TelegramMediaRelayBot/issues"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.helpButton}
              >
                <FontAwesomeIcon icon={faQuestionCircle} />
                <Translate id="faq.createIssue">Создать Issue</Translate>
              </a>
              <a href="/docs/" className={styles.helpButton}>
                <FontAwesomeIcon icon={faRocket} />
                <Translate id="faq.readDocs">Читать документацию</Translate>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
