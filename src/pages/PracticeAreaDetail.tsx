
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronRight, ArrowLeft, CheckCircle, Users, Award, Clock } from 'lucide-react';

const PracticeAreaDetail = () => {
  const { slug } = useParams();

  const practiceAreaData = {
    'corporate-law': {
      title: 'Corporate Law',
      description: 'Our corporate law practice provides comprehensive legal services to businesses of all sizes, from startups to Fortune 500 companies.',
      longDescription: 'Sterling & Associates\' corporate law practice encompasses all aspects of business law, providing strategic counsel to help our clients navigate complex legal landscapes while achieving their business objectives. Our experienced team understands that successful businesses need legal partners who can provide both transactional expertise and strategic guidance.',
      services: [
        'Mergers & Acquisitions',
        'Corporate Governance',
        'Securities Law & Compliance',
        'Contract Negotiations',
        'Business Formation',
        'Due Diligence',
        'Regulatory Compliance',
        'Board Advisory Services'
      ],
      highlights: [
        {
          icon: Award,
          title: 'Proven Success',
          description: 'Successfully completed over 200 M&A transactions totaling $2B+ in value'
        },
        {
          icon: Users,
          title: 'Expert Team',
          description: '15+ corporate attorneys with Big Law and in-house experience'
        },
        {
          icon: Clock,
          title: 'Responsive Service',
          description: '24/7 availability for time-sensitive corporate matters'
        }
      ],
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=500&fit=crop'
    },
    'litigation': {
      title: 'Litigation',
      description: 'Expert trial attorneys providing aggressive representation in complex civil and commercial disputes.',
      longDescription: 'Our litigation practice is built on a foundation of courtroom excellence and strategic advocacy. We represent clients in a wide range of disputes, from complex commercial litigation to high-stakes civil matters. Our trial attorneys are recognized for their ability to achieve favorable outcomes through skilled negotiation, thorough preparation, and effective courtroom advocacy.',
      services: [
        'Commercial Litigation',
        'Civil Litigation',
        'Trial Representation',
        'Appellate Practice',
        'Alternative Dispute Resolution',
        'Class Action Defense',
        'Insurance Coverage',
        'Employment Litigation'
      ],
      highlights: [
        {
          icon: Award,
          title: '95% Success Rate',
          description: 'Exceptional track record in trial and appellate courts'
        },
        {
          icon: Users,
          title: 'Trial Experience',
          description: '100+ jury trials with favorable outcomes for clients'
        },
        {
          icon: Clock,
          title: 'Efficient Resolution',
          description: 'Strategic approach to minimize costs and timeline'
        }
      ],
      image: 'https://images.unsplash.com/photo-1589391886645-d51941baf7fb?w=800&h=500&fit=crop'
    },
    'intellectual-property': {
      title: 'Intellectual Property',
      description: 'Protecting and maximizing the value of your intellectual property assets in today\'s innovation-driven economy.',
      longDescription: 'In today\'s knowledge economy, intellectual property is often a company\'s most valuable asset. Our IP practice helps clients protect, monetize, and defend their innovations, brands, and creative works. We provide comprehensive IP services from initial protection strategies through enforcement and litigation.',
      services: [
        'Patent Prosecution',
        'Trademark Registration',
        'Copyright Protection',
        'Trade Secret Law',
        'IP Licensing',
        'IP Due Diligence',
        'IP Litigation',
        'Technology Transfers'
      ],
      highlights: [
        {
          icon: Award,
          title: 'Patent Success',
          description: '500+ patents successfully prosecuted and defended'
        },
        {
          icon: Users,
          title: 'Technical Expertise',
          description: 'Attorneys with advanced technical degrees and industry experience'
        },
        {
          icon: Clock,
          title: 'Global Protection',
          description: 'Worldwide IP protection through international partnerships'
        }
      ],
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=500&fit=crop'
    },
    'employment-law': {
      title: 'Employment Law',
      description: 'Comprehensive workplace legal services for both employers and employees.',
      longDescription: 'Our employment law practice addresses the full spectrum of workplace legal issues. We represent both employers and employees, providing strategic counsel on compliance, litigation prevention, and dispute resolution. Our attorneys stay current with evolving employment laws and regulations to help clients navigate this complex legal landscape.',
      services: [
        'Employment Contracts',
        'Workplace Investigations',
        'Discrimination & Harassment Claims',
        'Labor Relations',
        'Wage & Hour Compliance',
        'Employee Benefits',
        'Workplace Policies',
        'Wrongful Termination'
      ],
      highlights: [
        {
          icon: Award,
          title: 'Compliance Expertise',
          description: 'Helping companies maintain compliant workplace policies'
        },
        {
          icon: Users,
          title: 'Balanced Approach',
          description: 'Representing both employers and employees with equal dedication'
        },
        {
          icon: Clock,
          title: 'Preventive Counsel',
          description: 'Proactive strategies to prevent workplace disputes'
        }
      ],
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=500&fit=crop'
    },
    'real-estate': {
      title: 'Real Estate Law',
      description: 'Full-service real estate legal support for residential and commercial transactions.',
      longDescription: 'Our real estate practice covers all aspects of property law, from simple residential transactions to complex commercial developments. We provide practical, business-oriented legal counsel that helps clients achieve their real estate objectives while minimizing risks and ensuring compliance with applicable laws and regulations.',
      services: [
        'Property Transactions',
        'Commercial Real Estate',
        'Zoning & Land Use',
        'Real Estate Development',
        'Property Disputes',
        'Lease Negotiations',
        'Title Issues',
        'Environmental Compliance'
      ],
      highlights: [
        {
          icon: Award,
          title: 'Transaction Volume',
          description: '$500M+ in real estate transactions closed annually'
        },
        {
          icon: Users,
          title: 'Development Experience',
          description: 'Extensive experience in complex development projects'
        },
        {
          icon: Clock,
          title: 'Timely Closings',
          description: '99% on-time closing rate for transactions'
        }
      ],
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop'
    },
    'family-law': {
      title: 'Family Law',
      description: 'Compassionate legal guidance for sensitive family matters.',
      longDescription: 'Our family law practice provides compassionate, skilled representation for individuals and families facing difficult personal situations. We understand that family legal matters are deeply personal and emotionally challenging, and we strive to provide both excellent legal representation and the support our clients need during these difficult times.',
      services: [
        'Divorce & Separation',
        'Child Custody & Support',
        'Spousal Support',
        'Property Division',
        'Adoption',
        'Prenuptial Agreements',
        'Domestic Violence',
        'Mediation Services'
      ],
      highlights: [
        {
          icon: Award,
          title: 'Client Satisfaction',
          description: '98% client satisfaction rating in family law matters'
        },
        {
          icon: Users,
          title: 'Compassionate Approach',
          description: 'Sensitive handling of emotionally difficult situations'
        },
        {
          icon: Clock,
          title: 'Efficient Resolution',
          description: 'Focus on amicable resolutions when possible'
        }
      ],
      image: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?w=800&h=500&fit=crop'
    }
  };

  const practiceArea = practiceAreaData[slug as keyof typeof practiceAreaData];

  if (!practiceArea) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Practice Area Not Found</h1>
          <Link to="/practice-areas" className="text-gold hover:underline">
            Return to Practice Areas
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-charcoal to-gray-900 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link 
              to="/practice-areas" 
              className="inline-flex items-center text-gold hover:text-gold-light transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Practice Areas
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
                {practiceArea.title}
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {practiceArea.description}
              </p>
              <Button size="lg" className="bg-gold hover:bg-gold-dark text-charcoal font-semibold">
                Schedule Consultation
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="relative">
              <img
                src={practiceArea.image}
                alt={practiceArea.title}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-playfair font-bold text-charcoal mb-6">
              Overview
            </h2>
            <p className="text-lg text-warm-gray leading-relaxed mb-8">
              {practiceArea.longDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-light-gray py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-playfair font-bold text-charcoal mb-12 text-center">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {practiceArea.services.map((service, index) => (
                <div key={index} className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                  <CheckCircle className="h-5 w-5 text-gold mr-3 flex-shrink-0" />
                  <span className="text-charcoal font-medium">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-playfair font-bold text-charcoal mb-12 text-center">
              Why Choose Our {practiceArea.title} Practice?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {practiceArea.highlights.map((highlight, index) => (
                <Card key={index} className="text-center bg-white shadow-lg">
                  <CardContent className="p-8">
                    <highlight.icon className="h-16 w-16 text-gold mx-auto mb-6" />
                    <h3 className="text-xl font-playfair font-semibold text-charcoal mb-4">
                      {highlight.title}
                    </h3>
                    <p className="text-warm-gray leading-relaxed">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-charcoal text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-playfair font-bold mb-6">
            Ready to Discuss Your {practiceArea.title} Needs?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Our experienced {practiceArea.title.toLowerCase()} attorneys are ready to help you achieve your legal objectives. Contact us today for a consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gold hover:bg-gold-dark text-charcoal font-semibold">
              Schedule Free Consultation
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-charcoal">
              <Link to="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PracticeAreaDetail;
