import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { 
  ExternalLink, Mail, MessageSquare, Phone, Bot, 
  Spade, CreditCard, BarChart3, Users, Zap, Shield
} from "lucide-react";

export default function Products() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const products = [
    {
      name: "ChainSoftwareGroup.com",
      tagline: "All-in-One SaaS Communication Platform",
      description: "A comprehensive SaaS platform designed to streamline your business communications. Manage all your customer outreach from one centralized dashboard with powerful automation and AI capabilities.",
      url: "https://chainsoftwaregroup.com",
      icon: Zap,
      color: "bg-emerald-500",
      features: [
        {
          icon: Mail,
          title: "Email Campaigns",
          description: "Create and send targeted email campaigns with advanced analytics and A/B testing capabilities."
        },
        {
          icon: MessageSquare,
          title: "SMS/Text Campaigns",
          description: "Reach customers instantly with SMS marketing campaigns, automated reminders, and notifications."
        },
        {
          icon: Phone,
          title: "Phone System",
          description: "Built-in VoIP phone system for calls, voicemail, and call tracking all integrated with your contacts."
        },
        {
          icon: Bot,
          title: "AI Messaging",
          description: "Intelligent AI-powered auto-responses that engage with customers 24/7, qualifying leads and answering questions."
        }
      ],
      badges: ["SaaS", "Marketing", "Automation", "AI-Powered"]
    },
    {
      name: "DebtManagerPro.com",
      tagline: "Professional Collection Management Software",
      description: "Powerful collection software designed to help businesses manage accounts receivable efficiently. Track, organize, and recover outstanding debts with our comprehensive management system.",
      url: "https://debtmanagerpro.com",
      icon: CreditCard,
      color: "bg-blue-500",
      features: [
        {
          icon: BarChart3,
          title: "Account Management",
          description: "Centralized dashboard to track all accounts, payment history, and outstanding balances in real-time."
        },
        {
          icon: Users,
          title: "Debtor Profiles",
          description: "Comprehensive debtor profiles with contact information, payment plans, and communication history."
        },
        {
          icon: MessageSquare,
          title: "Automated Follow-ups",
          description: "Set up automated reminders and follow-up sequences to improve collection rates."
        },
        {
          icon: Shield,
          title: "Compliance Ready",
          description: "Built with compliance in mind, helping you stay within regulatory guidelines."
        }
      ],
      badges: ["Finance", "Collections", "B2B", "Automation"]
    },
    {
      name: "House-Spades.com",
      tagline: "Classic Card Game Experience",
      description: "Enjoy the timeless card game of Spades online. Challenge friends or play against opponents in this classic trick-taking card game that's been entertaining players for generations.",
      url: "https://house-spades.com",
      icon: Spade,
      color: "bg-purple-500",
      features: [
        {
          icon: Users,
          title: "Multiplayer",
          description: "Play with friends or match with players from around the world in real-time games."
        },
        {
          icon: BarChart3,
          title: "Leaderboards",
          description: "Compete for top rankings and track your progress on global leaderboards."
        },
        {
          icon: Zap,
          title: "Quick Matches",
          description: "Jump into games quickly with our fast matchmaking system."
        },
        {
          icon: Shield,
          title: "Fair Play",
          description: "Anti-cheat systems ensure a fair and enjoyable gaming experience for everyone."
        }
      ],
      badges: ["Gaming", "Cards", "Multiplayer", "Entertainment"]
    }
  ];

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Navigation />

      <section className="pt-32 pb-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Our Products
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
              Software Solutions Built for Success
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              Explore our suite of products designed to help businesses communicate better, manage finances, and engage users.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-24">
            {products.map((product, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
              >
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl ${product.color} text-white`}>
                      <product.icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-slate-900 dark:text-white" data-testid={`product-title-${i}`}>
                        {product.name}
                      </h2>
                      <p className="text-primary font-medium">{product.tagline}</p>
                    </div>
                  </div>

                  <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {product.badges.map((badge, j) => (
                      <Badge key={j} variant="secondary" className="text-xs">
                        {badge}
                      </Badge>
                    ))}
                  </div>

                  <a href={product.url} target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="mt-4" data-testid={`button-visit-${i}`}>
                      Visit {product.name} <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </div>

                <div className="flex-1 w-full">
                  <Card className="overflow-hidden">
                    <CardHeader className={`${product.color} text-white`}>
                      <CardTitle className="text-xl">Key Features</CardTitle>
                      <CardDescription className="text-white/80">
                        What makes {product.name} stand out
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="grid grid-cols-1 sm:grid-cols-2">
                        {product.features.map((feature, j) => (
                          <div 
                            key={j} 
                            className="p-6 border-b border-r border-border last:border-b-0 sm:odd:border-r sm:even:border-r-0"
                            data-testid={`feature-${i}-${j}`}
                          >
                            <feature.icon className={`w-6 h-6 mb-3 ${product.color.replace('bg-', 'text-')}`} />
                            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                              {feature.title}
                            </h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                              {feature.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Interested in Our Products?
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Contact us to learn more about how our software solutions can help your business grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:support@chainsoftwaregroup.com">
              <Button size="lg" className="px-8" data-testid="button-contact-products">
                Contact Us <Mail className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <a href="tel:+17165343086">
              <Button size="lg" variant="outline" className="px-8 border-white/20 hover:bg-white/10" data-testid="button-call-products">
                Call (716) 534-3086 <Phone className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
