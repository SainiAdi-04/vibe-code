import { motion } from 'framer-motion';
import { Calendar, MapPin, User, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export interface Event {
  id: string;
  name: string;
  description: string;
  date: string;
  time: string;
  venue: string;
  category: string;
  contactPerson: string;
  contactEmail: string;
  registrationLink: string;
  image: string;
  featured?: boolean;
}

interface EventCardProps {
  event: Event;
  index: number;
}

export const EventCard = ({ event, index }: EventCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group cosmic-card overflow-hidden"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={event.image}
          alt={event.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        
        {/* Category Badge */}
        <Badge
          className="absolute top-4 left-4 bg-gradient-cosmic border-none font-orbitron text-xs"
        >
          {event.category}
        </Badge>
        
        {event.featured && (
          <Badge
            className="absolute top-4 right-4 bg-secondary/80 border-none text-xs"
          >
            Featured
          </Badge>
        )}
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="font-orbitron text-xl font-bold text-foreground group-hover:text-gradient transition-all">
          {event.name}
        </h3>
        
        <p className="text-muted-foreground text-sm line-clamp-2">
          {event.description}
        </p>

        {/* Details */}
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="w-4 h-4 text-primary" />
            <span>{event.date} • {event.time}</span>
          </div>
          
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4 text-primary" />
            <span>{event.venue}</span>
          </div>
          
          <div className="flex items-center gap-2 text-muted-foreground">
            <User className="w-4 h-4 text-primary" />
            <span>{event.contactPerson}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3 pt-2">
          <a
            href={event.registrationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
          >
            <Button className="w-full bg-gradient-cosmic hover:opacity-90 font-orbitron text-xs tracking-wider">
              Register
              <ExternalLink className="w-3 h-3 ml-2" />
            </Button>
          </a>
        </div>
      </div>
    </motion.div>
  );
};
