import React from "react";
import HeroSection from "../components/HeroSection";
import {
  Award,
  BookOpen,
  ThumbsUp,
  TrendingUp,
  Users,
  PenTool,
  Calendar,
  IndianRupee,
  MapPin,
  CheckCircle,
} from "lucide-react";
import { withBase } from "../lib/utils";
import { Link } from "react-router-dom";
function Trainer() {
  return (
    <div className="bg-gray-50 fade-in">
      <style>{`
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(16px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .animate-reveal {
          opacity: 0;
          animation: fadeUp 0.7s ease forwards;
        }
      `}</style>
      {/* Hero Section */}
      <HeroSection
        title="Get Certified with JainX360"
        subtitle="Professional Certifications for Career Growth & Excellence"
        backgroundImage="/certificate.jpg"
          ctaLink="/courses"
      />

      {/* Trainer Profile */}
      <section className="px-4 py-8 sm:py-12 lg:py-16 xl:py-20 mx-auto max-w-7xl sm:px-6">
        <div className="p-4 sm:p-6 lg:p-8 xl:p-12 bg-white rounded-xl sm:rounded-2xl shadow-sm">
          <div className="grid grid-cols-1 gap-8 sm:gap-12 items-center lg:grid-cols-2">
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-[280px] sm:max-w-xs md:max-w-sm lg:max-w-none">
                <img
                  src={withBase("images/sc2.png")}
                  alt="Mr. Sourabh Jain"
                  className="w-full h-auto rounded-lg shadow-lg transition-transform duration-300 hover:scale-[1.02]"
                />
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="text-center lg:text-left">
                <h2 className="mb-3 text-2xl font-semibold text-gray-900 sm:text-3xl md:text-4xl">
                  Strategic Leadership Certification
                </h2>
                <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
                  A focused, high-impact program curated by Mr. Sourabh Jain to
                  help leaders in mining and resource-driven organizations
                  sharpen strategy, collaboration, and execution.
                </p>
              </div>

              <div
                className="flex flex-wrap gap-2 animate-reveal"
                style={{ animationDelay: "0.15s" }}
              >
                <span className="px-4 py-1.5 text-xs font-semibold tracking-wide text-blue-700 bg-blue-50/90 rounded-full border border-blue-200 shadow-sm transition-transform duration-300 hover:-translate-y-1">
                  5-Day Intensive
                </span>
                <span className="px-4 py-1.5 text-xs font-semibold tracking-wide text-blue-700 bg-blue-50/90 rounded-full border border-blue-200 shadow-sm transition-transform duration-300 hover:-translate-y-1">
                  Offline / In-Person
                </span>
                <span className="px-4 py-1.5 text-xs font-semibold tracking-wide text-blue-700 bg-blue-50/90 rounded-full border border-blue-200 shadow-sm transition-transform duration-300 hover:-translate-y-1">
                  Peer Cohort Based
                </span>
              </div>

              <div className="grid grid-cols-1 gap-4 pt-2 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div
                  className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500/20 via-blue-500/5 to-transparent p-[1px] animate-reveal"
                  style={{ animationDelay: "0.22s" }}
                >
                  <div className="space-y-3 rounded-[calc(1rem-1px)] bg-white/95 p-5 shadow-sm">
                    <h3 className="text-sm font-semibold text-gray-900">
                      Key Features
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-600">
  <li className="flex gap-2 items-start transition-transform duration-300 hover:translate-x-1">
    <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
    <span>Focused on developing strategic </span>
  </li>
  <li className="flex gap-2 items-start transition-transform duration-300 hover:translate-x-1">
    <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
    <span>Mining & PSU-relevant </span>
  </li>
  <li className="flex gap-2 items-start transition-transform duration-300 hover:translate-x-1">
    <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
    <span>Expert faculty </span>
  </li>

</ul>
                  </div>
                </div>

                <div
                  className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500/20 via-purple-500/5 to-transparent p-[1px] animate-reveal"
                  style={{ animationDelay: "0.28s" }}
                >
                  <div className="space-y-3 rounded-[calc(1rem-1px)] bg-white/95 p-5 shadow-sm">
                    <h3 className="text-sm font-semibold text-gray-900">
                      Target Audience
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex gap-2 items-start transition-transform duration-300 hover:translate-x-1">
  <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
  <span> strategic responsibilities</span>
</li>
<li className="flex gap-2 items-start transition-transform duration-300 hover:translate-x-1">
  <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
  <span> Managers handling cross-functional teams </span>
</li>
<li className="flex gap-2 items-start transition-transform duration-300 hover:translate-x-1">
  <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
  <span> leadership pipeline roles</span>
</li>

                    </ul>
                  </div>
                </div>

                <div
                  className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-500/20 via-emerald-500/5 to-transparent p-[1px] animate-reveal"
                  style={{ animationDelay: "0.34s" }}
                >
                  <div className="space-y-3 rounded-[calc(1rem-1px)] bg-white/95 p-5 shadow-sm">
                    <h3 className="text-sm font-semibold text-gray-900">
                      Expected Outcomes
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex gap-2 items-start transition-transform duration-300 hover:translate-x-1">
  <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
  <span>Improved leadership </span>
</li>
<li className="flex gap-2 items-start transition-transform duration-300 hover:translate-x-1">
  <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
  <span>Practical strategies </span>
</li>
<li className="flex gap-2 items-start transition-transform duration-300 hover:translate-x-1">
  <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
  <span>Better alignment s</span>
</li>

                    </ul>
                  </div>
                </div>
              </div>

              <Link
                to="/contact"
                className="inline-flex justify-center items-center px-6 py-2 mt-6 text-sm font-semibold text-white bg-blue-600 rounded-full shadow-lg transition-transform duration-300 sm:px-8 sm:py-3 hover:-translate-y-1 hover:shadow-xl"
              >
                Apply for Certification
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-10 bg-white sm:py-14 lg:py-18">
        <div className="px-4 mx-auto max-w-6xl sm:px-6">
          <div className="grid gap-8 sm:gap-10 md:gap-12 items-start lg:grid-cols-2">
            <div className="space-y-5 sm:space-y-6 md:space-y-8">
              <h2 className="text-2xl font-semibold text-center text-gray-900 sm:text-3xl lg:text-left animate-reveal" style={{ animationDelay: "0.05s" }}>
                Experience Snapshot
              </h2>
              <p className="text-sm leading-relaxed text-center text-gray-600 sm:text-base lg:text-left animate-reveal" style={{ animationDelay: "0.12s" }}>
                A focused, high-impact program curated by Mr. Sourabh Jain to help leaders in mining and resource-driven organizations sharpen strategy, collaboration, and execution.
              </p>

              <div className="flex flex-wrap gap-2 animate-reveal" style={{ animationDelay: "0.15s" }}>
                <span className="px-4 py-1.5 text-xs font-semibold tracking-wide text-blue-700 bg-blue-50/90 rounded-full border border-blue-200 shadow-sm transition-transform duration-300 hover:-translate-y-1">
                  5-Day Intensive
                </span>
                <span className="px-4 py-1.5 text-xs font-semibold tracking-wide text-blue-700 bg-blue-50/90 rounded-full border border-blue-200 shadow-sm transition-transform duration-300 hover:-translate-y-1">
                  Offline / In-Person
                </span>
                <span className="px-4 py-1.5 text-xs font-semibold tracking-wide text-blue-700 bg-blue-50/90 rounded-full border border-blue-200 shadow-sm transition-transform duration-300 hover:-translate-y-1">
                  Peer Cohort Based
                </span>
              </div>

              <div className="grid grid-cols-1 gap-4 pt-2 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div
                  className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500/20 via-blue-500/5 to-transparent p-[1px] animate-reveal"
                  style={{ animationDelay: "0.22s" }}
                >
                  <div className="space-y-3 rounded-[calc(1rem-1px)] bg-white/95 p-5 shadow-sm">
                    <h3 className="text-sm font-semibold text-gray-900">
                      Key Features
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex gap-2 items-start transition-transform duration-300 hover:translate-x-1">
                        <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>Custom-built for senior mining leaders</span>
                      </li>
                      <li className="flex gap-2 items-start transition-transform duration-300 hover:translate-x-1">
                        <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>Faculty from premier institutes</span>
                      </li>
                      <li className="flex gap-2 items-start transition-transform duration-300 hover:translate-x-1">
                        <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>Case studies & simulations</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div
                  className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500/20 via-purple-500/5 to-transparent p-[1px] animate-reveal"
                  style={{ animationDelay: "0.28s" }}
                >
                  <div className="space-y-3 rounded-[calc(1rem-1px)] bg-white/95 p-5 shadow-sm">
                    <h3 className="text-sm font-semibold text-gray-900">
                      Target Audience
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex gap-2 items-start transition-transform duration-300 hover:translate-x-1">
                        <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>Senior executives & division heads</span>
                      </li>
                      <li className="flex gap-2 items-start transition-transform duration-300 hover:translate-x-1">
                        <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>Functional leaders driving strategy</span>
                      </li>
                      <li className="flex gap-2 items-start transition-transform duration-300 hover:translate-x-1">
                        <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>High-potential future leaders</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div
                  className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-500/20 via-emerald-500/5 to-transparent p-[1px] animate-reveal"
                  style={{ animationDelay: "0.34s" }}
                >
                  <div className="space-y-3 rounded-[calc(1rem-1px)] bg-white/95 p-5 shadow-sm">
                    <h3 className="text-sm font-semibold text-gray-900">
                      Expected Outcomes
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex gap-2 items-start transition-transform duration-300 hover:translate-x-1">
                        <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>Stronger strategic leadership</span>
                      </li>
                      <li className="flex gap-2 items-start transition-transform duration-300 hover:translate-x-1">
                        <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>Broader perspective & influence</span>
                      </li>
                      <li className="flex gap-2 items-start transition-transform duration-300 hover:translate-x-1">
                        <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>Peer-led  culture</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <Link
                to="/contact"
                className="inline-flex justify-center items-center px-6 py-2 mt-6 text-sm font-semibold text-white bg-blue-600 rounded-full shadow-lg transition-transform duration-300 sm:px-8 sm:py-3 hover:-translate-y-1 hover:shadow-xl"
              >
                Apply for Certification
              </Link>
            </div>
            <div className="overflow-hidden mt-8 sm:mt-10 md:mt-12 lg:mt-0 bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm transition-transform duration-300 hover:shadow-md">
              <img
                src={withBase("images/sc2.png")}
                alt="Sourabh Jain facilitating a leadership session"
                className="object-cover w-full h-auto max-h-[400px] sm:max-h-[500px] md:max-h-[600px] lg:max-h-none"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="py-10 sm:py-14 lg:py-18 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6">
          <h2
            className="mb-6 text-2xl font-semibold text-center text-gray-900 sm:mb-10 sm:text-3xl md:mb-12 animate-reveal"
            style={{ animationDelay: "0.05s" }}
          >
            Program Highlights
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500/20 via-blue-500/5 to-transparent p-[1px] animate-reveal transition-transform duration-300 hover:-translate-y-2"
              style={{ animationDelay: "0.12s" }}
            >
              <div className="p-6 rounded-[calc(1rem-1px)] bg-white/95 shadow-sm">
                <PenTool className="mb-4 w-8 h-8 text-blue-600" />
                <h3 className="mb-2 text-base font-semibold text-gray-900">
                  Practical Focus
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  Real situations, actionable playbooks, immediate workplace
                  impact.
                </p>
              </div>
            </div>
            <div
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-500/20 via-amber-500/5 to-transparent p-[1px] animate-reveal transition-transform duration-300 hover:-translate-y-2"
              style={{ animationDelay: "0.18s" }}
            >
              <div className="p-6 rounded-[calc(1rem-1px)] bg-white/95 shadow-sm">
                <BookOpen className="mb-4 w-8 h-8 text-amber-600" />
                <h3 className="mb-2 text-base font-semibold text-gray-900">
                  Case-Driven
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  Mining and PSU stories frame every discussion and assignment.
                </p>
              </div>
            </div>
            <div
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-500/20 via-emerald-500/5 to-transparent p-[1px] animate-reveal transition-transform duration-300 hover:-translate-y-2"
              style={{ animationDelay: "0.24s" }}
            >
              <div className="p-6 rounded-[calc(1rem-1px)] bg-white/95 shadow-sm">
                <Users className="mb-4 w-8 h-8 text-emerald-600" />
                <h3 className="mb-2 text-base font-semibold text-gray-900">
                  Peer Learning
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  Curated cohort with guided reflection and feedback loops.
                </p>
              </div>
            </div>
            <div
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500/20 via-purple-500/5 to-transparent p-[1px] animate-reveal transition-transform duration-300 hover:-translate-y-2"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="p-6 rounded-[calc(1rem-1px)] bg-white/95 shadow-sm">
                <TrendingUp className="mb-4 w-8 h-8 text-purple-600" />
                <h3 className="mb-2 text-base font-semibold text-gray-900">
                  Execution Ready
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  Personal action plans ensure the learning sticks post-program.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Audience & Outcomes */}
      <section className="py-10 bg-white sm:py-14 lg:py-18">
        <div className="px-4 mx-auto max-w-6xl sm:px-6">
          <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2">
            <div
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500/25 via-blue-500/10 to-transparent p-[2px] animate-reveal"
              style={{ animationDelay: "0.05s" }}
            >
              <div className="p-4 sm:p-6 lg:p-8 rounded-[calc(1rem-2px)] bg-white/95">
                <h2 className="mb-4 text-xl font-semibold text-gray-900 sm:mb-6 sm:text-2xl">
                  Who Should Join
                </h2>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex gap-3 transition-transform duration-300 hover:translate-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Senior leaders stepping into strategic roles</span>
                  </li>
                  <li className="flex gap-3 transition-transform duration-300 hover:translate-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Functional heads guiding cross-unit performance</span>
                  </li>
                  <li className="flex gap-3 transition-transform duration-300 hover:translate-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>High-potential managers in succession pipelines</span>
                  </li>
                  <li className="flex gap-3 transition-transform duration-300 hover:translate-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>
                      Professionals keen to validate leadership skills
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-500/25 via-emerald-500/10 to-transparent p-[2px] animate-reveal"
              style={{ animationDelay: "0.15s" }}
            >
              <div className="p-4 sm:p-6 lg:p-8 rounded-[calc(1rem-2px)] bg-white/95">
                <h2 className="mb-4 text-xl font-semibold text-gray-900 sm:mb-6 sm:text-2xl">
                  You'll Walk Away With
                </h2>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex gap-3 transition-transform duration-300 hover:translate-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Sharper strategic thinking under uncertainty</span>
                  </li>
                  <li className="flex gap-3 transition-transform duration-300 hover:translate-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>
                      Frameworks to drive change and stakeholder alignment
                    </span>
                  </li>
                  <li className="flex gap-3 transition-transform duration-300 hover:translate-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>
                      A personal action blueprint for immediate execution
                    </span>
                  </li>
                  <li className="flex gap-3 transition-transform duration-300 hover:translate-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Credible certification from JainX360</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & CTA */}
      <section className="py-10 bg-gray-50 sm:py-14 lg:py-18">
        <div className="px-4 mx-auto max-w-7xl sm:px-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[2fr,1fr] sm:gap-8">
            <div
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500/25 via-purple-500/15 to-transparent p-[2px] animate-reveal"
              style={{ animationDelay: "0.05s" }}
            >
              <div className="p-4 sm:p-6 lg:p-8 rounded-[calc(1rem-2px)] bg-white/95 md:p-10">
                <h2 className="mb-6 text-xl font-semibold text-gray-900 sm:mb-8 sm:text-2xl">
                  Why Leaders Choose JainX360
                </h2>
                <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="p-4 transition-all duration-300 rounded-lg hover:bg-gray-50 hover:-translate-y-0.5">
                    <h4 className="text-sm font-semibold text-gray-900 sm:text-base">
                      Career Lift
                    </h4>
                    <p className="mt-1 text-xs leading-relaxed text-gray-600 sm:text-sm">
                      Build credibility for promotions and strategic mandates.
                    </p>
                  </div>
                  <div className="space-y-2 transition-transform duration-300 hover:-translate-y-1">
                    <h4 className="text-base font-semibold text-gray-900">
                      Recognition
                    </h4>
                    <p className="text-sm leading-relaxed text-gray-600">
                      Signal NMDC-ready leadership capability to stakeholders.
                    </p>
                  </div>
                  <div className="space-y-2 transition-transform duration-300 hover:-translate-y-1">
                    <h4 className="text-base font-semibold text-gray-900">
                      Proof of Skill
                    </h4>
                    <p className="text-sm leading-relaxed text-gray-600">
                      Showcase your certification badge across digital profiles.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 p-[2px] animate-reveal shadow-lg"
              style={{ animationDelay: "0.15s" }}
            >
              <div className="flex flex-col justify-center p-5 sm:p-6 md:p-8 text-white rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600">
                <h3 className="text-lg font-semibold sm:text-xl">
                  Need a quick conversation?
                </h3>
                <p className="mt-2 mb-4 text-sm leading-relaxed text-blue-100 sm:mb-6 sm:text-base">
                  We'll help you with nominations, travel support, and
                  stakeholder buy-in decks.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex justify-center items-center px-4 py-2 text-sm font-semibold text-blue-700 bg-white rounded-full shadow-lg transition-all duration-300 sm:px-5 sm:py-2.5 hover:-translate-y-0.5 hover:shadow-xl active:scale-95"
                >
                  Connect with us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Trainer;
