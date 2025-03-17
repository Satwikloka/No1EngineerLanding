import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Twitter, Linkedin, Github, Instagram, Globe } from "lucide-react";
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
        title: "సందేశం పంపబడింది!",
        description: "మీ సందేశానికి ధన్యవాదాలు. మేము త్వరలో మీకు తిరిగి వస్తాము.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "సందేశం పంపడం విఫలమైంది. దయచేసి మళ్ళీ ప్రయత్నించండి.",
        variant: "destructive",
      });
    },
  });

  function onSubmit(values: ContactFormValues) {
    mutate(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-telugu text-lg">పూర్తి పేరు</FormLabel>
              <FormControl>
                <Input 
                  placeholder="మీ పేరు" 
                  {...field} 
                  className="border-black focus:border-black focus:ring-0 rounded-none h-12 font-telugu" 
                />
              </FormControl>
              <FormMessage className="font-telugu" />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-telugu text-lg">ఇమెయిల్</FormLabel>
              <FormControl>
                <Input 
                  placeholder="your.email@example.com" 
                  {...field} 
                  className="border-black focus:border-black focus:ring-0 rounded-none h-12" 
                />
              </FormControl>
              <FormMessage className="font-telugu" />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-telugu text-lg">విషయం</FormLabel>
              <FormControl>
                <Input 
                  placeholder="ఏ విషయంలో మేము సహాయపడగలము?" 
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  name={field.name}
                  value={field.value ?? ''}
                  ref={field.ref}
                  className="border-black focus:border-black focus:ring-0 rounded-none h-12 font-telugu" 
                />
              </FormControl>
              <FormMessage className="font-telugu" />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-telugu text-lg">సందేశం</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="మీ ప్రాజెక్ట్, అవసరాలు మరియు టైమ్‌లైన్ గురించి మాకు మరింత చెప్పండి" 
                  className="resize-none border-black focus:border-black focus:ring-0 rounded-none min-h-[150px] font-telugu" 
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  name={field.name}
                  value={field.value ?? ''}
                  ref={field.ref}
                />
              </FormControl>
              <FormMessage className="font-telugu" />
            </FormItem>
          )}
        />
        
        <Button 
          type="submit" 
          className="w-full btn-primary py-6 font-telugu text-lg" 
          disabled={isPending}
        >
          {isPending ? "పంపుతోంది..." : "సందేశం పంపండి"}
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
    <div className="flex items-start gap-6 mb-8">
      <div className="text-black">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2 font-telugu">{title}</h3>
        <p className="opacity-70 font-telugu">{info}</p>
      </div>
    </div>
  );
}

export default function ContactSection() {
  const contactInfoItems = [
    {
      icon: <MapPin size={24} />,
      title: "మా స్థానం",
      info: "హైదరాబాద్, తెలంగాణ"
    },
    {
      icon: <Mail size={24} />,
      title: "ఇమెయిల్",
      info: "satwikloka321@gmail.com"
    },
    {
      icon: <Phone size={24} />,
      title: "కాల్ చేయండి",
      info: "+91 728807097"
    }
  ];

  const portfolioLinks = [
    { 
      name: "www.makservices.in", 
      url: "https://www.makservices.in" 
    },
    { 
      name: "www.makerdeal.in", 
      url: "https://www.makerdeal.in" 
    }
  ];

  const socialLinks = [
    { icon: <Twitter className="h-5 w-5" />, href: "https://twitter.com" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://linkedin.com" },
    { icon: <Github className="h-5 w-5" />, href: "https://github.com" },
    { icon: <Instagram className="h-5 w-5" />, href: "https://instagram.com" }
  ];

  return (
    <section id="contact" className="bg-white">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="max-w-3xl mb-20"
        >
          <h2 className="title-lg mb-12 font-telugu">సంప్రదించండి</h2>
          <p className="text-xl md:text-2xl font-telugu">
            మీ ఆలోచనలను నిజంగా మార్చడానికి సిద్ధంగా ఉన్నారా? మీ వ్యాపార లక్ష్యాలను సాధించడంలో మేము ఎలా సహాయపడగలమో చర్చించడానికి నేడే మమ్మల్ని సంప్రదించండి.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="mb-16">
              {contactInfoItems.map((item, index) => (
                <ContactInfo key={index} {...item} />
              ))}
            </div>
            
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-6 font-telugu">పోర్ట్‌ఫోలియో లింక్స్</h3>
              <div className="space-y-4">
                {portfolioLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.url}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-telugu flex items-center space-x-2 text-[#831843] hover:underline"
                  >
                    <div className="p-2 rounded-full bg-gradient-to-r from-[#A78BFA] to-[#FB923C] opacity-80">
                      <Globe className="h-4 w-4 text-white" />
                    </div>
                    <span>{link.name}</span>
                  </a>
                ))}
                <p className="mt-2 text-sm opacity-70 font-telugu">
                  Play Store లో కూడా అందుబాటులో ఉన్నాయి
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6 font-telugu">సోషల్ మీడియాలో కనెక్ట్ అవ్వండి</h3>
              <div className="flex space-x-6">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.href} 
                    className="border border-black p-3 hover:bg-black hover:text-white transition-colors"
                    aria-label="Social media link"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="border border-black p-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideUp}
          >
            <h3 className="text-xl font-semibold mb-8 font-telugu">మాకు సందేశం పంపండి</h3>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
