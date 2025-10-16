import { useState } from "react"
import { Handshake, Rocket, HandCoins, Circle, CheckCircle, ArrowRight } from 'lucide-react';
import domaine1 from '../assets/domaine1.jpg'
import domaine2 from '../assets/domaine2.jpg'
import domaine3 from '../assets/domaine3.jpg'

const Domaines = () => {
  const [activeDomaine, setActiveDomaine] = useState(1);
  const domaines = [
    {
      id: 1,
      icon : <Handshake className="w-5 h-5 sm:w-6" />,
      title: "Consultance et Accompagnement",
      desc: 'Appui stratégique aux entreprises, ONG et institutions dans la gestion de projets, le développement organisationnel et institutionnel.',
      features : [
        "Gestion stratégique de projets", 
        "Renforcement organisationnel",
        "Développement institutionnel",
        "Reporting optimisé"
      ],
      color: "bg-[#03337F]",
      butColor: "bg-[#03337F] hover:bg-[#0069BD]",
      iconColor: "text-[#D3E4FF]",
      image: domaine1
    },
    {
      id: 2,
      icon : <Rocket className="w-5 h-5 sm:w-6" />,
      title: "Innovation et Technologies numériques",
      desc: 'Conception et mise en œuvre de solutions technologiques adaptées aux besoins des organisations et des communautés.',
      features : [
        "Solutions sur mesure", 
        "Innovation continue",
        "Impact communautaire",
        "Efficacité adaptative"
      ],
      color: "bg-[#006176]",
      butColor: "bg-[#006176] hover:bg-[#00AB9A]",
      iconColor: "text-green-100",
      image: domaine2
    },
    {
      id: 3,
      icon : <HandCoins className="w-5 h-5 sm:w-6" />,
      title: "Entrepreneuriat & Développement économique",
      desc: 'Accompagnement des jeunes, des start-ups et des initiatives locales et/ou les AGR pour renforcer leurs capacités et faciliter l’accès aux ressources.',
      features : [
        "Soutien aux jeunes et start-ups", 
        "Renforcement des capacités",
        "Accès aux ressources",
        "Sécurité financière"
      ],
      color: "bg-[#CA451B]",
      butColor: "bg-[#CA451B] hover:bg-[#FFB298]",
      iconColor: "text-[#FFF4F0]",
      image: domaine3
    },
  ]
  return (
    <section 
    id="domaines"
    className="relative overflow-hidden bg-gradient-to-br 
    from-gray-50 to-green-50 py-12 px-4 sm:py-16 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* ENTETE DE LA SECTION  */}
        <div className="flex flex-col lg:flex-row items-center
        justify-center text-center mb-6"
        data-aos="fade-down">
          <div className="flex-1 max-w-2xl mx-auto space-y-6 mb-10 lg:mb-0">
            <div>
              {/* Titre de la section  */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl
              text-gray-900">
                Nos domaines{" "}
                <span className="font-extrabold">
                  d'activité
                </span>
              </h2>
              <div className="flex justify-center gap-3 mt-4">
                <Circle className='text-[#006176] w-5 h-5' />
                <Circle className='text-[#CA451B] w-5 h-5' />
                 <Circle className='text-[#03337F] w-5 h-5' />
                <Circle className='text-[#0069BD] w-5 h-5' /> 
              </div>
            </div>
          </div>
        </div>

        {/* CONTENU DE LA SECTION  */}
        <div className="flex flex-wrap gap-3 sm:gap-4 mb-8
        sm:mb-12 justify-center" 
        data-aos='fade-up' data-aos-delay='100'
        >
          {domaines.map((ser)=>( 
            <button 
              key={ser.id}
              onClick={() => setActiveDomaine(ser.id)}
              className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full
              font-medium flex items-center gap-2 transition-all
              text-sm sm:text-base ${
              activeDomaine === ser.id 
              ? `${ser.color} text-white shadow-lg` 
              : `bg-white text-gray-700 shadow-md hover:shadow-lg`
            }`}
            data-aos='fade-up'
            data-aos-delay={ser.id * 100}
            >
              {ser.icon}
              {ser.title}
            </button>
          ))}
        </div>

        {/* DÉTAIL DU DOMAINE ACTIF */}
        <div className="bg-white rounded-2xl md:rounded-3xl
         shadow-lg md:shadow-xl p-6 sm:p-8 mb-12 md:mb-16 border
         border-gray-100"
         data-aos='fade-up' data-aos-delay='200'>
          {domaines.filter(ser => ser.id === activeDomaine).map(ser => (
            <div key={ser.id} className="flex flex-col lg:flex-row gap-6
              md:gap-10">
              <div className="flex-1">
                <div className="flex items-center gap-3 sm:gap-4 sm:mb-6"
                  data-aos='fade-right' data-aos-delay='300'>
                  <div className={`w-12 h-12 sm:h-16 rounded-lg
                    sm:rounded-xl flex items-center justify-center
                    ${ser.color} bg-opacity-10`}>
                    <div className={ser.iconColor}>
                      {ser.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold
                    text-gray-800">
                    {ser.title}
                  </h3>
                </div>
                <p className="text-base sm:text-lg text-gray-700 mb-4 
                  sm:mb-6 leading-relaxed"
                  data-aos='fade-right' data-aos-delay='350'>
                  {ser.desc}
                </p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-3
                  sm:gap-4 mb-6 sm:mb-8" 
                  data-aos='fade-up'
                  data-aos-delay='400'>
                    {ser.features.map((feature, idx)=>( 
                      <div 
                        key={idx} 
                        className="flex items-center gap-2"
                        data-aos='fade-up'
                        data-aos-delay={450 + (idx * 50)}
                      >
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5
                        text-green-500 flex-shrink-0"/>
                        <span className="text-gray-700 text-sm 
                          sm:text-base">
                          {feature}
                        </span>
                      </div>
                    ))}
                </div>
                <div className="flex justify-center lg:justify-start"
                data-aos='fade-up' data-aos-delay='600'>
                  <button className={`px-6 py-3 sm:px-8 ${ser.butColor}
                  font-medium transition-all shadow-md hover:shadow-lg
                  flex items-center gap-2 text-sm sm:text-base text-white
                  rounded-full`}>
                    En savoir plus
                    <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 " />
                  </button>
                </div>
              </div>

              <div className="flex-1 mt-6 lg:mt-0"
                data-aos='zoom-in' data-aos-delay='500'>
                <div className="w-full h-60 sm:h-72 md:h-80 overflow-hidden
                  shadow-lg rounded-xl md:rounded-2xl">
                  <img src={ser.image} alt={ser.title} 
                  className="object-cover w-full transform
                  hover:scale-105 transition-transform duration-700 "/>
                </div>   
              </div>
            </div>
          ))}
        </div>

        {/* 🌐 Bouton Voir tous les domaines */}
        <div className="flex justify-center mt-6 md:mt-10"
          data-aos="fade-up" data-aos-delay="700">
          <a 
            href="/domaines" 
            className="bg-[#006176] hover:bg-[#00AB9A] text-white
            px-8 py-3 rounded-full text-sm sm:text-base font-medium
            shadow-md hover:shadow-lg flex items-center gap-2 transition-all"
          >
            Voir tous les domaines
            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </a>
        </div>
      </div>

      {/* Cercles décoratifs */}
      <div className="hidden md:block absolute border-2 
        border-pink-500 bottom-20 left-10 w-16 h-16 sm:w-20
        sm:h-20 md:w-24 rounded-full opacity-50"
        data-aos='zoom-in' data-aos-delay='700'>
      </div>
      <div className="hidden md:block absolute border-2 
        border-green-500 top-40 right-10 w-20 h-20 sm:w-24
        sm:h-24 md:w-32 rounded-full opacity-50"
        data-aos='zoom-in' data-aos-delay='700'>
      </div>
    </section>
  )
}

export default Domaines
