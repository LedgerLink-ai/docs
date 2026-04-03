import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

const platformAreas = [
  {
    eyebrow: 'Stable infrastructure',
    title: 'Rails',
    description:
      'Infrastructure and gateway capabilities for digital-asset operations.',
    href: '/docs/rails',
  },
  {
    eyebrow: 'Primary integration path',
    title: 'Link',
    description:
      'Public API services for balances, quotes, routing, verification, wallets, and activity tracking.',
    href: '/docs/link/services',
    featured: true,
  },
  {
    eyebrow: 'Analytics and settlement',
    title: 'Engine',
    description:
      'Analytics and settlement concepts for round-the-clock asset movement.',
    href: '/docs/engine',
  },
];

const developerResources = [
  {
    eyebrow: 'Primary resource',
    title: 'SDK',
    description:
      'Use the JavaScript and TypeScript SDK when you want typed scope methods for accounts, assets, customers, quotes, transactions, and tracker workflows.',
    href: '/docs/sdk',
    featured: true,
  },
  {
    eyebrow: 'Portal overview',
    title: 'Platform Overview',
    description:
      'Understand how Rails, Link, and Engine fit together before choosing an integration path.',
    href: '/docs/intro',
  },
  {
    eyebrow: 'Product updates',
    title: 'Changelog',
    description:
      'Review recent documentation and platform updates that affect integrators.',
    href: '/blog',
  },
];

const linkServices = [
  {
    title: 'Core',
    description: 'Transactions, balances, assets, limits, and ledger-backed workflows.',
    href: '/docs/link/services/core',
  },
  {
    title: 'Account Manager',
    description: 'Participants, customers, accounts, and wallet lifecycle APIs.',
    href: '/docs/link/services/account_manager',
  },
  {
    title: 'Quote',
    description: 'Rates, provider mappings, assets, categories, and quote settings.',
    href: '/docs/link/services/quote',
  },
  {
    title: 'Router',
    description: 'Account, customer, and message-routing APIs.',
    href: '/docs/link/services/router',
  },
  {
    title: 'Verify',
    description: 'Sanctions screening APIs for compliance-sensitive flows.',
    href: '/docs/link/services/verify',
  },
  {
    title: 'Tracker',
    description: 'Operational log-message ingestion and query APIs.',
    href: '/docs/link/services/tracker',
  },
];

export default function Home(): ReactNode {
  return (
    <Layout
      title="Developer Documentation"
      description="LedgerLink developer documentation for public APIs and platform integration."
    >
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <p className={styles.eyebrow}>LedgerLink Developer Documentation</p>
            <h1 className={styles.heroTitle}>Build on the LedgerLink platform</h1>
            <p className={styles.heroText}>
              Explore platform documentation for Rails, Link, and Engine, then
              use the SDK or service-level API references to implement your
              integration.
            </p>
            <div className={styles.heroActions}>
              <Link className={styles.primaryAction} to="/docs/link/services">
                Explore Link Services
              </Link>
              <Link className={styles.secondaryAction} to="/docs/sdk">
                Open SDK Docs
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>Platform Areas</p>
            <h2>Choose the part of the platform you need</h2>
          </div>
          <div className={styles.areaGrid}>
            {platformAreas.map((area) => (
              <Link
                key={area.title}
                className={area.featured ? styles.areaCardFeatured : styles.areaCard}
                to={area.href}
              >
                <p className={styles.cardEyebrow}>{area.eyebrow}</p>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className={styles.sectionAlt}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>Developer Resources</p>
            <h2>Start with the integration tooling and shared guidance</h2>
            <p className={styles.sectionText}>
              Use the SDK for typed client access, the platform overview for
              orientation, and the changelog when you need release context.
            </p>
          </div>
          <div className={styles.quickGrid}>
            {developerResources.map((resource) => (
              <Link
                key={resource.title}
                className={resource.featured ? styles.quickCardFeatured : styles.quickCard}
                to={resource.href}
              >
                <p className={styles.cardEyebrow}>{resource.eyebrow}</p>
                <h3>{resource.title}</h3>
                <p>{resource.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className={styles.sectionAlt}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>Link Services</p>
            <h2>Direct entry points for public service APIs</h2>
            <p className={styles.sectionText}>
              The Link area is the main integration surface for external developers.
              Each service page leads into its public API reference and error model.
            </p>
          </div>
          <div className={styles.serviceGrid}>
            {linkServices.map((service) => (
              <Link key={service.title} className={styles.serviceCard} to={service.href}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span>View service docs</span>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
