import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './index.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faComputer, faDownload, faShare, faShieldAlt } from '@fortawesome/free-solid-svg-icons';

function Feature({ title, description, icon }) {
  return (
    <div className={clsx('col col--4', styles.feature)}>
      <div className={styles.featureIcon}>
        {icon} {}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function Home() {
  return (
    <Layout title="Главная" description="Документация для TelegramMediaRelayBot">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">TelegramMediaRelayBot</h1>
          <p className="hero__subtitle">Присоединяйтесь к сообществу пользователей проекта и начните использовать бота уже сегодня!</p>
          <p className="hero__description">
            Это мощный Telegram-бот, который позволяет скачивать и пересылать медиафайлы с различных платформ,
            таких как YouTube, Instagram, TikTok и других. Функционал бота не ограничивается простым скачиванием медиафайлов через ссылки.
            С его помощью вы можете автоматизировать процесс загрузки и пересылки медиа между своими знакомыми, экономя время и усилия.
          </p>
          <div className={styles.buttons}>
            <Link
              className={clsx('button button--primary button--lg', styles.getStarted)}
              to="/docs/">
              Начать
            </Link>
            <Link
              className={clsx('button button--primary button--lg', styles.getStarted)}
              to="https://github.com/ZenonEl/TelegramMediaRelayBot/releases/latest" // Замените на ссылку на ваш релиз
              target="_blank" // Открывать в новой вкладке
              rel="noopener noreferrer">
              Скачать последнюю версию
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <Feature
                title="Поддержка множества платформ"
                description="Проект использует мощный инструмент — yt-dlp для скачивания медиафайлов с таких платформ, как YouTube, Instagram, TikTok и многих других.
                Благодаря интеграции с yt-dlp, бот обеспечивает стабильную и быструю загрузку контента, поддерживая широкий спектр источников и форматов."
                icon={<FontAwesomeIcon icon={faDownload} size="6x" />}
              />
              <Feature
                title="Пересылка контактам"
                description="Бот способен автоматически пересылать скачанные медиафайлы указанным контактам или даже целым группам,
                что позволяет легко делиться контентом с друзьями, коллегами или сообществами. Это особенно полезно, если кто-то не может по какой-либо причине
                просмотреть контент напрямую, перейдя по вашей ссылке. Настройте список получателей,
                и бот будет самостоятельно отправлять им медиа, экономя ваше время и упрощая процесс обмена файлами."
                icon={<FontAwesomeIcon icon={faShare} size="6x" />}
              />
              <Feature
                title="Поддержка прокси"
                description="Бот поддерживает работу через прокси, включая Tor, что обеспечивает анонимность и позволяет обходить ограничения,
                наложенные платформами. Это особенно полезно для пользователей, которым важно сохранить конфиденциальность и защитить свою приватность."
                icon={<FontAwesomeIcon icon={faShieldAlt} size="6x" />}
              />
              <Feature
                title="Ранняя стадия разработки"
                description="Проект находится в стадии активной разработки, но уже сейчас предлагает стабильный базовый функционал.
                Я постоянно работаю над улучшением и добавлением новых возможностей, чтобы сделать бота ещё более удобным и мощным инструментом."
                icon={<FontAwesomeIcon icon={faCode} size="3x" />}
              />
              <Feature
                title="Кроссплатформенность"
                description="Бот разработан для Linux, но благодаря использованию .NET Core может быть адаптирован для работы на Windows и macOS.
                Это делает его гибким решением для различных платформ."
                icon={<FontAwesomeIcon icon={faComputer} size="3x" />}
              />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}