
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Cookie } from 'lucide-react';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="max-w-4xl mx-auto mobile-padding py-20">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Cookie className="h-8 w-8 text-primary" />
            <span className="text-primary font-semibold">Cookie Policy</span>
          </div>
          <h1 className="mobile-heading font-bold">Cookie Policy</h1>
          <p className="text-muted-foreground mt-4">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">What Are Cookies</h2>
            <p>Cookies are small text files that are stored on your computer or mobile device when you visit our website.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">How We Use Cookies</h2>
            <p>We use cookies to improve your browsing experience, analyze site traffic, and personalize content.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Types of Cookies</h2>
            <p>We use essential cookies for site functionality, analytics cookies to understand usage, and preference cookies to remember your settings.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Managing Cookies</h2>
            <p>You can control and delete cookies through your browser settings. Note that disabling cookies may affect site functionality.</p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CookiePolicy;
