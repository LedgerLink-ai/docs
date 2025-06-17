import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home(): ReactNode {
  return (
    <Layout 
      title="Developer Documentation" 
      description="Ledgerlink.ai Developer Documentation - Bridging Digital Assets & Institutional Finance"
    >
      <main>
        {/* Hero Section */}
        <div style={{ 
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          padding: '4rem 2rem',
          textAlign: 'center'
        }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ 
              fontSize: '3rem', 
              marginBottom: '1rem',
              fontWeight: 'bold'
            }}>
              Ledgerlink Developer Documentation
            </h1>
            <p style={{ 
              fontSize: '1.25rem', 
              marginBottom: '2rem',
              opacity: 0.9
            }}>
              Bridging Digital Assets & Institutional Finance
            </p>
            <p style={{ 
              fontSize: '1.1rem', 
              marginBottom: '2rem',
              lineHeight: '1.6'
            }}>
              Build secure, compliant solutions for tokenization and blockchain integration. 
              Enable stablecoin payments and smart contracts for financial institutions.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link
                to="/docs/docs/intro"
                style={{
                  backgroundColor: 'white',
                  color: '#667eea',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  transition: 'all 0.2s'
                }}
              >
                Get Started
              </Link>
              <Link
                to="/blog"
                style={{
                  backgroundColor: 'transparent',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  border: '2px solid white',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  transition: 'all 0.2s'
                }}
              >
                Latest Updates
              </Link>
            </div>
          </div>
        </div>

        {/* Platform Overview */}
        <div style={{ padding: '4rem 2rem', backgroundColor: '#f8f9fa' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem' }}>
              Platform Overview
            </h2>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              gap: '2rem' 
            }}>
              <div style={{ 
                backgroundColor: 'white', 
                padding: '2rem', 
                borderRadius: '8px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
              }}>
                <h3 style={{ color: '#667eea', marginBottom: '1rem' }}>The Rails</h3>
                <p>Secure, scalable infrastructure to manage and transact digital assets including stablecoins, tokenized securities, and cryptocurrencies.</p>
              </div>
              <div style={{ 
                backgroundColor: 'white', 
                padding: '2rem', 
                borderRadius: '8px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
              }}>
                <h3 style={{ color: '#667eea', marginBottom: '1rem' }}>The Link</h3>
                <p>A flexible integration fabric connecting digital assets with legacy systems, tailored to seamlessly integrate with your existing infrastructure.</p>
              </div>
              <div style={{ 
                backgroundColor: 'white', 
                padding: '2rem', 
                borderRadius: '8px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
              }}>
                <h3 style={{ color: '#667eea', marginBottom: '1rem' }}>The Engine</h3>
                <p>Real-time analytics and settlement engine for 24/7 asset movement with AI-powered tools for liquidity management and risk assessment.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div style={{ padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem' }}>
              Key Features
            </h2>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
              gap: '2rem' 
            }}>
              <div style={{ textAlign: 'center', padding: '1rem' }}>
                <h3 style={{ color: '#333', marginBottom: '1rem' }}>🏦 Financial Institution Ready</h3>
                <p>Access stablecoins for instant transfers, offer crypto services, and enable smart contracts with regulatory compliance built-in.</p>
              </div>
              <div style={{ textAlign: 'center', padding: '1rem' }}>
                <h3 style={{ color: '#333', marginBottom: '1rem' }}>🔗 Blockchain Developer Friendly</h3>
                <p>Connect your blockchain, dApp, or DAO directly to the institutional financial system through our integration layer.</p>
              </div>
              <div style={{ textAlign: 'center', padding: '1rem' }}>
                <h3 style={{ color: '#333', marginBottom: '1rem' }}>🛡️ Security & Compliance</h3>
                <p>Built with compliance across U.S. and E.U. jurisdictions, supporting ISO 20022 standards and AML/KYC protocols.</p>
              </div>
              <div style={{ textAlign: 'center', padding: '1rem' }}>
                <h3 style={{ color: '#333', marginBottom: '1rem' }}>⚡ Real-time Processing</h3>
                <p>24/7 asset movement capabilities with real-time analytics, settlement, and around-the-clock operational support.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div style={{ padding: '4rem 2rem', backgroundColor: '#f8f9fa' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem' }}>
              Use Cases
            </h2>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
              gap: '2rem' 
            }}>
              <div style={{ 
                backgroundColor: 'white', 
                padding: '2rem', 
                borderRadius: '8px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
              }}>
                <h3 style={{ color: '#667eea', marginBottom: '1rem' }}>💰 Stablecoins</h3>
                <p>Enable instant international transfer and settlement with minimal costs, increasing margins and global efficiency for financial institutions.</p>
              </div>
              <div style={{ 
                backgroundColor: 'white', 
                padding: '2rem', 
                borderRadius: '8px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
              }}>
                <h3 style={{ color: '#667eea', marginBottom: '1rem' }}>₿ Cryptocurrency Services</h3>
                <p>Offer clients Bitcoin, Ethereum, Solana, USDC, smart contracts & more within institutional bank accounts.</p>
              </div>
              <div style={{ 
                backgroundColor: 'white', 
                padding: '2rem', 
                borderRadius: '8px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
              }}>
                <h3 style={{ color: '#667eea', marginBottom: '1rem' }}>👩‍💻 Developer Integration</h3>
                <p>Connect your blockchain, DAO, or dApp to the institutional financial system, opening access to participating firms on our platform.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Getting Started */}
        <div style={{ padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ marginBottom: '2rem', fontSize: '2.5rem' }}>
              Ready to Get Started?
            </h2>
            <p style={{ 
              fontSize: '1.1rem', 
              marginBottom: '2rem',
              lineHeight: '1.6',
              color: '#666'
            }}>
              Join leading financial institutions in adopting secure, compliant digital asset solutions. 
              Our comprehensive documentation will guide you through integration and implementation.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link
                to="/docs/docs/intro"
                style={{
                  backgroundColor: '#667eea',
                  color: 'white',
                  padding: '0.75rem 2rem',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  fontSize: '1.1rem',
                  transition: 'all 0.2s'
                }}
              >
                View Documentation
              </Link>
              <a
                href="https://ledgerlink.ai/contact"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: 'transparent',
                  color: '#667eea',
                  padding: '0.75rem 2rem',
                  border: '2px solid #667eea',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  fontSize: '1.1rem',
                  transition: 'all 0.2s'
                }}
              >
                Contact Our Team
              </a>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
