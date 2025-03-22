import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | OroraSoft",
  description:
    "Terms of Service for OroraSoft - The terms and conditions governing your use of our services.",
};

export default function TermsOfServicePage() {
  return (
    <div className="relative">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <div className="container mx-auto px-6 py-16 md:py-24">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Terms of Service
          </h1>
          <p className="text-lg md:text-xl max-w-3xl opacity-90">
            Please read these terms carefully before using our software
            development and consulting services.
          </p>
          <div className="flex items-center mt-6 text-sm">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span>Terms of Service</span>
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
                  { id: "agreement", label: "Agreement Overview" },
                  { id: "services", label: "Services" },
                  { id: "accounts", label: "User Accounts" },
                  { id: "payment", label: "Payment Terms" },
                  {
                    id: "intellectual-property",
                    label: "Intellectual Property",
                  },
                  { id: "confidentiality", label: "Confidentiality" },
                  { id: "warranties", label: "Warranties & Disclaimers" },
                  { id: "limitation", label: "Limitation of Liability" },
                  { id: "indemnification", label: "Indemnification" },
                  { id: "termination", label: "Termination" },
                  { id: "governing-law", label: "Governing Law" },
                  { id: "changes", label: "Changes to Terms" },
                  { id: "contact", label: "Contact Information" },
                ].map((item) => (
                  <div key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="block text-gray-600 hover:text-indigo-600 transition-colors"
                    >
                      {item.label}
                    </a>
                  </div>
                ))}
              </nav>
              <div className="mt-8 p-4 bg-indigo-50 rounded-lg border border-indigo-100">
                <p className="text-sm text-indigo-800">
                  Last Updated: March 23, 2025
                </p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 prose prose-indigo max-w-none">
            <section id="agreement" className="mb-12">
              <h2 className="text-2xl font-bold border-b pb-2 mb-6">
                Agreement Overview
              </h2>
              <p>
                These Terms of Service ("Terms") constitute a legally binding
                agreement between you ("Client," "you," or "your") and
                OroraSoft, Inc. ("OroraSoft," "we," "us," or "our"), governing
                your access to and use of our software development, consulting,
                and related services (collectively, the "Services").
              </p>
              <p>
                By accessing our website, engaging our Services, or signing a
                service agreement with us, you acknowledge that you have read,
                understood, and agree to be bound by these Terms. If you do not
                agree to these Terms, please do not use our Services.
              </p>
              <p>
                If you are entering into these Terms on behalf of a company or
                other legal entity, you represent that you have the authority to
                bind such entity to these Terms. If you do not have such
                authority, you must not accept these Terms or use our Services
                on behalf of such entity.
              </p>
            </section>

            <section id="services" className="mb-12">
              <h2 className="text-2xl font-bold border-b pb-2 mb-6">
                Services
              </h2>
              <p>
                OroraSoft provides custom software development, consulting, and
                related services as described on our website and in
                project-specific proposals, statements of work, or service
                agreements. Our Services may include, but are not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Custom software development and application programming</li>
                <li>Web and mobile application development</li>
                <li>Software architecture and design</li>
                <li>Technical consulting and advisory services</li>
                <li>Software maintenance and support</li>
                <li>Quality assurance and testing</li>
                <li>Project management and technical leadership</li>
              </ul>
              <p className="mt-4">
                The specific scope, deliverables, timelines, and pricing for our
                Services will be detailed in a separate proposal, statement of
                work, or service agreement (collectively, "Service Agreement")
                that references these Terms. In the event of any conflict
                between these Terms and a Service Agreement, the Service
                Agreement shall prevail with respect to the subject matter
                thereof.
              </p>
              <p className="mt-4">
                We reserve the right to modify, suspend, or discontinue any part
                of our Services at any time, with or without notice. We will not
                be liable to you or any third party for any modification,
                suspension, or discontinuation of our Services, except as
                specified in a Service Agreement.
              </p>
            </section>

            <section id="accounts" className="mb-12">
              <h2 className="text-2xl font-bold border-b pb-2 mb-6">
                User Accounts
              </h2>
              <p>
                Some of our Services may require you to create an account. When
                you register for an account, you agree to provide accurate,
                current, and complete information about yourself and to maintain
                and promptly update this information to keep it accurate,
                current, and complete.
              </p>
              <p className="mt-4">You are responsible for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Maintaining the confidentiality of your account credentials,
                  including your username and password
                </li>
                <li>All activities that occur under your account</li>
                <li>
                  Notifying us immediately of any unauthorized use of your
                  account or any other breach of security
                </li>
              </ul>
              <p className="mt-4">
                We reserve the right to disable any user account at any time if,
                in our opinion, you have failed to comply with these Terms or if
                we believe your account is being used fraudulently or in an
                unauthorized manner.
              </p>
            </section>

            <section id="payment" className="mb-12">
              <h2 className="text-2xl font-bold border-b pb-2 mb-6">
                Payment Terms
              </h2>
              <p>
                The fees for our Services will be specified in the applicable
                Service Agreement. Unless otherwise stated in the Service
                Agreement:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  All fees are quoted in U.S. dollars and are exclusive of
                  applicable taxes
                </li>
                <li>Payment terms are net 30 days from the date of invoice</li>
                <li>
                  Late payments may incur interest at the rate of 1.5% per month
                  or the maximum rate permitted by law, whichever is lower
                </li>
                <li>
                  You are responsible for all taxes associated with the
                  Services, excluding taxes based on our net income
                </li>
              </ul>
              <p className="mt-4">
                For fixed-price projects, we typically require a deposit before
                commencing work, with the balance due according to the payment
                schedule specified in the Service Agreement. For time and
                materials engagements, we typically invoice on a monthly basis
                for services rendered during the previous month.
              </p>
              <p className="mt-4">
                We reserve the right to suspend or terminate our Services if
                your account becomes delinquent. You will be responsible for all
                costs we incur in connection with collecting delinquent amounts,
                including attorney fees and collection agency fees.
              </p>
            </section>

            <section id="intellectual-property" className="mb-12">
              <h2 className="text-2xl font-bold border-b pb-2 mb-6">
                Intellectual Property Rights
              </h2>
              <p>Unless otherwise specified in a Service Agreement:</p>
              <h3 className="text-xl font-semibold mt-6 mb-4">
                Client Materials
              </h3>
              <p>
                You retain all rights, title, and interest in and to any
                materials, data, information, or intellectual property you
                provide to us in connection with the Services ("Client
                Materials"). You grant us a non-exclusive, worldwide,
                royalty-free license to use, reproduce, modify, and create
                derivative works of the Client Materials solely for the purpose
                of providing the Services to you.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-4">Deliverables</h3>
              <p>
                Upon full payment of all applicable fees, we assign to you all
                rights, title, and interest in and to the custom software, code,
                and other materials specifically developed for you as part of
                the Services and identified as deliverables in the Service
                Agreement ("Deliverables"), excluding any Pre-existing Materials
                or Third-Party Materials (as defined below).
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-4">
                Pre-existing Materials
              </h3>
              <p>
                We retain all rights, title, and interest in and to any tools,
                libraries, frameworks, methodologies, processes, documentation,
                and other materials that we owned or developed prior to
                providing the Services or that we develop independently of the
                Services ("Pre-existing Materials"). To the extent that any
                Pre-existing Materials are incorporated into the Deliverables,
                we grant you a non-exclusive, worldwide, perpetual, royalty-free
                license to use, reproduce, modify, and create derivative works
                of such Pre-existing Materials solely in connection with your
                use of the Deliverables.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-4">
                Third-Party Materials
              </h3>
              <p>
                The Deliverables may incorporate third-party software,
                libraries, frameworks, or other materials ("Third-Party
                Materials"). Your use of any Third-Party Materials is subject to
                the terms and conditions of the applicable third-party licenses.
                We will identify any Third-Party Materials in the Deliverables
                and provide you with copies of the applicable third-party
                licenses.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-4">Feedback</h3>
              <p>
                If you provide us with any suggestions, comments, or feedback
                regarding our Services ("Feedback"), you grant us a
                non-exclusive, worldwide, perpetual, irrevocable, royalty-free
                license to use, reproduce, modify, create derivative works of,
                publicly perform, publicly display, and otherwise exploit such
                Feedback for any purpose, without restriction or obligation to
                you.
              </p>
            </section>

            <section id="confidentiality" className="mb-12">
              <h2 className="text-2xl font-bold border-b pb-2 mb-6">
                Confidentiality
              </h2>
              <p>
                Each party may disclose to the other party certain confidential
                or proprietary information in connection with the Services
                ("Confidential Information"). Confidential Information includes
                any information that is marked as confidential or that a
                reasonable person would understand to be confidential given the
                nature of the information and the circumstances of disclosure.
              </p>
              <p className="mt-4">Each party agrees to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Maintain the confidentiality of the other party's Confidential
                  Information
                </li>
                <li>
                  Use the other party's Confidential Information solely for the
                  purpose of performing its obligations or exercising its rights
                  under these Terms
                </li>
                <li>
                  Protect the other party's Confidential Information using at
                  least the same degree of care it uses to protect its own
                  confidential information, but in no event less than reasonable
                  care
                </li>
                <li>
                  Limit access to the other party's Confidential Information to
                  those employees, contractors, and agents who need such access
                  for purposes consistent with these Terms and who are bound by
                  confidentiality obligations at least as protective as those in
                  these Terms
                </li>
              </ul>
              <p className="mt-4">
                The confidentiality obligations in this section do not apply to
                information that:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Is or becomes publicly available through no fault of the
                  receiving party
                </li>
                <li>
                  Was known to the receiving party prior to disclosure by the
                  disclosing party
                </li>
                <li>
                  Is rightfully obtained by the receiving party from a third
                  party without restriction on use or disclosure
                </li>
                <li>
                  Is independently developed by the receiving party without use
                  of or reference to the disclosing party's Confidential
                  Information
                </li>
                <li>
                  Is required to be disclosed by law or legal process, provided
                  that the receiving party gives the disclosing party prompt
                  notice of such requirement (if legally permitted) and
                  cooperates with the disclosing party's efforts to limit or
                  contest such disclosure
                </li>
              </ul>
              <p className="mt-4">
                The confidentiality obligations in this section will survive the
                termination or expiration of these Terms for a period of five
                (5) years, except for trade secrets, which will remain
                confidential for as long as they qualify as trade secrets under
                applicable law.
              </p>
            </section>

            <section id="warranties" className="mb-12">
              <h2 className="text-2xl font-bold border-b pb-2 mb-6">
                Warranties and Disclaimers
              </h2>
              <h3 className="text-xl font-semibold mt-6 mb-4">
                Our Warranties
              </h3>
              <p>We warrant that:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  We will perform the Services in a professional and workmanlike
                  manner consistent with industry standards
                </li>
                <li>
                  The Deliverables will substantially conform to the
                  specifications set forth in the applicable Service Agreement
                  for a period of thirty (30) days after delivery
                </li>
                <li>
                  We have the right to enter into these Terms and to grant the
                  rights and licenses described herein
                </li>
                <li>
                  The Deliverables, excluding any Client Materials, Pre-existing
                  Materials, or Third-Party Materials, will not infringe any
                  third-party intellectual property rights
                </li>
              </ul>
              <p className="mt-4">
                Your exclusive remedy for any breach of the warranties above
                will be, at our option: (a) repair or replacement of the
                non-conforming Services or Deliverables; or (b) refund of the
                fees paid for the non-conforming Services or Deliverables.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-4">
                Your Warranties
              </h3>
              <p>You warrant that:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  You have the right to enter into these Terms and to grant the
                  rights and licenses described herein
                </li>
                <li>
                  The Client Materials do not infringe any third-party
                  intellectual property rights
                </li>
                <li>
                  You will comply with all applicable laws and regulations in
                  connection with your use of the Services and Deliverables
                </li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-4">Disclaimer</h3>
              <p>
                EXCEPT FOR THE EXPRESS WARRANTIES SET FORTH ABOVE, THE SERVICES
                AND DELIVERABLES ARE PROVIDED "AS IS" AND "AS AVAILABLE,"
                WITHOUT WARRANTY OF ANY KIND. TO THE MAXIMUM EXTENT PERMITTED BY
                APPLICABLE LAW, WE EXPRESSLY DISCLAIM ALL WARRANTIES, WHETHER
                EXPRESS, IMPLIED, OR STATUTORY, INCLUDING THE IMPLIED WARRANTIES
                OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND
                NON-INFRINGEMENT.
              </p>
              <p className="mt-4">
                WE DO NOT WARRANT THAT THE SERVICES OR DELIVERABLES WILL MEET
                YOUR REQUIREMENTS, THAT THE OPERATION OF THE DELIVERABLES WILL
                BE UNINTERRUPTED OR ERROR-FREE, OR THAT DEFECTS IN THE
                DELIVERABLES WILL BE CORRECTED. WE ARE NOT RESPONSIBLE FOR ANY
                PROBLEMS OR TECHNICAL MALFUNCTION OF ANY TELEPHONE NETWORK OR
                LINES, COMPUTER SYSTEMS, SERVERS, PROVIDERS, HARDWARE, SOFTWARE,
                OR ANY OTHER EQUIPMENT OR PROGRAMMING CAUSED BY OR RESULTING
                FROM YOUR USE OF THE SERVICES OR DELIVERABLES.
              </p>
              <p className="mt-4">
                SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF IMPLIED
                WARRANTIES, SO THE ABOVE EXCLUSION MAY NOT APPLY TO YOU.
              </p>
            </section>

            <section id="limitation" className="mb-12">
              <h2 className="text-2xl font-bold border-b pb-2 mb-6">
                Limitation of Liability
              </h2>
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT
                WILL WE OR OUR AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES,
                AGENTS, OR LICENSORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
                SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT
                LIMITATION DAMAGES FOR LOST PROFITS, LOST REVENUES, LOST
                SAVINGS, LOST BUSINESS OPPORTUNITIES, LOSS OF DATA OR GOODWILL,
                SERVICE INTERRUPTION, COMPUTER DAMAGE, SYSTEM FAILURE, OR THE
                COST OF SUBSTITUTE SERVICES, ARISING OUT OF OR IN CONNECTION
                WITH THESE TERMS OR YOUR USE OF OR INABILITY TO USE THE SERVICES
                OR DELIVERABLES, WHETHER BASED ON WARRANTY, CONTRACT, TORT
                (INCLUDING NEGLIGENCE), PRODUCT LIABILITY, OR ANY OTHER LEGAL
                THEORY, AND WHETHER OR NOT WE HAVE BEEN INFORMED OF THE
                POSSIBILITY OF SUCH DAMAGE.
              </p>
              <p className="mt-4">
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, OUR TOTAL
                LIABILITY TO YOU FOR ALL CLAIMS ARISING OUT OF OR RELATING TO
                THESE TERMS OR YOUR USE OF OR INABILITY TO USE THE SERVICES OR
                DELIVERABLES WILL NOT EXCEED THE TOTAL AMOUNT PAID BY YOU TO US
                DURING THE TWELVE (12) MONTHS IMMEDIATELY PRECEDING THE EVENT
                GIVING RISE TO THE CLAIM.
              </p>
              <p className="mt-4">
                THE LIMITATIONS OF LIABILITY IN THIS SECTION APPLY EVEN IF WE
                HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES AND EVEN IF
                ANY REMEDY FAILS OF ITS ESSENTIAL PURPOSE.
              </p>
              <p className="mt-4">
                SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF
                LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, SO THE ABOVE
                LIMITATION MAY NOT APPLY TO YOU.
              </p>
            </section>

            <section id="indemnification" className="mb-12">
              <h2 className="text-2xl font-bold border-b pb-2 mb-6">
                Indemnification
              </h2>
              <p>
                You agree to indemnify, defend, and hold harmless OroraSoft and
                its affiliates, officers, directors, employees, agents, and
                licensors from and against any and all claims, liabilities,
                damages, losses, costs, expenses, and fees (including reasonable
                attorneys' fees) arising from or relating to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your use of or access to the Services or Deliverables</li>
                <li>Your violation of these Terms</li>
                <li>
                  Your violation of any rights of another person or entity
                </li>
                <li>
                  Your breach of any representations, warranties, or covenants
                  in these Terms
                </li>
                <li>The Client Materials or your use of the Deliverables</li>
              </ul>
              <p className="mt-4">
                We reserve the right, at our own expense, to assume the
                exclusive defense and control of any matter otherwise subject to
                indemnification by you, in which event you will cooperate with
                us in asserting any available defenses.
              </p>
            </section>

            <section id="termination" className="mb-12">
              <h2 className="text-2xl font-bold border-b pb-2 mb-6">
                Termination
              </h2>
              <p>
                These Terms will remain in effect until terminated by either
                party as provided in this section.
              </p>
              <p className="mt-4">Either party may terminate these Terms:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  For convenience, upon thirty (30) days' written notice to the
                  other party
                </li>
                <li>
                  For cause, if the other party materially breaches these Terms
                  and fails to cure such breach within thirty (30) days after
                  receiving written notice of the breach
                </li>
                <li>
                  Immediately, if the other party becomes insolvent, makes an
                  assignment for the benefit of creditors, or becomes subject to
                  bankruptcy or similar proceedings
                </li>
              </ul>
              <p className="mt-4">Upon termination of these Terms:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  All rights and licenses granted to you under these Terms will
                  terminate
                </li>
                <li>
                  You will pay us for all Services performed and expenses
                  incurred up to the effective date of termination
                </li>
                <li>
                  Each party will return or destroy all Confidential Information
                  of the other party in its possession or control
                </li>
                <li>
                  Any provisions of these Terms that by their nature should
                  survive termination will survive, including without limitation
                  the sections on Intellectual Property Rights, Confidentiality,
                  Warranties and Disclaimers, Limitation of Liability,
                  Indemnification, and Governing Law
                </li>
              </ul>
            </section>

            <section id="governing-law" className="mb-12">
              <h2 className="text-2xl font-bold border-b pb-2 mb-6">
                Governing Law and Dispute Resolution
              </h2>
              <p>
                These Terms will be governed by and construed in accordance with
                the laws of the State of California, without regard to its
                conflict of laws principles.
              </p>
              <p className="mt-4">
                Any dispute, controversy, or claim arising out of or relating to
                these Terms, or the breach, termination, or validity thereof,
                will be finally settled by binding arbitration administered by
                the American Arbitration Association in accordance with its
                Commercial Arbitration Rules. The arbitration will be conducted
                in San Francisco, California, by a single arbitrator appointed
                in accordance with such rules. The arbitrator will apply the law
                specified above. The award rendered by the arbitrator will be
                final and binding on the parties, and judgment on the award may
                be entered in any court of competent jurisdiction.
              </p>
              <p className="mt-4">
                Notwithstanding the foregoing, either party may seek injunctive
                or other equitable relief in any court of competent jurisdiction
                to protect its intellectual property rights or Confidential
                Information pending the outcome of arbitration.
              </p>
              <p className="mt-4">
                Each party irrevocably consents to the personal jurisdiction of
                the state and federal courts located in San Francisco County,
                California, for any action or proceeding arising from or
                relating to these Terms or the subject matter hereof that is not
                subject to arbitration.
              </p>
            </section>

            <section id="changes" className="mb-12">
              <h2 className="text-2xl font-bold border-b pb-2 mb-6">
                Changes to Terms
              </h2>
              <p>
                We reserve the right to modify these Terms at any time. We will
                provide notice of any material changes by posting the updated
                Terms on our website and updating the "Last Updated" date at the
                top of these Terms. Your continued use of our Services after
                such changes constitutes your acceptance of the revised Terms.
              </p>
              <p className="mt-4">
                For existing clients with active Service Agreements, any changes
                to these Terms will not apply until the renewal of the
                applicable Service Agreement, unless otherwise required by law.
              </p>
            </section>

            <section id="contact" className="mb-12">
              <h2 className="text-2xl font-bold border-b pb-2 mb-6">
                Contact Information
              </h2>
              <p>
                If you have any questions, concerns, or requests regarding these
                Terms or our Services, please contact us at:
              </p>
              <div className="mt-4 p-6 bg-gray-50 rounded-lg border border-gray-200">
                <p className="font-medium">
                  OroraSoft, Inc.
                  <br />
                  Attn: Legal Department
                  <br />
                  123 Tech Plaza, Suite 400
                  <br />
                  San Francisco, CA 94103
                  <br />
                  <br />
                  Email: legal@ororasoft.com
                  <br />
                  Phone: (555) 123-4567
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
