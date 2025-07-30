import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { LaptopMinimal, UserCheck, Star, TrendingUp } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-tr from-fuchsia-100 via-white to-teal-100 overflow-x-hidden">
      {/* Colorful Background Blobs */}
      <div className="absolute left-[-200px] top-[-100px] w-[500px] h-[400px] bg-fuchsia-300 opacity-30 rounded-full blur-3xl z-0" />
      <div className="absolute right-[-180px] bottom-[-100px] w-[400px] h-[300px] bg-teal-200 opacity-20 rounded-full blur-3xl z-0" />

      {/* Navbar */}
      <nav className="sticky top-0 z-30">
        <div className="mx-auto mt-6 mb-3 rounded-2xl bg-white/60 shadow-lg backdrop-blur-lg border border-fuchsia-100/30 px-10 h-18 flex items-center justify-between max-w-5xl">
          <div className="flex items-center gap-3 pl-1 text-fuchsia-500">
            <LaptopMinimal className="h-8 w-8" />
            <span className="text-3xl leading-tight font-extrabold italic tracking-tighter bg-gradient-to-r from-fuchsia-500 to-teal-400 bg-clip-text text-transparent">
              JobHub
            </span>
          </div>
          <div className="flex items-center gap-7">
            <Link to="/login">
              <Button
                variant="ghost"
                className="relative focus:ring-2 focus:ring-fuchsia-400 focus:ring-offset-2 ring-inset ring-offset-white text-base font-semibold text-fuchsia-600 hover:-translate-y-1 transition-transform hover:bg-fuchsia-100/80 px-6 py-2"
              >
                Sign In
                <span className="absolute left-0 right-0 bottom-0 h-0.5 rounded bg-fuchsia-200 scale-x-0 group-hover:scale-x-100 transition-transform" />
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="rounded-full py-2 px-8 bg-gradient-to-tr from-fuchsia-400 to-teal-400 text-white text-base font-bold shadow-lg hover:shadow-fuchsia-300/40 hover:scale-105 active:scale-95 transition-transform">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 px-4">
        <section className="max-w-4xl mx-auto text-center pt-20 pb-14 flex flex-col items-center gap-8">
          <span className="inline-block bg-gradient-to-r from-fuchsia-200 to-teal-100 text-fuchsia-800 uppercase text-xs font-semibold px-4 py-1 rounded-full shadow">
            🎯 Find your perfect fit
          </span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-tight bg-gradient-to-r from-fuchsia-600 via-orange-500 to-teal-500 bg-clip-text text-transparent">
            Make<br className="hidden md:inline" />
            <span className="underline decoration-wavy decoration-orange-300"> Work</span> <br className="hidden lg:inline" />
            Meaningful
          </h1>
          <p className="max-w-2xl text-lg sm:text-xl text-gray-700 font-medium mx-auto">
            Discover roles curated for you. Connect with companies that value purpose and people. Grow your impact, your way.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-4">
            <Link to="/signup">
              <Button
                size="lg"
                className="bg-gradient-to-r from-teal-400 to-fuchsia-600 hover:from-fuchsia-500 hover:to-orange-400 text-white text-lg px-8 py-4 shadow-lg rounded-xl font-bold transition-transform hover:-translate-y-1"
              >
                Create Free Account
              </Button>
            </Link>
            <Link to="/jobs">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-teal-500 text-teal-700 hover:bg-teal-50 hover:border-fuchsia-400 hover:text-fuchsia-700 text-lg px-8 py-4 rounded-xl transition-all"
              >
                Browse Openings
              </Button>
            </Link>
          </div>
        </section>

        {/* Feature Cards */}
        <section className="mt-20 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-2 pb-24">
          {/* Feature 1 */}
          <div className="group relative p-8 bg-white/80 border border-fuchsia-100 rounded-2xl shadow-xl hover:shadow-fuchsia-200 transition-all duration-200 hover:-translate-y-2">
            <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-300 to-pink-200 group-hover:from-fuchsia-400 group-hover:to-pink-300 shadow">
              <UserCheck className="h-7 w-7 text-fuchsia-700" />
            </div>
            <h3 className="text-lg font-semibold text-fuchsia-600 mb-2">
              Matched For You
            </h3>
            <p className="text-base text-gray-600">
              Opportunity finds you! Our smart system scouts roles that align with your personality and strengths.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="group relative p-8 bg-white/80 border border-teal-100 rounded-2xl shadow-xl hover:shadow-teal-200 transition-all duration-200 hover:-translate-y-2">
            <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center rounded-full bg-gradient-to-br from-teal-200 to-orange-200 group-hover:from-teal-400 group-hover:to-orange-300 shadow">
              <Star className="h-7 w-7 text-teal-600" />
            </div>
            <h3 className="text-lg font-semibold text-teal-600 mb-2">
              Shine Brighter
            </h3>
            <p className="text-base text-gray-600">
              Build a profile that shows exactly what makes you special—skills, passions, and personality.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="group relative p-8 bg-white/80 border border-orange-100 rounded-2xl shadow-xl hover:shadow-orange-200 transition-all duration-200 hover:-translate-y-2">
            <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center rounded-full bg-gradient-to-br from-orange-200 to-yellow-100 group-hover:from-orange-400 group-hover:to-yellow-200 shadow">
              <TrendingUp className="h-7 w-7 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold text-orange-600 mb-2">
              Accelerate & Grow
            </h3>
            <p className="text-base text-gray-600">
              Access expert tips and growth tools to unlock your next chapter—whatever your goal.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
