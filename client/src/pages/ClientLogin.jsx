import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, ShieldCheck } from "lucide-react";
import PageBackground from "../components/layout/PageBackground";

const ClientLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO:
    // Yahan apni backend login API call lagani hai
    // Example: axios.post("/api/client/login", formData)
    console.log("Client login data:", formData);
  };

  return (
    <PageBackground>
      <section className="relative min-h-screen overflow-hidden pt-32 pb-20">
        {/* Background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.16),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(212,175,55,0.08),transparent_24%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0))]" />
        </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="mx-auto grid max-w-6xl grid-cols-1 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] shadow-[0_30px_80px_rgba(0,0,0,0.35)] lg:grid-cols-[1.05fr_0.95fr]">
          {/* Left Side */}
          <div className="border-b border-white/10 p-8 sm:p-10 lg:border-b-0 lg:border-r lg:p-14">
            <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.34em] text-gold-400">
              Client Access
            </p>

            <h1 className="max-w-xl font-serif text-4xl leading-tight text-white sm:text-5xl">
              Secure entry for Blackmont clients.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-white/70 sm:text-lg">
              Access your private dashboard, stewardship updates, reporting
              information, and client communication in one secure place.
            </p>

            <div className="mt-10 space-y-4">
              <div className="flex items-start gap-4 rounded-[1.25rem] border border-white/8 bg-white/[0.02] p-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold-500/20 bg-gold-500/10">
                  <ShieldCheck className="h-5 w-5 text-gold-400" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">
                    Institutional-grade access
                  </h3>
                  <p className="mt-1 text-sm leading-7 text-white/60">
                    Designed for a secure and professional client experience.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-[1.25rem] border border-white/8 bg-white/[0.02] p-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold-500/20 bg-gold-500/10">
                  <Mail className="h-5 w-5 text-gold-400" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">
                    Need account assistance?
                  </h3>
                  <p className="mt-1 text-sm leading-7 text-white/60">
                    Contact the Blackmont team if you need support with access or
                    onboarding.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="p-8 sm:p-10 lg:p-14">
            <div className="mx-auto w-full max-w-md">
              <h2 className="font-serif text-3xl text-white sm:text-4xl">
                Client Login
              </h2>
              <p className="mt-3 text-sm leading-7 text-white/60">
                Enter your credentials to continue.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-[11px] font-medium uppercase tracking-[0.28em] text-gold-400/90"
                  >
                    Email Address
                  </label>
                  <div className="flex items-center gap-3 rounded-[1rem] border border-white/10 bg-black/20 px-4 py-3 transition focus-within:border-gold-500/40">
                    <Mail className="h-4 w-4 text-white/45" />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="w-full bg-transparent text-white outline-none placeholder:text-white/35"
                      required
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label
                    htmlFor="password"
                    className="mb-2 block text-[11px] font-medium uppercase tracking-[0.28em] text-gold-400/90"
                  >
                    Password
                  </label>
                  <div className="flex items-center gap-3 rounded-[1rem] border border-white/10 bg-black/20 px-4 py-3 transition focus-within:border-gold-500/40">
                    <Lock className="h-4 w-4 text-white/45" />
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Enter your password"
                      className="w-full bg-transparent text-white outline-none placeholder:text-white/35"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="text-white/45 transition hover:text-white/80"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Remember + Forgot */}
                <div className="flex flex-col gap-3 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
                  <label className="inline-flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="rememberMe"
                      checked={formData.rememberMe}
                      onChange={handleChange}
                      className="h-4 w-4 rounded border-white/20 bg-transparent accent-[#D4AF37]"
                    />
                    Remember me
                  </label>

                  <Link
                    to="/contact"
                    className="text-gold-400 transition hover:text-gold-300"
                  >
                    Need help signing in?
                  </Link>
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="w-full rounded-full border border-transparent bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.24em] text-charcoal-950 transition duration-300 hover:-translate-y-0.5 hover:from-gold-300 hover:via-gold-400 hover:to-gold-500"
                >
                  Sign In
                </button>
              </form>

              <div className="mt-6 text-sm text-white/55">
                Don’t have login credentials?{" "}
                <Link
                  to="/contact"
                  className="text-gold-400 transition hover:text-gold-300"
                >
                  Contact Blackmont
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    </PageBackground>
  );
};

export default ClientLogin;
