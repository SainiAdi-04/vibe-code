import { motion } from 'framer-motion';
import { Target, Users, Award, Heart } from 'lucide-react';
import logoMeraz from '@/assets/logo_meraz.svg';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const About = () => {
  const timeline = [
    { year: '2018', event: 'Meraz was born - The first edition with 500 participants' },
    { year: '2019', event: 'Expanded to 30+ events with 2000+ participants' },
    { year: '2020', event: 'Virtual Meraz - Keeping the spirit alive online' },
    { year: '2021', event: 'Hybrid format with 5000+ participants' },
    { year: '2022', event: 'National reach with celebrity performances' },
    { year: '2023', event: '50+ events, 8000+ participants, Pro Nights' },
    { year: '2024', event: 'Biggest edition yet - 10,000+ footfall' },
    { year: '2025', event: 'The Cosmic Edition - Where Stars Align' },
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for the highest standards in every event and performance.',
    },
    {
      icon: Users,
      title: 'Inclusivity',
      description: 'A platform for everyone to express, compete, and shine.',
    },
    {
      icon: Award,
      title: 'Innovation',
      description: 'Pushing boundaries with unique events and experiences.',
    },
    {
      icon: Heart,
      title: 'Community',
      description: 'Building lasting connections through shared passions.',
    },
  ];

  const team = [
    { name: 'Dr. Rajiv Kumar', role: 'Faculty Advisor', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200' },
    { name: 'Ananya Sharma', role: 'Festival Secretary', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200' },
    { name: 'Rohan Mehta', role: 'Technical Head', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200' },
    { name: 'Priya Singh', role: 'Cultural Head', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial opacity-50" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <img src={logoMeraz} alt="Meraz" className="w-16 h-16 mx-auto mb-6" />
            <h1 className="font-orbitron text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">About Meraz</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              Meraz is the annual cultural festival of IIT Bhilai, a three-day extravaganza
              that brings together talent from across the nation. From soul-stirring music
              to captivating performances, from intense competitions to pro nights -
              Meraz is where dreams meet the stage.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="cosmic-card p-8"
            >
              <h2 className="font-orbitron text-2xl font-bold mb-4 text-gradient">
                Our Vision
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                To create the most immersive and inclusive cultural experience in Central India,
                where every participant feels inspired to push their creative boundaries and
                forge connections that last a lifetime.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="cosmic-card p-8"
            >
              <h2 className="font-orbitron text-2xl font-bold mb-4 text-gradient">
                Our Mission
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                To provide a platform that celebrates diversity, nurtures talent, and creates
                unforgettable moments through art, music, dance, and cultural expression,
                while fostering the spirit of healthy competition.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial opacity-30" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-orbitron text-3xl md:text-4xl font-bold text-center mb-12"
          >
            <span className="text-gradient">Our Core Values</span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="cosmic-card p-6 text-center group"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-cosmic flex items-center justify-center group-hover:animate-float">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-orbitron text-lg font-bold mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-orbitron text-3xl md:text-4xl font-bold text-center mb-12"
          >
            <span className="text-gradient">Our Journey</span>
          </motion.h2>

          <div className="relative max-w-3xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-cosmic" />

            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex items-center gap-4 mb-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 -translate-x-1/2 rounded-full bg-primary glow-box" />

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:pl-8 md:ml-auto'
                  }`}>
                  <span className="font-orbitron text-lg font-bold text-primary">
                    {item.year}
                  </span>
                  <p className="text-muted-foreground text-sm mt-1">
                    {item.event}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial opacity-30" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-orbitron text-3xl md:text-4xl font-bold text-center mb-12"
          >
            <span className="text-gradient">Meet the Team</span>
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="relative w-24 h-24 md:w-32 md:h-32 mx-auto mb-4 rounded-full overflow-hidden glow-box">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="font-orbitron text-sm md:text-base font-semibold">
                  {member.name}
                </h3>
                <p className="text-muted-foreground text-xs md:text-sm">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
