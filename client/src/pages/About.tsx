import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { 
  Target, Heart, Users, Award, 
  CheckCircle2, ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Excellence",
      desc: "We strive for excellence in every line of code, every design decision, and every client interaction."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Passion",
      desc: "We're passionate about technology and its power to transform businesses and improve lives."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Collaboration",
      desc: "We work closely with our clients as partners, ensuring their vision becomes reality."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Integrity",
      desc: "We operate with complete transparency, honesty, and accountability in everything we do."
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
              About Chain Software Group
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              We are a team of passionate developers, designers, and strategists dedicated to building exceptional software solutions.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Chain Software Group was founded with a simple mission: to help businesses leverage technology to achieve their goals. We recognized that many companies struggle to find reliable development partners who truly understand their needs.
                </p>
                <p>
                  Over the years, we've grown from a small team of developers into a full-service software development company. We've worked with startups, small businesses, and enterprise clients across various industries, delivering solutions that make a real difference.
                </p>
                <p>
                  Today, we continue to push the boundaries of what's possible, staying current with the latest technologies while maintaining our commitment to quality, reliability, and client satisfaction.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" 
                  alt="Team collaboration" 
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Values</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              These core values guide everything we do and shape how we work with our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-8 rounded-2xl bg-white shadow-sm"
                data-testid={`value-card-${i}`}
              >
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 text-primary">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">Why Choose Us</h2>
            
            <div className="space-y-6">
              {[
                "Experienced team with 10+ years in software development",
                "Full-stack capabilities from frontend to backend to cloud",
                "Agile methodology for flexible, iterative development",
                "Transparent communication and regular progress updates",
                "Post-launch support and maintenance options",
                "Proven track record with 150+ successful projects"
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-slate-50"
                >
                  <CheckCircle2 className="h-6 w-6 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-lg">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Ready to turn your ideas into reality? We'd love to hear about your project.
          </p>
          <a href="mailto:contact@chain-developments.com">
            <Button size="lg" className="px-8" data-testid="button-contact">
              Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
