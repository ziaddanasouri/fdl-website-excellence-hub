
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle } from 'lucide-react';

const Compliance = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="max-w-4xl mx-auto mobile-padding py-20">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <CheckCircle className="h-8 w-8 text-primary" />
            <span className="text-primary font-semibold">Compliance</span>
          </div>
          <h1 className="mobile-heading font-bold">Regulatory Compliance</h1>
          <p className="text-muted-foreground mt-4">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">GDPR Compliance</h2>
            <p>We are fully compliant with the General Data Protection Regulation (GDPR) and other applicable data protection laws.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">CCPA Compliance</h2>
            <p>RevOps Pro adheres to the California Consumer Privacy Act (CCPA) requirements for data privacy and consumer rights.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Industry Standards</h2>
            <p>Our platform meets or exceeds industry standards for supply chain security and data protection.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Audit and Reporting</h2>
            <p>Regular compliance audits are conducted by third-party security firms to ensure ongoing adherence to regulations.</p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Compliance;
