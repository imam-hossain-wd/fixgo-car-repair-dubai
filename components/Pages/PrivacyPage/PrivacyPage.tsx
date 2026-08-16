import { Metadata } from "next";
import Link from "next/link";
import {
  RiShieldCheckLine,
  RiLockLine,
  RiEyeLine,
  RiUserLine,
  RiCookieLine,
  RiMailLine,
  RiPhoneLine,
  RiMapPinLine,
  RiArrowRightLine,
  RiCheckboxCircleLine,
  RiTimeLine,
  RiGlobalLine,
  RiDatabaseLine,
  RiFileTextLine,
  RiSettingsLine,
  RiShareLine,
  RiAlertLine,
} from "@remixicon/react";
import { SiteConfig } from "@/config/siteConfig";


export default function PrivacyPage() {
  const { brandName, displayNumber, email, location, city, country, url } = SiteConfig;
  const currentYear = new Date().getFullYear();

  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 py-8">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-1/3 h-[500px] w-[500px] rounded-full bg-blue-600/5 blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 h-[400px] w-[400px] rounded-full bg-purple-600/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-4xl">
          <div className="flex items-start gap-4 sm:items-center">
            <div className="rounded-full bg-blue-500/10 p-3 sm:p-4">
              <RiShieldCheckLine className="h-6 w-6 text-blue-400 sm:h-8 sm:w-8" />
            </div>
            <div>
              <h1 className="font-serif text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Privacy Policy
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

          <div className="mt-4 rounded-xl border border-blue-500/20 bg-blue-500/5 p-4">
            <p className="text-sm leading-relaxed text-neutral-300">
              At <span className="font-semibold text-white">{brandName}</span>, we take your 
              privacy seriously. This policy explains how we collect, use, and protect 
              your personal information when you use our services.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="mx-auto mt-12 max-w-4xl">
          <div className="space-y-6 rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur-sm sm:p-8">
            
            {/* Section 1: Introduction */}
            <section className="scroll-mt-20">
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-blue-500/10 p-2">
                  <RiFileTextLine className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-white">1. Introduction</h2>
                  <div className="mt-3 space-y-3 text-sm leading-relaxed text-neutral-300">
                    <p>
                      Welcome to {brandName}'s Privacy Policy. This policy describes how we 
                      collect, use, store, and protect your personal information when you 
                      use our website, mobile applications, and services.
                    </p>
                    <p>
                      We are committed to protecting your privacy and handling your personal 
                      information in accordance with applicable data protection laws in the 
                      United Arab Emirates.
                    </p>
                    <div className="rounded-lg bg-blue-500/10 p-3 text-xs text-blue-400">
                      <p>✓ This policy applies to all users of {brandName}'s services, including visitors to our website and customers who book our services.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Information We Collect */}
            <section  className="scroll-mt-20 border-t border-white/5 pt-6">
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-purple-500/10 p-2">
                  <RiDatabaseLine className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-white">2. Information We Collect</h2>
                  <div className="mt-3 space-y-3 text-sm leading-relaxed text-neutral-300">
                    <p>
                      We collect information that you provide directly to us, as well as 
                      information automatically collected when you use our services:
                    </p>
                    
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                        <h4 className="text-sm font-semibold text-white">Personal Information</h4>
                        <ul className="mt-2 space-y-1.5 text-xs text-neutral-400">
                          <li className="flex items-start gap-2">
                            <RiCheckboxCircleLine className="mt-0.5 h-3.5 w-3.5 text-emerald-400 shrink-0" />
                            <span>Full name and contact details</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <RiCheckboxCircleLine className="mt-0.5 h-3.5 w-3.5 text-emerald-400 shrink-0" />
                            <span>Email address and phone number</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <RiCheckboxCircleLine className="mt-0.5 h-3.5 w-3.5 text-emerald-400 shrink-0" />
                            <span>Vehicle information and service history</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <RiCheckboxCircleLine className="mt-0.5 h-3.5 w-3.5 text-emerald-400 shrink-0" />
                            <span>Location and service address</span>
                          </li>
                        </ul>
                      </div>
                      <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                        <h4 className="text-sm font-semibold text-white">Technical Information</h4>
                        <ul className="mt-2 space-y-1.5 text-xs text-neutral-400">
                          <li className="flex items-start gap-2">
                            <RiCheckboxCircleLine className="mt-0.5 h-3.5 w-3.5 text-emerald-400 shrink-0" />
                            <span>IP address and device information</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <RiCheckboxCircleLine className="mt-0.5 h-3.5 w-3.5 text-emerald-400 shrink-0" />
                            <span>Browser type and operating system</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <RiCheckboxCircleLine className="mt-0.5 h-3.5 w-3.5 text-emerald-400 shrink-0" />
                            <span>Website usage and interaction data</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <RiCheckboxCircleLine className="mt-0.5 h-3.5 w-3.5 text-emerald-400 shrink-0" />
                            <span>Cookies and tracking technologies</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: How We Use Your Information */}
            <section className="scroll-mt-20 border-t border-white/5 pt-6">
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-emerald-500/10 p-2">
                  <RiSettingsLine className="h-5 w-5 text-emerald-400" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-white">3. How We Use Your Information</h2>
                  <div className="mt-3 space-y-3 text-sm leading-relaxed text-neutral-300">
                    <p>
                      We use your personal information for the following purposes:
                    </p>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                        <h4 className="text-sm font-semibold text-white">Service Delivery</h4>
                        <ul className="mt-2 space-y-1.5 text-xs text-neutral-400">
                          <li className="flex items-start gap-2">
                            <RiCheckboxCircleLine className="mt-0.5 h-3.5 w-3.5 text-emerald-400 shrink-0" />
                            <span>Providing car repair services</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <RiCheckboxCircleLine className="mt-0.5 h-3.5 w-3.5 text-emerald-400 shrink-0" />
                            <span>Processing bookings and payments</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <RiCheckboxCircleLine className="mt-0.5 h-3.5 w-3.5 text-emerald-400 shrink-0" />
                            <span>Communicating about your service</span>
                          </li>
                        </ul>
                      </div>
                      <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                        <h4 className="text-sm font-semibold text-white">Service Improvement</h4>
                        <ul className="mt-2 space-y-1.5 text-xs text-neutral-400">
                          <li className="flex items-start gap-2">
                            <RiCheckboxCircleLine className="mt-0.5 h-3.5 w-3.5 text-emerald-400 shrink-0" />
                            <span>Analyzing service performance</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <RiCheckboxCircleLine className="mt-0.5 h-3.5 w-3.5 text-emerald-400 shrink-0" />
                            <span>Improving customer experience</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <RiCheckboxCircleLine className="mt-0.5 h-3.5 w-3.5 text-emerald-400 shrink-0" />
                            <span>Developing new services</span>
                          </li>
                        </ul>
                      </div>
                      <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                        <h4 className="text-sm font-semibold text-white">Communication</h4>
                        <ul className="mt-2 space-y-1.5 text-xs text-neutral-400">
                          <li className="flex items-start gap-2">
                            <RiCheckboxCircleLine className="mt-0.5 h-3.5 w-3.5 text-emerald-400 shrink-0" />
                            <span>Sending service confirmations</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <RiCheckboxCircleLine className="mt-0.5 h-3.5 w-3.5 text-emerald-400 shrink-0" />
                            <span>Responding to inquiries</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <RiCheckboxCircleLine className="mt-0.5 h-3.5 w-3.5 text-emerald-400 shrink-0" />
                            <span>Sharing important updates</span>
                          </li>
                        </ul>
                      </div>
                      <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                        <h4 className="text-sm font-semibold text-white">Legal Compliance</h4>
                        <ul className="mt-2 space-y-1.5 text-xs text-neutral-400">
                          <li className="flex items-start gap-2">
                            <RiCheckboxCircleLine className="mt-0.5 h-3.5 w-3.5 text-emerald-400 shrink-0" />
                            <span>Complying with UAE laws</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <RiCheckboxCircleLine className="mt-0.5 h-3.5 w-3.5 text-emerald-400 shrink-0" />
                            <span>Preventing fraud</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <RiCheckboxCircleLine className="mt-0.5 h-3.5 w-3.5 text-emerald-400 shrink-0" />
                            <span>Protecting legal rights</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4: Information Sharing */}
            <section className="scroll-mt-20 border-t border-white/5 pt-6">
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-orange-500/10 p-2">
                  <RiShareLine className="h-5 w-5 text-orange-400" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-white">4. Information Sharing</h2>
                  <div className="mt-3 space-y-3 text-sm leading-relaxed text-neutral-300">
                    <p>
                      We do not sell, trade, or rent your personal information to third parties. 
                      We may share your information in the following circumstances:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <RiCheckboxCircleLine className="mt-0.5 h-4 w-4 text-emerald-400 shrink-0" />
                        <span>
                          <span className="font-medium text-white">Service Providers:</span> We share information with trusted service providers who assist us in delivering our services (e.g., payment processors, IT support).
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <RiCheckboxCircleLine className="mt-0.5 h-4 w-4 text-emerald-400 shrink-0" />
                        <span>
                          <span className="font-medium text-white">Legal Compliance:</span> We may disclose information if required by law, regulation, or legal process in the UAE.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <RiCheckboxCircleLine className="mt-0.5 h-4 w-4 text-emerald-400 shrink-0" />
                        <span>
                          <span className="font-medium text-white">Business Transfers:</span> In the event of a merger, acquisition, or sale of assets, your information may be transferred.
                        </span>
                      </li>
                    </ul>
                    <div className="rounded-lg bg-yellow-500/10 p-3 text-xs text-yellow-400">
                      <p>⚠️ We only share information when necessary and require all third parties to maintain appropriate security measures.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5: Cookies & Tracking */}
            <section className="scroll-mt-20 border-t border-white/5 pt-6">
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-pink-500/10 p-2">
                  <RiCookieLine className="h-5 w-5 text-pink-400" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-white">5. Cookies & Tracking</h2>
                  <div className="mt-3 space-y-3 text-sm leading-relaxed text-neutral-300">
                    <p>
                      We use cookies and similar tracking technologies to enhance your 
                      experience on our website. Cookies are small text files stored on 
                      your device.
                    </p>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                        <h4 className="text-sm font-semibold text-white">Types of Cookies</h4>
                        <ul className="mt-2 space-y-1.5 text-xs text-neutral-400">
                          <li className="flex items-start gap-2">
                            <RiCheckboxCircleLine className="mt-0.5 h-3.5 w-3.5 text-emerald-400 shrink-0" />
                            <span>Essential cookies (required)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <RiCheckboxCircleLine className="mt-0.5 h-3.5 w-3.5 text-emerald-400 shrink-0" />
                            <span>Performance cookies</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <RiCheckboxCircleLine className="mt-0.5 h-3.5 w-3.5 text-emerald-400 shrink-0" />
                            <span>Functionality cookies</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <RiCheckboxCircleLine className="mt-0.5 h-3.5 w-3.5 text-emerald-400 shrink-0" />
                            <span>Analytics and tracking cookies</span>
                          </li>
                        </ul>
                      </div>
                      <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                        <h4 className="text-sm font-semibold text-white">Cookie Settings</h4>
                        <ul className="mt-2 space-y-1.5 text-xs text-neutral-400">
                          <li className="flex items-start gap-2">
                            <RiCheckboxCircleLine className="mt-0.5 h-3.5 w-3.5 text-emerald-400 shrink-0" />
                            <span>You can control cookie preferences</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <RiCheckboxCircleLine className="mt-0.5 h-3.5 w-3.5 text-emerald-400 shrink-0" />
                            <span>Browser settings allow cookie management</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <RiCheckboxCircleLine className="mt-0.5 h-3.5 w-3.5 text-emerald-400 shrink-0" />
                            <span>Opt-out of tracking cookies</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <RiCheckboxCircleLine className="mt-0.5 h-3.5 w-3.5 text-emerald-400 shrink-0" />
                            <span>Third-party cookie management</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 6: Data Security */}
            <section  className="scroll-mt-20 border-t border-white/5 pt-6">
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-green-500/10 p-2">
                  <RiLockLine className="h-5 w-5 text-green-400" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-white">6. Data Security</h2>
                  <div className="mt-3 space-y-3 text-sm leading-relaxed text-neutral-300">
                    <p>
                      We implement appropriate technical and organizational measures to 
                      protect your personal information against unauthorized access, 
                      alteration, disclosure, or destruction.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <RiCheckboxCircleLine className="mt-0.5 h-4 w-4 text-emerald-400 shrink-0" />
                        <span>
                          <span className="font-medium text-white">Encryption:</span> All data transmitted between your device and our servers is encrypted using SSL/TLS technology.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <RiCheckboxCircleLine className="mt-0.5 h-4 w-4 text-emerald-400 shrink-0" />
                        <span>
                          <span className="font-medium text-white">Access Control:</span> Strict access controls limit who can access your personal information.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <RiCheckboxCircleLine className="mt-0.5 h-4 w-4 text-emerald-400 shrink-0" />
                        <span>
                          <span className="font-medium text-white">Monitoring:</span> Regular monitoring and auditing of security systems.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <RiCheckboxCircleLine className="mt-0.5 h-4 w-4 text-emerald-400 shrink-0" />
                        <span>
                          <span className="font-medium text-white">Training:</span> Staff training on data protection and security best practices.
                        </span>
                      </li>
                    </ul>
                    <div className="rounded-lg bg-emerald-500/10 p-3 text-xs text-emerald-400">
                      <p>✓ We regularly review and update our security measures to ensure your data remains protected.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 7: Your Rights */}
            <section className="scroll-mt-20 border-t border-white/5 pt-6">
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-indigo-500/10 p-2">
                  <RiUserLine className="h-5 w-5 text-indigo-400" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-white">7. Your Rights</h2>
                  <div className="mt-3 space-y-3 text-sm leading-relaxed text-neutral-300">
                    <p>
                      Under UAE data protection laws, you have the following rights regarding 
                      your personal information:
                    </p>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                        <h4 className="text-sm font-semibold text-white">Access Rights</h4>
                        <ul className="mt-2 space-y-1.5 text-xs text-neutral-400">
                          <li className="flex items-start gap-2">
                            <RiCheckboxCircleLine className="mt-0.5 h-3.5 w-3.5 text-emerald-400 shrink-0" />
                            <span>Request a copy of your data</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <RiCheckboxCircleLine className="mt-0.5 h-3.5 w-3.5 text-emerald-400 shrink-0" />
                            <span>Know what information we hold</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <RiCheckboxCircleLine className="mt-0.5 h-3.5 w-3.5 text-emerald-400 shrink-0" />
                            <span>Data portability options</span>
                          </li>
                        </ul>
                      </div>
                      <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                        <h4 className="text-sm font-semibold text-white">Control Rights</h4>
                        <ul className="mt-2 space-y-1.5 text-xs text-neutral-400">
                          <li className="flex items-start gap-2">
                            <RiCheckboxCircleLine className="mt-0.5 h-3.5 w-3.5 text-emerald-400 shrink-0" />
                            <span>Update or correct your data</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <RiCheckboxCircleLine className="mt-0.5 h-3.5 w-3.5 text-emerald-400 shrink-0" />
                            <span>Request data deletion</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <RiCheckboxCircleLine className="mt-0.5 h-3.5 w-3.5 text-emerald-400 shrink-0" />
                            <span>Opt-out of marketing</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <p className="text-xs text-neutral-500">
                      To exercise any of these rights, please contact us using the information 
                      provided below.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 8: Data Retention */}
            <section className="scroll-mt-20 border-t border-white/5 pt-6">
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-yellow-500/10 p-2">
                  <RiTimeLine className="h-5 w-5 text-yellow-400" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-white">8. Data Retention</h2>
                  <div className="mt-3 space-y-3 text-sm leading-relaxed text-neutral-300">
                    <p>
                      We retain your personal information only for as long as necessary to 
                      fulfill the purposes outlined in this policy, unless a longer retention 
                      period is required by law.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <RiCheckboxCircleLine className="mt-0.5 h-4 w-4 text-emerald-400 shrink-0" />
                        <span>
                          <span className="font-medium text-white">Service Records:</span> We retain service records for up to 5 years for warranty and quality assurance purposes.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <RiCheckboxCircleLine className="mt-0.5 h-4 w-4 text-emerald-400 shrink-0" />
                        <span>
                          <span className="font-medium text-white">Marketing Data:</span> We keep marketing preferences until you opt-out or request deletion.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <RiCheckboxCircleLine className="mt-0.5 h-4 w-4 text-emerald-400 shrink-0" />
                        <span>
                          <span className="font-medium text-white">Legal Requirements:</span> We retain data as required by UAE laws and regulations.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 9: Children's Privacy */}
            <section  className="scroll-mt-20 border-t border-white/5 pt-6">
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-red-500/10 p-2">
                  <RiEyeLine className="h-5 w-5 text-red-400" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-white">9. Children's Privacy</h2>
                  <div className="mt-3 space-y-3 text-sm leading-relaxed text-neutral-300">
                    <p>
                      Our services are not directed to individuals under the age of 18. 
                      We do not knowingly collect personal information from children.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <RiCheckboxCircleLine className="mt-0.5 h-4 w-4 text-emerald-400 shrink-0" />
                        <span>We do not target or market to children</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <RiCheckboxCircleLine className="mt-0.5 h-4 w-4 text-emerald-400 shrink-0" />
                        <span>If we discover we have collected data from a child, we will delete it</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <RiCheckboxCircleLine className="mt-0.5 h-4 w-4 text-emerald-400 shrink-0" />
                        <span>Parents or guardians may contact us to verify or delete data</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 10: Policy Changes */}
            <section  className="scroll-mt-20 border-t border-white/5 pt-6">
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-yellow-500/10 p-2">
                  <RiAlertLine className="h-5 w-5 text-yellow-400" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-white">10. Policy Changes</h2>
                  <div className="mt-3 space-y-3 text-sm leading-relaxed text-neutral-300">
                    <p>
                      We may update this Privacy Policy from time to time. We will notify 
                      you of any material changes by:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <RiCheckboxCircleLine className="mt-0.5 h-4 w-4 text-emerald-400 shrink-0" />
                        <span>Posting the updated policy on our website</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <RiCheckboxCircleLine className="mt-0.5 h-4 w-4 text-emerald-400 shrink-0" />
                        <span>Sending email notifications for significant changes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <RiCheckboxCircleLine className="mt-0.5 h-4 w-4 text-emerald-400 shrink-0" />
                        <span>Updating the "Last updated" date at the top of this policy</span>
                      </li>
                    </ul>
                    <p className="text-xs text-neutral-500">
                      We encourage you to review this policy periodically to stay informed 
                      about how we protect your information.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 11: Contact Us */}
            <section  className="scroll-mt-20 border-t border-white/5 pt-6">
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-blue-500/10 p-2">
                  <RiMailLine className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-white">11. Contact Us</h2>
                  <div className="mt-3 space-y-3 text-sm leading-relaxed text-neutral-300">
                    <p>
                      If you have any questions, concerns, or requests regarding this 
                      Privacy Policy or our data practices, please contact us:
                    </p>
                    <div className="space-y-3 rounded-xl border border-white/10 bg-white/5 p-4">
                      <div className="flex items-center gap-3">
                        <div className="rounded-full bg-red-500/10 p-2">
                          <RiMailLine className="h-4 w-4 text-red-400" />
                        </div>
                        <div>
                          <p className="text-xs text-neutral-500">Email</p>
                          <Link href={`mailto:${email}`} className="text-sm font-medium text-blue-400 hover:text-blue-300">
                            {email}
                          </Link>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="rounded-full bg-green-500/10 p-2">
                          <RiPhoneLine className="h-4 w-4 text-green-400" />
                        </div>
                        <div>
                          <p className="text-xs text-neutral-500">Phone</p>
                          <Link href={`tel:${SiteConfig.numberCallLink}`} className="text-sm font-medium text-blue-400 hover:text-blue-300">
                            {displayNumber}
                          </Link>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="rounded-full bg-purple-500/10 p-2">
                          <RiMapPinLine className="h-4 w-4 text-purple-400" />
                        </div>
                        <div>
                          <p className="text-xs text-neutral-500">Address</p>
                          <p className="text-sm text-neutral-300">
                            {SiteConfig.streetAddress}, {location}, {city}, {country}
                          </p>
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-neutral-500">
                      We typically respond to privacy inquiries within 48 hours.
                    </p>
                  </div>
                </div>
              </div>
            </section>

          </div>

          {/* Bottom Navigation */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur-sm">
            <div className="flex flex-wrap items-center gap-2">
              <RiShieldCheckLine className="h-5 w-5 text-blue-400" />
              <p className="text-sm text-neutral-400">
                <span className="font-medium text-white">Your privacy matters.</span> We're committed to protecting your data.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/terms"
                className="inline-flex items-center gap-1 text-sm text-neutral-400 transition-colors hover:text-white"
              >
                Terms of Service
              </Link>
              <span className="text-neutral-600">|</span>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1 text-sm text-blue-400 transition-colors hover:text-blue-300"
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