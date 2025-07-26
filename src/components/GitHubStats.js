import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCodeBranch, faEye, faDownload } from '@fortawesome/free-solid-svg-icons';
import styles from './GitHubStats.module.css';

const GitHubStats = ({ repoOwner = 'ZenonEl', repoName = 'TelegramMediaRelayBot' }) => {
  const [stats, setStats] = useState({
    stars: 0,
    forks: 0,
    watchers: 0,
    downloads: 0,
    loading: true,
    error: null
  });

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        // Fetch repository data
        const repoResponse = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}`);
        if (!repoResponse.ok) throw new Error('Failed to fetch repository data');
        const repoData = await repoResponse.json();

        // Fetch releases data for download count
        const releasesResponse = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/releases`);
        if (!releasesResponse.ok) throw new Error('Failed to fetch releases data');
        const releasesData = await releasesResponse.json();

        // Calculate total downloads
        const totalDownloads = releasesData.reduce((total, release) => {
          return total + release.assets.reduce((assetTotal, asset) => {
            return assetTotal + asset.download_count;
          }, 0);
        }, 0);

        setStats({
          stars: repoData.stargazers_count,
          forks: repoData.forks_count,
          watchers: repoData.watchers_count,
          downloads: totalDownloads,
          loading: false,
          error: null
        });
      } catch (error) {
        console.error('Error fetching GitHub stats:', error);
        setStats({
          stars: 0,
          forks: 0,
          watchers: 0,
          downloads: 0,
          loading: false,
          error: error.message
        });
      }
    };

    fetchGitHubStats();
  }, [repoOwner, repoName]);

  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  };

  if (stats.loading) {
    return (
      <div className={styles.statsContainer}>
        <div className={styles.loadingContainer}>
          {[...Array(4)].map((_, index) => (
            <div key={index} className={styles.statItem}>
              <div className={`${styles.statValue} ${styles.shimmer}`}>--</div>
              <div className={`${styles.statLabel} ${styles.shimmer}`}>Loading...</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (stats.error) {
    return (
      <div className={styles.statsContainer}>
        <div className={styles.errorContainer}>
          <p>Unable to load GitHub statistics</p>
        </div>
      </div>
    );
  }

  const statItems = [
    {
      icon: faStar,
      value: stats.stars,
      label: 'Stars',
      color: '#ffd700'
    },
    {
      icon: faCodeBranch,
      value: stats.forks,
      label: 'Forks',
      color: '#28a745'
    },
    {
      icon: faEye,
      value: stats.watchers,
      label: 'Watchers',
      color: '#007bff'
    },
    {
      icon: faDownload,
      value: stats.downloads,
      label: 'Downloads',
      color: '#6f42c1'
    }
  ];

  return (
    <div className={styles.statsContainer}>
      <div className={styles.statsGrid}>
        {statItems.map((item, index) => (
          <div
            key={index}
            className={styles.statItem}
            style={{ '--stat-color': item.color }}
          >
            <div className={styles.statIcon}>
              <FontAwesomeIcon icon={item.icon} />
            </div>
            <div className={styles.statValue}>
              {formatNumber(item.value)}
            </div>
            <div className={styles.statLabel}>
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GitHubStats;
