import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronRight, Scale, Users, Award, Shield, CheckCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const practiceAreas = [
    {
      title: 'Corporate Law',
      description: 'Comprehensive business legal services for companies of all sizes.',
      icon: Shield,
      href: '/practice-areas/corporate-law'
    },
    {
      title: 'Litigation',
      description: 'Expert representation in complex civil and commercial disputes.',
      icon: Scale,
      href: '/practice-areas/litigation'
    },
    {
      title: 'Intellectual Property',
      description: 'Protecting your innovations, trademarks, and creative works.',
      icon: Award,
      href: '/practice-areas/intellectual-property'
    },
    {
      title: 'Employment Law',
      description: 'Workplace legal issues for both employers and employees.',
      icon: Users,
      href: '/practice-areas/employment-law'
    },
    {
      title: 'Real Estate',
      description: 'Comprehensive real estate transactions and property law.',
      icon: CheckCircle,
      href: '/practice-areas/real-estate'
    },
    {
      title: 'Family Law',
      description: 'Sensitive family matters handled with care and expertise.',
      icon: Star,
      href: '/practice-areas/family-law'
    }
  ];

  const testimonials = [
    {
      quote: "Sterling & Associates provided exceptional representation in our merger. Their attention to detail and strategic approach made all the difference.",
      author: "Sarah Johnson",
      title: "CEO, TechCorp Inc.",
      rating: 5
    },
    {
      quote: "Professional, knowledgeable, and truly caring. They guided us through a difficult family situation with compassion and expertise.",
      author: "Michael Chen",
      title: "Client",
      rating: 5
    },
    {
      quote: "Outstanding litigation support. They secured a favorable outcome in our complex IP dispute. Highly recommended.",
      author: "Jennifer Rodriguez",
      title: "General Counsel, Innovation Labs",
      rating: 5
    }
  ];

  const stats = [
    { number: '25+', label: 'Years of Experience' },
    { number: '500+', label: 'Cases Won' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Client Support' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-charcoal to-gray-900 text-white py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="bg-gold text-charcoal mb-6 text-sm font-semibold">
                25+ Years of Legal Excellence
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6 leading-tight">
                Trust. Experience. <span className="text-gold">Results.</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Premier legal representation for individuals and businesses. Our experienced attorneys deliver strategic solutions and exceptional outcomes for complex legal challenges.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-gold hover:bg-gold-dark text-charcoal font-semibold">
                    Schedule Free Consultation
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=700&fit=crop&crop=face"
                alt="Professional attorney"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-gold text-charcoal p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">Free</div>
                <div className="text-sm">Initial Consultation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-light-gray py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-playfair font-bold text-charcoal mb-2">
                  {stat.number}
                </div>
                <div className="text-warm-gray font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Areas Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charcoal mb-6">
              Our Practice Areas
            </h2>
            <p className="text-xl text-warm-gray max-w-3xl mx-auto">
              Comprehensive legal services across multiple practice areas, delivered by experienced attorneys who understand your unique needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((area, index) => (
              <Link key={index} to={area.href} className="group">
                <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-2 hover:border-gold">
                  <CardContent className="p-6">
                    <area.icon className="h-12 w-12 text-gold mb-4" />
                    <h3 className="text-xl font-playfair font-semibold text-charcoal mb-3 group-hover:text-gold transition-colors">
                      {area.title}
                    </h3>
                    <p className="text-warm-gray mb-4">{area.description}</p>
                    <div className="flex items-center text-gold font-medium group-hover:underline">
                      Learn More <ChevronRight className="ml-1 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-charcoal text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
                Why Choose Sterling & Associates?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-gold p-2 rounded-full mr-4 flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-charcoal" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gold mb-2">Proven Track Record</h3>
                    <p className="text-gray-300">Over 25 years of successful case outcomes and satisfied clients across multiple practice areas.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-gold p-2 rounded-full mr-4 flex-shrink-0">
                    <Users className="h-6 w-6 text-charcoal" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gold mb-2">Experienced Team</h3>
                    <p className="text-gray-300">Our attorneys bring decades of combined experience and specialized knowledge to every case.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-gold p-2 rounded-full mr-4 flex-shrink-0">
                    <Scale className="h-6 w-6 text-charcoal" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gold mb-2">Personalized Approach</h3>
                    <p className="text-gray-300">We understand that every case is unique and tailor our strategies to meet your specific needs.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=600&fit=crop"
                alt="Legal team meeting"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-light-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charcoal mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-warm-gray max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with Sterling & Associates.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white shadow-lg">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-gold fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-warm-gray mb-4 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-charcoal">{testimonial.author}</div>
                    <div className="text-sm text-warm-gray">{testimonial.title}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gold py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charcoal mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-charcoal mb-8 max-w-2xl mx-auto">
            Schedule your free consultation today and let our experienced legal team help you navigate your legal challenges.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-charcoal hover:bg-gray-800 text-white font-semibold">
              Schedule Your Free Consultation
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
