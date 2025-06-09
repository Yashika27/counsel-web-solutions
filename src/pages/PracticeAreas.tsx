
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronRight, Scale, Shield, Users, Award, Home, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const PracticeAreas = () => {
  const practiceAreas = [
    {
      title: 'Corporate Law',
      slug: 'corporate-law',
      description: 'Comprehensive business legal services including mergers & acquisitions, corporate governance, securities law, and compliance matters.',
      icon: Shield,
      services: ['Mergers & Acquisitions', 'Corporate Governance', 'Securities Law', 'Contract Negotiations'],
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop'
    },
    {
      title: 'Litigation',
      slug: 'litigation',
      description: 'Expert representation in complex civil and commercial disputes, from trial preparation to appellate advocacy.',
      icon: Scale,
      services: ['Commercial Litigation', 'Trial Representation', 'Appellate Practice', 'Dispute Resolution'],
      image: 'https://images.unsplash.com/photo-1589391886645-d51941baf7fb?w=400&h=300&fit=crop'
    },
    {
      title: 'Intellectual Property',
      slug: 'intellectual-property',
      description: 'Protecting your innovations, trademarks, copyrights, and trade secrets in today\'s competitive marketplace.',
      icon: Award,
      services: ['Patent Protection', 'Trademark Registration', 'Copyright Law', 'Trade Secrets'],
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop'
    },
    {
      title: 'Employment Law',
      slug: 'employment-law',
      description: 'Comprehensive workplace legal services for both employers and employees, covering all aspects of employment relationships.',
      icon: Users,
      services: ['Employment Contracts', 'Workplace Disputes', 'Discrimination Claims', 'Labor Relations'],
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=300&fit=crop'
    },
    {
      title: 'Real Estate Law',
      slug: 'real-estate',
      description: 'Full-service real estate legal support for residential and commercial transactions, development, and property disputes.',
      icon: Home,
      services: ['Property Transactions', 'Commercial Real Estate', 'Zoning & Development', 'Property Disputes'],
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop'
    },
    {
      title: 'Family Law',
      slug: 'family-law',
      description: 'Compassionate legal guidance for sensitive family matters, handled with care, discretion, and expertise.',
      icon: Heart,
      services: ['Divorce & Separation', 'Child Custody', 'Adoption', 'Prenuptial Agreements'],
      image: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?w=400&h=300&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-charcoal to-gray-900 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-gold text-charcoal mb-6">Our Expertise</Badge>
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Practice Areas
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Comprehensive legal services across multiple practice areas, delivered by experienced attorneys who understand the complexities of modern law.
            </p>
          </div>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {practiceAreas.map((area, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={area.image}
                    alt={area.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300" />
                  <div className="absolute top-4 left-4">
                    <area.icon className="h-10 w-10 text-gold" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-playfair font-bold text-charcoal mb-3 group-hover:text-gold transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-warm-gray mb-4 leading-relaxed">
                    {area.description}
                  </p>
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-charcoal mb-2">Key Services:</h4>
                    <div className="flex flex-wrap gap-2">
                      {area.services.map((service, serviceIndex) => (
                        <Badge key={serviceIndex} variant="outline" className="text-xs">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Link to={`/practice-areas/${area.slug}`}>
                    <Button className="w-full bg-gold hover:bg-gold-dark text-charcoal font-semibold group">
                      Learn More
                      <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-light-gray py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-playfair font-bold text-charcoal mb-6">
            Need Legal Assistance?
          </h2>
          <p className="text-xl text-warm-gray mb-8 max-w-2xl mx-auto">
            Our experienced attorneys are ready to help you navigate your legal challenges. Schedule a consultation to discuss your specific needs.
          </p>
          <Button size="lg" className="bg-gold hover:bg-gold-dark text-charcoal font-semibold">
            Schedule Free Consultation
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default PracticeAreas;
