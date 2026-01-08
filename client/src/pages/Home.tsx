import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { 
  ArrowRight, Code2, ShieldCheck, Zap, Globe, Users, 
  CheckCircle2, Building2, Layers, Smartphone, Database, Cloud
} from "lucide-react";
import { Link } from "wouter";

export default function Home() {
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
          <div className="absolute -top-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-emerald-100/50 blur-3xl opacity-60" />
          <div className="absolute top-[60%] -left-[10%] w-[50%] h-[50%] rounded-full bg-teal-50/60 blur-3xl opacity-50" />
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
                Professional Software Development
              </motion.div>
              
              <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                Transform Your Ideas Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-600">Powerful Software</span>
              </motion.h1>
              
              <motion.p variants={fadeIn} className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
                Chain Software Group delivers custom software solutions that drive business growth. From web applications to enterprise systems, we build technology that works for you.
              </motion.p>
              
              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link href="/solutions">
                  <Button size="lg" className="w-full sm:w-auto px-8 h-12 text-base shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all hover:-translate-y-1" data-testid="button-get-started">
                    View Our Solutions <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto px-8 h-12 text-base border-slate-200 hover:bg-slate-50 hover:text-slate-900" data-testid="button-learn-more">
                    Learn More
                  </Button>
                </Link>
              </motion.div>

              <motion.div variants={fadeIn} className="mt-12 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" /> <span>Custom Development</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" /> <span>Scalable Solutions</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" /> <span>Ongoing Support</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              className="flex-1 w-full max-w-[600px] lg:max-w-none relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-slate-200/50 border border-slate-100 bg-white aspect-[4/3]">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200" 
                  alt="Software Development Team" 
                  className="object-cover w-full h-full"
                />
                
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 hidden md:block">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                      <ShieldCheck className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">Secure & Reliable</p>
                      <p className="text-xs text-slate-500">Enterprise-grade security</p>
                    </div>
                  </div>
                </div>

                <div className="absolute top-10 -right-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 hidden md:block">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-primary">
                      <Code2 className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">Clean Code</p>
                      <p className="text-xs text-slate-500">Best practices always</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TRUSTED BY */}
      <section className="py-10 border-y border-slate-100 bg-slate-50/50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-medium text-slate-500 mb-8 uppercase tracking-wider">Trusted by businesses worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
            <h3 className="text-xl font-bold text-slate-800">Enterprise Clients</h3>
            <h3 className="text-xl font-bold text-slate-800">Startups</h3>
            <h3 className="text-xl font-bold text-slate-800">Small Business</h3>
            <h3 className="text-xl font-bold text-slate-800">Government</h3>
            <h3 className="text-xl font-bold text-slate-800">Healthcare</h3>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-24 bg-white" id="features">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Services</h2>
            <p className="text-lg text-slate-600">We provide comprehensive software development services tailored to your business needs, delivering solutions that scale with your growth.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Code2 className="h-6 w-6 text-blue-500" />,
                title: "Custom Software Development",
                desc: "Tailored solutions built from the ground up to meet your unique business requirements and workflows."
              },
              {
                icon: <Globe className="h-6 w-6 text-green-500" />,
                title: "Web Application Development",
                desc: "Modern, responsive web applications using cutting-edge technologies and frameworks."
              },
              {
                icon: <Smartphone className="h-6 w-6 text-purple-500" />,
                title: "Mobile App Development",
                desc: "Native and cross-platform mobile applications for iOS and Android platforms."
              },
              {
                icon: <Cloud className="h-6 w-6 text-indigo-500" />,
                title: "Cloud Solutions",
                desc: "Scalable cloud infrastructure, migration services, and cloud-native development."
              },
              {
                icon: <Database className="h-6 w-6 text-amber-500" />,
                title: "Database Design & Management",
                desc: "Optimized database architecture, data modeling, and performance tuning."
              },
              {
                icon: <Layers className="h-6 w-6 text-pink-500" />,
                title: "API Development & Integration",
                desc: "RESTful and GraphQL APIs, third-party integrations, and system connectivity."
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300"
                data-testid={`card-service-${i}`}
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
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#4b5563 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>
        
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Projects Delivered", value: "150+" },
              { label: "Happy Clients", value: "80+" },
              { label: "Years Experience", value: "10+" },
              { label: "Team Members", value: "25+" },
            ].map((stat, i) => (
              <div key={i} className="p-4" data-testid={`stat-${i}`}>
                <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-slate-400 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT HIGHLIGHT */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block p-3 rounded-2xl bg-white shadow-md mb-8">
                <Building2 className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Our Flagship Product</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Visit <a href="https://chainsoftwaregroup.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">ChainSoftwareGroup.com</a> to explore our enterprise software platform designed for modern businesses.
              </p>
              
              <div className="space-y-4">
                {[
                  "Enterprise-grade security and compliance",
                  "Scalable architecture for growing businesses", 
                  "Seamless integration with existing systems",
                  "24/7 dedicated support team"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <a href="https://chainsoftwaregroup.com" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="px-8" data-testid="button-visit-product">
                    Visit ChainSoftwareGroup.com <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>

            <Card className="border-none shadow-2xl shadow-slate-200/50">
              <CardHeader className="pb-4">
                <CardTitle>Get in Touch</CardTitle>
                <CardDescription>Ready to start your project? Contact us to discuss your needs.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-primary shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Website</h4>
                    <p className="text-slate-600">chain-developments.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-primary shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Email</h4>
                    <a href="mailto:contact@chain-developments.com" className="text-primary hover:underline">contact@chain-developments.com</a>
                  </div>
                </div>

                <Link href="/about">
                  <Button variant="outline" className="w-full mt-4" data-testid="button-learn-about-us">
                    Learn More About Us
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
