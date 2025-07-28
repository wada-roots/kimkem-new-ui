import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

interface HeroSlide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  description: string;
}

interface HeroCarouselProps {
  onExploreClick: () => void;
  onLearnMoreClick: () => void;
}

const HeroCarousel = ({ onExploreClick, onLearnMoreClick }: HeroCarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: HeroSlide[] = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/26924191/pexels-photo-26924191.jpeg',
      title: 'Majestic',
      subtitle: 'Wildlife Encounters',
      description: 'Get up close with elephants against the backdrop of Mount Kilimanjaro. Witness the incredible diversity of African wildlife in their natural habitat.'
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/30705114/pexels-photo-30705114.jpeg',
      title: 'Big Five',
      subtitle: 'Safari Experience',
      description: 'Encounter lions, leopards, elephants, buffalo, and rhinos in Kenya\'s most famous national parks. Professional guides ensure unforgettable wildlife viewing.'
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/17831035/pexels-photo-17831035.jpeg',
      title: 'Sunset',
      subtitle: 'Safari Moments',
      description: 'End each day with breathtaking African sunsets over the savanna. Enjoy sundowners as the wildlife gathers at watering holes.'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000); // Auto-advance every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="absolute inset-0 bg-black/50" />
            
            <div className="relative z-20 h-full flex items-center justify-center">
              <div className="text-center text-white max-w-4xl mx-auto px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                  <span className="text-safari-orange">{slide.title}</span>
                  <br />
                  <span className="text-white">{slide.subtitle}</span>
                  <br />
                  <span className="text-white">Await You</span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-safari-green hover:bg-safari-green/90 text-white px-8 py-4 text-lg font-semibold rounded-lg"
                    onClick={onExploreClick}
                  >
                    Explore Safaris
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-semibold rounded-lg"
                    onClick={onLearnMoreClick}
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide 
                ? 'bg-safari-orange scale-125' 
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-30">
        <ChevronDown className="h-8 w-8 text-white" />
      </div>
    </section>
  );
};

export default HeroCarousel;
