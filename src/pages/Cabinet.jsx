import { useState, useEffect } from 'react';
import img3 from '../assets/5.jpg';
import Title from '../components/TitleFont';
import { Link } from 'react-router-dom';

export default function Cabinet() {
    const [imageLoaded, setImageLoaded] = useState(false);
    
    // Préchargement de l'image
    useEffect(() => {
        const img = new Image();
        img.src = img3;
        img.onload = () => setImageLoaded(true);
    }, []);

    return (
        <div id="cabinet">
            <div className="relative flex flex-col justify-center items-center min-h-screen pt-16">
                
                <img
                    src={img3}
                    loading="lazy"
                    alt="image cabinet"
                    className="fixed inset-0 -z-10 bg-cover bg-center"
                    onLoad={() => setImageLoaded(true)}
                />
                
                <div className='h-screen flex justify-center items-center '>
                    <Title className=" z-10 animate-slide-bottom  text-blue-900" text="Notre Cabinet" />
                </div>
            </div>

            <div className="bg-white py-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-6 text-blue-900">Notre Histoire</h2>
                    <p className="text-gray-700 mb-6">
                        Fondé en 2005, le Cabinet Cohen s'est imposé comme une référence 
                        dans le domaine juridique grâce à son expertise et son dévouement 
                        envers ses clients.
                    </p>
                    
                    <h2 className="text-3xl font-bold mb-6 text-blue-900">Notre Équipe</h2>
                    <p className="text-gray-700 mb-6">
                        Ayant eu le Barreau de Paris le 22 janvier 1997. 
                        Mickael Cohen a eu plus de 400 <Link to="/domaines">decisions</Link> favorables pour ses clients.

                    </p>
                    
                    <h2 className="text-3xl font-bold mb-6 text-blue-900">Nos Valeurs</h2>
                    <p className="text-gray-700">
                        Intégrité, excellence et dévouement sont les piliers de notre pratique 
                        juridique. Nous nous engageons à défendre vos intérêts avec rigueur 
                        et détermination.
                    </p>
                </div>
            </div>
        </div>
    );
}