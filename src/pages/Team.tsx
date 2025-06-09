
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Award, GraduationCap } from 'lucide-react';

const Team = () => {
  const attorneys = [
    {
      name: 'Michael Sterling',
      title: 'Managing Partner',
      specialties: ['Corporate Law', 'Mergers & Acquisitions'],
      bio: 'Michael founded Sterling & Associates in 1999 with a vision of providing exceptional legal services to businesses and individuals. With over 25 years of experience, he has led numerous high-profile transactions and corporate restructurings.',
      education: ['Harvard Law School, JD', 'University of Pennsylvania, MBA'],
      admissions: ['New York Bar', 'New Jersey Bar', 'Federal Courts'],
      email: 'msterling@sterlinglaw.com',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face'
    },
    {
      name: 'Sarah Johnson',
      title: 'Senior Partner',
      specialties: ['Litigation', 'Employment Law'],
      bio: 'Sarah is a seasoned litigator with extensive experience in complex commercial disputes and employment matters. She has successfully tried over 50 cases and has a reputation for aggressive advocacy and strategic thinking.',
      education: ['Columbia Law School, JD', 'Yale University, BA'],
      admissions: ['New York Bar', 'Connecticut Bar', 'U.S. Supreme Court'],
      email: 'sjohnson@sterlinglaw.com',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=500&fit=crop&crop=face'
    },
    {
      name: 'David Chen',
      title: 'Partner',
      specialties: ['Intellectual Property', 'Technology Law'],
      bio: 'David brings a unique combination of legal expertise and technical knowledge to our IP practice. With a background in engineering, he helps clients protect and monetize their innovations in complex technology sectors.',
      education: ['Stanford Law School, JD', 'MIT, MS Electrical Engineering'],
      admissions: ['California Bar', 'New York Bar', 'USPTO'],
      email: 'dchen@sterlinglaw.com',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face'
    },
    {
      name: 'Jennifer Rodriguez',
      title: 'Partner',
      specialties: ['Real Estate', 'Corporate Law'],
      bio: 'Jennifer focuses on complex real estate transactions and corporate real estate matters. She has extensive experience in commercial development, zoning, and real estate finance, representing both developers and institutional investors.',
      education: ['Georgetown Law Center, JD', 'University of Texas, BBA'],
      admissions: ['Texas Bar', 'New York Bar', 'District of Columbia Bar'],
      email: 'jrodriguez@sterlinglaw.com',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop&crop=face'
    },
    {
      name: 'Robert Williams',
      title: 'Senior Associate',
      specialties: ['Family Law', 'Estate Planning'],
      bio: 'Robert provides compassionate representation in family law matters while also helping clients plan for the future through comprehensive estate planning. His approach combines legal expertise with sensitivity to client needs.',
      education: ['Boston University Law, JD', 'Boston College, BA'],
      admissions: ['Massachusetts Bar', 'New York Bar'],
      email: 'rwilliams@sterlinglaw.com',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&crop=face'
    },
    {
      name: 'Lisa Park',
      title: 'Associate',
      specialties: ['Corporate Law', 'Securities'],
      bio: 'Lisa is a rising talent in our corporate practice, focusing on securities law and regulatory compliance. She brings fresh perspectives and innovative solutions to complex business challenges.',
      education: ['NYU Law School, JD', 'Northwestern University, BA'],
      admissions: ['New York Bar', 'Illinois Bar'],
      email: 'lpark@sterlinglaw.com',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=500&fit=crop&crop=face'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-charcoal to-gray-900 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-gold text-charcoal mb-6">Our Legal Team</Badge>
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Meet Our Attorneys
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Our team of experienced attorneys brings decades of combined experience and a commitment to excellence in serving our clients' legal needs.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {attorneys.map((attorney, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={attorney.image}
                    alt={attorney.name}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="bg-white/90 hover:bg-white">
                        <Mail className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="bg-white/90 hover:bg-white">
                        <Linkedin className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-playfair font-bold text-charcoal mb-1">
                    {attorney.name}
                  </h3>
                  <p className="text-gold font-semibold mb-3">{attorney.title}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {attorney.specialties.map((specialty, specIndex) => (
                      <Badge key={specIndex} variant="outline" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-warm-gray text-sm mb-4 line-clamp-3">
                    {attorney.bio}
                  </p>
                  <div className="space-y-2 text-xs text-warm-gray">
                    <div className="flex items-start">
                      <GraduationCap className="h-3 w-3 mt-0.5 mr-2 flex-shrink-0" />
                      <div>
                        {attorney.education.map((edu, eduIndex) => (
                          <div key={eduIndex}>{edu}</div>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Award className="h-3 w-3 mt-0.5 mr-2 flex-shrink-0" />
                      <div>{attorney.admissions.join(', ')}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="bg-light-gray py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-playfair font-bold text-charcoal mb-6">
              What Unites Our Team
            </h2>
            <p className="text-lg text-warm-gray mb-12 leading-relaxed">
              While our attorneys bring diverse backgrounds and specialized expertise, we are united by shared values and a commitment to excellence in legal representation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-charcoal" />
                </div>
                <h3 className="text-xl font-playfair font-semibold text-charcoal mb-2">
                  Excellence
                </h3>
                <p className="text-warm-gray">
                  We maintain the highest standards of legal practice and professional ethics.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-charcoal" />
                </div>
                <h3 className="text-xl font-playfair font-semibold text-charcoal mb-2">
                  Communication
                </h3>
                <p className="text-warm-gray">
                  Clear, timely communication is the foundation of our client relationships.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-8 w-8 text-charcoal" />
                </div>
                <h3 className="text-xl font-playfair font-semibold text-charcoal mb-2">
                  Innovation
                </h3>
                <p className="text-warm-gray">
                  We embrace new technologies and approaches to serve our clients better.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-charcoal text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-playfair font-bold mb-6">
            Ready to Work with Our Team?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Our experienced attorneys are ready to provide the skilled representation you need. Contact us today to schedule a consultation.
          </p>
          <Button size="lg" className="bg-gold hover:bg-gold-dark text-charcoal font-semibold">
            Schedule a Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Team;
