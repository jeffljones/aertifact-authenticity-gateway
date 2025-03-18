
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { 
  Mail, 
  Phone, 
  MapPin,
  Send,
  Clock
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ContactUs = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "We've received your message and will respond shortly.",
      });
      
      setFormData({
        name: "",
        email: "",
        company: "",
        subject: "",
        message: ""
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen">
        <section className="bg-gradient-blue text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Mail className="mx-auto h-16 w-16 mb-6" />
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Contact Us</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Have questions about our authentication solutions? We're here to help.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="lg:col-span-1">
                <h2 className="text-2xl font-display font-bold mb-6 text-aertifact-blue">
                  Get in Touch
                </h2>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="mr-4 bg-aertifact-blue/10 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-aertifact-blue" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Email Us</h3>
                      <p className="text-gray-600">info@aertifact.com</p>
                      <p className="text-gray-600">support@aertifact.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 bg-aertifact-blue/10 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-aertifact-blue" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Call Us</h3>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                      <p className="text-gray-600">Mon-Fri, 9am-5pm EST</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 bg-aertifact-blue/10 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-aertifact-blue" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Visit Us</h3>
                      <p className="text-gray-600">100 Innovation Way</p>
                      <p className="text-gray-600">New York, NY 10001</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 bg-aertifact-blue/10 p-3 rounded-full">
                      <Clock className="h-6 w-6 text-aertifact-blue" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Business Hours</h3>
                      <p className="text-gray-600">Monday - Friday: 9am - 5pm</p>
                      <p className="text-gray-600">Saturday - Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100">
                  <h2 className="text-2xl font-display font-bold mb-6 text-aertifact-blue">
                    Send Us a Message
                  </h2>
                  
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                          Company
                        </label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your company (optional)"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                          Subject *
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          placeholder="How can we help?"
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Tell us how we can assist you..."
                        rows={5}
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="bg-aertifact-blue text-white hover:bg-aertifact-accent w-full md:w-auto"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ContactUs;
