
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PopupModal from '@/components/PopupModal';
import { 
  Heart, 
  AlertTriangle, 
  ArrowRight,
  DollarSign,
  Shield
} from 'lucide-react';

const HealthcareSolution = () => {
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

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="revops-hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto mobile-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-3">
                <Heart className="h-8 w-8 text-red-400" />
                <span className="text-red-400 font-semibold">Healthcare & Pharmaceutical</span>
              </div>
              
              <h1 className="mobile-heading font-bold leading-tight">
                Patient Lives Are On The Line
                <span className="block text-gradient">Don't Let Supply Chain Kill Them</span>
              </h1>
              
              <p className="text-xl text-gray-200 leading-relaxed">
                <strong>Every stockout could be fatal.</strong> Healthcare supply chains can't afford failures. 
                RevOps Pro's life-critical logistics intelligence prevents shortages, maintains cold chain integrity, 
                and ensures regulatory compliance - because lives depend on it.
              </p>

              <div className="bg-red-900/30 border border-red-500/50 p-6 rounded-xl">
                <div className="flex items-center space-x-3 mb-3">
                  <AlertTriangle className="h-5 w-5 text-red-400" />
                  <h3 className="font-bold text-red-300">Critical Risk Alert</h3>
                </div>
                <div className="text-red-200">
                  23% of hospitals experience critical drug shortages annually, 
                  risking patient safety and $1.8M in emergency costs.
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="revops-button-primary"
                  onClick={() => openModal('consultation', 'Emergency Healthcare Audit', 'Prevent stockouts that could cost lives')}
                >
                  Prevent Healthcare Crisis
                  <Heart className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-gray-900"
                  onClick={() => openModal('demo', 'See Life-Critical Prevention', 'Watch AI prevent hospital stockouts')}
                >
                  Watch Crisis Prevention Demo
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop" 
                alt="Healthcare logistics" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl" />
              <div className="absolute bottom-6 left-6 text-white">
                <div className="text-2xl font-bold">99.98%</div>
                <div className="text-sm">Critical Supply Availability</div>
              </div>
            </div>
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

export default HealthcareSolution;
