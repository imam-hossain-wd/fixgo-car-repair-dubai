import Link from "next/link";
import {
  RiShieldCheckLine,
  RiFileTextLine,
  RiLockLine,
  RiUserLine,
  RiWalletLine,
  RiBookOpenLine,
  RiArrowRightLine,
  RiCheckboxCircleLine,
  RiTimeLine,
  RiCustomerService2Line,
  RiGlobalLine,
  RiScalesLine,
} from "@remixicon/react";
import { SiteConfig } from "@/config/siteConfig";


export default function TermsPage() {
  const { brandName, displayNumber, email, url, location, city, country } = SiteConfig;
  const currentYear = new Date().getFullYear();

  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 py-20 sm:py-24 lg:py-32">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute right-1/4 top-1/3 h-[500px] w-[500px] rounded-full bg-red-600/5 blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 h-[400px] w-[400px] rounded-full bg-orange-600/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-red-500/10 p-3">
              <RiFileTextLine className="h-6 w-6 text-red-400" />
            </div>
            <div>
              <h1 className="font-serif text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Terms of Service
              </h1>
              <p className="mt-1 text-sm text-neutral-400">
                Last updated: {new Date().toLocaleDateString("en-US", { 
                  month: "long", 
                  day: "numeric", 
                  year: "numeric" 
                })}
              </p>
            </div>
          </div>

          <p className="mt-4 text-lg text-neutral-300">
            Please read these terms carefully before using FixGo Car Repair Dubai's 
            services. By using our services, you agree to these terms.
          </p>
        </div>

        {/* Content */}
        <div className="mx-auto mt-12 max-w-4xl">
          <div className="space-y-8 rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur-sm sm:p-8">
            
            {/* Section 1: Acceptance of Terms */}
            <section className="scroll-mt-20">
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-red-500/10 p-2">
                  <RiScalesLine className="h-5 w-5 text-red-400" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-white">1. Acceptance of Terms</h2>
                  <div className="mt-3 space-y-3 text-sm leading-relaxed text-neutral-300">
                    <p>
                      By accessing or using {brandName}'s services, you agree to be bound by 
                      these Terms of Service. If you do not agree to these terms, please do 
                      not use our services.
                    </p>
                    <p>
                      These terms apply to all users of our website, mobile application, 
                      and services. We reserve the right to update these terms at any time 
                      without prior notice.
                    </p>
                    <div className="rounded-lg bg-emerald-500/10 p-3 text-xs text-emerald-400">
                      <p>✓ By using our services, you confirm that you are at least 18 years old and have the legal capacity to enter into these terms.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Services Provided */}
            <section className="scroll-mt-20 border-t border-white/5 pt-8">
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-blue-500/10 p-2">
                  <RiBookOpenLine className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-white">2. Services Provided</h2>
                  <div className="mt-3 space-y-3 text-sm leading-relaxed text-neutral-300">
                    <p>
                      {brandName} provides mobile car repair and roadside assistance services 
                      throughout {city}, {country}. Our services include but are not limited to:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <RiCheckboxCircleLine className="mt-0.5 h-4 w-4 text-emerald-400 shrink-0" />
                        <span>Car battery replacement and jump-start services</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <RiCheckboxCircleLine className="mt-0.5 h-4 w-4 text-emerald-400 shrink-0" />
                        <span>Computer diagnostics and electrical repairs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <RiCheckboxCircleLine className="mt-0.5 h-4 w-4 text-emerald-400 shrink-0" />
                        <span>AC repair, gas refill, and cooling system services</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <RiCheckboxCircleLine className="mt-0.5 h-4 w-4 text-emerald-400 shrink-0" />
                        <span>Brake repairs, oil changes, and transmission services</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <RiCheckboxCircleLine className="mt-0.5 h-4 w-4 text-emerald-400 shrink-0" />
                        <span>Emergency roadside assistance and mechanical repairs</span>
                      </li>
                    </ul>
                    <p className="text-xs text-neutral-500">
                      Service availability may vary by location and time. We strive to provide 
                      services within 5-15 minutes of your request, but response times may vary 
                      based on demand and location.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: Pricing & Payments */}
            <section className="scroll-mt-20 border-t border-white/5 pt-8">
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-emerald-500/10 p-2">
                  <RiWalletLine className="h-5 w-5 text-emerald-400" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-white">3. Pricing & Payments</h2>
                  <div className="mt-3 space-y-3 text-sm leading-relaxed text-neutral-300">
                    <p>
                      {brandName} provides transparent, upfront pricing for all services. 
                      We believe in honest pricing with no hidden charges.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <RiCheckboxCircleLine className="mt-0.5 h-4 w-4 text-emerald-400 shrink-0" />
                        <span>All quotes are provided before work begins</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <RiCheckboxCircleLine className="mt-0.5 h-4 w-4 text-emerald-400 shrink-0" />
                        <span>Prices include parts, labor, and service fees</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <RiCheckboxCircleLine className="mt-0.5 h-4 w-4 text-emerald-400 shrink-0" />
                        <span>Payment is due upon completion of services</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <RiCheckboxCircleLine className="mt-0.5 h-4 w-4 text-emerald-400 shrink-0" />
                        <span>We accept cash, credit/debit cards, and bank transfers</span>
                      </li>
                    </ul>
                    <div className="rounded-lg bg-yellow-500/10 p-3 text-xs text-yellow-400">
                      <p>⚠️ Additional charges may apply for services requiring specialized parts or extended labor. We will always inform you of any additional costs before proceeding.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4: Bookings & Cancellations */}
            <section className="scroll-mt-20 border-t border-white/5 pt-8">
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-purple-500/10 p-2">
                  <RiUserLine className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-white">4. Bookings & Cancellations</h2>
                  <div className="mt-3 space-y-3 text-sm leading-relaxed text-neutral-300">
                    <p>
                      We understand that plans can change. Please review our booking and 
                      cancellation policy:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <RiCheckboxCircleLine className="mt-0.5 h-4 w-4 text-emerald-400 shrink-0" />
                        <span>Bookings can be made via phone, WhatsApp, or our website</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <RiCheckboxCircleLine className="mt-0.5 h-4 w-4 text-emerald-400 shrink-0" />
                        <span>Cancellations made within 15 minutes of arrival may incur a fee</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <RiCheckboxCircleLine className="mt-0.5 h-4 w-4 text-emerald-400 shrink-0" />
                        <span>We reserve the right to cancel or reschedule due to unforeseen circumstances</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <RiCheckboxCircleLine className="mt-0.5 h-4 w-4 text-emerald-400 shrink-0" />
                        <span>No-show appointments may be subject to a call-out fee</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5: Warranty & Guarantees */}
            <section  className="scroll-mt-20 border-t border-white/5 pt-8">
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-orange-500/10 p-2">
                  <RiShieldCheckLine className="h-5 w-5 text-orange-400" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-white">5. Warranty & Guarantees</h2>
                  <div className="mt-3 space-y-3 text-sm leading-relaxed text-neutral-300">
                    <p>
                      {brandName} stands behind the quality of our work with comprehensive 
                      warranties and guarantees:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <RiCheckboxCircleLine className="mt-0.5 h-4 w-4 text-emerald-400 shrink-0" />
                        <span>All repairs are guaranteed for 30 days from service date</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <RiCheckboxCircleLine className="mt-0.5 h-4 w-4 text-emerald-400 shrink-0" />
                        <span>Parts come with manufacturer warranty (varies by brand)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <RiCheckboxCircleLine className="mt-0.5 h-4 w-4 text-emerald-400 shrink-0" />
                        <span>We guarantee all work performed by our certified technicians</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <RiCheckboxCircleLine className="mt-0.5 h-4 w-4 text-emerald-400 shrink-0" />
                        <span>Warranty claims must be reported within 30 days of service</span>
                      </li>
                    </ul>
                    <p className="text-xs text-neutral-500">
                      *Warranty does not cover damage caused by accidents, misuse, or 
                      normal wear and tear. Please contact us for specific warranty details.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 6: Limitation of Liability */}
            <section  className="scroll-mt-20 border-t border-white/5 pt-8">
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-red-500/10 p-2">
                  <RiLockLine className="h-5 w-5 text-red-400" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-white">6. Limitation of Liability</h2>
                  <div className="mt-3 space-y-3 text-sm leading-relaxed text-neutral-300">
                    <p>
                      To the maximum extent permitted by law, {brandName} and its affiliates, 
                      directors, employees, and agents shall not be liable for:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <RiCheckboxCircleLine className="mt-0.5 h-4 w-4 text-neutral-400 shrink-0" />
                        <span>Any indirect, incidental, or consequential damages</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <RiCheckboxCircleLine className="mt-0.5 h-4 w-4 text-neutral-400 shrink-0" />
                        <span>Loss of profits, data, or business opportunities</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <RiCheckboxCircleLine className="mt-0.5 h-4 w-4 text-neutral-400 shrink-0" />
                        <span>Damages arising from force majeure events</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <RiCheckboxCircleLine className="mt-0.5 h-4 w-4 text-neutral-400 shrink-0" />
                        <span>Issues caused by pre-existing vehicle conditions</span>
                      </li>
                    </ul>
                    <p className="text-xs text-neutral-500">
                      Our total liability shall not exceed the total amount paid for the 
                      specific service in question.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 7: Privacy & Data Protection */}
            <section className="scroll-mt-20 border-t border-white/5 pt-8">
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-blue-500/10 p-2">
                  <RiLockLine className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-white">7. Privacy & Data Protection</h2>
                  <div className="mt-3 space-y-3 text-sm leading-relaxed text-neutral-300">
                    <p>
                      {brandName} is committed to protecting your privacy and personal 
                      information. Our privacy practices include:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <RiCheckboxCircleLine className="mt-0.5 h-4 w-4 text-emerald-400 shrink-0" />
                        <span>We collect only necessary information for service delivery</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <RiCheckboxCircleLine className="mt-0.5 h-4 w-4 text-emerald-400 shrink-0" />
                        <span>Your data is stored securely and not shared with third parties</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <RiCheckboxCircleLine className="mt-0.5 h-4 w-4 text-emerald-400 shrink-0" />
                        <span>You have the right to access, modify, or delete your data</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <RiCheckboxCircleLine className="mt-0.5 h-4 w-4 text-emerald-400 shrink-0" />
                        <span>We comply with UAE data protection regulations</span>
                      </li>
                    </ul>
                    <Link
                      href="/privacy"
                      className="inline-flex items-center gap-1 text-sm font-medium text-red-400 hover:text-red-300"
                    >
                      Read our full Privacy Policy
                      <RiArrowRightLine className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 8: Intellectual Property */}
            <section className="scroll-mt-20 border-t border-white/5 pt-8">
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-purple-500/10 p-2">
                  <RiScalesLine className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-white">8. Intellectual Property</h2>
                  <div className="mt-3 space-y-3 text-sm leading-relaxed text-neutral-300">
                    <p>
                      All content, trademarks, and intellectual property on the {brandName} 
                      website and platforms are owned by or licensed to us.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <RiCheckboxCircleLine className="mt-0.5 h-4 w-4 text-emerald-400 shrink-0" />
                        <span>Content may not be reproduced without prior consent</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <RiCheckboxCircleLine className="mt-0.5 h-4 w-4 text-emerald-400 shrink-0" />
                        <span>Our brand name, logo, and marketing materials are protected</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <RiCheckboxCircleLine className="mt-0.5 h-4 w-4 text-emerald-400 shrink-0" />
                        <span>Unauthorized use may result in legal action</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 9: Termination */}
            <section className="scroll-mt-20 border-t border-white/5 pt-8">
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-red-500/10 p-2">
                  <RiLockLine className="h-5 w-5 text-red-400" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-white">9. Termination</h2>
                  <div className="mt-3 space-y-3 text-sm leading-relaxed text-neutral-300">
                    <p>
                      {brandName} reserves the right to terminate or suspend services 
                      under the following conditions:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <RiCheckboxCircleLine className="mt-0.5 h-4 w-4 text-neutral-400 shrink-0" />
                        <span>Violation of these terms and conditions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <RiCheckboxCircleLine className="mt-0.5 h-4 w-4 text-neutral-400 shrink-0" />
                        <span>Fraudulent or illegal activity</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <RiCheckboxCircleLine className="mt-0.5 h-4 w-4 text-neutral-400 shrink-0" />
                        <span>Non-payment of services rendered</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <RiCheckboxCircleLine className="mt-0.5 h-4 w-4 text-neutral-400 shrink-0" />
                        <span>Abusive behavior toward our mechanics or staff</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 10: Governing Law */}
            <section  className="scroll-mt-20 border-t border-white/5 pt-8">
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-emerald-500/10 p-2">
                  <RiGlobalLine className="h-5 w-5 text-emerald-400" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-white">10. Governing Law</h2>
                  <div className="mt-3 space-y-3 text-sm leading-relaxed text-neutral-300">
                    <p>
                      These terms shall be governed by and construed in accordance with 
                      the laws of the United Arab Emirates, specifically the laws of Dubai.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <RiCheckboxCircleLine className="mt-0.5 h-4 w-4 text-emerald-400 shrink-0" />
                        <span>Any disputes shall be resolved in Dubai courts</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <RiCheckboxCircleLine className="mt-0.5 h-4 w-4 text-emerald-400 shrink-0" />
                        <span>Both parties agree to submit to the jurisdiction of Dubai</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <RiCheckboxCircleLine className="mt-0.5 h-4 w-4 text-emerald-400 shrink-0" />
                        <span>UAE laws take precedence in all matters</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 11: Changes to Terms */}
            <section className="scroll-mt-20 border-t border-white/5 pt-8">
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-yellow-500/10 p-2">
                  <RiTimeLine className="h-5 w-5 text-yellow-400" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-white">11. Changes to Terms</h2>
                  <div className="mt-3 space-y-3 text-sm leading-relaxed text-neutral-300">
                    <p>
                      {brandName} reserves the right to update these terms at any time. 
                      Changes will be effective immediately upon posting.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <RiCheckboxCircleLine className="mt-0.5 h-4 w-4 text-emerald-400 shrink-0" />
                        <span>We will notify users of significant changes via email or website notice</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <RiCheckboxCircleLine className="mt-0.5 h-4 w-4 text-emerald-400 shrink-0" />
                        <span>Continued use of services implies acceptance of updated terms</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <RiCheckboxCircleLine className="mt-0.5 h-4 w-4 text-emerald-400 shrink-0" />
                        <span>It is your responsibility to review terms periodically</span>
                      </li>
                    </ul>
                    <p className="text-xs text-neutral-500">
                      Last updated: {new Date().toLocaleDateString("en-US", { 
                        month: "long", 
                        day: "numeric", 
                        year: "numeric" 
                      })}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 12: Contact Information */}
            <section className="scroll-mt-20 border-t border-white/5 pt-8">
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-blue-500/10 p-2">
                  <RiCustomerService2Line className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-white">12. Contact Information</h2>
                  <div className="mt-3 space-y-3 text-sm leading-relaxed text-neutral-300">
                    <p>
                      If you have any questions about these Terms of Service, please 
                      contact us using the information below:
                    </p>
                    <div className="space-y-2 rounded-lg border border-white/10 bg-white/5 p-4">
                      <p className="flex items-center gap-2">
                        <strong className="text-white">Email:</strong>
                        <Link href={`mailto:${email}`} className="text-red-400 hover:text-red-300">
                          {email}
                        </Link>
                      </p>
                      <p className="flex items-center gap-2">
                        <strong className="text-white">Phone:</strong>
                        <Link href={`tel:${SiteConfig.numberCallLink}`} className="text-red-400 hover:text-red-300">
                          {displayNumber}
                        </Link>
                      </p>
                      <p className="flex items-center gap-2">
                        <strong className="text-white">Address:</strong>
                        <span className="text-neutral-400">
                          {SiteConfig.streetAddress}, {location}, {city}, {country}
                        </span>
                      </p>
                    </div>
                    <p className="text-xs text-neutral-500">
                      We typically respond to inquiries within 24 hours.
                    </p>
                  </div>
                </div>
              </div>
            </section>

          </div>

          {/* Bottom Navigation */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur-sm">
            <div>
              <p className="text-sm text-neutral-400">
                <span className="font-medium text-white">Need Help?</span> Our team is here to assist you.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/privacy"
                className="inline-flex items-center gap-1 text-sm text-neutral-400 transition-colors hover:text-white"
              >
                Privacy Policy
              </Link>
              <span className="text-neutral-600">|</span>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1 text-sm text-red-400 transition-colors hover:text-red-300"
              >
                Contact Us
                <RiArrowRightLine className="h-3 w-3" />
              </Link>
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-8 text-center text-xs text-neutral-500">
            <p>
              © {currentYear} {brandName}. All rights reserved. | {location}, {city}, {country}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}