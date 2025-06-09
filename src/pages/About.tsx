
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Award, Users, Globe } from 'lucide-react';

const About = () => {
  const timeline = [
    {
      year: '1999',
      title: 'Firm Founded',
      description: 'Sterling & Associates established with a focus on corporate law and litigation.'
    },
    {
      year: '2005',
      title: 'Major Expansion',
      description: 'Added intellectual property and employment law practices.'
    },
    {
      year: '2012',
      title: 'National Recognition',
      description: 'Ranked among top law firms in the region for client satisfaction.'
    },
    {
      year: '2018',
      title: 'Technology Innovation',
      description: 'Implemented cutting-edge legal technology for enhanced client service.'
    },
    {
      year: '2024',
      title: 'Continued Excellence',
      description: 'Celebrating 25 years of legal excellence and client success.'
    }
  ];

  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for the highest standards in everything we do, from legal research to client communication.'
    },
    {
      icon: Users,
      title: 'Client-Focused',
      description: 'Our clients are at the center of everything we do. We listen, understand, and deliver results.'
    },
    {
      icon: Globe,
      title: 'Integrity',
      description: 'We conduct our practice with the highest ethical standards and transparency.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-charcoal to-gray-900 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-gold text-charcoal mb-6">About Our Firm</Badge>
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              25 Years of Legal Excellence
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Founded on the principles of integrity, excellence, and client service, Sterling & Associates has grown to become one of the most trusted law firms in the region.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-playfair font-bold text-charcoal mb-6">
                Our Story
              </h2>
              <p className="text-warm-gray text-lg mb-6 leading-relaxed">
                Sterling & Associates was founded in 1999 with a simple mission: to provide exceptional legal services while building lasting relationships with our clients. What started as a small practice has grown into a full-service law firm serving individuals, businesses, and organizations across multiple practice areas.
              </p>
              <p className="text-warm-gray text-lg mb-6 leading-relaxed">
                Our success is built on a foundation of legal expertise, ethical practice, and genuine care for our clients' interests. We believe that the best legal outcomes come from understanding not just the law, but the unique circumstances and goals of each client we serve.
              </p>
              <p className="text-warm-gray text-lg leading-relaxed">
                Today, our team of experienced attorneys continues to uphold the values that have defined our firm for over two decades: integrity, excellence, and unwavering commitment to client success.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=600&h=600&fit=crop"
                alt="Modern law office"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-gold text-charcoal p-6 rounded-lg shadow-lg">
                <div className="text-3xl font-playfair font-bold">25+</div>
                <div className="text-sm font-semibold">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-light-gray py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charcoal mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-warm-gray max-w-3xl mx-auto">
              These principles guide our practice and define our commitment to our clients and community.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center bg-white shadow-lg">
                <CardContent className="p-8">
                  <value.icon className="h-16 w-16 text-gold mx-auto mb-6" />
                  <h3 className="text-xl font-playfair font-semibold text-charcoal mb-4">
                    {value.title}
                  </h3>
                  <p className="text-warm-gray leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charcoal mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-warm-gray max-w-3xl mx-auto">
              From our founding to today, here are the key milestones that have shaped Sterling & Associates.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="flex mb-12 last:mb-0">
                <div className="flex flex-col items-center mr-8">
                  <div className="bg-gold text-charcoal rounded-full p-3 mb-4">
                    <Calendar className="h-6 w-6" />
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-px h-full bg-gray-300"></div>
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <div className="bg-gold text-charcoal px-3 py-1 rounded-full text-sm font-semibold inline-block mb-3">
                    {item.year}
                  </div>
                  <h3 className="text-xl font-playfair font-semibold text-charcoal mb-2">
                    {item.title}
                  </h3>
                  <p className="text-warm-gray leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Photo Section */}
      <section className="bg-charcoal text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
                Meet Our Team
              </h2>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                Our success is driven by our exceptional team of legal professionals. Each member brings unique expertise, experience, and dedication to serving our clients' needs.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                From senior partners with decades of experience to talented associates who bring fresh perspectives, our team is united by a shared commitment to legal excellence and client service.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop"
                alt="Legal team"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
