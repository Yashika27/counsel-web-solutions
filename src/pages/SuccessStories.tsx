
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronRight, Award, DollarSign, Users, Calendar } from 'lucide-react';

const SuccessStories = () => {
  const successStories = [
    {
      title: 'Multi-Million Dollar M&A Transaction',
      category: 'Corporate Law',
      result: '$250M acquisition successfully completed',
      challenge: 'Complex cross-border acquisition with multiple regulatory hurdles and tight timeline.',
      solution: 'Our corporate team coordinated with international counsel, navigated regulatory approvals, and structured the transaction to maximize value while minimizing risk.',
      outcome: 'Closed transaction 2 weeks ahead of schedule, saving client significant carrying costs.',
      icon: DollarSign,
      color: 'bg-green-100 text-green-600'
    },
    {
      title: 'Patent Infringement Victory',
      category: 'Intellectual Property',
      result: '$15M damages awarded',
      challenge: 'Large technology company accused our client of patent infringement in complex IP litigation.',
      solution: 'Comprehensive prior art search, expert testimony coordination, and strategic litigation approach to prove non-infringement and invalidity.',
      outcome: 'Not only defeated infringement claims but secured damages for client\'s counter-claims.',
      icon: Award,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      title: 'Employment Discrimination Case',
      category: 'Employment Law',
      result: 'Complete vindication and policy changes',
      challenge: 'Executive facing wrongful termination and discrimination claims from former employer.',
      solution: 'Thorough investigation, document analysis, and strategic negotiation to demonstrate client\'s outstanding performance and expose discriminatory practices.',
      outcome: 'Client reinstated with full back pay and company implemented new anti-discrimination policies.',
      icon: Users,
      color: 'bg-purple-100 text-purple-600'
    },
    {
      title: 'Commercial Real Estate Development',
      category: 'Real Estate',
      result: '$100M project successfully launched',
      challenge: 'Complex zoning issues and environmental concerns threatened major commercial development.',
      solution: 'Coordinated with environmental consultants, negotiated with municipal authorities, and structured innovative financing arrangements.',
      outcome: 'Project approved and construction commenced on schedule, creating 500 new jobs.',
      icon: Calendar,
      color: 'bg-orange-100 text-orange-600'
    },
    {
      title: 'Family Business Succession',
      category: 'Corporate Law',
      result: 'Tax-efficient transition saved $5M',
      challenge: 'Third-generation family business needed succession planning to minimize tax impact and family conflicts.',
      solution: 'Developed comprehensive succession plan with trust structures, buy-sell agreements, and governance framework.',
      outcome: 'Smooth transition completed with significant tax savings and family harmony preserved.',
      icon: Users,
      color: 'bg-green-100 text-green-600'
    },
    {
      title: 'Securities Fraud Defense',
      category: 'Litigation',
      result: 'All charges dismissed',
      challenge: 'CEO facing SEC investigation and potential criminal charges for alleged securities violations.',
      solution: 'Coordinated parallel proceedings defense, conducted internal investigation, and negotiated with regulators.',
      outcome: 'All charges dismissed and client\'s reputation fully restored with no financial penalties.',
      icon: Award,
      color: 'bg-blue-100 text-blue-600'
    }
  ];

  const stats = [
    { number: '500+', label: 'Cases Won', icon: Award },
    { number: '$2B+', label: 'Value Secured', icon: DollarSign },
    { number: '98%', label: 'Success Rate', icon: Users },
    { number: '25', label: 'Years Experience', icon: Calendar }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-charcoal to-gray-900 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-gold text-charcoal mb-6">Client Success</Badge>
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Success Stories
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Real results for real clients. See how our experienced legal team has helped clients achieve their objectives and overcome complex legal challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-light-gray py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-charcoal" />
                </div>
                <div className="text-3xl lg:text-4xl font-playfair font-bold text-charcoal mb-2">
                  {stat.number}
                </div>
                <div className="text-warm-gray font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-lg ${story.color}`}>
                      <story.icon className="h-6 w-6" />
                    </div>
                    <Badge variant="outline">{story.category}</Badge>
                  </div>
                  
                  <h3 className="text-xl font-playfair font-bold text-charcoal mb-3 group-hover:text-gold transition-colors">
                    {story.title}
                  </h3>
                  
                  <div className="bg-gold bg-opacity-10 p-3 rounded-lg mb-4">
                    <p className="text-charcoal font-semibold">{story.result}</p>
                  </div>
                  
                  <div className="space-y-3 text-sm">
                    <div>
                      <h4 className="font-semibold text-charcoal mb-1">Challenge:</h4>
                      <p className="text-warm-gray">{story.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-charcoal mb-1">Our Approach:</h4>
                      <p className="text-warm-gray">{story.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-charcoal mb-1">Outcome:</h4>
                      <p className="text-warm-gray">{story.outcome}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonial */}
      <section className="bg-charcoal text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="w-20 h-20 rounded-full bg-gold mx-auto mb-4 flex items-center justify-center">
                <Users className="h-10 w-10 text-charcoal" />
              </div>
            </div>
            <blockquote className="text-2xl font-playfair italic text-gray-300 mb-8 leading-relaxed">
              "Sterling & Associates didn't just handle our legal matter—they became trusted advisors who understood our business and helped us achieve our strategic objectives. Their expertise and dedication made all the difference."
            </blockquote>
            <div>
              <div className="text-gold font-semibold text-lg">Sarah Chen</div>
              <div className="text-gray-400">CEO, TechInnovate Corp</div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-light-gray py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm text-warm-gray leading-relaxed">
              <strong>Legal Disclaimer:</strong> The success stories presented here are based on actual cases handled by Sterling & Associates. Results achieved in past cases do not guarantee similar outcomes in future matters, as each case is unique and depends on its specific facts and circumstances. Attorney advertising.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gold py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-playfair font-bold text-charcoal mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-charcoal mb-8 max-w-2xl mx-auto">
            Let our experienced legal team help you achieve your objectives. Contact us today to discuss your legal needs and learn how we can help.
          </p>
          <Button size="lg" className="bg-charcoal hover:bg-gray-800 text-white font-semibold">
            Schedule Your Consultation
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default SuccessStories;
