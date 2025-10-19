import { useState } from 'react';
import contactImage from '../assets/contactImage.jpg';
import complaintImage from '../assets/complaintImage.jpg';
import suggestionImage from '../assets/suggestionImage.jpg';
import { 
  MapPinIcon, 
  Phone, 
  Mail, 
  Circle, 
  Send,
  MessageSquare,
  ThumbsUp,
  Inbox
} from 'lucide-react';

const Contact = () => {
  const [activeTab, setActiveTab] = useState('contact');

  // === Infos de contact ===
  const contactInfo = [
    {
      id: 1,
      icon: Mail,
      iconBg: 'bg-[#99D2FF]',
      iconColor: 'text-[#0069BD]',
      title: 'E-mail',
      content: 'direction.cota@gmail.com',
      aosDelay: '200'
    },
    {
      id: 2,
      icon: Phone,
      iconBg: 'bg-[#FFE8E0]',
      iconColor: 'text-[#CA451B]',
      title: 'Téléphone',
      content: '+243 820 838 387',
      aosDelay: '250'
    },
    {
      id: 3,
      icon: MapPinIcon,
      iconBg: 'bg-[#A3F7EF]',
      iconColor: 'text-[#006176]',
      title: 'Adresse locale',
      content: `202 av. Tanganyika, Q/KITUKU, C/LUKUGA, Kalemie`,
      aosDelay: '300'
    },
  ];

  // === Champs des formulaires ===
  const formFields = {
    contact: [
      { id: 'name', type: 'text', label: 'Nom complet', placeholder: 'Exemple : John Doe', delay: '150' },
      { id: 'email', type: 'email', label: 'Adresse mail', placeholder: 'Exemple : johndoe@gmail.com', delay: '200' },
      { id: 'message', type: 'textarea', label: 'Message', placeholder: 'Dites-nous votre préoccupation', rows: 5, delay: '250' },
    ],
    plainte: [
      { id: 'subject', type: 'text', label: 'Objet de la plainte', placeholder: 'Ex : Service non conforme', delay: '150' },
      { id: 'complaint', type: 'textarea', label: 'Plainte', placeholder: 'Décrivez brièvement votre plainte', rows: 6, delay: '200' },
    ],
    suggestion: [
      { id: 'suggestion', type: 'textarea', label: 'Votre suggestion', placeholder: 'Proposez une idée ou amélioration...', rows: 6, delay: '150' },
    ]
  };

  // === Images selon le type de formulaire ===
  const illustrationImages = {
    contact: contactImage,
    plainte: complaintImage,
    suggestion: suggestionImage
  };

  // === Rendu des champs dynamiques ===
  const renderFormFields = () => {
    return formFields[activeTab].map((field) => (
      <div key={field.id} data-aos='fade-up' data-aos-delay={field.delay}>
        <label htmlFor={field.id} className='block text-base font-medium text-gray-700 mb-3'>
          {field.label}
        </label>
        {field.type === 'textarea' ? (
          <textarea
            id={field.id}
            rows={field.rows}
            className='w-full px-4 py-3 border border-gray-300 rounded-lg 
              focus:ring-2 focus:ring-[#0069BD] focus:border-transparent transition-all'
            placeholder={field.placeholder}
          ></textarea>
        ) : (
          <input
            type={field.type}
            id={field.id}
            className='w-full px-4 py-3 border border-gray-300 rounded-lg 
              focus:ring-2 focus:ring-[#0069BD] focus:border-transparent transition-all'
            placeholder={field.placeholder}
          />
        )}
      </div>
    ));
  };

  return (
    <section 
      id='contact' 
      className='relative overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 py-16 px-4 sm:px-8 lg:px-16'
    >
      <div className='max-w-7xl mx-auto'>
        
        {/* === TITRE === */}
        <div className='text-center mb-10' data-aos='fade-down'>
          <h2 className='text-3xl sm:text-4xl md:text-5xl text-gray-900 font-bold'>
            Entrons en <span className='text-[#0069BD]'>contact</span>
          </h2>
          <p className='text-gray-600 mt-3'>
            Choisissez la manière dont vous souhaitez communiquer avec nous.
          </p>
          <div className="flex justify-center gap-3 mt-4 md:mt-8">
            <Circle className="text-[#006176] w-5 h-5" />
            <Circle className="text-[#0069BD] w-5 h-5" />
            <Circle className="text-[#CA451B] w-5 h-5" /> 
            <Circle className="text-[#03337F] w-5 h-5" />
          </div>
        </div>

        {/* === MENU INTERACTIF === */}
        <div className='flex justify-center gap-3 sm:gap-6 mb-10 flex-wrap' data-aos='fade-up'>
          {[
            { id: 'contact', label: 'Contact', icon: Inbox, color: 'text-[#0069BD]' },
            { id: 'plainte', label: 'Plainte', icon: MessageSquare, color: 'text-[#CA451B]' },
            { id: 'suggestion', label: 'Boîte à suggestion', icon: ThumbsUp, color: 'text-[#006176]' }
          ].map((item) => {
            const IconComp = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-2 px-5 py-2 rounded-full border 
                transition-all duration-300 ${isActive 
                  ? 'bg-gradient-to-r from-[#0069BD] to-[#CA451B] text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100'} `}>
                <IconComp className={`w-5 h-5 ${isActive ? 'text-white' : item.color}`} />
                <span className='font-medium'>{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* === CONTENU DYNAMIQUE === */}
        <div className='flex flex-col lg:flex-row gap-10 items-start'>
          
          {/* === FORMULAIRE === */}
          <div className='flex-1 w-full max-w-full bg-white rounded-2xl shadow-xl p-8 border border-gray-100 mx-auto sm:mx-0' data-aos='fade-right'>
            <form className='space-y-6 w-full'>
              {renderFormFields()}
              <div data-aos='fade-up' data-aos-delay='300'>
                <button
                  type='submit'
                  className="w-full py-3 rounded-lg bg-gradient-to-r 
                    from-[#0069BD] to-[#CA451B] text-white font-medium 
                    flex items-center justify-center gap-2 hover:opacity-90 
                    transition-all duration-300"
                >
                  Envoyer
                  <Send />
                </button>
              </div>
            </form>
          </div>

          {/* === IMAGE / COORDONNÉES === */}
          <div className='flex-1 flex flex-col items-center lg:items-start w-full'>
            {activeTab === 'contact' ? (
              <>
                <div className='w-full max-w-md h-72 overflow-hidden shadow-lg rounded-xl mb-6 mx-auto sm:mx-0' data-aos='zoom-in'>
                  <img 
                    src={contactImage} 
                    alt="Nous contacter" 
                    className='object-cover w-full h-full transform hover:scale-105 transition-transform duration-700' 
                  />
                </div>
                <div className='space-y-4 w-full max-w-md mx-auto sm:mx-0'>
                  {contactInfo.map((item) => {
                    const IconComp = item.icon;
                    return (
                      <div 
                        key={item.id}
                        className='flex items-center gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all'
                        data-aos='fade-left'
                        data-aos-delay={item.aosDelay}
                      >
                        <div className={`w-12 h-12 ${item.iconBg} rounded-lg flex items-center justify-center`}>
                          <IconComp className={`w-6 h-6 ${item.iconColor}`} />
                        </div>
                        <div>
                          <h3 className='font-semibold text-gray-800'>{item.title}</h3>
                          <p className='text-gray-600'>{item.content}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </>
            ) : (
              <div className='w-full max-w-md h-72 overflow-hidden shadow-lg rounded-xl mb-6 mx-auto sm:mx-0' data-aos='zoom-in'>
                <img 
                  src={illustrationImages[activeTab]} 
                  alt={activeTab === 'plainte' ? "Formulaire de plainte" : "Boîte à suggestions"} 
                  className='object-cover w-full h-full transform hover:scale-105 transition-transform duration-700' 
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* === ÉLÉMENTS DÉCORATIFS === */}
      <div className='hidden md:block absolute border-2 border-teal-500 bottom-20 left-10 w-20 h-20 rounded-full opacity-40' data-aos='zoom-in' data-aos-delay='400'></div>
      <div className='hidden md:block absolute border-2 border-yellow-500 top-40 right-10 w-32 h-32 rounded-full opacity-40' data-aos='zoom-in' data-aos-delay='500'></div>
    </section>
  );
};

export default Contact;
   