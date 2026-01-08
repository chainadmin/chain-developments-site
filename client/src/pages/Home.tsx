import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { 
  ArrowRight, BarChart3, ShieldCheck, Zap, Globe, Users, 
  CheckCircle2, Building2, Layers 
} from "lucide-react";
import { useSubmitContact } from "@/hooks/use-contact";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "@shared/routes";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

export default function Home() {
  const contactMutation = useSubmitContact();
  
  const form = useForm({
    resolver: zodResolver(api.contact.submit.input),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: z.infer<typeof api.contact.submit.input>) => {
    contactMutation.mutate(data, {
      onSuccess: () => form.reset(),
    });
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground overflow-x-hidden">
      <Navigation />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute -top-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-blue-100/50 blur-3xl opacity-60" />
          <div className="absolute top-[60%] -left-[10%] w-[50%] h-[50%] rounded-full bg-indigo-50/60 blur-3xl opacity-50" />
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <motion.div 
              className="flex-1 max-w-2xl text-center lg:text-left"
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <span className="flex h-2 w-2 rounded-full bg-primary"></span>
                Now available for enterprise teams
              </motion.div>
              
              <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                Scale Your Business With <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-600">Intelligent Core</span> Technology
              </motion.h1>
              
              <motion.p variants={fadeIn} className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
                NexusCore provides the foundational infrastructure for high-growth companies. Secure, scalable, and built for modern demands.
              </motion.p>
              
              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Button size="lg" className="w-full sm:w-auto px-8 h-12 text-base shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all hover:-translate-y-1">
                  Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto px-8 h-12 text-base border-slate-200 hover:bg-slate-50 hover:text-slate-900">
                  View Demo
                </Button>
              </motion.div>

              <motion.div variants={fadeIn} className="mt-12 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" /> <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" /> <span>14-day free trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" /> <span>Cancel anytime</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              className="flex-1 w-full max-w-[600px] lg:max-w-none relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Unsplash abstract tech image */}
              {/* technology server data visualization abstract */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-slate-200/50 border border-slate-100 bg-white aspect-[4/3]">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200" 
                  alt="Dashboard Analytics" 
                  className="object-cover w-full h-full"
                />
                
                {/* Floating UI Elements for depth */}
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 hidden md:block animate-bounce-slow">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                      <ShieldCheck className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">System Secure</p>
                      <p className="text-xs text-slate-500">Last scan: 2 min ago</p>
                    </div>
                  </div>
                </div>

                <div className="absolute top-10 -right-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 hidden md:block">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-primary">
                      <BarChart3 className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">Growth +124%</p>
                      <p className="text-xs text-slate-500">vs. last month</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PARTNERS LOGOS */}
      <section className="py-10 border-y border-slate-100 bg-slate-50/50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-medium text-slate-500 mb-8 uppercase tracking-wider">Trusted by industry leaders worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Logos represented as text for this demo, would be SVGs */}
            <h3 className="text-xl font-bold text-slate-800">ACME Corp</h3>
            <h3 className="text-xl font-bold text-slate-800">GlobalBank</h3>
            <h3 className="text-xl font-bold text-slate-800">TechFlow</h3>
            <h3 className="text-xl font-bold text-slate-800">Starlight</h3>
            <h3 className="text-xl font-bold text-slate-800">Uptime</h3>
          </div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="py-24 bg-white" id="features">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Everything you need to scale</h2>
            <p className="text-lg text-slate-600">Our platform provides the essential building blocks for modern businesses, delivering speed, reliability, and security out of the box.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="h-6 w-6 text-amber-500" />,
                title: "Lightning Fast",
                desc: "Optimized for speed with global CDN delivery and edge computing capabilities."
              },
              {
                icon: <ShieldCheck className="h-6 w-6 text-green-500" />,
                title: "Bank-Grade Security",
                desc: "Enterprise-level encryption and compliance standards including SOC2 and GDPR."
              },
              {
                icon: <BarChart3 className="h-6 w-6 text-blue-500" />,
                title: "Advanced Analytics",
                desc: "Real-time insights into your business performance with customizable dashboards."
              },
              {
                icon: <Globe className="h-6 w-6 text-indigo-500" />,
                title: "Global Infrastructure",
                desc: "Deploy instantly to 35+ regions worldwide with a single click."
              },
              {
                icon: <Layers className="h-6 w-6 text-purple-500" />,
                title: "Seamless Integration",
                desc: "Connects with your existing tools via our robust and documented API."
              },
              {
                icon: <Users className="h-6 w-6 text-pink-500" />,
                title: "Team Collaboration",
                desc: "Built-in tools for teams to work together efficiently in real-time."
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-lg bg-slate-50 group-hover:bg-white group-hover:shadow-md border border-slate-100 flex items-center justify-center mb-6 transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#4b5563 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>
        
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Active Users", value: "100k+" },
              { label: "Countries", value: "150+" },
              { label: "Uptime", value: "99.99%" },
              { label: "Support", value: "24/7" },
            ].map((stat, i) => (
              <div key={i} className="p-4">
                <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-slate-400 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM SECTION */}
      <section className="py-24 bg-slate-50" id="contact">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block p-3 rounded-2xl bg-white shadow-md mb-8">
                <Building2 className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Let's start a conversation</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Ready to transform your business operations? Our team of experts is ready to help you find the perfect solution for your specific needs.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-primary shrink-0 mt-1">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Global Headquarters</h4>
                    <p className="text-slate-600">123 Innovation Drive, Tech District<br />San Francisco, CA 94105</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-primary shrink-0 mt-1">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Sales Department</h4>
                    <p className="text-slate-600">+1 (555) 123-4567<br />sales@nexuscore.com</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="border-none shadow-2xl shadow-slate-200/50">
              <CardHeader className="pb-4">
                <CardTitle>Send us a message</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" className="h-11" {...field} />
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
                            <Input placeholder="john@company.com" className="h-11" {...field} />
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
                              placeholder="Tell us about your project needs..." 
                              className="min-h-[120px] resize-none" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      className="w-full h-12 font-semibold text-base"
                      disabled={contactMutation.isPending}
                    >
                      {contactMutation.isPending ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
