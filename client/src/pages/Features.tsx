import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { 
  Code2, Globe, Smartphone, Cloud, Database, Layers, 
  ShieldCheck, Zap, Users, GitBranch, Monitor, Settings
} from "lucide-react";

export default function Features() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const features = [
    {
      icon: <Code2 className="h-8 w-8" />,
      title: "Modern Tech Stack",
      desc: "We use the latest technologies including React, Node.js, Python, and cloud-native tools to build robust applications.",
      color: "text-blue-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: <ShieldCheck className="h-8 w-8" />,
      title: "Security First",
      desc: "Every application we build follows security best practices with encryption, authentication, and regular security audits.",
      color: "text-green-500",
      bgColor: "bg-green-50"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "High Performance",
      desc: "Optimized code, efficient algorithms, and smart caching ensure your applications run fast and smooth.",
      color: "text-amber-500",
      bgColor: "bg-amber-50"
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Cloud Native",
      desc: "Built for the cloud from day one, with auto-scaling, high availability, and disaster recovery capabilities.",
      color: "text-indigo-500",
      bgColor: "bg-indigo-50"
    },
    {
      icon: <GitBranch className="h-8 w-8" />,
      title: "Version Control",
      desc: "Full version control and CI/CD pipelines ensure reliable, traceable deployments every time.",
      color: "text-purple-500",
      bgColor: "bg-purple-50"
    },
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "Responsive Design",
      desc: "All our web applications are fully responsive, providing great user experience across all devices.",
      color: "text-pink-500",
      bgColor: "bg-pink-50"
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Scalable Architecture",
      desc: "Database design and system architecture built to handle growth from startup to enterprise scale.",
      color: "text-teal-500",
      bgColor: "bg-teal-50"
    },
    {
      icon: <Layers className="h-8 w-8" />,
      title: "API-First Approach",
      desc: "Clean, well-documented APIs that enable easy integration with other systems and future expansion.",
      color: "text-orange-500",
      bgColor: "bg-orange-50"
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Automated Testing",
      desc: "Comprehensive test suites including unit tests, integration tests, and end-to-end testing.",
      color: "text-slate-500",
      bgColor: "bg-slate-50"
    }
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
              Features & Capabilities
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              Discover the technologies, methodologies, and practices that make Chain Software Group your ideal development partner.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-xl transition-all duration-300"
                data-testid={`feature-card-${i}`}
              >
                <div className={`h-16 w-16 rounded-2xl ${feature.bgColor} flex items-center justify-center mb-6 ${feature.color}`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Something Great?</h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our expertise can help bring your project to life.
          </p>
          <a 
            href="mailto:contact@chain-developments.com"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            data-testid="button-contact-us"
          >
            Contact Us
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
