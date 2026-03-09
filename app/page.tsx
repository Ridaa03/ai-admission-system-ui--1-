"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export default function Home() {
  const { theme } = useTheme();

  return (
    <div className="bg-background text-foreground">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-background shadow-md border-b border-muted">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex flex-row items-center gap-4">
            <img
              className="w-20 h-20"
              src="https://gctownship.edu.pk/wp-content/uploads/2024/11/favi.png"
              alt=""
            />
            <div>
              <h3 className="text-xl font-bold text-primary">
                Government Graduate College{" "}
              </h3>
              <h4 className="text-lg font-semibold">Township Lahore</h4>
            </div>
          </div>
          <div className="hidden md:flex gap-8 items-center text-lg font-semibold">
            <a
              href="#hero"
              className="text-foreground hover:text-primary font-medium transition"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-foreground hover:text-primary font-medium transition"
            >
              About
            </a>
            <a
              href="#problem"
              className="text-foreground hover:text-primary font-medium transition"
            >
              Problem
            </a>
            <a
              href="#solution"
              className="text-foreground hover:text-primary font-medium transition"
            >
              Solution
            </a>
            <a
              href="#faq"
              className="text-foreground hover:text-primary font-medium transition"
            >
              FAQ
            </a>
            <ThemeToggle />
          </div>
          {/* mobile: always show toggle even when links are hidden */}
          <div className="md:hidden flex items-center">
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen bg-cover bg-center flex items-center justify-center px-4"
        style={{
          backgroundImage: `url('https://static.vecteezy.com/system/resources/thumbnails/024/269/342/small/graduation-cap-with-earth-globe-concept-of-global-business-study-abroad-educational-back-to-school-education-in-global-world-study-abroad-business-in-universities-in-worldwide-language-study-photo.jpg')`,
        }}
      >
        {/* overlay to improve legibility and support theme */}
        <div className="absolute inset-0 bg-black/40 dark:bg-black/70" />
        <div className="relative text-center">
          {/* Hero Title */}
          <h1 className="text-7xl md:text-8xl font-bold text-white drop-shadow-lg mb-4">
            AI-Enhanced Admission <br />{" "}
            <span className="text-primary">Management System</span>
          </h1>

          {/* Description */}
          <p className="text-xl text-white/90 drop-shadow mb-12 max-w-2xl mx-auto">
            Streamlined university admissions with OCR verification, AI
            recommendations, and transparent merit lists
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/student/login"
              className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              Student Portal
            </Link>
            <Link
              href="/admin/login"
              className="px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              Admin Portal
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Image */}
          <div className="w-full md:w-1/2 relative h-64 md:h-96">
            <Image
              src="https://media.istockphoto.com/id/478074107/photo/joyful-information.jpg?s=612x612&w=0&k=20&c=CAAKJ3gVQuHcsFYNUzyfZGj2qOp2tL589Yrgxxh2JEk="
              alt="University campus"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
          {/* Text */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-5xl font-bold text-foreground mb-6">
              About Us
            </h2>
            <p className="text-muted-foreground mb-4">
              GGCT is a cutting-edge platform designed to modernize university
              admissions through automation, intelligence, and full
              transparency.
            </p>
            <p className="text-muted-foreground mb-4">
              For students, GGCT offers a seamless application experience where
              documents are verified instantly, statuses are updated in real
              time, and results are delivered fairly based on merit.
            </p>
            <p className="text-muted-foreground">
              With built-in analytics, secure access control, and an intuitive
              interface, the platform bridges the communication gap between
              applicants and administrators while providing a reliable, scalable
              solution for universities of all sizes.
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-foreground mb-12 text-center">
            The Problem
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-red-50 dark:bg-red-900 border-l-4 border-red-500 dark:border-red-400 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-foreground mb-3">
                📋 Manual Processing
              </h3>
              <p className="text-muted-foreground">
                Traditional admissions require extensive manual document review
                and data entry, consuming countless hours.
              </p>
            </div>
            <div className="bg-red-50 dark:bg-red-900 border-l-4 border-red-500 dark:border-red-400 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-foreground mb-3">
                ⚠️ Human Error
              </h3>
              <p className="text-muted-foreground">
                Manual verification leads to inconsistencies, mistakes, and
                potential fraud in the admission process.
              </p>
            </div>
            <div className="bg-red-50 dark:bg-red-900 border-l-4 border-red-500 dark:border-red-400 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-foreground mb-3">
                🔒 Lack of Transparency
              </h3>
              <p className="text-muted-foreground">
                Students have limited visibility into how decisions are made,
                creating trust issues and disputes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-20 px-4 bg-blue-50 dark:bg-blue-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-foreground mb-12 text-center">
            Our Solution
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 border-l-4 border-blue-600 dark:border-blue-400 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-foreground mb-3">
                🔍 Advanced OCR
              </h3>
              <p className="text-muted-foreground">
                Intelligent document scanning and verification technology that
                accurately extracts and validates student information in
                seconds.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 border-l-4 border-blue-600 dark:border-blue-400 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-foreground mb-3">
                🤖 AI Matching
              </h3>
              <p className="text-muted-foreground">
                Smart algorithm that matches students with suitable programs
                based on qualifications, preferences, and institutional
                requirements.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 border-l-4 border-blue-600 dark:border-blue-400 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-foreground mb-3">
                📊 Full Transparency
              </h3>
              <p className="text-muted-foreground">
                Real-time merit lists and clear decision criteria ensure
                complete transparency and build trust with all stakeholders.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white dark:bg-gray-800 border-l-4 border-blue-600 dark:border-blue-400 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-foreground mb-3">
                📈 Analytics Dashboard
              </h3>
              <p className="text-muted-foreground">
                Rich visualizations and metrics allow administrators to monitor
                application trends and performance effortlessly.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 border-l-4 border-blue-600 dark:border-blue-400 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-foreground mb-3">
                🔐 Secure Access
              </h3>
              <p className="text-muted-foreground">
                Role-based authentication ensures only authorized users can view
                or modify sensitive admission data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-foreground mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <details className="border border-muted/50 rounded-lg p-4">
              <summary className="font-semibold text-foreground cursor-pointer">
                How do I apply as a student?
              </summary>
              <p className="mt-2 text-muted-foreground">
                Click the "Student Portal" button on the hero section, register
                an account, and follow the application steps outlined there.
              </p>
            </details>
            <details className="border border-muted/50 rounded-lg p-4">
              <summary className="font-semibold text-foreground cursor-pointer">
                What credentials are required for admin access?
              </summary>
              <p className="mt-2 text-muted-foreground">
                Admins need a university-issued username and password. Contact
                your institution's IT department to obtain access.
              </p>
            </details>
            <details className="border border-muted/50 rounded-lg p-4">
              <summary className="font-semibold text-foreground cursor-pointer">
                Is my personal information secure?
              </summary>
              <p className="mt-2 text-muted-foreground">
                Yes. We use encrypted storage and role-based access controls to
                ensure your data remains protected.
              </p>
            </details>
            <details className="border border-muted/50 rounded-lg p-4">
              <summary className="font-semibold text-foreground cursor-pointer">
                Can I track my application status?
              </summary>
              <p className="mt-2 text-muted-foreground">
                Absolutely. Once logged in, students can view real-time updates
                on their application and merit list placement.
              </p>
            </details>
            <details className="border border-muted/50 rounded-lg p-4">
              <summary className="font-semibold text-foreground cursor-pointer">
                Who do I contact for support?
              </summary>
              <p className="mt-2 text-muted-foreground">
                Use the contact information in the footer or reach out via your
                institution's admissions office.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white dark:bg-background dark:text-foreground py-12 px-4 border-t border-muted">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">GGCT</h3>
              <p className="text-muted-foreground">
                Transforming university admissions with AI and transparency.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#hero" className="hover:text-primary transition">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#problem" className="hover:text-primary transition">
                    Problem
                  </a>
                </li>
                <li>
                  <a href="#solution" className="hover:text-primary transition">
                    Solution
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-primary transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Portals</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link
                    href="/student/login"
                    className="hover:text-primary transition"
                  >
                    Student Login
                  </Link>
                </li>
                <li>
                  <Link
                    href="/admin/login"
                    className="hover:text-primary transition"
                  >
                    Admin Login
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <p className="text-muted-foreground">
                Email: info@governmentgraduatecollege.com
              </p>
              <p className="text-muted-foreground">Phone: +92-123-456-7890</p>
            </div>
          </div>
          <div className="border-t border-muted pt-8 text-center text-muted-foreground">
            <p className="mb-2">
              © 2025 Punjab University College of Information Technology. All
              rights reserved.
            </p>
            <p>Developed by Rida Nadeem, Muhammad Ahmad & Hafiz Awais</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
