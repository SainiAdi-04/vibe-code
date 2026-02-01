import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Clock, Phone } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { AdvancedMap } from '@/components/ui/interactive-map';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

// IIT Bhilai coordinates (approximate)
const IIT_BHILAI_CENTER: [number, number] = [21.2497, 81.6296];

interface VenueLocation {
    id: number;
    name: string;
    description: string;
    position: [number, number];
    type: string;
    capacity: string;
    events: string[];
    image: string;
    contactPhone?: string;
    openingHours?: string;
}

const venueLocations: VenueLocation[] = [
    {
        id: 1,
        name: 'Main Stage Arena',
        description: 'The epicenter of Meraz - hosting major concerts, battle of bands, and headline performances.',
        position: [21.24745, 81.31890], // ~40m north
        type: 'Performance',
        capacity: '5000+',
        events: ['Battle of Bands', 'Celebrity Performances', 'DJ Night'],
        image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=400',
        contactPhone: '+91 9876543210',
        openingHours: 'March 15-17, 6:00 PM - 12:00 AM'
    },
    {
        id: 2,
        name: 'Central Auditorium',
        description: 'State-of-the-art indoor facility for dance competitions, drama performances, and cultural events.',
        position: [21.24710, 81.31925], // east side
        type: 'Indoor',
        capacity: '1500',
        events: ['Nritya Dance', 'Drama Competition', 'Fashion Show'],
        image: 'https://images.unsplash.com/photo-1559223607-a43c990734a4?w=400',
        contactPhone: '+91 9876543211',
        openingHours: 'March 15-17, 9:00 AM - 10:00 PM'
    },
    {
        id: 3,
        name: 'Art Gallery & Exhibition Hall',
        description: 'Showcase of creativity featuring paintings, sculptures, digital art, and photography exhibitions.',
        position: [21.24685, 81.31855], // south-west
        type: 'Exhibition',
        capacity: '800',
        events: ['Canvas Art Exhibition', 'Photography Contest', 'Sculpture Display'],
        image: 'https://images.unsplash.com/photo-1577083553530-16a2676e0c04?w=400',
        contactPhone: '+91 9876543212',
        openingHours: 'March 15-17, 10:00 AM - 8:00 PM'
    },
    {
        id: 4,
        name: 'Gaming Arena',
        description: 'High-tech gaming zone with latest consoles, VR setups, and PC gaming stations.',
        position: [21.24730, 81.31840], // north-west
        type: 'Gaming',
        capacity: '500',
        events: ['E-Sports Tournament', 'VR Gaming', 'Console Championships'],
        image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400',
        contactPhone: '+91 9876543213',
        openingHours: 'March 15-17, 10:00 AM - 11:00 PM'
    },
    {
        id: 5,
        name: 'Food Court Plaza',
        description: 'Diverse culinary delights from across India and international cuisines.',
        position: [21.24670, 81.31910], // south-east
        type: 'Food',
        capacity: '2000',
        events: ['Food Festival', 'Live Cooking Shows', 'Street Food'],
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400',
        contactPhone: '+91 9876543214',
        openingHours: 'March 15-17, 8:00 AM - 11:00 PM'
    },
    {
        id: 6,
        name: 'Central Lawn',
        description: 'Open-air venue for street plays, flash mobs, and outdoor activities.',
        position: [21.24705, 81.31885], // near center
        type: 'Outdoor',
        capacity: '3000',
        events: ['Nukkad Natak', 'Flash Mob', 'Outdoor Games'],
        image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400',
        contactPhone: '+91 9876543215',
        openingHours: 'March 15-17, All Day'
    }
];


const Venue = () => {
    const [selectedVenue, setSelectedVenue] = useState<VenueLocation | null>(null);

    const markers = venueLocations.map((venue) => ({
        id: venue.id,
        position: venue.position,
        color: venue.type === 'Performance' ? 'red' :
            venue.type === 'Indoor' ? 'blue' :
                venue.type === 'Exhibition' ? 'violet' :
                    venue.type === 'Gaming' ? 'orange' :
                        venue.type === 'Food' ? 'green' : 'gold',
        size: venue.type === 'Performance' ? 'large' as const : 'medium' as const,
        popup: {
            title: venue.name,
            content: `${venue.type} Venue | Capacity: ${venue.capacity}`,
            image: venue.image
        }
    }));

    // Create a circle around the festival grounds
    const festivalGroundCircle = {
        id: 1,
        center: IIT_BHILAI_CENTER as [number, number],
        radius: 300,
        style: { color: '#8b5cf6', fillOpacity: 0.1, weight: 2 }
    };

    const handleMarkerClick = (marker: any) => {
        const venue = venueLocations.find(v => v.id === marker.id);
        if (venue) {
            setSelectedVenue(venue);
            // Scroll to venue details
            document.getElementById('venue-details')?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
            <Navbar />

            <main className="container mx-auto px-4 pt-24 pb-16">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h1 className="font-orbitron text-4xl md:text-6xl font-bold mb-4">
                        <span className="text-gradient">Festival Venues</span>
                    </h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Explore the various venues across IIT Bhilai campus hosting Meraz 2025 events
                    </p>
                </motion.div>

                {/* Map Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-12"
                >
                    <Card className="overflow-hidden border-2 border-primary/20">
                        <CardContent className="p-0">
                            <AdvancedMap
                                center={IIT_BHILAI_CENTER}
                                zoom={16}
                                markers={markers}
                                circles={[festivalGroundCircle]}
                                onMarkerClick={handleMarkerClick}
                                enableClustering={false}
                                enableSearch={true}
                                enableControls={true}
                                style={{ height: '600px', width: '100%' }}
                                className="rounded-lg"
                            />
                        </CardContent>
                    </Card>
                    <div className="mt-4 flex flex-wrap gap-2 justify-center">
                        <Badge variant="outline" className="flex items-center gap-1">
                            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                            Performance
                        </Badge>
                        <Badge variant="outline" className="flex items-center gap-1">
                            <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                            Indoor
                        </Badge>
                        <Badge variant="outline" className="flex items-center gap-1">
                            <span className="w-3 h-3 bg-violet-500 rounded-full"></span>
                            Exhibition
                        </Badge>
                        <Badge variant="outline" className="flex items-center gap-1">
                            <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                            Gaming
                        </Badge>
                        <Badge variant="outline" className="flex items-center gap-1">
                            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                            Food
                        </Badge>
                        <Badge variant="outline" className="flex items-center gap-1">
                            <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                            Outdoor
                        </Badge>
                    </div>
                </motion.div>

                {/* Selected Venue Details */}
                {selectedVenue && (
                    <motion.div
                        id="venue-details"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="mb-12"
                    >
                        <Card className="border-2 border-primary/30">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-2xl">
                                    <MapPin className="text-primary" />
                                    {selectedVenue.name}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <img
                                            src={selectedVenue.image}
                                            alt={selectedVenue.name}
                                            className="w-full h-64 object-cover rounded-lg mb-4"
                                        />
                                        <p className="text-muted-foreground mb-4">{selectedVenue.description}</p>
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2">
                                                <Badge variant="secondary">{selectedVenue.type}</Badge>
                                                <Badge variant="outline">Capacity: {selectedVenue.capacity}</Badge>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-6">
                                        <div>
                                            <h3 className="font-semibold mb-2 flex items-center gap-2">
                                                <Clock className="w-4 h-4" />
                                                Opening Hours
                                            </h3>
                                            <p className="text-muted-foreground">{selectedVenue.openingHours}</p>
                                        </div>
                                        {selectedVenue.contactPhone && (
                                            <div>
                                                <h3 className="font-semibold mb-2 flex items-center gap-2">
                                                    <Phone className="w-4 h-4" />
                                                    Contact
                                                </h3>
                                                <p className="text-muted-foreground">{selectedVenue.contactPhone}</p>
                                            </div>
                                        )}
                                        <div>
                                            <h3 className="font-semibold mb-2">Events at this Venue</h3>
                                            <div className="flex flex-wrap gap-2">
                                                {selectedVenue.events.map((event, idx) => (
                                                    <Badge key={idx} variant="default">{event}</Badge>
                                                ))}
                                            </div>
                                        </div>
                                        <Button className="w-full" size="lg">
                                            <Navigation className="w-4 h-4 mr-2" />
                                            Get Directions
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                )}

                {/* All Venues Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <h2 className="font-orbitron text-3xl font-bold mb-6 text-center">
                        All Venues
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {venueLocations.map((venue, index) => (
                            <motion.div
                                key={venue.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                                <Card
                                    className="h-full hover:border-primary/50 transition-all cursor-pointer group"
                                    onClick={() => setSelectedVenue(venue)}
                                >
                                    <CardContent className="p-0">
                                        <div className="relative overflow-hidden">
                                            <img
                                                src={venue.image}
                                                alt={venue.name}
                                                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                                            />
                                            <Badge
                                                className="absolute top-4 right-4"
                                                variant="secondary"
                                            >
                                                {venue.type}
                                            </Badge>
                                        </div>
                                        <div className="p-4">
                                            <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                                                {venue.name}
                                            </h3>
                                            <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                                                {venue.description}
                                            </p>
                                            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                                                <MapPin className="w-4 h-4" />
                                                <span>Capacity: {venue.capacity}</span>
                                            </div>
                                            <div className="flex flex-wrap gap-1">
                                                {venue.events.slice(0, 2).map((event, idx) => (
                                                    <Badge key={idx} variant="outline" className="text-xs">
                                                        {event}
                                                    </Badge>
                                                ))}
                                                {venue.events.length > 2 && (
                                                    <Badge variant="outline" className="text-xs">
                                                        +{venue.events.length - 2} more
                                                    </Badge>
                                                )}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Getting Here Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-16"
                >
                    <Card className="border-2 border-primary/20">
                        <CardHeader>
                            <CardTitle className="text-2xl">Getting to IIT Bhilai</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid md:grid-cols-3 gap-6">
                                <div>
                                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                                        <Navigation className="w-4 h-4 text-primary" />
                                        By Air
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        Nearest airport: Swami Vivekananda Airport, Raipur (30 km)
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                                        <Navigation className="w-4 h-4 text-primary" />
                                        By Train
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        Nearest railway station: Bhilai Power House (15 km)
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                                        <Navigation className="w-4 h-4 text-primary" />
                                        By Road
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        Well connected by NH 130 and NH 353
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </main>

            <Footer />
        </div>
    );
};

export default Venue;
