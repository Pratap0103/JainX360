import React, { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import { Award, Users, BookOpen, Target, Clock, Medal } from "lucide-react";
import { Link } from "react-router-dom";

function About() {
  const [animateVision, setAnimateVision] = useState(false);
  const [animateMission, setAnimateMission] = useState(false);
  const [animateStory, setAnimateStory] = useState(false);
  const [animateValues, setAnimateValues] = useState(false);

  useEffect(() => {
    // Trigger animations with slight delays for a cascade effect
    const visionTimer = setTimeout(() => setAnimateVision(true), 300);
    const missionTimer = setTimeout(() => setAnimateMission(true), 600);
    const storyTimer = setTimeout(() => setAnimateStory(true), 900);
    const valuesTimer = setTimeout(() => setAnimateValues(true), 1200);

    return () => {
      clearTimeout(visionTimer);
      clearTimeout(missionTimer);
      clearTimeout(storyTimer);
      clearTimeout(valuesTimer);
    };
  }, []);

  return (
    <div className="fade-in">
      {/* Hero Section */}
      <HeroSection
        title="About JainX360 Academy"
        subtitle="Founded in 2013 with a vision to create 1 Million success stories"
        backgroundImage="/WhatsApp Image 2025-08-28 at 12.36.35_1d6db621.png"
        ctaLink="/courses"
        className="text-center"
      />

      {/* Mission & Vision */}
      <section className="py-8 container-custom sm:py-10">
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
          <div
            className={`glass bg-gray-50 p-4 sm:p-6 rounded-lg border border-gray-200 shadow-lg transform transition-all duration-700 hover-lift ${
              animateVision
                ? "opacity-100 translate-y-0 slide-in-left"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="relative mb-2 text-xl font-bold text-blue-800 sm:mb-3 sm:text-2xl group text-center md:text-left">
              Our Vision
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-500 group-hover:w-full"></span>
            </h3>
            <p className="mb-3 text-sm leading-relaxed text-blue-700 sm:text-base text-center md:text-left">
              We aim to be the leading Business & Life Coaching provider in
              INDIA by helping & empowering individuals & organizations to
              become World Class & Extraordinary.
            </p>
          </div>

          <div
            className={`glass bg-gray-50 p-4 sm:p-6 rounded-lg border border-gray-200 shadow-lg transform transition-all duration-700 hover-lift ${
              animateMission
                ? "opacity-100 translate-y-0 slide-in-right"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="relative mb-2 text-xl font-bold text-amber-800 sm:mb-3 sm:text-2xl group text-center md:text-left">
              Our Mission
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-600 to-amber-400 transition-all duration-500 group-hover:w-full"></span>
            </h3>
            <p className="mb-3 text-sm leading-relaxed text-amber-700 sm:text-base text-center md:text-left">
              To create 1 Million Success Stories & make them reach a higher
              level of thinking, thereby giving a meaning to their existence.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-10 bg-gray-50 sm:py-12 md:py-16">
        <div className="container px-4 mx-auto">
          <div className="mx-auto max-w-4xl text-center md:text-left">
            <h2 className="mb-4 section-heading sm:mb-6 text-center">Our Story</h2>
            <div
              className={`glass p-4 sm:p-6 rounded-lg shadow-lg transform transition-all duration-700 hover-lift ${
                animateStory
                  ? "opacity-100 translate-y-0 zoom-in"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <p className="mb-3 text-sm leading-relaxed text-gray-700 sm:text-base text-justify">
                Learning is a never ending process. Everyday new things are been
                learnt through Seminars, Books, Experience, Friends, Internet,
                Media & many other means. But the question is how many of us;
                really put that learning into practice in order to check its
                worthiness.
              </p>
              <p className="mb-3 text-sm leading-relaxed text-gray-700 sm:text-base text-justify">
                One more important reason is that we forget what we learnt in
                just 2-3 days. Hence, when we actually want to implement the
                learning we don't know what to implement as we have already
                forgot the material. But, the fact is, we cannot compromise on
                learning. We have to take time some-how to work on the learning;
                otherwise we are giving no value for the TIME we spent on
                learning new things.
              </p>
              <p className="mb-4 text-sm leading-relaxed text-gray-700 sm:text-base text-justify">
                As rightly said, TIME is PRECIOUS so also LEARNING.
              </p>
              <p className="mb-4 text-sm leading-relaxed text-gray-700 sm:text-base text-justify">
                To overcome this problem, Mr. Sourabh Jain tried to give a new
                look to the training process. His training programs are designed
                giving importance to Time & also to Individual's Work & Personal
                life. All the training programs he conducts are clubbed with
                Interesting Facts & Fun. Sometimes programs are combined with
                memory techniques. This way you learn the contents of seminar
                easily & also not forget them.
              </p>
              <p className="text-sm leading-relaxed text-gray-700 sm:text-base text-justify">
                Training is a process of unlearning & learning—to acquire &
                enhance skills & knowledge & put it into practice—to enable the
                trainees to do the job efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-10 container-custom sm:py-12">
        <h2 className="mb-4 text-center section-heading sm:mb-6">Our Values</h2>
        <div
          className={`grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 transition-all duration-700 justify-items-center ${
            animateValues
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="w-full max-w-sm p-4 rounded-lg shadow-md transition-all duration-300 transform sm:p-5 glass hover:shadow-lg hover:-translate-y-2 group hover-lift text-center">
            <div className="flex justify-center items-center mb-2 w-12 h-12 mx-auto bg-gradient-to-br from-blue-50 to-blue-100 rounded-full border border-blue-100 shadow-sm transition-colors duration-300 sm:mb-3 sm:w-14 sm:h-14 group-hover:bg-blue-100 group-hover:shadow">
              <Award className="w-5 h-5 text-blue-600 transition-transform duration-300 sm:w-6 sm:h-6 group-hover:scale-125" />
            </div>
            <h3 className="mb-2 text-lg font-bold transition-colors duration-300 sm:text-xl group-hover:text-blue-700">
              Innovation
            </h3>
            <p className="text-xs text-justify text-gray-600 transition-colors duration-300 group-hover:text-gray-800 sm:text-base">
              We encourage changes & innovation to meet challenges in both
              personal and business environments.
            </p>
          </div>

          <div className="w-full max-w-sm p-4 rounded-lg shadow-md transition-all duration-300 delay-100 transform sm:p-5 glass hover:shadow-lg hover:-translate-y-2 group hover-lift text-center">
            <div className="flex justify-center items-center mb-2 w-12 h-12 mx-auto bg-amber-50 rounded-full border border-amber-100 transition-colors duration-300 sm:mb-3 sm:w-14 sm:h-14 group-hover:bg-amber-100">
              <Medal className="w-5 h-5 text-amber-600 transition-transform duration-300 sm:w-6 sm:h-6 group-hover:scale-110" />
            </div>
            <h3 className="mb-2 text-lg font-bold transition-colors duration-300 sm:text-xl group-hover:text-amber-700">
              Honesty & Integrity
            </h3>
            <p className="text-xs text-justify text-gray-600 transition-colors duration-300 group-hover:text-gray-800 sm:text-base">
              We promote honesty, integrity & openness in all we do, ensuring
              trust and transparency.
            </p>
          </div>

          <div className="w-full max-w-sm p-4 rounded-lg shadow-md transition-all duration-300 delay-200 transform sm:p-5 glass hover:shadow-lg hover:-translate-y-2 group hover-lift text-center">
            <div className="flex justify-center items-center mb-2 w-12 h-12 mx-auto bg-gradient-to-br from-green-50 to-green-100 rounded-full border border-green-100 shadow-sm transition-colors duration-300 sm:mb-3 sm:w-14 sm:h-14 group-hover:bg-green-100 group-hover:shadow">
              <Target className="w-5 h-5 text-green-600 transition-transform duration-300 sm:w-6 sm:h-6 group-hover:scale-125" />
            </div>
            <h3 className="mb-2 text-lg font-bold transition-colors duration-300 sm:text-xl group-hover:text-green-700">
              Accountability
            </h3>
            <p className="text-xs text-justify text-gray-600 transition-colors duration-300 group-hover:text-gray-800 sm:text-base">
              We are responsible, accountable & effective in our approach to
              training and development.
            </p>
          </div>

          <div className="w-full max-w-sm p-4 rounded-lg shadow-md transition-all duration-300 delay-300 transform sm:p-5 glass hover:shadow-lg hover:-translate-y-2 group hover-lift text-center">
            <div className="flex justify-center items-center mb-2 w-12 h-12 mx-auto bg-gradient-to-br from-purple-50 to-purple-100 rounded-full border border-purple-100 shadow-sm transition-colors duration-300 sm:mb-3 sm:w-14 sm:h-14 group-hover:bg-purple-100 group-hover:shadow">
              <BookOpen className="w-5 h-5 text-purple-600 transition-transform duration-300 sm:w-6 sm:h-6 group-hover:scale-125" />
            </div>
            <h3 className="mb-2 text-lg font-bold transition-colors duration-300 sm:text-xl group-hover:text-purple-700">
              Uniqueness
            </h3>
            <p className="text-xs text-justify text-gray-600 transition-colors duration-300 group-hover:text-gray-800 sm:text-base">
              Uniqueness is the value of our existence. We bring fresh
              perspectives to traditional training.
            </p>
          </div>

          <div className="w-full max-w-sm p-4 rounded-lg shadow-md transition-all duration-300 transform sm:p-5 glass hover:shadow-lg hover:-translate-y-2 group hover-lift delay-400 text-center">
            <div className="flex justify-center items-center mb-2 w-12 h-12 mx-auto bg-gradient-to-br from-red-50 to-red-100 rounded-full border border-red-100 shadow-sm transition-colors duration-300 sm:mb-3 sm:w-14 sm:h-14 group-hover:bg-red-100 group-hover:shadow">
              <Users className="w-5 h-5 text-red-600 transition-transform duration-300 sm:w-6 sm:h-6 group-hover:scale-125" />
            </div>
            <h3 className="mb-2 text-lg font-bold transition-colors duration-300 sm:text-xl group-hover:text-red-700">
              Client First
            </h3>
            <p className="text-xs text-justify text-gray-600 transition-colors duration-300 group-hover:text-gray-800 sm:text-base">
              Client above all else. We prioritize the growth and success of our
              clients in everything we do.
            </p>
          </div>

          <div className="w-full max-w-sm p-4 rounded-lg shadow-md transition-all duration-300 delay-500 transform sm:p-5 glass hover:shadow-lg hover:-translate-y-2 group hover-lift text-center">
            <div className="flex justify-center items-center mb-2 w-12 h-12 mx-auto bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-full border border-cyan-100 shadow-sm transition-colors duration-300 sm:mb-3 sm:w-14 sm:h-14 group-hover:bg-cyan-100 group-hover:shadow">
              <Clock className="w-5 h-5 text-cyan-600 transition-transform duration-300 sm:w-6 sm:h-6 group-hover:scale-125" />
            </div>
            <h3 className="mb-2 text-lg font-bold transition-colors duration-300 sm:text-xl group-hover:text-cyan-700">
              Celebrate Life
            </h3>
            <p className="text-xs text-justify text-gray-600 transition-colors duration-300 group-hover:text-gray-800 sm:text-base">
              We celebrate life and the journey of growth, making learning an
              enjoyable and enriching experience.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-10 bg-gray-50 sm:py-12 md:py-16">
        <div className="container px-4 mx-auto">
          <h2 className="mb-4 text-center section-heading sm:mb-6">Our Philosophy</h2>
          <div className="p-4 mx-auto max-w-4xl bg-white rounded-lg shadow-md sm:p-6 text-center">
            <p className="mb-4 text-base italic leading-relaxed text-center text-gray-700 sm:mb-5 sm:text-lg">
              "हर व्यक्ति और बिजनेसमेन एक सफलता की कहानी हो सकता है अगर वह अपने
              ऊपर लगातार काम करता है।"
            </p>
            <p className="mb-4 text-sm leading-relaxed text-gray-700 sm:text-base text-justify">
              We believe that success is a combination of five elements. To be
              successful, one needs to continuously expand ones knowledge,
              create strong attitudes, develop new skills, form good habits &
              implement result focused strategies.
            </p>
            <div className="grid grid-cols-1 gap-3 mt-6 text-center sm:gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-5">
              <div className="p-3 text-center bg-blue-50 rounded-lg border border-blue-100 sm:p-4 flex flex-col items-center justify-center">
                <h4 className="text-sm font-bold text-blue-800 sm:text-base">Knowledge</h4>
                <p className="text-xs text-gray-600 sm:text-sm">ज्ञान</p>
              </div>
              <div className="p-3 text-center bg-amber-50 rounded-lg border border-amber-100 sm:p-4 flex flex-col items-center justify-center">
                <h4 className="text-sm font-bold text-amber-800 sm:text-base">Attitude</h4>
                <p className="text-xs text-gray-600 sm:text-sm">मनोवृत्ति</p>
              </div>
              <div className="p-3 text-center bg-green-50 rounded-lg border border-green-100 sm:p-4 flex flex-col items-center justify-center">
                <h4 className="text-sm font-bold text-green-800 sm:text-base">Skills</h4>
                <p className="text-xs text-gray-600 sm:text-sm">कौशल</p>
              </div>
              <div className="p-3 text-center bg-purple-50 rounded-lg border border-purple-100 sm:p-4 flex flex-col items-center justify-center">
                <h4 className="text-sm font-bold text-purple-800 sm:text-base">Habits</h4>
                <p className="text-xs text-gray-600 sm:text-sm">आदतें</p>
              </div>
              <div className="p-3 text-center bg-red-50 rounded-lg border border-red-100 sm:p-4 flex flex-col items-center justify-center">
                <h4 className="text-sm font-bold text-red-800 sm:text-base">Strategies</h4>
                <p className="text-xs text-gray-600 sm:text-sm">रणनीतियाँ</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 bg-blue-600 sm:py-12">
        <div className="container px-4 mx-auto text-center">
          <h2 className="mb-2 text-2xl font-bold text-white sm:mb-3 sm:text-3xl md:text-4xl">
            Start Your Journey With Us
          </h2>
          <p className="mx-auto mb-4 max-w-3xl text-base leading-relaxed text-blue-100 sm:mb-6 sm:text-lg">
            Discover how our approach to training and development can transform
            your life and business.
          </p>
          <Link
            to="/contact"
            className="text-blue-600 bg-white btn hover:bg-gray-100"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}

export default About;
