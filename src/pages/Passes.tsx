import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Crown, Zap } from 'lucide-react';
import logoMeraz from '@/assets/logo_meraz.svg';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

interface Pass {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  icon: typeof Star;
  description: string;
  features: string[];
  popular?: boolean;
  color: string;
}

const passes: Pass[] = [
  {
    id: 'basic',
    name: 'Explorer',
    price: 299,
    icon: Zap,
    description: 'Perfect for day visitors',
    features: [
      'Single day access',
      'All open events',
      'Food court access',
      'Exhibition entry',
    ],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'standard',
    name: 'Voyager',
    price: 599,
    originalPrice: 799,
    icon: Star,
    description: 'Full festival experience',
    features: [
      'All 3 days access',
      'All events & competitions',
      'Pro Night entry',
      'Food court access',
      'Workshops access',
      'Festival merchandise',
    ],
    popular: true,
    color: 'from-primary to-secondary',
  },
  {
    id: 'premium',
    name: 'Cosmic',
    price: 1299,
    originalPrice: 1599,
    icon: Crown,
    description: 'Ultimate VIP experience',
    features: [
      'All 3 days VIP access',
      'Priority event seating',
      'Backstage access',
      'All Pro Nights (Front Row)',
      'Exclusive afterparty',
      'Premium merchandise kit',
      'Dedicated support',
      'Photo opportunity with artists',
    ],
    color: 'from-amber-500 to-orange-500',
  },
];

const Passes = () => {
  const [selectedPass, setSelectedPass] = useState<string>('standard');

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial opacity-50" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <img src={logoMeraz} alt="Meraz" className="w-16 h-16 mx-auto mb-6" />
            <h1 className="font-orbitron text-4xl md:text-6xl font-bold mb-4">
              <span className="text-gradient">Get Your Pass</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Choose your journey through the cosmic celebration.
              Early bird discounts available for a limited time!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Passes Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {passes.map((pass, index) => (
              <motion.div
                key={pass.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedPass(pass.id)}
                className={`relative cursor-pointer transition-all duration-300 ${selectedPass === pass.id ? 'scale-105' : 'hover:scale-102'
                  }`}
              >
                {pass.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                    <Badge className="bg-gradient-cosmic border-none px-4 py-1 font-orbitron text-xs">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <div
                  className={`cosmic-card p-6 md:p-8 h-full ${selectedPass === pass.id
                    ? 'ring-2 ring-primary'
                    : ''
                    }`}
                >
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${pass.color} flex items-center justify-center mb-6`}>
                    <pass.icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="font-orbitron text-2xl font-bold mb-2">
                    {pass.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6">
                    {pass.description}
                  </p>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="font-orbitron text-4xl font-bold text-gradient">
                        ₹{pass.price}
                      </span>
                      {pass.originalPrice && (
                        <span className="text-muted-foreground line-through">
                          ₹{pass.originalPrice}
                        </span>
                      )}
                    </div>
                    <span className="text-muted-foreground text-sm">
                      per person
                    </span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {pass.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-sm"
                      >
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    className={`w-full font-orbitron tracking-wider ${selectedPass === pass.id
                      ? 'bg-gradient-cosmic hover:opacity-90'
                      : 'bg-muted hover:bg-muted/80'
                      }`}
                  >
                    {selectedPass === pass.id ? 'Selected' : 'Select Pass'}
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Checkout CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-12"
          >
            <Button
              size="lg"
              className="bg-gradient-cosmic hover:opacity-90 font-orbitron tracking-wider animate-glow-pulse px-12"
            >
              <img src={logoMeraz} alt="Meraz" className="w-5 h-5 mr-2" />
              Proceed to Checkout
            </Button>
            <p className="text-muted-foreground text-sm mt-4">
              Secure payment powered by Razorpay
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial opacity-30" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-orbitron text-3xl md:text-4xl font-bold text-center mb-12"
          >
            <span className="text-gradient">Frequently Asked Questions</span>
          </motion.h2>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: 'Can I upgrade my pass later?',
                a: 'Yes! You can upgrade your pass anytime before the festival by paying the difference.',
              },
              {
                q: 'Are passes transferable?',
                a: 'Passes are tied to your registration details and are not transferable. However, you can cancel and get a refund up to 7 days before the event.',
              },
              {
                q: 'What about accommodation?',
                a: 'We provide on-campus accommodation options at additional cost. Contact us for details.',
              },
              {
                q: 'Is there an age restriction?',
                a: 'The festival is open to all ages. However, some events may have age restrictions.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="cosmic-card p-6"
              >
                <h4 className="font-orbitron font-semibold mb-2">{faq.q}</h4>
                <p className="text-muted-foreground text-sm">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Passes;
