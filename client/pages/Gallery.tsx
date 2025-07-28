import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Camera, MapPin, Calendar, X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/8341088/pexels-photo-8341088.jpeg',
      title: 'Great Migration Crossing',
      category: 'Wildlife',
      location: 'Masai Mara',
      date: '2024-07-15',
      description: 'Thousands of wildebeest and zebras crossing the Mara River during the Great Migration.'
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/50611/elephants-africa-amboseli-animal-50611.jpeg',
      title: 'Elephant Family',
      category: 'Wildlife',
      location: 'Amboseli',
      date: '2024-06-20',
      description: 'A majestic elephant family with Mount Kilimanjaro in the background.'
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/29435755/pexels-photo-29435755.jpeg',
      title: 'Samburu Giraffes',
      category: 'Wildlife',
      location: 'Samburu',
      date: '2024-06-10',
      description: 'Two graceful giraffes silhouetted against the Samburu sunset.'
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/30705907/pexels-photo-30705907.jpeg',
      title: 'Lion Pride',
      category: 'Wildlife',
      location: 'Masai Mara',
      date: '2024-05-25',
      description: 'A pride of lions feasting in the golden light of the African savanna.'
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/1457812/pexels-photo-1457812.jpeg',
      title: 'Diani Beach Paradise',
      category: 'Beaches',
      location: 'Diani',
      date: '2024-05-15',
      description: 'Crystal clear waters and pristine white sand beaches of Diani.'
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/10303313/pexels-photo-10303313.jpeg',
      title: 'Watamu Coral Reef',
      category: 'Marine Life',
      location: 'Watamu',
      date: '2024-04-30',
      description: 'Vibrant coral reefs and marine life in Watamu Marine Park.'
    },
    {
      id: 7,
      src: 'https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg',
      title: 'Tsavo Red Elephants',
      category: 'Wildlife',
      location: 'Tsavo',
      date: '2024-04-20',
      description: 'The famous red elephants of Tsavo covered in the park\'s distinctive red dust.'
    },
    {
      id: 8,
      src: 'https://images.pexels.com/photos/33034898/pexels-photo-33034898.jpeg',
      title: 'Lake Nakuru Flamingos',
      category: 'Birds',
      location: 'Lake Nakuru',
      date: '2024-04-10',
      description: 'Thousands of flamingos creating a pink carpet on Lake Nakuru.'
    },
    {
      id: 9,
      src: 'https://images.pexels.com/photos/28832038/pexels-photo-28832038.jpeg',
      title: 'Aberdare Ostriches',
      category: 'Wildlife',
      location: 'Aberdare',
      date: '2024-03-25',
      description: 'A family of ostriches roaming the Aberdare highlands.'
    },
    {
      id: 10,
      src: 'https://images.pexels.com/photos/30705107/pexels-photo-30705107.jpeg',
      title: 'Meru Lion Cub',
      category: 'Wildlife',
      location: 'Meru',
      date: '2024-03-15',
      description: 'An adorable lion cub playing in the grass at Meru National Park.'
    },
    {
      id: 11,
      src: 'https://images.pexels.com/photos/1370746/pexels-photo-1370746.jpeg',
      title: 'Safari Adventure',
      category: 'Safari Life',
      location: 'Masai Mara',
      date: '2024-03-10',
      description: 'Our safari vehicle navigating the rugged terrain of the Masai Mara.'
    },
    {
      id: 12,
      src: 'https://images.pexels.com/photos/17831035/pexels-photo-17831035.jpeg',
      title: 'Sunset Picnic',
      category: 'Safari Life',
      location: 'Samburu',
      date: '2024-02-28',
      description: 'Guests enjoying a magical sunset picnic in the African savanna.'
    }
  ];

  const categories = ['all', 'Wildlife', 'Beaches', 'Marine Life', 'Birds', 'Safari Life'];

  const filteredImages = galleryImages.filter(image => {
    const matchesSearch = image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         image.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         image.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = filterCategory === 'all' || image.category === filterCategory;
    
    return matchesSearch && matchesCategory;
  });

  const openLightbox = (image: any, index: number) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % filteredImages.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentImageIndex - 1 + filteredImages.length) % filteredImages.length;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(filteredImages[prevIndex]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-64 bg-gradient-to-r from-safari-green to-safari-brown flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Safari Gallery</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Capture the magic of Kenya's wildlife through our lens
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search photos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-4">
              <Select value={filterCategory} onValueChange={setFilterCategory}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-safari-brown mb-2">
              {filteredImages.length} Photo{filteredImages.length !== 1 ? 's' : ''} Found
            </h2>
            <p className="text-gray-600">Experience Kenya's wildlife and landscapes</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <Card 
                key={image.id} 
                className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
                onClick={() => openLightbox(image, index)}
              >
                <div className="relative h-64">
                  <img 
                    src={image.src} 
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                  <Badge className="absolute top-3 left-3 bg-safari-orange text-white text-xs">
                    {image.category}
                  </Badge>
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="bg-black/70 backdrop-blur-sm rounded-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <h3 className="text-white font-medium text-sm mb-1">{image.title}</h3>
                      <div className="flex items-center text-white/80 text-xs">
                        <MapPin className="h-3 w-3 mr-1" />
                        {image.location}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <Camera className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-xl text-gray-600 mb-4">No photos found matching your criteria</p>
              <Button 
                onClick={() => {
                  setSearchTerm('');
                  setFilterCategory('all');
                }}
                variant="outline"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Photography Info */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-safari-brown mb-6">Photography Safari Tips</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <Camera className="h-12 w-12 text-safari-orange mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-safari-brown mb-2">Best Equipment</h3>
              <p className="text-gray-600 text-sm">
                Telephoto lenses, fast autofocus, and extra batteries for the perfect wildlife shot.
              </p>
            </div>
            <div>
              <MapPin className="h-12 w-12 text-safari-orange mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-safari-brown mb-2">Prime Locations</h3>
              <p className="text-gray-600 text-sm">
                Our guides know the best spots and timing for incredible wildlife photography.
              </p>
            </div>
            <div>
              <Calendar className="h-12 w-12 text-safari-orange mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-safari-brown mb-2">Golden Hours</h3>
              <p className="text-gray-600 text-sm">
                Early morning and late afternoon provide the most dramatic lighting for photos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors z-10"
            >
              <X className="h-6 w-6" />
            </button>
            
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors z-10"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors z-10"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            
            <img 
              src={selectedImage.src} 
              alt={selectedImage.title}
              className="max-w-full max-h-[80vh] object-contain mx-auto"
            />
            
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
              <p className="text-gray-200 mb-3">{selectedImage.description}</p>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {selectedImage.location}
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {new Date(selectedImage.date).toLocaleDateString()}
                </div>
                <Badge className="bg-safari-orange text-white">
                  {selectedImage.category}
                </Badge>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
