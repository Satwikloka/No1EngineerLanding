import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Twitter, Linkedin, Github, Instagram } from "lucide-react";
import { fadeIn, slideUp } from "@/lib/framer-animations";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { insertContactSchema } from "@shared/schema";

const contactSchema = insertContactSchema.extend({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

function ContactForm() {
  const { toast } = useToast();
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (values: ContactFormValues) => {
      const res = await apiRequest("POST", "/api/contact", values);
      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. We'll get back to you soon.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  function onSubmit(values: ContactFormValues) {
    mutate(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Your name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input placeholder="your.email@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Input placeholder="How can we help you?" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Tell us more about your project, needs, and timeline" 
                  className="resize-none" 
                  rows={4} 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600" disabled={isPending}>
          {isPending ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </Form>
  );
}

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  info: string;
}

function ContactInfo({ icon, title, info }: ContactInfoProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 bg-blue-500/10 text-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-primary mb-1">{title}</h3>
        <p className="text-gray-700">{info}</p>
      </div>
    </div>
  );
}

export default function ContactSection() {
  const contactInfoItems = [
    {
      icon: <MapPin />,
      title: "Our Location",
      info: "123 Innovation Drive, Tech City, TC 10101"
    },
    {
      icon: <Mail />,
      title: "Email Us",
      info: "info@no1.engineer"
    },
    {
      icon: <Phone />,
      title: "Call Us",
      info: "+1 (555) 123-4567"
    }
  ];

  const socialLinks = [
    { icon: <Twitter className="h-5 w-5" />, href: "#" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#" },
    { icon: <Github className="h-5 w-5" />, href: "#" },
    { icon: <Instagram className="h-5 w-5" />, href: "#" }
  ];

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Get in Touch</h2>
              <p className="text-gray-700 mb-8">
                Ready to transform your ideas into reality? Contact us today to discuss how we can help you achieve your engineering goals.
              </p>
              
              <div className="space-y-6">
                {contactInfoItems.map((item, index) => (
                  <ContactInfo key={index} {...item} />
                ))}
              </div>
              
              <div className="mt-10">
                <h3 className="text-lg font-semibold text-primary mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a 
                      key={index}
                      href={social.href} 
                      className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-700 hover:bg-blue-500 hover:text-white transition-colors"
                      aria-label="Social media link"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-gray-50 p-8 rounded-lg shadow-md"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideUp}
            >
              <h3 className="text-2xl font-semibold text-primary mb-6">Send Us a Message</h3>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
