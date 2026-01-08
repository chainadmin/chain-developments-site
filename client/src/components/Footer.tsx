import { Link } from "wouter";
import { Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { api } from "@shared/routes";
import { useSubscribeNewsletter } from "@/hooks/use-contact";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";

export function Footer() {
  const newsletterMutation = useSubscribeNewsletter();
  
  const form = useForm({
    resolver: zodResolver(api.newsletter.subscribe.input),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: z.infer<typeof api.newsletter.subscribe.input>) => {
    newsletterMutation.mutate(data, {
      onSuccess: () => form.reset(),
    });
  };

  return (
    <footer className="bg-slate-950 text-slate-200 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 text-primary-foreground"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="text-xl font-bold font-heading text-white">
                Nexus<span className="text-primary">Core</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Empowering businesses with enterprise-grade solutions designed for scale, security, and performance.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 font-heading">Solutions</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link href="/analytics" className="hover:text-primary transition-colors">Enterprise Analytics</Link></li>
              <li><Link href="/cloud" className="hover:text-primary transition-colors">Cloud Infrastructure</Link></li>
              <li><Link href="/security" className="hover:text-primary transition-colors">Cybersecurity</Link></li>
              <li><Link href="/automation" className="hover:text-primary transition-colors">Process Automation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 font-heading">Company</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 font-heading">Stay Updated</h4>
            <p className="text-slate-400 text-sm mb-4">Subscribe to our newsletter for the latest industry insights.</p>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                <div className="flex gap-2">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormControl>
                          <Input 
                            placeholder="Enter your email" 
                            className="bg-slate-900 border-slate-800 focus:border-primary text-white placeholder:text-slate-600"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button 
                    type="submit" 
                    size="icon" 
                    disabled={newsletterMutation.isPending}
                    className="shrink-0"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} NexusCore Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-white transition-colors">Cookie Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
