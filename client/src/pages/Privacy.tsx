import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Mail, ShieldCheck } from "lucide-react";

export default function Privacy() {
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
              <ShieldCheck className="h-7 w-7" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
              Privacy Policy
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
              Chain Software Group ("Chain Software Group," "we," "us," or "our") builds and operates a family
              of business software products, including ChainSoftwareGroup.com, DebtManagerPro.com,
              House-Spades.com, and Buzzreel (buzzreel.app), together with our corporate website at
              chain-developments.com (collectively, the "Services"). This Privacy Policy explains how we
              collect, use, disclose, and safeguard information when you visit our website or use any of our
              Services.
            </p>
            <p>
              By accessing or using our Services, you agree to the collection and use of information in
              accordance with this Privacy Policy. If you do not agree with this policy, please do not use our
              Services.
            </p>

            <h2>1. Information We Collect</h2>
            <p>We collect information in a few different ways:</p>
            <ul>
              <li>
                <strong>Information you provide directly.</strong> This includes your name, email address,
                phone number, company name, billing details, and any other information you submit through
                contact forms, account registration, customer support requests, or when purchasing or
                subscribing to one of our products.
              </li>
              <li>
                <strong>Information collected automatically.</strong> When you use our website or Services, we
                may automatically collect certain information about your device and usage, such as IP address,
                browser type, operating system, referring URLs, pages viewed, and the dates and times of your
                visits.
              </li>
              <li>
                <strong>Cookies and similar technologies.</strong> We use cookies, local storage, and similar
                tracking technologies to operate our Services, remember your preferences, and understand how
                our Services are used. You can control cookies through your browser settings, though disabling
                them may limit certain features.
              </li>
              <li>
                <strong>Information from product use.</strong> Depending on which product you use, we may
                collect additional information relevant to that product's function — for example, account and
                communication data within our business platforms, or gameplay statistics within House-Spades,
                or watchlist and viewing preferences within Buzzreel.
              </li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, maintain, operate, and improve our Services;</li>
              <li>Process transactions, subscriptions, and payments;</li>
              <li>Communicate with you, including responding to inquiries and sending administrative or support messages;</li>
              <li>Personalize your experience and remember your preferences;</li>
              <li>Monitor and analyze usage trends to improve functionality, security, and performance;</li>
              <li>Detect, prevent, and address fraud, abuse, and technical issues; and</li>
              <li>Comply with applicable legal obligations.</li>
            </ul>
            <p>
              We do not sell your personal information to third parties, and we do not use your information for
              purposes other than those described in this Policy without your consent.
            </p>

            <h2>3. How We Share Information</h2>
            <p>We may share information in the following circumstances:</p>
            <ul>
              <li>
                <strong>Service providers.</strong> We may share information with third-party vendors who
                perform services on our behalf, such as payment processing, hosting, email delivery, SMS
                delivery, analytics, and customer support.
              </li>
              <li>
                <strong>Legal requirements.</strong> We may disclose information if required to do so by law or
                in response to valid requests by public authorities.
              </li>
              <li>
                <strong>Business transfers.</strong> If Chain Software Group is involved in a merger,
                acquisition, or sale of assets, your information may be transferred as part of that transaction.
              </li>
              <li>
                <strong>With your consent.</strong> We may share information for any other purpose disclosed to
                you at the time you provide the information, or with your consent.
              </li>
            </ul>

            <h2>4. Data Security</h2>
            <p>
              We implement reasonable administrative, technical, and physical safeguards designed to protect
              your information from unauthorized access, disclosure, alteration, or destruction. However, no
              method of transmission over the internet or electronic storage is completely secure, and we
              cannot guarantee absolute security.
            </p>

            <h2>5. Data Retention</h2>
            <p>
              We retain personal information for as long as necessary to fulfill the purposes described in this
              Privacy Policy, unless a longer retention period is required or permitted by law, such as for tax,
              accounting, or legal compliance purposes.
            </p>

            <h2>6. Your Rights and Choices</h2>
            <p>Depending on your location, you may have certain rights regarding your personal information, including the right to:</p>
            <ul>
              <li>Request access to the personal information we hold about you;</li>
              <li>Request correction of inaccurate or incomplete information;</li>
              <li>Request deletion of your personal information;</li>
              <li>Opt out of marketing communications at any time by using the unsubscribe link in our emails or contacting us directly; and</li>
              <li>Withdraw consent where processing is based on consent.</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us at{" "}
              <a href="mailto:support@chainsoftwaregroup.com">support@chainsoftwaregroup.com</a>. We will
              respond to your request within a reasonable timeframe.
            </p>

            <h2>7. Children's Privacy</h2>
            <p>
              Our Services are not directed to children under the age of 13, and we do not knowingly collect
              personal information from children under 13. If we become aware that we have inadvertently
              collected personal information from a child under 13, we will take steps to delete it promptly.
            </p>

            <h2>8. Third-Party Links and Services</h2>
            <p>
              Our Services may contain links to third-party websites or services that are not owned or
              controlled by Chain Software Group. We are not responsible for the privacy practices or content of
              any third-party sites. We encourage you to review the privacy policies of any third-party services
              you interact with.
            </p>

            <h2>9. International Users</h2>
            <p>
              Our Services are operated from the United States. If you access our Services from outside the
              United States, your information may be transferred to, stored, and processed in the United States
              or other countries where our service providers operate.
            </p>

            <h2>10. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or for
              other operational, legal, or regulatory reasons. We will post the updated policy on this page with
              a revised "Last updated" date. Your continued use of our Services after any changes constitutes
              your acceptance of the updated policy.
            </p>

            <h2>11. Contact Us</h2>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data
              practices, please contact us at:
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
