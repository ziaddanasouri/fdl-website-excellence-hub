
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PopupModal from '@/components/PopupModal';
import { 
  Award, 
  TrendingUp, 
  DollarSign, 
  Users, 
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react';

const SuccessStories = () => {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: 'demo' | 'download' | 'quote' | 'consultation' | 'deployment';
    title?: string;
    description?: string;
    resource?: string;
  }>({
    isOpen: false,
    type: 'demo'
  });

  const openModal = (type: typeof modalState.type, title?: string, description?: string, resource?: string) => {
    setModalState({ isOpen: true, type, title, description, resource });
  };

  const closeModal = () => {
    setModalState({ ...modalState, isOpen: false });
  };

  const successStories = [
    {
      company: 'MegaRetail Corp',
      sector: 'E-commerce & Retail',
      challenge: 'Black Friday inventory crisis threatening $50M in sales',
      solution: 'AI-powered demand forecasting and automated reordering',
      results: {
        savings: '$18.5M',
        efficiency: '97% stock availability',
        satisfaction: 'Zero stockouts during peak'
      },
      quote: 'RevOps Pro saved our Black Friday. Their AI predicted the surge perfectly.',
      executive: 'Sarah Johnson, CEO'
    },
    {
      company: 'TechFlow Innovations',
      sector: 'Technology',
      challenge: 'Critical component shortage delaying $20M product launch',
      solution: 'Multi-source procurement optimization with real-time tracking',
      results: {
        savings: '$20M',
        efficiency: 'On-time launch achieved',
        satisfaction: '200% revenue growth'
      },
      quote: 'They turned our biggest threat into our competitive advantage.',
      executive: 'David Chen, CTO'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="revops-hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto mobile-padding">
          <div className="text-center space-y-8">
            <div className="flex items-center justify-center space-x-3">
              <Award className="h-8 w-8 text-yellow-400" />
              <span className="text-yellow-400 font-semibold">Fortune 100 Success Stories</span>
            </div>
            
            <h1 className="mobile-heading font-bold leading-tight">
              Real Companies, Real Results
              <span className="block text-gradient">Billions in Revenue Protected</span>
            </h1>
            
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              From preventing Black Friday disasters to saving $50M product launches, 
              see how Fortune 100 companies use RevOps Pro to turn supply chain threats 
              into competitive advantages.
            </p>
          </div>
        </div>
      </section>

      {/* Success Stories Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto mobile-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-shadow">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold">{story.company}</h3>
                    <p className="text-muted-foreground">{story.sector}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-red-600 mb-2">The Crisis:</h4>
                    <p className="text-muted-foreground">{story.challenge}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">The Solution:</h4>
                    <p className="text-muted-foreground">{story.solution}</p>
                  </div>

                  <div className="grid grid-cols-3 gap-4 p-4 bg-green-50 rounded-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{story.results.savings}</div>
                      <div className="text-xs text-green-700">Saved</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{story.results.efficiency}</div>
                      <div className="text-xs text-green-700">Efficiency</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{story.results.satisfaction}</div>
                      <div className="text-xs text-green-700">Performance</div>
                    </div>
                  </div>

                  <blockquote className="border-l-4 border-primary pl-4 italic">
                    "{story.quote}"
                    <footer className="mt-2 text-sm text-muted-foreground">
                      — {story.executive}
                    </footer>
                  </blockquote>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 revops-hero-gradient text-white">
        <div className="max-w-4xl mx-auto mobile-padding text-center">
          <h2 className="mobile-subheading font-bold mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl mb-8">
            Join the Fortune 100 companies protecting billions in revenue with RevOps Pro.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="revops-button-primary text-lg"
              onClick={() => openModal('consultation', 'Start Your Success Story', 'Begin your transformation today')}
            >
              Start Your Success Story
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />

      <PopupModal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        type={modalState.type}
        title={modalState.title}
        description={modalState.description}
        resource={modalState.resource}
      />
    </div>
  );
};

export default SuccessStories;
