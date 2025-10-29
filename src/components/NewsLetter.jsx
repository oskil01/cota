"use client";

import { useState } from "react";
import { Mail, Send, Circle } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Validation simple de l'email
  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setError("❌ Veuillez entrer une adresse e-mail valide.");
      return;
    }

    setError("");
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail("");
    }, 4000);
  };

  return (
    <section
      className="relative py-20 bg-gradient-to-br from-[#001a3d] via-[#013e8a] to-[#002b67] overflow-hidden"
      data-aos="fade-up"
      data-aos-duration="1200"
    >
      {/* === Motif animé de fond === */}
      <div className="absolute inset-0">
        <div className="bg-[radial-gradient(circle_at_25%_25%,#ffffff22_0%,transparent_70%)] w-full h-full animate-[moveBg_20s_linear_infinite]" />
      </div>

      {/* === Contenu principal === */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        {/* === Titre et description === */}
        <h2
          className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight"
          data-aos="fade-down"
        >
          Rejoignez notre{" "}
          <span className="text-[#00bfff]">Newsletter</span>
        </h2>
        <div className="flex justify-center gap-3 mt-4 md:mt-5">
          <Circle className="text-[#022256] w-5 h-5" />
          <Circle className="text-[#0069BD] w-5 h-5" />
          <Circle className="text-[#00AB9A] w-5 h-5" />
          <Circle className="text-[#CA451B] w-5 h-5" /> 
        </div>
        <p
          className="text-gray-300 max-w-2xl mx-auto mb-10 mt-5 text-md"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Recevez nos dernières actualités, opportunités et formations directement
          dans votre boîte mail. Soyez les premiers informés !
        </p>

        {/* === Formulaire === */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <div className="relative w-full">
            <Mail className="absolute left-4 top-3.5 text-gray-500 w-5 h-5" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Entrez votre adresse e-mail"
              className="w-full pl-12 pr-5 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#00bfff] placeholder-gray-500 shadow-lg transition-all duration-300"
            />
          </div>
          <button
            type="submit"
            className="flex items-center gap-2 bg-[#00bfff] hover:bg-[#009adf] text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-[#00bfff]/40"
          >
            <Send className="w-5 h-5" />
            S’abonner
          </button>
        </form>

        {/* === Message de retour === */}
        <div
          className="mt-6 text-sm"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          {error && (
            <p className="text-red-400 animate-pulse">{error}</p>
          )}
          {submitted && (
            <p className="text-green-400 font-medium animate-fadeInUp">
              ✅ Merci pour votre inscription ! Vous recevrez bientôt nos mises à jour.
            </p>
          )}
        </div>

        {/* === Message de confiance === */}
        <p
          className="mt-6 text-sm text-gray-400"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          Nous respectons votre vie privée — aucun spam, seulement du contenu utile.
        </p>
      </div>

      {/* === Style d'animation du fond === */}
      <style jsx>{`
        @keyframes moveBg {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 600px 600px;
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease forwards;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Newsletter;
