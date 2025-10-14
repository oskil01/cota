"use client";
import { useState, useEffect } from "react";

export default function PopupInfo() {
  const [showPopup, setShowPopup] = useState(false);

  // Vérifie si l'utilisateur a déjà accepté
  useEffect(() => {
    const hasAccepted = localStorage.getItem("siteAccepted");
    if (!hasAccepted) {
      setShowPopup(true);
    }
  }, []);

  const handleAccept = () => {
    // localStorage.setItem("siteAccepted", "true");
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
      <div className="bg-white rounded-2xl shadow-xl p-6 max-w-md text-center animate-fadeIn">
        <h2 className="text-2xl font-semibold text-primary mb-3">
          ⚠️ Site en cours de développement
        </h2>
        <p className="text-gray-700 mb-5">
          Ce site est actuellement en phase de construction. Certaines sections
          peuvent ne pas encore être fonctionnelles ou finales.
        </p>
        <button
          onClick={handleAccept}
          className="px-5 py-2 bg-primary text-white rounded-lg hover:bg-secondary transition"
        >
          D’accord, continuer
        </button>
      </div>
    </div>
  );
}
