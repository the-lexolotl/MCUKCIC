import { Suspense } from 'react';
import ConfirmInner from './ConfirmInner';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

export default function ConfirmPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="section" style={{ minHeight: '50vh', display: 'flex', alignItems: 'center' }}>
          <div className="container" style={{ textAlign: 'center', maxWidth: '520px', margin: '0 auto' }}>
            <Suspense fallback={
              <p style={{ color: '#6b7494', fontSize: '1rem' }}>Confirming your subscription…</p>
            }>
              <ConfirmInner />
            </Suspense>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}