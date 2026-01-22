import { Link } from "wouter";
import { Twitter, Linkedin, Github, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-200 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/logo.jpg" 
                alt="Chain Software Group" 
                className="w-10 h-10 rounded-lg object-cover"
              />
              <span className="text-xl font-bold font-heading text-white">
                Chain <span className="text-primary">Software Group</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Building powerful software solutions that drive business growth. From custom development to enterprise platforms, we deliver excellence.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" data-testid="link-twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" data-testid="link-linkedin">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" data-testid="link-github">
                <Github className="w-5 h-5" />
              </a>
              <a href="mailto:support@chainsoftwaregroup.com" className="hover:text-white transition-colors" data-testid="link-email">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 font-heading">Services</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link href="/solutions" className="hover:text-primary transition-colors">Custom Software Development</Link></li>
              <li><Link href="/solutions" className="hover:text-primary transition-colors">Web Application Development</Link></li>
              <li><Link href="/solutions" className="hover:text-primary transition-colors">Mobile App Development</Link></li>
              <li><Link href="/solutions" className="hover:text-primary transition-colors">Cloud Solutions</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 font-heading">Company</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/features" className="hover:text-primary transition-colors">Features</Link></li>
              <li><Link href="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
              <li><a href="mailto:support@chainsoftwaregroup.com" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 font-heading">Products</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="https://chainsoftwaregroup.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">ChainSoftwareGroup.com</a></li>
              <li><Link href="/solutions" className="hover:text-primary transition-colors">Enterprise Solutions</Link></li>
              <li><Link href="/solutions" className="hover:text-primary transition-colors">API Integrations</Link></li>
              <li><Link href="/solutions" className="hover:text-primary transition-colors">Consulting Services</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p data-testid="text-copyright">&copy; {new Date().getFullYear()} Chain Software Group. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="text-slate-600">chain-developments.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
