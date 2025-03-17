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
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-telugu text-lg">ఇమెయిల్</FormLabel>
              <FormControl>
                <Input 
                  placeholder="your.email@example.com" 
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  name={field.name}
                  value={field.value ?? ''}
                  ref={field.ref}
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
          className="w-full py-6 font-telugu text-lg text-white rounded-lg shadow-lg" 
          style={{ 
            background: "linear-gradient(135deg, #FF8000 0%, #0090D4 100%)",
            boxShadow: "0 4px 14px rgba(255, 128, 0, 0.3), 0 2px 8px rgba(0, 144, 212, 0.3)"
          }}
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
    <motion.div 
      className="flex items-start gap-6 mb-8"
      whileHover={{ x: 5 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div 
        className="p-3 rounded-lg text-white flex items-center justify-center"
        style={{ 
          background: "linear-gradient(135deg, #FF8000 0%, #0090D4 100%)",
          boxShadow: "0 4px 6px -1px rgba(255, 128, 0, 0.1), 0 2px 4px -1px rgba(0, 144, 212, 0.06)"
        }}
        whileHover={{ 
          scale: 1.1, 
          boxShadow: "0 10px 15px -3px rgba(255, 128, 0, 0.2), 0 4px 6px -2px rgba(0, 144, 212, 0.1)" 
        }}
      >
        {icon}
      </motion.div>
      <div>
        <h3 className="text-lg font-semibold mb-2 font-telugu">{title}</h3>
        <p className="opacity-70 font-telugu">{info}</p>
      </div>
    </motion.div>
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
    { icon: <Twitter className="h-5 w-5" />, href: "https://twitter.com", color: "#1DA1F2" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://linkedin.com", color: "#0A66C2" },
    { icon: <Github className="h-5 w-5" />, href: "https://github.com", color: "#333333" },
    { icon: <Instagram className="h-5 w-5" />, href: "https://instagram.com", color: "#E4405F" }
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
              <h3 className="text-xl font-semibold mb-6 font-telugu">నా గురించి</h3>
              <div className="space-y-4">
                <p className="font-telugu opacity-70">
                  నేను Android మరియు web అప్లికేషన్ల డెవలపర్ని. స్వేచ్ఛగా విలువైన సాంకేతిక సేవలను అందిస్తాను మరియు నాణ్యమైన రిజల్ట్‌లను పొందడానికి బలమైన నివేదన సంబంధాలను ఏర్పరుస్తాను.
                </p>
                <p className="font-telugu opacity-70 mt-2">
                  సాధారణ Play Store మరియు iOS నుండి వెబ్ అప్లికేషన్‌లకు అన్ని ప్లాట్‌ఫారమ్‌లలో సేవలు అందిస్తున్నాను.
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6 font-telugu">సోషల్ మీడియాలో కనెక్ట్ అవ్వండి</h3>
              <div className="flex space-x-6">
                {socialLinks.map((social, index) => (
                  <motion.a 
                    key={index}
                    href={social.href} 
                    className="p-3 rounded-lg shadow-md text-white transition-all"
                    style={{ backgroundColor: social.color }}
                    whileHover={{ 
                      scale: 1.1, 
                      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" 
                    }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Social media link"
                  >
                    {social.icon}
                  </motion.a>
                ))}
                {/* Premium McLaren-inspired accent button */}
                <motion.a 
                  href="#contact" 
                  className="p-3 rounded-lg shadow-md flex items-center justify-center"
                  style={{ 
                    background: "linear-gradient(135deg, #FF8000 0%, #0090D4 100%)",
                    width: "44px",
                    height: "44px" 
                  }}
                  whileHover={{ 
                    scale: 1.1, 
                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" 
                  }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="McLaren-inspired link"
                >
                  <Mail className="h-5 w-5 text-white" />
                </motion.a>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="p-8 rounded-xl shadow-xl overflow-hidden relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideUp}
            style={{ 
              background: "#FFFFFF",
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.01)" 
            }}
          >
            {/* McLaren racing stripe */}
            <div className="absolute left-0 top-0 h-full w-2 bg-[#FF8000]"></div>
            
            {/* Corner accent */}
            <div className="absolute right-0 top-0 w-20 h-20">
              <div className="absolute right-0 top-0 w-full h-full overflow-hidden">
                <div className="absolute right-0 top-0 transform rotate-45 translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#0090D4] opacity-80"></div>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mb-8 font-telugu relative z-10">మాకు సందేశం పంపండి</h3>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
