import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  ExternalLink, Mail, MessageSquare, Phone, Bot,
  Spade, CreditCard, BarChart3, Users, Zap, Shield,
  WalletCards, Trophy, Sparkles, Film, Bell, Bookmark
} from "lucide-react";

export default function Products() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const products = [
    {
      name: "ChainSoftwareGroup.com",
      tagline: "Multi-Tenant Business & Communications Platform",
      description: "A comprehensive, multi-tenant SaaS platform built to run the day-to-day of a service business — from consumer communications and billing to compliance. Agencies and businesses get their own branded dashboard, complete with automation and AI built in, so every customer touchpoint lives in one place.",
      url: "https://chainsoftwaregroup.com",
      icon: Zap,
      color: "bg-emerald-500",
      features: [
        {
          icon: Mail,
          title: "Email Campaigns",
          description: "Branded email campaigns and templates with tracking, built for agency-level sending at scale."
        },
        {
          icon: MessageSquare,
          title: "SMS/Text Campaigns",
          description: "Compliant SMS outreach with automated reminders, opt-out handling, and delivery tracking."
        },
        {
          icon: Phone,
          title: "VoIP Phone System",
          description: "Integrated VoIP calling and voicemail, tied directly to customer records and communication history."
        },
        {
          icon: Bot,
          title: "AI Auto-Response",
          description: "AI-powered replies that engage customers around the clock, qualifying leads and answering common questions."
        }
      ],
      badges: ["SaaS", "Multi-Tenant", "Automation", "AI-Powered"]
    },
    {
      name: "DebtManagerPro.com",
      tagline: "The Calm Center of Your Collection Operation",
      description: "Purpose-built collection software for agencies that need a clear line from portfolio to payment. Debt Manager Pro brings account detail, collector productivity tools, and compliance controls together in one connected system, without losing the accountability that matters.",
      url: "https://debtmanagerpro.com",
      icon: CreditCard,
      color: "bg-blue-500",
      features: [
        {
          icon: WalletCards,
          title: "Payments That Reconcile",
          description: "Run cards, ACH, and checks directly from the account record, with a clean audit trail every time."
        },
        {
          icon: Users,
          title: "Collector Workstation",
          description: "Purpose-built tools for account work, permissions, productivity, and wage tracking."
        },
        {
          icon: BarChart3,
          title: "Portfolio Intelligence",
          description: "Placement, liquidation, and recovery data organized so leaders can make faster decisions."
        },
        {
          icon: Shield,
          title: "Compliance Built In",
          description: "FDCPA, GLBA, and TCPA-minded controls embedded directly into daily collector workflows."
        }
      ],
      badges: ["Finance", "Collections", "B2B", "Compliance"]
    },
    {
      name: "House-Spades.com",
      tagline: "Classic & Custom Spades, Online",
      description: "A polished online take on the timeless trick-taking card game. Play the classic Ace High game or the custom Joker Joker Deuce Deuce variant, solo against bots or in live matchmaking, with skill-based ranking that keeps every hand competitive.",
      url: "https://house-spades.com",
      icon: Spade,
      color: "bg-purple-500",
      features: [
        {
          icon: Users,
          title: "Live Multiplayer",
          description: "Play with friends or get matched with players worldwide, with bots filling any empty seats."
        },
        {
          icon: Trophy,
          title: "ELO Ranking",
          description: "Skill-based matchmaking and rating tiers keep matches fair and genuinely competitive."
        },
        {
          icon: Zap,
          title: "Two Game Modes",
          description: "Play classic Ace High Spades or the custom Joker Joker Deuce Deuce variant with its own trump order."
        },
        {
          icon: Shield,
          title: "Fair Play",
          description: "Anti-cheat systems and consistent scoring rules keep every game honest."
        }
      ],
      badges: ["Gaming", "Cards", "Multiplayer", "iOS & Android"]
    },
    {
      name: "Buzzreel",
      tagline: "Discover What's Trending Before Everyone Else",
      description: "A mobile-first entertainment discovery app that helps people find trending movies, TV shows, and podcasts, track upcoming releases, and manage personal watchlists — all in one clean, fast experience for iOS, Android, and the web.",
      url: "https://buzzreel.app",
      icon: Film,
      color: "bg-orange-500",
      features: [
        {
          icon: Sparkles,
          title: "Trending Discovery",
          description: "Browse what's trending in movies, TV, and podcasts, updated to reflect what people are watching right now."
        },
        {
          icon: Bell,
          title: "Upcoming Releases",
          description: "Track release dates for titles you care about and get notified as soon as they drop."
        },
        {
          icon: Bookmark,
          title: "Personal Watchlists",
          description: "Save titles across movies, shows, and podcasts to a watchlist that follows you across devices."
        },
        {
          icon: BarChart3,
          title: "Buzz Meter",
          description: "See what's buzzing by region so you always know what to watch next."
        }
      ],
      badges: ["Entertainment", "Mobile App", "iOS & Android", "Streaming Guide"]
    }
  ];

  const slugify = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Navigation />

      <section className="relative pt-32 pb-16 overflow-hidden bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-background">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-emerald-100/50 dark:bg-emerald-500/10 blur-3xl opacity-60" />
          <div className="absolute top-[50%] -left-[10%] w-[45%] h-[45%] rounded-full bg-teal-50/60 dark:bg-teal-500/10 blur-3xl opacity-50" />
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-6">
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
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              Explore our suite of products designed to help businesses communicate better, manage finances, and engage users.
            </p>
            <p className="text-base font-semibold text-primary">
              Creating business solutions for the everyday entrepreneur.
            </p>
          </motion.div>

          <motion.div
            className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            {[
              { label: "Products Live", value: `${products.length}` },
              { label: "Industries Served", value: "4+" },
              { label: "Platforms", value: "Web & Mobile" },
              { label: "Support", value: "Always On" },
            ].map((stat, i) => (
              <div
                key={i}
                className="rounded-xl bg-white/70 dark:bg-white/5 border border-slate-100 dark:border-white/10 backdrop-blur-sm px-4 py-5 text-center"
                data-testid={`products-stat-${i}`}
              >
                <div className="text-xl md:text-2xl font-extrabold text-slate-900 dark:text-white">{stat.value}</div>
                <div className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          <motion.div
            className="mt-10 flex flex-wrap justify-center gap-3"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            {products.map((product, i) => (
              <a
                key={i}
                href={`#${slugify(product.name)}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-sm font-medium text-slate-700 dark:text-slate-200 hover:border-primary/40 hover:text-primary transition-colors"
                data-testid={`link-jump-${i}`}
              >
                <span className={`h-2 w-2 rounded-full ${product.color}`} />
                {product.name}
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-24">
            {products.map((product, i) => (
              <motion.div
                key={i}
                id={slugify(product.name)}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center scroll-mt-24`}
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
