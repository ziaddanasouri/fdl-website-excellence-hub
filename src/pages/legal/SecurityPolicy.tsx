
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Lock } from 'lucide-react';

const SecurityPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="max-w-4xl mx-auto mobile-padding py-20">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Lock className="h-8 w-8 text-primary" />
            <span className="text-primary font-semibold">Security Policy</span>
          </div>
          <h1 className="mobile-heading font-bold">Enterprise-Grade Security</h1>
          <p className="text-muted-foreground mt-4">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Data Encryption</h2>
            <p>All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption standards.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Access Controls</h2>
            <p>We implement strict access controls including multi-factor authentication and role-based permissions.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Security Monitoring</h2>
            <p>Our systems are continuously monitored for security threats with 24/7 incident response capabilities.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Compliance Certifications</h2>
            <p>RevOps Pro maintains SOC 2 Type II, ISO 27001, and other industry-standard security certifications.</p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SecurityPolicy;
