import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

export default function Pricing() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small projects and MVPs",
      price: "Custom",
      features: [
        "Initial consultation",
        "Project scoping & planning",
        "Development & testing",
        "Basic documentation",
        "30-day support post-launch",
        "Source code ownership"
      ],
      cta: "Get Quote",
      highlighted: false
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses",
      price: "Custom",
      features: [
        "Everything in Starter",
        "Advanced architecture design",
        "CI/CD pipeline setup",
        "Comprehensive documentation",
        "90-day support post-launch",
        "Performance optimization",
        "Security audit included"
      ],
      cta: "Get Quote",
      highlighted: true
    },
    {
      name: "Enterprise",
      description: "For large-scale enterprise needs",
      price: "Custom",
      features: [
        "Everything in Professional",
        "Dedicated project manager",
        "Priority development queue",
        "24/7 support available",
        "SLA guarantees",
        "Ongoing maintenance options",
        "Training for your team",
        "Custom integrations"
      ],
      cta: "Contact Sales",
      highlighted: false
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
              Transparent Pricing
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              We provide custom quotes based on your specific needs. Every project is unique, and our pricing reflects the value and quality we deliver.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card 
                  className={`h-full relative ${plan.highlighted ? 'border-primary shadow-xl' : ''}`}
                  data-testid={`pricing-card-${i}`}
                >
                  {plan.highlighted && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-primary text-primary-foreground text-sm font-semibold px-4 py-1 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <CardHeader className="text-center pt-8">
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription className="text-base">{plan.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-extrabold text-slate-900">{plan.price}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <ul className="space-y-3">
                      {plan.features.map((feature, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                          <span className="text-slate-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <a href="mailto:contact@chain-developments.com">
                      <Button 
                        className="w-full" 
                        variant={plan.highlighted ? "default" : "outline"}
                        data-testid={`button-${plan.name.toLowerCase()}-quote`}
                      >
                        {plan.cta} <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">How Our Pricing Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="p-6 bg-white rounded-xl shadow-sm">
                <div className="text-3xl font-bold text-primary mb-2">1</div>
                <h3 className="font-bold text-slate-900 mb-2">Initial Consultation</h3>
                <p className="text-slate-600 text-sm">We discuss your project requirements, goals, and timeline in detail.</p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-sm">
                <div className="text-3xl font-bold text-primary mb-2">2</div>
                <h3 className="font-bold text-slate-900 mb-2">Custom Proposal</h3>
                <p className="text-slate-600 text-sm">You receive a detailed proposal with scope, timeline, and transparent pricing.</p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-sm">
                <div className="text-3xl font-bold text-primary mb-2">3</div>
                <h3 className="font-bold text-slate-900 mb-2">Development Begins</h3>
                <p className="text-slate-600 text-sm">Once approved, we start development with regular updates and milestones.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and custom quote for your project.
          </p>
          <a href="mailto:contact@chain-developments.com">
            <Button size="lg" className="px-8" data-testid="button-get-free-quote">
              Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
