import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown, Calendar, Users, Star } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { LogoCarousel } from "@/components/ui/logo-carousel";
import logoMeraz from '@/assets/logo_meraz.svg';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CountdownTimer } from '@/components/CountdownTimer';
import { HorizonHeroSection } from '@/components/ui/horizon-hero-section';
import TextBlockAnimation from '@/components/ui/text-block-animation';
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import gallery4 from '@/assets/gallery-4.jpg';

const Index = () => {
  // Festival date - March 15, 2026
  const festivalDate = new Date('2026-03-15T00:00:00');

  const features = [
    {
      icon: Calendar,
      title: '50+ Events',
      description: 'From music to drama, dance to debates - experience it all.',
    },
    {
      icon: Users,
      title: '10,000+ Attendees',
      description: 'Join thousands of students from across the nation.',
    },
    {
      icon: Star,
      title: 'Celebrity Performances',
      description: 'Star-studded nights with top artists and bands.',
    },
  ];

  const galleryImages = [
    { src: gallery1, alt: 'Cultural Performance' },
    { src: gallery2, alt: 'Live Concert' },
    { src: gallery3, alt: 'Classical Dance' },
    { src: gallery4, alt: 'Fashion Show' },
  ];

  const demoLogos = [
    { id: 1, name: "Swiggy", src: "https://cdn.simpleicons.org/swiggy/white" },
    { id: 2, name: "Adidas", src: "https://cdn.simpleicons.org/adidas/white" },
    { id: 3, name: "Github", src: "https://cdn.simpleicons.org/nike/white" },
    { id: 4, name: "Dominos", src: "https://cdn.simpleicons.org/onlyfans/white" },
    { id: 5, name: "Zomato", src: "https://cdn.simpleicons.org/zomato/white" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Three.js Hero Section */}
      <HorizonHeroSection />

      {/* Content after hero scroll */}
      <div className="relative z-10">
        {/* Countdown Section */}
        <section className="py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-radial opacity-50" />

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <TextBlockAnimation blockColor="#b89b76" duration={0.7}>
                <h2 className="font-orbitron text-3xl md:text-5xl font-bold mb-4">
                  <span className="text-gradient">The Countdown Begins</span>
                </h2>
              </TextBlockAnimation>
              <p className="text-muted-foreground text-lg">
                March 15-17, 2025 • IIT Bhilai
              </p>
            </motion.div>

            <CountdownTimer targetDate={festivalDate} />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex justify-center mt-12"
            >
              <Link to="/passes">
                <Button
                  size="lg"
                  className="bg-gradient-cosmic hover:opacity-90 font-orbitron tracking-wider animate-glow-pulse"
                >
                  <img src={logoMeraz} alt="Meraz" className="w-5 h-5 mr-2" />
                  Get Your Pass Now
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="cosmic-card p-8 text-center group"
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-cosmic flex items-center justify-center group-hover:animate-float">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-orbitron text-xl font-bold mb-3 group-hover:text-gradient transition-all">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Preview Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-radial opacity-30" />

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <TextBlockAnimation blockColor="#c9ad82" duration={0.7}>
                <h2 className="font-orbitron text-3xl md:text-5xl font-bold mb-4">
                  <span className="text-gradient">Glimpses of Glory</span>
                </h2>
              </TextBlockAnimation>
              <p className="text-muted-foreground text-lg">
                Moments that define the spirit of Meraz
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative overflow-hidden rounded-2xl group ${index === 0 ? 'col-span-2 row-span-2' : ''
                    }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover aspect-square transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="font-orbitron text-sm font-semibold">{image.alt}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex justify-center mt-12"
            >
              <Link to="/gallery">
                <Button
                  variant="outline"
                  size="lg"
                  className="font-orbitron tracking-wider border-primary/50 hover:bg-primary/10"
                >
                  View Full Gallery
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-cosmic opacity-10" />

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="cosmic-card p-8 md:p-16 text-center max-w-4xl mx-auto"
            >
              <img src={logoMeraz} alt="Meraz" className="w-16 h-16 mx-auto mb-6" />
              <TextBlockAnimation blockColor="#d8b98f" duration={0.8}>
                <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4">
                  Ready to Experience the Magic?
                </h2>
              </TextBlockAnimation>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Don't miss out on the biggest cultural extravaganza of the year.
                Secure your spot and be part of something extraordinary.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/events">
                  <Button
                    size="lg"
                    variant="outline"
                    className="font-orbitron tracking-wider border-primary/50 hover:bg-primary/10"
                  >
                    Explore Events
                  </Button>
                </Link>
                <Link to="/passes">
                  <Button
                    size="lg"
                    className="bg-gradient-cosmic hover:opacity-90 font-orbitron tracking-wider"
                  >
                    Get Passes Now
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Sponsors Section */}
        <section className="py-12 relative z-10">
          <div className="container mx-auto px-4">
            <Card className="border-0 bg-transparent shadow-none">
              <CardContent className="pt-6">
                <div className="text-center space-y-4 mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-none font-orbitron text-gradient">
                    Proudly Sponsored By
                  </h2>
                </div>
                <LogoCarousel logos={demoLogos} />
              </CardContent>
            </Card>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Index;
