import { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | OroraSoft",
  description:
    "Privacy Policy for OroraSoft - Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="relative">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <div className="container mx-auto px-6 py-16 md:py-24">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg md:text-xl max-w-3xl opacity-90">
            OroraSoft is committed to protecting your privacy and ensuring the
            security of your personal information.
          </p>
          <div className="flex items-center mt-6 text-sm">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <h2 className="text-xl font-bold mb-4">Contents</h2>
              <nav className="space-y-2">
                {[
                  { id: "introduction", label: "Introduction" },
                  {
                    id: "information-collection",
                    label: "Information Collection",
                  },
                  { id: "information-use", label: "Use of Information" },
                  { id: "information-sharing", label: "Information Sharing" },
                  { id: "data-security", label: "Data Security" },
                  { id: "user-rights", label: "Your Rights" },
                  { id: "cookies", label: "Cookies & Technologies" },
                  { id: "children", label: "Children's Privacy" },
                  { id: "updates", label: "Policy Updates" },
                  { id: "contact", label: "Contact Us" },
                ].map((item) => (
                  <div key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="block text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      {item.label}
                    </a>
                  </div>
                ))}
              </nav>
              <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
                <p className="text-sm text-blue-800">
                  Last Updated: March 23, 2025
                </p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 prose prose-blue max-w-none">
            <section id="introduction" className="mb-12">
              <h2 className="text-2xl font-bold border-b pb-2 mb-6">
                Introduction
              </h2>
              <p>
                At OroraSoft, we specialize in creating innovative software
                solutions for businesses across various industries. This Privacy
                Policy explains our practices regarding the collection, use, and
                disclosure of information we receive from users of our website
                (www.ororasoft.com) and the services we provide.
              </p>
              <p>
                We take your privacy seriously and are committed to protecting
                your personal information. By accessing our website or using our
                services, you consent to the collection, use, and sharing of
                your information as described in this Privacy Policy. If you do
                not agree with our policies and practices, please do not use our
                services.
              </p>
            </section>

            <section id="information-collection" className="mb-12">
              <h2 className="text-2xl font-bold border-b pb-2 mb-6">
                Information We Collect
              </h2>

              <h3 className="text-xl font-semibold mt-6 mb-4">
                Personal Information
              </h3>
              <p>We may collect the following types of personal information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Contact Information:</strong> Name, email address,
                  phone number, company name, job title, and mailing address.
                </li>
                <li>
                  <strong>Account Information:</strong> Username, password,
                  account preferences, and profile information when you register
                  for an account.
                </li>
                <li>
                  <strong>Payment Information:</strong> Credit card details,
                  billing address, and other financial information necessary to
                  process payments.
                </li>
                <li>
                  <strong>Communication Data:</strong> Information you provide
                  when contacting us, including through our contact forms, email
                  correspondence, or customer support interactions.
                </li>
                <li>
                  <strong>Project Information:</strong> Details about your
                  business, project requirements, and other information you
                  share during consultations or project development.
                </li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-4">
                Automatically Collected Information
              </h3>
              <p>
                When you visit our website or use our services, we automatically
                collect certain information, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Usage Data:</strong> Information about how you
                  interact with our website, such as pages visited, time spent
                  on pages, links clicked, and features used.
                </li>
                <li>
                  <strong>Device Information:</strong> Device type, operating
                  system, browser type and version, screen resolution, and other
                  technical information about the device you use to access our
                  services.
                </li>
                <li>
                  <strong>Location Data:</strong> General location information
                  derived from your IP address.
                </li>
                <li>
                  <strong>Log Data:</strong> Server logs, including IP
                  addresses, access times, and error reports.
                </li>
              </ul>
            </section>

            <section id="information-use" className="mb-12">
              <h2 className="text-2xl font-bold border-b pb-2 mb-6">
                How We Use Your Information
              </h2>
              <p>
                We use the information we collect for various business and
                operational purposes, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Providing Services:</strong> To deliver the services
                  you request, manage your account, process payments, and
                  fulfill our contractual obligations.
                </li>
                <li>
                  <strong>Communication:</strong> To respond to your inquiries,
                  provide customer support, send administrative information, and
                  keep you informed about our services, updates, and events.
                </li>
                <li>
                  <strong>Personalization:</strong> To personalize your
                  experience, recommend relevant services, and provide tailored
                  content based on your preferences and interactions.
                </li>
                <li>
                  <strong>Improvement:</strong> To analyze usage patterns,
                  conduct research, and gather feedback to improve our website,
                  services, and user experience.
                </li>
                <li>
                  <strong>Marketing:</strong> To market our services to you,
                  including sending promotional communications, newsletters, and
                  information about special offers or events (you can opt out of
                  marketing communications at any time).
                </li>
                <li>
                  <strong>Security:</strong> To detect, prevent, and address
                  technical issues, fraud, or other illegal activities, and to
                  ensure the security of our website and services.
                </li>
                <li>
                  <strong>Compliance:</strong> To comply with legal obligations,
                  resolve disputes, and enforce our agreements.
                </li>
              </ul>
            </section>

            <section id="information-sharing" className="mb-12">
              <h2 className="text-2xl font-bold border-b pb-2 mb-6">
                Information Sharing and Disclosure
              </h2>
              <p>
                We may share your information with the following categories of
                recipients:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Service Providers:</strong> Third-party vendors,
                  consultants, and service providers who perform services on our
                  behalf, such as payment processing, data analysis, email
                  delivery, hosting, customer service, and marketing assistance.
                </li>
                <li>
                  <strong>Business Partners:</strong> Strategic partners with
                  whom we collaborate to offer certain products, services, or
                  promotions.
                </li>
                <li>
                  <strong>Professional Advisors:</strong> Accountants,
                  attorneys, consultants, and other professional advisors in
                  connection with the services they provide to us.
                </li>
                <li>
                  <strong>Legal Compliance:</strong> Law enforcement, regulatory
                  authorities, courts, or other government entities when
                  required by law, regulation, legal process, or governmental
                  request.
                </li>
                <li>
                  <strong>Business Transfers:</strong> In connection with a
                  corporate transaction, such as a merger, acquisition,
                  reorganization, or sale of assets, where your information may
                  be transferred as a business asset.
                </li>
              </ul>
              <p className="mt-4">
                We do not sell your personal information to third parties. We
                may share aggregated or de-identified information that cannot
                reasonably be used to identify you with third parties for
                various purposes, including data analytics and marketing.
              </p>
            </section>

            <section id="data-security" className="mb-12">
              <h2 className="text-2xl font-bold border-b pb-2 mb-6">
                Data Security
              </h2>
              <p>
                We implement appropriate technical and organizational measures
                to protect the security, confidentiality, and integrity of your
                personal information. These measures include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Encryption of sensitive data in transit and at rest</li>
                <li>Regular security assessments and vulnerability testing</li>
                <li>Access controls and authentication mechanisms</li>
                <li>Secure development practices and code reviews</li>
                <li>Regular backups and disaster recovery planning</li>
                <li>
                  Employee training on data protection and security best
                  practices
                </li>
              </ul>
              <p className="mt-4">
                However, no method of transmission over the Internet or
                electronic storage is 100% secure. While we strive to use
                commercially acceptable means to protect your personal
                information, we cannot guarantee its absolute security. You are
                responsible for maintaining the confidentiality of any passwords
                or account credentials.
              </p>
            </section>

            <section id="user-rights" className="mb-12">
              <h2 className="text-2xl font-bold border-b pb-2 mb-6">
                Your Rights and Choices
              </h2>
              <p>
                Depending on your location, you may have certain rights
                regarding your personal information. These may include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Access:</strong> The right to request access to the
                  personal information we hold about you.
                </li>
                <li>
                  <strong>Correction:</strong> The right to request that we
                  correct inaccurate or incomplete personal information.
                </li>
                <li>
                  <strong>Deletion:</strong> The right to request that we delete
                  your personal information in certain circumstances.
                </li>
                <li>
                  <strong>Restriction:</strong> The right to request that we
                  restrict the processing of your personal information in
                  certain circumstances.
                </li>
                <li>
                  <strong>Data Portability:</strong> The right to receive your
                  personal information in a structured, commonly used, and
                  machine-readable format.
                </li>
                <li>
                  <strong>Objection:</strong> The right to object to the
                  processing of your personal information in certain
                  circumstances.
                </li>
                <li>
                  <strong>Withdrawal of Consent:</strong> The right to withdraw
                  your consent at any time where we rely on consent to process
                  your personal information.
                </li>
              </ul>
              <p className="mt-4">
                To exercise any of these rights, please contact us using the
                information provided in the "Contact Us" section below. We will
                respond to your request within the timeframe required by
                applicable law.
              </p>
            </section>

            <section id="cookies" className="mb-12">
              <h2 className="text-2xl font-bold border-b pb-2 mb-6">
                Cookies and Tracking Technologies
              </h2>
              <p>
                We use cookies and similar tracking technologies to collect and
                track information about your browsing activities on our website.
                Cookies are small text files that are stored on your device when
                you visit a website.
              </p>
              <p className="mt-4">We use the following types of cookies:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Essential Cookies:</strong> Necessary for the website
                  to function properly and cannot be switched off in our
                  systems.
                </li>
                <li>
                  <strong>Performance Cookies:</strong> Help us understand how
                  visitors interact with our website by collecting and reporting
                  information anonymously.
                </li>
                <li>
                  <strong>Functional Cookies:</strong> Enable the website to
                  provide enhanced functionality and personalization.
                </li>
                <li>
                  <strong>Targeting Cookies:</strong> May be set through our
                  website by our advertising partners to build a profile of your
                  interests and show you relevant advertisements on other
                  websites.
                </li>
              </ul>
              <p className="mt-4">
                You can control and manage cookies in various ways. Most web
                browsers allow you to manage your cookie preferences. You can:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Delete cookies from your device</li>
                <li>
                  Block cookies by activating the setting on your browser that
                  allows you to refuse all or some cookies
                </li>
                <li>
                  Set your browser to notify you when you receive a cookie
                </li>
              </ul>
              <p className="mt-4">
                Please note that if you choose to block or delete cookies, you
                may not be able to access certain areas or features of our
                website, and some services may not function properly.
              </p>
            </section>

            <section id="children" className="mb-12">
              <h2 className="text-2xl font-bold border-b pb-2 mb-6">
                Children's Privacy
              </h2>
              <p>
                Our services are not directed to individuals under the age of
                16. We do not knowingly collect personal information from
                children under 16. If we become aware that we have collected
                personal information from a child under 16 without verification
                of parental consent, we will take steps to remove that
                information from our servers.
              </p>
              <p className="mt-4">
                If you believe we might have any information from or about a
                child under 16, please contact us using the information provided
                in the "Contact Us" section below.
              </p>
            </section>

            <section id="updates" className="mb-12">
              <h2 className="text-2xl font-bold border-b pb-2 mb-6">
                Changes to This Privacy Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time to reflect
                changes in our practices, technologies, legal requirements, or
                other factors. We will notify you of any material changes by
                posting the updated Privacy Policy on this page and updating the
                "Last Updated" date at the top of this Privacy Policy.
              </p>
              <p className="mt-4">
                We encourage you to review this Privacy Policy periodically to
                stay informed about how we collect, use, and protect your
                information. Your continued use of our services after any
                changes to this Privacy Policy constitutes your acceptance of
                the revised Privacy Policy.
              </p>
            </section>

            <section id="contact" className="mb-12">
              <h2 className="text-2xl font-bold border-b pb-2 mb-6">
                Contact Us
              </h2>
              <p>
                If you have any questions, concerns, or requests regarding this
                Privacy Policy or our privacy practices, please contact us at:
              </p>
              <div className="mt-4 p-6 bg-gray-50 rounded-lg border border-gray-200">
                <p className="font-medium">
                  OroraSoft, Inc.
                  <br />
                  Attn: Privacy Officer
                  <br />
                  123 Tech Plaza, Suite 400
                  <br />
                  San Francisco, CA 94103
                  <br />
                  <br />
                  Email: privacy@ororasoft.com
                  <br />
                  Phone: (555) 123-4567
                </p>
              </div>
              <p className="mt-6">
                We will respond to your inquiry as soon as possible and within
                the timeframe required by applicable law.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
