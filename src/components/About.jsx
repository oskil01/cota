import about from "../assets/about.jpg";
import { 
       ArrowRight, 
       Circle, 
       Target, 
       Users, 
    } from 'lucide-react'

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-12 px-4 sm:py-16 
      md:py-20 md:px-12 lg:px-20 flex flex-col lg:flex-row 
      items-center justify-between text-white"
    >
      {/* 🌊 Fond animé */}
      <div className="absolute inset-0 animate-waves 
       bg-[radial-gradient(circle_at_25%_25%,#0069BD,transparent_70%),radial-gradient(circle_at_75%_75%,#011433,transparent_70%)]"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-[#03337F]/70 to-[#0069BD]/70 mix-blend-overlay"></div>

      {/* IMAGE */}
      <div className="relative w-full lg:mr-8 z-10 flex-1 
       xl:mr-12 lg:mt-0 mt-10 order-2">
        <div className="w-full max-w-md max-auto lg:max-w-lg
        xl:max-w-xl h-[200px] sm:h-[250px] md:h-[300px]
        lg:h-[450px] xl:h-[500px] overflow-hidden shadow-lg -rotate-2
        md:shadow-xl relative z-10 rounded-[40%_60%_70%_30%/40%_50%_60%_60%]
        hover:rotate-0 transition-transform duration-700 border
        border-white border-5"
        data-aos='fade-right'
        data-aos-delay='200'
        >
          <img
          src={about}
          alt="image à propos"
          className="w-full object-cover h-full transform
          hover:scale-110 transition-transform duration-700"
          />
        </div>

        <div className="hidden md:block absolute border-4
        border-[#CA451B] -bottom-4 -right-4 w-16 md:w-20 
        md:h-20 lg:w-24 rounded-full z-0"
        data-aos='zoom-in'
        data-aos-delay='500'></div>
        <div className="hidden md:block absolute border-4
        border-green-500 -top-4 -left-4 w-16 md:w-20 
        md:h-20 lg:w-24 rounded-full z-0"
        data-aos='zoom-in'
        data-aos-delay='600'></div>
      </div>

      {/* TEXTE */}
      <div className="relative z-10 flex-1 w-full max-w-2xl
      mx-auto lg:mx-0 space-y-6 md:space-y-8 z-20 order-1 
      lg:order-2 ">
        <div 
          className="mb-6 md:mb-8"
          data-aos='fade-left'
        >
           <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Qui sommes-nous ? 
           </h2>
        </div>
        
        <div className="flex gap-3 md:gap-5 mt-4 justify-center
        lg:justify-start">
            <Circle className='text-[#03A9F4] w-5 h-5' />
            <Circle className='text-green-500 w-5 h-5' />
            <Circle className='text-[#CA451B] w-5 h-5' /> 
        </div>

        <p className="text-gray-200 max-w-lg mb-6 leading-relaxed"
        data-aos='fade-left'
        data-aos-delat='100'>
        <span className="font-extrabold">Le Corps Technique pour l’Accompagnement « COTA »</span>, est une 
        organisation à but non lucratif de droit congolais, humanitaire, 
        innovante, multisectorielle et professionnelle, spécialisée dans 
        l’accompagnement technique et stratégique aux entreprises, ONG, 
        institutions publiques et communautés, afin de contribuer à leur 
        performance, leur efficacité et leur impact sur le développement 
        durable en RDC.
        </p>

        {/* CARTES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4
        md:gap-6 mt-8 md:mt-10"
        data-aos='fade-up'
        data-aos-delay='200'
        >
          <div className="bg-white p-4 md:p-6 rounded-xl md:rounded-2xl
          border border-gray-100 shadow-md md:shadow-lg transition-all
          hover:shadow-xl">
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center
            justify-center rounded-lg bg-[#FFF4F0] mb-3 md:mb-4">
                <Target className="text-[#CA451B] w-5 h-5 md:w-6 md:h-6 " />
            </div>
            <h3 className="text-base md:text-lg font-semibold
            text-gray-800 mb-2">
                Efficacité
            </h3>
            <p className="text-gray-600 text-xs md:text-sm">
                Nous offrons des solutions concrètes et rapides qui produisent 
                des résultats mesurables.
            </p>
          </div>

          <div className="bg-white p-4 md:p-6 rounded-xl md:rounded-2xl
          border border-gray-100 shadow-md md:shadow-lg transition-all
          hover:shadow-xl">
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center
            justify-center rounded-lg bg-[#CAF5F1] mb-3 md:mb-4">
                < Users className="text-[#006176] w-5 h-5 md:w-6 md:h-6 " />
            </div>
            <h3 className="text-base md:text-lg font-semibold
            text-gray-800 mb-2">
                Expertise
            </h3>
            <p className="text-gray-600 text-xs md:text-sm">
                Nous mettons à disposition un savoir-faire 
                technique et professionnel reconnu dans la mise 
                en oeuvre de nos missions.
            </p>
          </div>
        </div>

        <div className="flex justify-center lg:justify-start mt-8
        md:mt-10"
        data-aos='fade-up'
        data-aos-delay='300'>
           <button className="bg-[#CA451B] text-white md:px-8
           font-medium px-6 py-3 rounded-full md:py-4
           hover:bg-blue-100 transition hover:text-[#03337F] 
           transition-all shadow-md hover:shadow-lg flex
           items-center gap-2 text-sm md:text-base">
              En savoir plus
              <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
           </button>
        </div>

      </div>
    </section>
  );
}
