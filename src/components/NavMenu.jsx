import { Menu, X } from "lucide-react";
import { useState } from "react";

// LISTE DU MENU
const navItems = [
    {name:"Accueil", href:'#'},
    {name:"A propos", href:'#about'},
    {name:"Domaines", href:'#domaines'},
    {name:"Ressources", href:'#ressources'},
    {name:"Actualités", href:'#actualites'},
    {name:"Contact", href:'#contact'},
]

const NavMenu = () => {
    // INTERACTION DU MENU 
    const [ isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <nav className="fixed w-full bg-gray-50 top-0 left-o 
    right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 
        md:px-12 lg:px-20 flex items-center 
        justify-between">
        
          {/* LOGO DU SITE */}
          <div className="flex items-center ">
             <img
              src="/images/Logo.png"
              alt="Logo du site"
              className="w-30 md:w-42 h-auto "
             />
          </div>

          {/* MENU PC & LAPTOP */}
          <ul className="hidden md:flex items-center gap-6
          lg:gap-8 text-gray-700 font-medium">
            {navItems.map(({name, href}) =>(
                <li key={name}>
                    <a 
                     href={href}
                     className="hover:text-[#CA451B] cursor-pointer
                     transition-colors"
                    >
                     {name}
                    </a>
                </li>
            ))}
          </ul>

          {/* BOUTON D'ACTION */}
          <div className="hidden md:block">
            <button 
            className="px-4 py-2 sm:px-5 sm:py-2 rounded-lg
            sm:rounded-xl bg-[#03337F] text-white font-medium 
            hover:bg-[#0069BD] transition-colors">
              Connection 
            </button>
          </div>

          {/* INTERACTION ICONE MENU MOBILE */}
          <div className="md:hidden">
            <button
            onClick={toggleMenu} 
            className="p-1 rounded-md focus:outline-none
            focus:ring-2 focus:ring-[#0069BD]">
                {isMenuOpen ? (
                    // FERMER
                    <X className="w-6 h-6 text-gray-700"/>
                ) : (
                    // OUVRIR 
                    <Menu className="w-6 h-6 text-gray-700" />
                )}
            </button>
          </div>
        </div>
        {/* NAVMENU MOBILE  */}
        {isMenuOpen && (
            <div className="md:hidden bg-white shadow-lg 
            border-t border-gray-200"
            >
              <div className="px-4 py-3 space-y-3">
                {navItems.map(({name, href}) => (
                  // Affichage des liens 
                    <a kay={name} 
                       href={href}
                       className="block py-2 px-4 text-gray-700
                       hover:bg-[#FFF4F0] rounded-lg 
                       hover:text-[#CA451B] transition-colors"
                       onClick={() => setIsMenuOpen(false)}
                    >
                      {name}
                    </a>
                ))}
                {/* Affichage du bouton d'action  */}
                <div className="pt-2">
                  <button className="w-full py-2 rounded-lg
                  bg-[#03337F] text-white font-medium 
                  hover:bg-[#0069BD] transition-colors">
                    Connexion
                  </button>
                </div>
              </div>
            </div>
        )}
    </nav>
  )
}

export default NavMenu