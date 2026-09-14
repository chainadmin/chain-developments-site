import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { FileText, Mail } from "lucide-react";

export default function Terms() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const lastUpdated = "September 14, 2026";

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Navigation />

      <section className="pt-32 pb-16 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-primary/10 text-primary mb-6">
              <FileText className="h-7 w-7" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
              Terms of Service
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Last updated: {lastUpdated}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto prose prose-slate dark:prose-invert prose-headings:font-heading prose-headings:font-bold prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
            <p>
              These Terms of Service ("Terms") govern your access to and use of the websites, applications, and
              software products operated by Chain Software Group ("Chain Software Group," "we," "us," or
              "our"), including chain-developments.com, ChainSoftwareGroup.com, DebtManagerPro.com,
              House-Spades.com, and Buzzreel (buzzreel.app) (collectively, the "Services"). By accessing or
              using any of our Services, you agree to be bound by these Terms. If you do not agree to these
              Terms, please do not use our Services.
            </p>

            <h2>1. Who We Are</h2>
            <p>
              Chain Software Group creates business solutions for the everyday entrepreneur. We build and
              operate a portfolio of software products spanning business communications, collections and
              finance management, entertainment discovery, and online gaming. Each product may also be
              subject to additional product-specific terms presented within that product; where a conflict
              exists, the product-specific terms govern for that product.
            </p>

            <h2>2. Eligibility</h2>
            <p>
              You must be at least 13 years old to use our Services. If you are under the age of majority in
              your jurisdiction, you may only use our Services with the involvement and consent of a parent or
              legal guardian. By using our Services, you represent that you meet these requirements.
            </p>

            <h2>3. Accounts</h2>
            <p>
              Some of our Services require you to create an account. You are responsible for maintaining the
              confidentiality of your login credentials and for all activity that occurs under your account. You
              agree to provide accurate and complete information when creating an account and to keep that
              information up to date. Notify us immediately at{" "}
              <a href="mailto:support@chainsoftwaregroup.com">support@chainsoftwaregroup.com</a> if you
              suspect any unauthorized use of your account.
            </p>

            <h2>4. Acceptable Use</h2>
            <p>You agree not to, and not to attempt to:</p>
            <ul>
              <li>Use the Services for any unlawful purpose or in violation of any applicable law or regulation;</li>
              <li>Interfere with, disrupt, or attempt to gain unauthorized access to any Service, server, or network;</li>
              <li>Reverse engineer, decompile, or disassemble any part of the Services, except as permitted by law;</li>
              <li>Use automated means (bots, scrapers, etc.) to access the Services without our prior written consent;</li>
              <li>Upload or transmit viruses, malware, or other harmful code;</li>
              <li>Harass, abuse, or harm another person through use of the Services;</li>
              <li>Cheat, exploit bugs, or use unauthorized third-party software to gain an unfair advantage in House-Spades or any other game we operate; or</li>
              <li>Misrepresent your identity or impersonate any person or entity.</li>
            </ul>

            <h2>5. Subscriptions, Fees, and Payment</h2>
            <p>
              Certain Services, including ChainSoftwareGroup.com and DebtManagerPro.com, are offered on a
              subscription or paid basis. By purchasing a subscription, you agree to pay all applicable fees as
              described at the time of purchase. Fees are billed in advance on a recurring basis unless
              otherwise stated, and, except where required by law, are non-refundable. We reserve the right to
              change our pricing with reasonable advance notice. You are responsible for any taxes associated
              with your purchase.
            </p>

            <h2>6. Intellectual Property</h2>
            <p>
              All content, features, and functionality of the Services — including software, text, graphics,
              logos, and trademarks — are owned by Chain Software Group or our licensors and are protected by
              copyright, trademark, and other intellectual property laws. We grant you a limited,
              non-exclusive, non-transferable, revocable license to access and use the Services for their
              intended purpose. You may not copy, modify, distribute, sell, or lease any part of the Services
              without our prior written consent.
            </p>

            <h2>7. User Content</h2>
            <p>
              Some Services may allow you to submit, upload, or store content (such as messages, notes,
              documents, or watchlists). You retain ownership of your content, but you grant us a worldwide,
              non-exclusive, royalty-free license to host, store, and process that content solely as necessary to
              provide the Services to you. You are solely responsible for the content you submit and for
              ensuring you have the right to share it.
            </p>

            <h2>8. Third-Party Services</h2>
            <p>
              Our Services may integrate with or link to third-party services, platforms, or payment processors.
              We are not responsible for the availability, accuracy, or practices of any third-party service, and
              your use of those services is governed by their own terms and policies.
            </p>

            <h2>9. Disclaimers</h2>
            <p>
              THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, WHETHER
              EXPRESS OR IMPLIED, INCLUDING, WITHOUT LIMITATION, IMPLIED WARRANTIES OF MERCHANTABILITY,
              FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE
              SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR COMPLETELY SECURE.
            </p>

            <h2>10. Limitation of Liability</h2>
            <p>
              TO THE FULLEST EXTENT PERMITTED BY LAW, CHAIN SOFTWARE GROUP AND ITS OFFICERS, EMPLOYEES, AND
              AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE
              DAMAGES, OR ANY LOSS OF PROFITS, REVENUE, DATA, OR GOODWILL, ARISING OUT OF OR RELATED TO YOUR
              USE OF THE SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. OUR TOTAL
              AGGREGATE LIABILITY FOR ANY CLAIM ARISING FROM THESE TERMS OR THE SERVICES SHALL NOT EXCEED THE
              AMOUNT YOU PAID US, IF ANY, IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
            </p>

            <h2>11. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Chain Software Group and its officers, employees, and
              agents from any claims, damages, liabilities, losses, and expenses (including reasonable
              attorneys' fees) arising out of or related to your use of the Services, your violation of these
              Terms, or your violation of any rights of a third party.
            </p>

            <h2>12. Termination</h2>
            <p>
              We may suspend or terminate your access to any Service at any time, with or without notice, for
              conduct that we believe violates these Terms or is otherwise harmful to other users, us, or third
              parties. You may stop using the Services or cancel your subscription at any time. Provisions of
              these Terms that by their nature should survive termination will survive, including intellectual
              property, disclaimers, limitation of liability, and indemnification provisions.
            </p>

            <h2>13. Changes to the Services or These Terms</h2>
            <p>
              We may modify or discontinue any Service, in whole or in part, at any time. We may also update
              these Terms from time to time. If we make material changes, we will post the updated Terms on
              this page with a revised "Last updated" date. Your continued use of the Services after changes
              become effective constitutes your acceptance of the revised Terms.
            </p>

            <h2>14. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the United States
              and the state in which Chain Software Group operates, without regard to its conflict of law
              provisions. Any disputes arising out of or relating to these Terms or the Services shall be
              resolved in accordance with applicable law.
            </p>

            <h2>15. Severability</h2>
            <p>
              If any provision of these Terms is found to be unenforceable or invalid, that provision will be
              limited or eliminated to the minimum extent necessary, and the remaining provisions will remain
              in full force and effect.
            </p>

            <h2>16. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="flex items-center gap-2 not-prose">
              <Mail className="h-5 w-5 text-primary" />
              <a href="mailto:support@chainsoftwaregroup.com" className="text-primary font-semibold hover:underline">
                support@chainsoftwaregroup.com
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
