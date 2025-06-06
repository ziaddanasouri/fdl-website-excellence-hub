
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PopupModal from '@/components/PopupModal';
import { 
  Cpu, 
  Zap, 
  AlertTriangle
} from 'lucide-react';

const TechnologySolution = () => {
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
                <Cpu className="h-8 w-8 text-blue-400" />
                <span className="text-blue-400 font-semibold">Technology & Software</span>
              </div>
              
              <h1 className="mobile-heading font-bold leading-tight">
                Move Fast or Die
                <span className="block text-gradient">Tech Speed Requires Supply Chain Speed</span>
              </h1>
              
              <p className="text-xl text-gray-200 leading-relaxed">
                <strong>Tech moves at light speed. Your supply chain can't.</strong> While you're debugging code, 
                competitors are stealing market share because their products ship first. RevOps Pro gives you 
                the supply chain velocity to match your innovation speed.
              </p>

              <div className="bg-red-900/30 border border-red-500/50 p-6 rounded-xl">
                <div className="flex items-center space-x-3 mb-3">
                  <AlertTriangle className="h-5 w-5 text-red-400" />
                  <h3 className="font-bold text-red-300">Velocity Killer Alert</h3>
                </div>
                <div className="text-red-200">
                  67% of tech companies miss product launches due to supply chain failures, 
                  costing $15M per quarter delay in today's market.
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="revops-button-primary"
                  onClick={() => openModal('consultation', 'Tech Velocity Audit', 'Accelerate your time-to-market')}
                >
                  Accelerate Time-to-Market
                  <Zap className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-gray-900"
                  onClick={() => openModal('demo', 'See Speed Optimization', 'Watch AI accelerate product delivery')}
                >
                  Watch Acceleration Demo
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&h=400&fit=crop" 
                alt="Technology operations" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl" />
              <div className="absolute bottom-6 left-6 text-white">
                <div className="text-2xl font-bold">2.3x</div>
                <div className="text-sm">Faster Time-to-Market</div>
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

export default TechnologySolution;
