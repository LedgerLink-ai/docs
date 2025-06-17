import type {ReactNode} from 'react';
import Layout from '@theme/Layout';

export default function Home(): ReactNode {
  return (
    <Layout title="Welcome" description="LedgerLink Developer Documentation">
      <main style={{ padding: '2rem' }}>
        <h1>Welcome to LedgerLink Docs</h1>
        <p>This is the public developer documentation portal for LedgerLink.</p>
        <p>More content coming soon.</p>
      </main>
    </Layout>
  );
}
