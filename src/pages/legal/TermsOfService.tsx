
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FileText } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="max-w-4xl mx-auto mobile-padding py-20">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <FileText className="h-8 w-8 text-primary" />
            <span className="text-primary font-semibold">Terms of Service</span>
          </div>
          <h1 className="mobile-heading font-bold">Terms of Service</h1>
          <p className="text-muted-foreground mt-4">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Acceptance of Terms</h2>
            <p>By accessing and using RevOps Pro services, you accept and agree to be bound by the terms and provision of this agreement.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Use License</h2>
            <p>Permission is granted to temporarily use RevOps Pro services for personal, non-commercial transitory viewing only.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Service Availability</h2>
            <p>We strive to maintain 99.9% uptime but do not guarantee uninterrupted access to our services.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
            <p>RevOps Pro shall not be liable for any indirect, incidental, special, consequential, or punitive damages.</p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TermsOfService;
