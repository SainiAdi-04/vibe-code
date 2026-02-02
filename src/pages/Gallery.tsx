import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ParallaxScrollSecond } from '@/components/ui/parallax-scroll';
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import gallery4 from '@/assets/gallery-4.jpg';
import TextBlockAnimation from '@/components/ui/text-block-animation';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

const galleryImages: GalleryImage[] = [
  { id: 1, src: gallery1, alt: 'Cultural Dance Performance', category: 'Dance' },
  { id: 2, src: gallery2, alt: 'Live Concert', category: 'Music' },
  { id: 3, src: gallery3, alt: 'Classical Dance', category: 'Dance' },
  { id: 4, src: gallery4, alt: 'Fashion Show', category: 'Fashion' },
  { id: 5, src: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800', alt: 'Band Performance', category: 'Music' },
  { id: 6, src: 'https://images.unsplash.com/photo-1503095396549-807759245b35?w=800', alt: 'Street Play', category: 'Drama' },
  { id: 7, src: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=800', alt: 'Art Exhibition', category: 'Art' },
  { id: 8, src: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800', alt: 'Gaming Arena', category: 'Gaming' },
  { id: 9, src: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800', alt: 'Crowd at Night', category: 'Events' },
  { id: 10, src: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800', alt: 'DJ Night', category: 'Music' },
  { id: 11, src: 'https://images.unsplash.com/photo-1547153760-18fc86324498?w=800', alt: 'Group Dance', category: 'Dance' },
  { id: 12, src: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800', alt: 'Festival Crowd', category: 'Events' },
];

const categories = ['All', 'Dance', 'Music', 'Drama', 'Art', 'Fashion', 'Gaming', 'Events'];

// Festival moments for parallax scroll
const festivalMoments = [
  'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80', // Concert crowd
  'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80', // Band performance
  'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&q=80', // DJ night
  'https://images.unsplash.com/photo-1547153760-18fc86324498?w=800&q=80', // Dance performance
  'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80', // Stage lights
  'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800&q=80', // Music festival
  'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&q=80', // Festival atmosphere
  'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800&q=80', // Cultural event
  'https://images.unsplash.com/photo-1503095396549-807759245b35?w=800&q=80', // Drama performance
  'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80', // Outdoor event
  'https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=800&q=80', // Art exhibition
  'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80', // Gaming zone
  'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800&q=80', // Main stage
  'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80', // Instruments
  'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&q=80', // Stage performance
  'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80', // Light show
  'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=800&q=80', // Crowd energy
  'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80', // Concert vibes
  'https://images.unsplash.com/photo-1501612780327-45045538702b?w=800&q=80', // Festival grounds
  'https://images.unsplash.com/photo-1509824227185-9c5a01ceba0d?w=800&q=80', // Dance floor
  'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80', // Evening vibes
  'https://images.unsplash.com/photo-1478147427282-58a87a120781?w=800&q=80', // Outdoor festival
  'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=800&q=80', // Live music
  'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&q=80', // Performance art
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages = selectedCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  const handlePrevImage = () => {
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    setSelectedImage(filteredImages[prevIndex]);
  };

  const handleNextImage = () => {
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1;
    setSelectedImage(filteredImages[nextIndex]);
  };

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
            <h1 className="font-orbitron text-4xl md:text-6xl font-bold mb-4">
              <span className="text-gradient">Gallery</span>
            </h1>
            <p className="text-gradient text-lg max-w-2xl mx-auto font-medium">
              Relive the magical moments from previous editions of Meraz
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <TextBlockAnimation blockColor="#d8b98f" duration={0.7} animateOnScroll={false}>
            <h2 className="font-orbitron text-2xl md:text-3xl font-bold mb-2">
              <span className="text-gradient">Festival Highlights</span>
            </h2>
            </TextBlockAnimation>
            <p className="text-gradient text-base font-medium">
              Scroll through our best moments
            </p>
          </motion.div>

          {/* Parallax Scroll Section */}
          <ParallaxScrollSecond images={festivalMoments} />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
