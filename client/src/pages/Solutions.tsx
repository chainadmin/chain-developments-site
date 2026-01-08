import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { 
  ArrowRight, Code2, Globe, Smartphone, Cloud, 
  Database, Layers, Building2, ShoppingCart, Stethoscope, GraduationCap
} from "lucide-react";

export default function Solutions() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const services = [
    {
      icon: <Code2 className="h-10 w-10" />,
      title: "Custom Software Development",
      desc: "Bespoke software solutions designed and built specifically for your business processes and requirements.",
      features: ["Requirements Analysis", "Custom Architecture", "Agile Development", "Quality Assurance"]
    },
    {
      icon: <Globe className="h-10 w-10" />,
      title: "Web Application Development",
      desc: "Modern, responsive web applications that deliver exceptional user experiences across all devices.",
      features: ["React & Vue.js", "Node.js Backend", "Progressive Web Apps", "SEO Optimization"]
    },
    {
      icon: <Smartphone className="h-10 w-10" />,
      title: "Mobile App Development",
      desc: "Native and cross-platform mobile applications for iOS and Android that users love.",
      features: ["React Native", "iOS & Android", "App Store Deployment", "Push Notifications"]
    },
    {
      icon: <Cloud className="h-10 w-10" />,
      title: "Cloud Solutions",
      desc: "Cloud infrastructure design, migration, and management on AWS, Azure, and Google Cloud.",
      features: ["Cloud Migration", "DevOps & CI/CD", "Auto-scaling", "Cost Optimization"]
    },
    {
      icon: <Database className="h-10 w-10" />,
      title: "Database Solutions",
      desc: "Database design, optimization, and management for high-performance data operations.",
      features: ["Schema Design", "Performance Tuning", "Data Migration", "Backup & Recovery"]
    },
    {
      icon: <Layers className="h-10 w-10" />,
      title: "API Development",
      desc: "RESTful and GraphQL APIs that connect your systems and enable seamless integrations.",
      features: ["REST & GraphQL", "Documentation", "Third-party Integration", "Security"]
    }
  ];

  const industries = [
    { icon: <Building2 className="h-8 w-8" />, name: "Enterprise", desc: "Large-scale business solutions" },
    { icon: <ShoppingCart className="h-8 w-8" />, name: "E-Commerce", desc: "Online stores and marketplaces" },
    { icon: <Stethoscope className="h-8 w-8" />, name: "Healthcare", desc: "HIPAA-compliant systems" },
    { icon: <GraduationCap className="h-8 w-8" />, name: "Education", desc: "Learning management systems" },
  ];

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Navigation />

      <section className="pt-32 pb-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Our Solutions
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              Comprehensive software development services tailored to meet your unique business challenges and goals.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow duration-300" data-testid={`solution-card-${i}`}>
                  <CardHeader>
                    <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 text-primary">
                      {service.icon}
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.desc}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-slate-600">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Industries We Serve</h2>
            <p className="text-lg text-slate-600">We have experience across multiple industries and understand their unique requirements.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-8 rounded-2xl bg-white shadow-sm hover:shadow-lg transition-shadow"
                data-testid={`industry-card-${i}`}
              >
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{industry.name}</h3>
                <p className="text-slate-600 text-sm">{industry.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Flagship Product</h2>
              <p className="text-lg text-primary-foreground/80 max-w-xl">
                Visit ChainSoftwareGroup.com to explore our enterprise software platform designed for modern businesses.
              </p>
            </div>
            <a 
              href="https://chainsoftwaregroup.com" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="secondary" className="px-8" data-testid="button-visit-flagship">
                Visit ChainSoftwareGroup.com <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
