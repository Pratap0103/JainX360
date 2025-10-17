import React from "react";
import HeroSection from "../components/HeroSection";
import {
  Award,
  Users,
  BookOpen,
  TrendingUp,
  TargetIcon,
  Zap,
  Brain,
  Camera,
} from "lucide-react";
import CourseCard from "../components/CourseCard";
import TestimonialCard from "../components/TestimonialCard";
import { withBase } from "../lib/utils";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <HeroSection
        title="Business & Life Coaching Corporate training"
        subtitle="Join over 21,000+ individuals who have transformed their lives through our training programs and coaching"
        backgroundImage='\homepage.jpg'
        cta="Explore Courses"
        ctaLink="/courses"
        secondaryCta="Contact Us"
        secondaryCtaLink="/contact"
        className="text-center"
      />

      {/* About Section */}
      <section className="container-custom">
        <div className="grid grid-cols-1 gap-8 items-center sm:gap-12 md:grid-cols-2">
          <div className="text-center md:text-left">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:mb-6 sm:text-3xl md:text-4xl">
              Mastery Academy - Founded with Purpose
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-gray-700 sm:mb-4 sm:text-base md:text-justify">
              Learning is a never-ending process. Everyday new things are
              learned through Seminars, Books, Experience, Friends, Internet,
              Media & many other means. But the question is how many of us
              really put that learning into practice in order to check its
              worthiness.
            </p>
            <p className="mb-4 text-sm leading-relaxed text-gray-700 sm:mb-6 sm:text-base md:text-justify">
              To overcome this problem, Mr. Sourabh Jain tried to give a new
              look to the training process. His training programs are designed
              giving importance to Time & also to Individual's Work & Personal
              life. All the training programs he conducts are clubbed with
              Interesting Facts & Fun.
            </p>
            <div className="flex justify-center md:justify-start">
              <Link to="/about" className="btn btn-outline">
                Learn More About Us
              </Link>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <img
              src={withBase(
                "/homepageafter.png"
              )}
              alt="Training session"
              className="w-full max-w-lg h-auto rounded-md shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 bg-gray-50 sm:py-16 md:py-24">
        <div className="container px-4 mx-auto">
          <h2 className="text-center section-heading">Why Choose Mastery Academy</h2>
          <div className="grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 text-center bg-white rounded-md shadow-md sm:p-8">
              <div className="flex justify-center items-center mx-auto mb-4 w-14 h-14 bg-blue-100 rounded-full sm:mb-6 sm:w-16 sm:h-16">
                <Award className="w-7 h-7 text-blue-600 sm:w-8 sm:h-8" />
              </div>
              <h3 className="mb-2 text-lg font-bold sm:mb-3 sm:text-xl">Experienced Coach</h3>
              <p className="text-sm text-justify text-gray-600 sm:text-base">
                16+ years of corporate experience specializing in training and
                professional development.
              </p>
            </div>

            <div className="p-6 text-center bg-white rounded-md shadow-md sm:p-8">
              <div className="flex justify-center items-center mx-auto mb-4 w-14 h-14 bg-amber-100 rounded-full sm:mb-6 sm:w-16 sm:h-16">
                <Users className="w-7 h-7 text-amber-600 sm:w-8 sm:h-8" />
              </div>
              <h3 className="mb-2 text-lg font-bold sm:mb-3 sm:text-xl">21,000+ Successes</h3>
              <p className="text-sm text-justify text-gray-600 sm:text-base">
                We've helped over 21,000 individuals, employees & business
                owners transform through our training programs.
              </p>
            </div>

            <div className="p-6 text-center bg-white rounded-md shadow-md sm:p-8">
              <div className="flex justify-center items-center mx-auto mb-4 w-14 h-14 bg-emerald-100 rounded-full sm:mb-6 sm:w-16 sm:h-16">
                <BookOpen className="w-7 h-7 text-emerald-600 sm:w-8 sm:h-8" />
              </div>
              <h3 className="mb-2 text-lg font-bold sm:mb-3 sm:text-xl">Practical Learning</h3>
              <p className="text-sm text-justify text-gray-600 sm:text-base">
                Our programs focus on practical application of knowledge,
                ensuring you implement what you learn.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-12 container-custom sm:py-16 md:py-24">
        <h2 className="text-center section-heading">Our Training Programs</h2>
        <div className="grid grid-cols-1 gap-6 justify-items-center sm:gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4">
          <CourseCard
            title="AI Training for NMDC Executives"
            description="5-day intensive program on Artificial Intelligence applications in mining and business decision making Leadership Development."
            icon={Brain}
            color="purple"
          />
          <CourseCard
            title="Photography & Photoshop Training"
            description="Comprehensive 5-day program covering photography fundamentals, composition, lighting, and digital editing skills."
            icon={Camera}
            color="cyan"
          />
          
          <CourseCard
            title="5-Day Non-Residential Leadership Development "
            description="Advancing leaders from operational managers to strategic decision-makers with immersive leadership development fundamentals."
            icon={TrendingUp}
            color="teal"
          />

          <CourseCard
            title="Stock Market Training Program"
            description="5-day intensive course on stock market fundamentals, analysis techniques, and trading strategies for investors and traders fundamentals."
            icon={TrendingUp}
            color="rose"
          />
        </div>
        <div className="mt-8 text-center sm:mt-12">
          <Link to="/courses" className="btn btn-primary">
            View All Programs
          </Link>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container px-4 mx-auto text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Ready to Transform Your Life & Business?
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-blue-100">
            Join the thousands who have already experienced the power of our
            training programs.
          </p>
          <div className="flex flex-col gap-4 justify-center sm:flex-row">
            <Link
              to="/contact"
              className="text-blue-600 bg-white btn hover:bg-gray-100"
            >
              Contact Us Today
            </Link>
            <Link
              to="/courses"
              className="text-white border-2 border-white btn hover:bg-white hover:text-blue-600"
            >
              Explore Our Programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
