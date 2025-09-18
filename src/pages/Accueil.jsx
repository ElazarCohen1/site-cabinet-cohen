import { useNavigate } from 'react-router-dom';
import img1 from '../assets/1.webp';
import img2 from '../assets/2.webp';
import Title from '../components/TitleFont';

function Domaine(props) {
    const { name, description } = props;

    return (
        <div className='bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'>
            <h3 className='text-xl font-semibold mb-3 text-blue-800'>{name}</h3>
            <p className='text-gray-600'>{description}</p>
        </div>
    );
}

function Map() {
    return (
        <div className="w-full rounded-lg overflow-hidden shadow-md">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.5453470321304!2d2.3053754763725833!3d48.885943198767244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fff21503841%3A0xb7bf2e6aa50bdcde!2scabinet%20cohen%20avocat!5e0!3m2!1sfr!2sfr!4v1757254603390!5m2!1sfr!2sfr"
                width="100%"
                height="400"
                style={{ border: 0 }} 
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
            ></iframe>
        </div>
    );
}



export default function Accueil() {
    const navigate = useNavigate();
    
    return (
        <div id="home">
            {/* Hero Section */}
            <div className="relative h-screen flex items-center justify-start ">
                <div 
                    className="fixed inset-0 -z-10 bg-cover bg-center"
                    style={{ backgroundImage: `url(${img1})` }}
                />
                <div className="container px-6 text-black animate-slide-bottom">
                    <Title  text="Bienvenue au Cabinet Cohen" className="animate-slide-bottom" />
                    <p className="text-xl max-w-2xl mb-8">Notre expertise juridique au service de vos droits</p>
                    <button 
                        className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-full transition-colors duration-300"
                        onClick={() => document.getElementById('domaines').scrollIntoView({ behavior: 'smooth' })}
                    >
                        Découvrir nos services
                    </button>
                </div>
            </div>

            {/* Domaines d'interventions */}
            <div id="domaines" className='py-16 bg-gray-50'>
                <div className="container mx-auto px-6">
                    <h2 className='text-3xl font-bold mb-12 text-center text-blue-900'>Domaines d'intervention</h2>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                        <Domaine 
                            name="Baux commerciaux" 
                            description="Conseil et rédaction de baux commerciaux, renouvellement et résiliation." 
                        />
                        <Domaine 
                            name="Droit de l'immobilier" 
                            description="Expertise en transactions immobilières, copropriété et urbanisme." 
                        />
                        <Domaine 
                            name="Stratégie judiciaire" 
                            description="Accompagnement et représentation dans vos contentieux juridiques." 
                        />
                    </div>
                    <div className='mt-12'>
                        <button
                            className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-full transition-colors duration-300"
                            onClick={() => navigate("/domaines")}
                        >
                            Découvrir les domaines/decisions
                        </button>
                    </div>
                </div>
            </div>

            {/* Notre cabinet */}
            <div className='py-16 relative'>
                <div 
                    className="absolute inset-0 -z-10 bg-cover bg-center bg-fixed"
                    style={{ backgroundImage: `url(${img2})` }}
                />
                {/* <div className="absolute inset-0 bg-black/50 -z-5"></div> */}
                
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-2xl bg-white/90 p-8 rounded-lg shadow-lg">
                        <h2 className='text-4xl font-bold mb-6 text-blue-900'>Notre Cabinet</h2>
                        <p className='text-gray-700 mb-6'>
                            Maitre Cohen a preté le 4 janvier 1997. En tant que avocat au barreau de Paris,
                            Le cabinet Cohen allie expertise juridique et engagement client pour offrir des solutions
                            personnalisées et efficaces dans divers domaines du droit.
                        </p>
                        <button
                            className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-full transition-colors duration-300"
                            onClick={() => navigate("/cabinet")}
                        >
                            Découvrir notre histoire
                        </button>
                    </div>
                </div>
            </div>  

            {/* Contact */}
            <div id="contact" className='py-16 bg-gray-50'>
                <div className="container mx-auto px-6">
                    <h2 className='text-3xl font-bold mb-8 text-center text-blue-900'>Contactez-nous</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Nos coordonnées</h3>
                            <p className="mb-2"><strong>Adresse :</strong> 26 rue Daubigny Paris 17</p>
                            <p className="mb-2"><strong>Téléphone :</strong> 01 53 95 09 73</p>
                            <p className="mb-4"><strong>Email :</strong> avocat.cohen@hotmail.com</p>
                            <p className="text-gray-600">
                                N'hésitez pas à nous contacter pour toute question ou prise de rendez-vous.
                                Notre équipe vous répondra dans les plus brefs délais.
                            </p>
                        </div>
                        <Map />
                    </div>
                </div>
            </div>
        </div>
    );
}