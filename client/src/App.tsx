import { useState } from "react";
import { Button } from "./components/ui/button";

export const App = () => {
  const [reservations, setReservations] = useState(0);

  return (
    <div className="min-h-screen  bg-black text-white relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-white bg-[size:50px_50px]" />

      {/* Navbar */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-4 border-b border-gray-800/50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <span className="text-black font-bold text-sm">C</span>
          </div>
          <span className="font-semibold text-lg">CineMovie</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
          <span className="hover:text-white cursor-pointer transition-colors">
            Features
          </span>
          <span className="hover:text-white cursor-pointer transition-colors">
            Movies
          </span>
          <span className="hover:text-white cursor-pointer transition-colors">
            Pricing
          </span>
          <span className="hover:text-white cursor-pointer transition-colors">
            Contact
          </span>
        </div>

        <div className="flex items-center gap-4">
          <button className="text-sm text-gray-400 hover:text-white transition-colors">
            Log in
          </button>
          <Button className="bg-white text-black hover:bg-gray-200 text-sm font-medium">
            Get Started
          </Button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 pt-20 pb-24">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 bg-gray-900/50 border border-gray-800 rounded-full px-4 py-2 text-sm text-gray-300 mb-8">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          Launching Soon
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-center max-w-4xl leading-tight mb-6">
          Elevate Your Cinema
          <br />
          Experience with
          <br />
          <span className="text-gray-400">CineMovie</span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-400 text-center max-w-2xl leading-relaxed mb-12">
          The all-in-one platform for movie reservations and cinema management.
          Streamline your booking process and focus on what matters most.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <Button
            onClick={() => setReservations((prev) => prev + 1)}
            className="bg-white text-black hover:bg-gray-200 font-medium px-8 py-3 text-base"
          >
            Reserve Tickets ({reservations})
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Button>

          <Button
            variant="outline"
            className="border-gray-700 text-white hover:bg-gray-900 font-medium px-8 py-3 text-base"
          >
            View Demo
          </Button>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-8 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            No credit card
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            14-day trial
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Cancel anytime
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </div>
  );
};
