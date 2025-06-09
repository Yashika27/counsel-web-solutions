
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronRight, Calendar, User, Clock } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: 'Understanding the New Corporate Transparency Act Requirements',
      excerpt: 'What businesses need to know about the beneficial ownership reporting requirements that took effect in 2024.',
      author: 'Michael Sterling',
      date: '2024-03-15',
      readTime: '5 min read',
      category: 'Corporate Law',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
      featured: true
    },
    {
      title: 'Patent Protection Strategies for Startups',
      excerpt: 'Essential IP protection strategies that early-stage companies should consider to safeguard their innovations.',
      author: 'David Chen',
      date: '2024-03-10',
      readTime: '7 min read',
      category: 'Intellectual Property',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop'
    },
    {
      title: 'Remote Work and Employment Law Compliance',
      excerpt: 'How the shift to remote work has changed employment law considerations for employers and employees.',
      author: 'Sarah Johnson',
      date: '2024-03-05',
      readTime: '6 min read',
      category: 'Employment Law',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop'
    },
    {
      title: 'Real Estate Market Trends and Legal Implications',
      excerpt: 'Current market conditions and their impact on real estate transactions and property law.',
      author: 'Jennifer Rodriguez',
      date: '2024-02-28',
      readTime: '8 min read',
      category: 'Real Estate',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop'
    },
    {
      title: 'Estate Planning in the Digital Age',
      excerpt: 'How digital assets and cryptocurrency are changing estate planning considerations.',
      author: 'Robert Williams',
      date: '2024-02-20',
      readTime: '5 min read',
      category: 'Estate Planning',
      image: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?w=600&h=400&fit=crop'
    },
    {
      title: 'Securities Regulation Updates for 2024',
      excerpt: 'Key regulatory changes and compliance requirements for public and private companies.',
      author: 'Lisa Park',
      date: '2024-02-15',
      readTime: '9 min read',
      category: 'Securities Law',
      image: 'https://images.unsplash.com/photo-1589391886645-d51941baf7fb?w=600&h=400&fit=crop'
    }
  ];

  const categories = [
    'All Posts',
    'Corporate Law',
    'Intellectual Property',
    'Employment Law',
    'Real Estate',
    'Estate Planning',
    'Securities Law'
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-charcoal to-gray-900 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-gold text-charcoal mb-6">Legal Insights</Badge>
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Legal Blog & Insights
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Stay informed with the latest legal developments, industry insights, and practical guidance from our experienced attorneys.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="mb-8">
                <Badge className="bg-gold text-charcoal">Featured Article</Badge>
              </div>
              <Card className="overflow-hidden shadow-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-64 lg:h-auto">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-gold text-charcoal">{featuredPost.category}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                    <h2 className="text-3xl font-playfair font-bold text-charcoal mb-4">
                      {featuredPost.title}
                    </h2>
                    <p className="text-warm-gray text-lg mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center text-sm text-warm-gray mb-6">
                      <User className="h-4 w-4 mr-2" />
                      <span className="mr-4">{featuredPost.author}</span>
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="mr-4">{new Date(featuredPost.date).toLocaleDateString()}</span>
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                    <Button className="bg-gold hover:bg-gold-dark text-charcoal font-semibold self-start">
                      Read Full Article
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </div>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Categories Filter */}
      <section className="bg-light-gray py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  className={index === 0 ? "bg-gold hover:bg-gold-dark text-charcoal" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-gold text-charcoal text-xs">{post.category}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-playfair font-bold text-charcoal mb-3 group-hover:text-gold transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-warm-gray mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-xs text-warm-gray mb-4">
                      <User className="h-3 w-3 mr-1" />
                      <span className="mr-3">{post.author}</span>
                      <Calendar className="h-3 w-3 mr-1" />
                      <span className="mr-3">{new Date(post.date).toLocaleDateString()}</span>
                      <Clock className="h-3 w-3 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                    <Button variant="outline" className="w-full group-hover:bg-gold group-hover:border-gold group-hover:text-charcoal transition-colors">
                      Read More
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-charcoal text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-playfair font-bold mb-6">
              Stay Updated with Legal Insights
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our newsletter for the latest legal updates, industry insights, and practical guidance delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-charcoal"
              />
              <Button className="bg-gold hover:bg-gold-dark text-charcoal font-semibold">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
