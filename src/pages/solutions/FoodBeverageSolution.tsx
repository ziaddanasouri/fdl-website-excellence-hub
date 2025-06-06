
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PopupModal from '@/components/PopupModal';
import { 
  Coffee, 
  AlertTriangle, 
  Thermometer
} from 'lucide-react';

const FoodBeverageSolution = () => {
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
                <Coffee className="h-8 w-8 text-green-400" />
                <span className="text-green-400 font-semibold">Food & Beverage</span>
              </div>
              
              <h1 className="mobile-heading font-bold leading-tight">
                Freshness is Everything
                <span className="block text-gradient">Spoilage Kills Profits & Reputation</span>
              </h1>
              
              <p className="text-xl text-gray-200 leading-relaxed">
                <strong>Every minute counts in food logistics.</strong> Temperature violations, delayed deliveries, 
                and inventory spoilage don't just cost money - they destroy brands. RevOps Pro's cold-chain 
                intelligence keeps products fresh and profits flowing.
              </p>

              <div className="bg-red-900/30 border border-red-500/50 p-6 rounded-xl">
                <div className="flex items-center space-x-3 mb-3">
                  <AlertTriangle className="h-5 w-5 text-red-400" />
                  <h3 className="font-bold text-red-300">Spoilage Risk Alert</h3>
                </div>
                <div className="text-red-200">
                  Food companies lose $1.8M annually to spoilage and temperature violations. 
                  One contamination incident can destroy decades of brand trust.
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="revops-button-primary"
                  onClick={() => openModal('consultation', 'Food Safety Audit', 'Prevent spoilage and contamination')}
                >
                  Prevent Food Spoilage
                  <Thermometer className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-gray-900"
                  onClick={() => openModal('demo', 'See Cold Chain Protection', 'Watch AI prevent temperature violations')}
                >
                  Watch Cold Chain Demo
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1556909114-4bf37b3df00d?w=600&h=400&fit=crop" 
                alt="Food logistics" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl" />
              <div className="absolute bottom-6 left-6 text-white">
                <div className="text-2xl font-bold">99.9%</div>
                <div className="text-sm">Cold Chain Integrity</div>
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

export default FoodBeverageSolution;
