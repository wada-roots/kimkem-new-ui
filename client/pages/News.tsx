import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Calendar, User, Search, ArrowRight } from 'lucide-react';

const News = () => {
  const newsArticles = [
    {
      id: 1,
      title: 'Great Migration Update: Peak Season Arrives Early',
      excerpt: 'This year\'s wildebeest migration has started earlier than expected, with over 1.5 million animals already crossing into the Maasai Mara.',
      image: 'https://images.pexels.com/photos/8341088/pexels-photo-8341088.jpeg',
      category: 'Wildlife',
      date: '2024-07-15',
      author: 'David Mwangi',
      readTime: '3 min read'
    },
    {
      id: 2,
      title: 'New Conservation Partnership with Maasai Community',
      excerpt: 'KimKen Safaris has partnered with the Maasai Mara Conservancy to launch a new community-based conservation initiative.',
      image: 'https://images.pexels.com/photos/50611/elephants-africa-amboseli-animal-50611.jpeg',
      category: 'Conservation',
      date: '2024-07-10',
      author: 'Grace Akinyi',
      readTime: '5 min read'
    },
    {
      id: 3,
      title: 'Safari Photography Workshop Success',
      excerpt: 'Our recent wildlife photography workshop attracted 50 participants who learned advanced techniques for capturing Kenya\'s wildlife.',
      image: 'https://images.pexels.com/photos/29435755/pexels-photo-29435755.jpeg',
      category: 'Education',
      date: '2024-07-05',
      author: 'Sarah Wanjiku',
      readTime: '4 min read'
    },
    {
      id: 4,
      title: 'Elephant Population Increases in Amboseli',
      excerpt: 'Recent wildlife census shows a 15% increase in elephant population in Amboseli National Park, marking a conservation success.',
      image: 'https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg',
      category: 'Conservation',
      date: '2024-06-28',
      author: 'James Kimani',
      readTime: '6 min read'
    },
    {
      id: 5,
      title: 'New Luxury Tented Camp Opens in Samburu',
      excerpt: 'We\'re excited to announce our partnership with Samburu Luxury Camp, offering guests premium accommodation in the heart of the conservancy.',
      image: 'https://images.pexels.com/photos/28832038/pexels-photo-28832038.jpeg',
      category: 'Accommodation',
      date: '2024-06-20',
      author: 'Sarah Wanjiku',
      readTime: '3 min read'
    },
    {
      id: 6,
      title: 'Climate Change Impact on Kenya\'s Wildlife',
      excerpt: 'A comprehensive report on how climate change is affecting wildlife patterns and our adaptive conservation strategies.',
      image: 'https://images.pexels.com/photos/33034898/pexels-photo-33034898.jpeg',
      category: 'Research',
      date: '2024-06-15',
      author: 'David Mwangi',
      readTime: '8 min read'
    }
  ];

  const categories = ['All', 'Wildlife', 'Conservation', 'Education', 'Accommodation', 'Research'];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-64 bg-gradient-to-r from-safari-green to-safari-brown flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">News & Updates</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Stay informed about wildlife conservation, safari updates, and community initiatives
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search news articles..."
                className="pl-10"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === 'All' ? 'default' : 'outline'}
                  size="sm"
                  className={category === 'All' ? 'bg-safari-green hover:bg-safari-green/90' : ''}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-safari-brown mb-2">Featured Story</h2>
          </div>
          
          <Card className="overflow-hidden shadow-xl">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={newsArticles[0].image} 
                  alt={newsArticles[0].title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center gap-4 mb-4">
                  <Badge className="bg-safari-orange text-white">{newsArticles[0].category}</Badge>
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(newsArticles[0].date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <User className="h-4 w-4 mr-1" />
                    {newsArticles[0].author}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-safari-brown mb-4">{newsArticles[0].title}</h3>
                <p className="text-gray-600 mb-6">{newsArticles[0].excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{newsArticles[0].readTime}</span>
                  <Button className="bg-safari-green hover:bg-safari-green/90">
                    Read More
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-safari-brown mb-2">Latest Updates</h2>
            <p className="text-gray-600">Recent news from the world of safari and conservation</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.slice(1).map((article) => (
              <Card key={article.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-safari-orange text-white">
                    {article.category}
                  </Badge>
                </div>
                
                <CardHeader>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {new Date(article.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <User className="h-3 w-3 mr-1" />
                      {article.author}
                    </div>
                  </div>
                  <CardTitle className="text-lg text-safari-brown line-clamp-2">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4">
                    {article.excerpt}
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{article.readTime}</span>
                    <Button variant="outline" size="sm" className="text-safari-green border-safari-green hover:bg-safari-green hover:text-white">
                      Read More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-safari-green text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8 text-green-100">
            Subscribe to our newsletter for the latest safari news and conservation updates
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input 
              placeholder="Your email address" 
              className="bg-white text-gray-900 border-0"
            />
            <Button 
              size="lg" 
              className="bg-white text-safari-green hover:bg-gray-100 px-8 font-semibold whitespace-nowrap"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-safari-brown mb-4">Related Resources</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center border-safari-green/20 hover:border-safari-green transition-colors">
              <CardHeader>
                <CardTitle className="text-safari-brown">Safari Blog</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  In-depth articles about wildlife, conservation, and safari experiences
                </p>
                <Button variant="outline" className="text-safari-green border-safari-green">
                  Visit Blog
                </Button>
              </CardContent>
            </Card>
            
            <Card className="text-center border-safari-green/20 hover:border-safari-green transition-colors">
              <CardHeader>
                <CardTitle className="text-safari-brown">Photo Gallery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Stunning wildlife photography from our recent safaris
                </p>
                <Button variant="outline" className="text-safari-green border-safari-green">
                  View Gallery
                </Button>
              </CardContent>
            </Card>
            
            <Card className="text-center border-safari-green/20 hover:border-safari-green transition-colors">
              <CardHeader>
                <CardTitle className="text-safari-brown">Travel Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Essential guides for planning your perfect Kenya safari
                </p>
                <Button variant="outline" className="text-safari-green border-safari-green">
                  Read Tips
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
