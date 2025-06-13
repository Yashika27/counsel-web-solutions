
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Phone, Mail, MapPin, Clock, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    practiceArea: ''
  });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     toast({
//       title: "Message Sent",
//       description: "Thank you for contacting us. We'll get back to you within 24 hours.",
//     });
//     setFormData({
//       name: '',
//       email: '',
//       phone: '',
//       subject: '',
//       message: '',
//       practiceArea: ''
//     });
//   };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE}/contact/submit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('Message sent successfully!');
      setFormData({ name: "", email: "", phone: "", practiceArea: "", subject: "", message: "" });
    } else {
      alert('Something went wrong. Please try again later.');
    }
  } catch (error) {
    console.error('Form submit error:', error);
    alert('Error submitting form.');
  }
};


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const practiceAreas = [
    'Corporate Law',
    'Litigation',
    'Intellectual Property',
    'Employment Law',
    'Real Estate',
    'Family Law',
    'Other'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-charcoal to-gray-900 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-gold text-charcoal mb-6">Get In Touch</Badge>
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Ready to discuss your legal needs? Our experienced attorneys are here to help. Schedule a free consultation today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-playfair font-bold text-charcoal mb-8">
                Get in Touch
              </h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-gold p-3 rounded-lg mr-4 flex-shrink-0">
                    <Phone className="h-6 w-6 text-charcoal" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-charcoal mb-1">Phone</h3>
                    <p className="text-warm-gray">(555) 123-4567</p>
                    <p className="text-sm text-warm-gray">Available 24/7 for emergencies</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gold p-3 rounded-lg mr-4 flex-shrink-0">
                    <Mail className="h-6 w-6 text-charcoal" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-charcoal mb-1">Email</h3>
                    <p className="text-warm-gray">contact@sterlinglaw.com</p>
                    <p className="text-sm text-warm-gray">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gold p-3 rounded-lg mr-4 flex-shrink-0">
                    <MapPin className="h-6 w-6 text-charcoal" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-charcoal mb-1">Office</h3>
                    <p className="text-warm-gray">123 Legal Street, Suite 500</p>
                    <p className="text-warm-gray">City, ST 12345</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gold p-3 rounded-lg mr-4 flex-shrink-0">
                    <Clock className="h-6 w-6 text-charcoal" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-charcoal mb-1">Office Hours</h3>
                    <p className="text-warm-gray">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-warm-gray">Saturday: 10:00 AM - 2:00 PM</p>
                    <p className="text-warm-gray">Sunday: By appointment</p>
                  </div>
                </div>
              </div>

              <Card className="bg-light-gray border-none">
                <CardContent className="p-6">
                  <h3 className="text-xl font-playfair font-semibold text-charcoal mb-4">
                    Why Choose Sterling & Associates?
                  </h3>
                  <ul className="space-y-2 text-warm-gray">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                      Free initial consultation
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                      25+ years of experience
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                      Personalized attention
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                      Proven track record
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-playfair font-bold text-charcoal mb-6">
                    Schedule Your Free Consultation
                  </h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                          Full Name *
                        </label>
                        <Input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                          Email Address *
                        </label>
                        <Input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-2">
                          Phone Number *
                        </label>
                        <Input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label htmlFor="practiceArea" className="block text-sm font-medium text-charcoal mb-2">
                          Practice Area
                        </label>
                        <select
                          id="practiceArea"
                          name="practiceArea"
                          value={formData.practiceArea}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                        >
                          <option value="">Select a practice area</option>
                          {practiceAreas.map((area) => (
                            <option key={area} value={area}>{area}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-charcoal mb-2">
                        Subject
                      </label>
                      <Input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full"
                        placeholder="Please describe your legal needs..."
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-gold hover:bg-gold-dark text-charcoal font-semibold"
                    >
                      Send Message
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </Button>

                    <p className="text-xs text-warm-gray text-center">
                      By submitting this form, you agree to our privacy policy. 
                      This form is for preliminary case evaluation only and does not create an attorney-client relationship.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-light-gray py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-playfair font-bold text-charcoal mb-8 text-center">
              Visit Our Office
            </h2>
            <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-warm-gray mx-auto mb-4" />
                <p className="text-warm-gray">Interactive map would be embedded here</p>
                <p className="text-sm text-warm-gray">123 Legal Street, Suite 500, City, ST 12345</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-playfair font-bold text-charcoal mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-charcoal mb-2">
                  Do you offer free consultations?
                </h3>
                <p className="text-warm-gray">
                  Yes, we offer free initial consultations for most practice areas. This allows us to understand your needs and determine how we can best assist you.
                </p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-charcoal mb-2">
                  How quickly can I expect a response?
                </h3>
                <p className="text-warm-gray">
                  We typically respond to all inquiries within 24 hours. For urgent matters, we offer 24/7 emergency contact options.
                </p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-charcoal mb-2">
                  What should I bring to my consultation?
                </h3>
                <p className="text-warm-gray">
                  Please bring any relevant documents related to your legal matter, a list of questions you'd like to discuss, and any deadlines you're facing.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-charcoal mb-2">
                  Do you handle cases outside your local area?
                </h3>
                <p className="text-warm-gray">
                  Yes, we handle cases throughout the region and can work with local counsel in other jurisdictions when necessary.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
