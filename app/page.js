"use client"

import React, { useEffect } from 'react';
import ParallaxBackground from './components/Parallax/ParallaxBackground';
import Image from 'next/image';
import ArrowButton from './components/ArrowButton/ArrowButton';
import BeforeAfterSlider from './components/BeforeAfterSlider/BeforeAfterSlider';
import Link from 'next/link';
import Carousel from './components/Carusel/Carusel';

const Home = () => {
  useEffect(() => {
    const layers = document.querySelectorAll('.layer');

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      layers.forEach(layer => {
        const speed = layer.getAttribute('data-speed');
        layer.style.transform = `translateY(${scrollPosition * speed}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main className="bg-[#FFF6E7] font-sans">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between height-screen xl:height-hero relative">
      <div className="md:container lg:max-w-screen-lg xl:max-w-screen-xl 3xl:max-w-screen-2xl mx-auto flex lg:flex-row flex-col lg:justify-center xl:p-2 sm:px-8 px-4 py-8 md:py-16 lg:py-0 lg:h-screen">
        <div className="w-full lg:w-1/2 space-y-4 2xl:space-y-6 flex flex-col justify-start lg:justify-center items-center text-center lg:items-start lg:text-left order-2 lg:order-1">
          <p className="font-semibold text-gg-green text-base sm:text-lg xl:text-xl !mt-1 lg:mt-6 xl:mt-0">Inspirăm tinerii să creeze un viitor sustenabil</p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl 2xl:text-8xl font-bold text-gray-900">Green Generation</h1>
          <p className='text-base xl:text-lg 2xl:text-xl font-medium leading-1'>
          Fiecare copil poate fi erou atunci când vine vorba de protejarea mediului. Green Generation îți oferă șansa să înveți despre natură într-un mod interactiv, prin excursii și activități practice, pentru a înțelege cum putem face planeta un loc mai bun.
          </p>
          <Link href='/despre-noi'>
            <button className="py-4 px-10 xl:py-6 xl:px-12 rounded-full  transition duration-300 mt-6 2xl:mt-20">
            Descoperă aventura verde
            </button>
          </Link>
          <div className='w-full hidden lg:flex flex-row justify-end md:pr-20'>
            <Image src="/decoratiune-copac.svg" alt="decoratiune copac" width={150} height={184} />
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end order-1 lg:order-2">
          <Image className='lg:absolute lg:right-0 lg:bottom-0 xl:bottom-5 w-full md:w-2/5 lg:w-1/2 xl:w-auto h-full lg:h-[90vh] object-cover' src="/green-generation-m.svg" alt="Green Generation" width={500} height={600} />
        </div>
        </div>
      </section>

      {/* About Our Mission Section */}
      <section className="md:container lg:max-w-screen-lg xl:max-w-screen-xl 3xl:max-w-screen-2xl mx-auto text-center px-4 lg:px-0 py-20 w-full">
        <p className="font-semibold text-gg-green">Cu fiecare gând, creezi un viitor sustenabil</p>
        <h2 className="text-6xl sm:text-6xl font-bold my-4">Misiunea noastră</h2>
        <p className="max-w-3xl mx-auto">
        Green Generation vrea să transforme educația despre mediu într-o experiență unică. Copiii nu doar învață teoretic despre problemele de mediu, ci participă activ în excursii și ateliere unde descoperă cum să protejeze natura. Ne dorim să creăm o generație care acționează, nu doar vorbește.
        </p>
        <div className="mt-10 flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-6 px-4 lg:px-8 xl:px-0">
          <div className="bg-gg-bej p-6 rounded-xl shadow-lg w-full xl:max-w-sm text-left">
            <Image src="/frunza-rosie.svg" alt="Proiecte verzi inovative" width={697} height={1146} className="w-5/6 mx-auto mb-4" />
            <p className="text-gg-light-grey">Explorează</p>
            <h3 className="text-3xl font-bold text-gray-900">Aventura începe în natură</h3>
            <p className="text-gg-text-grey">Îți plac excursiile? Alături de noi, vei descoperi locuri frumoase și vei învăța cum să le păstrezi curate și sănătoase.
            </p>
          </div>
          <div className="bg-gg-bej p-6 rounded-xl shadow-lg w-full xl:max-w-sm text-left">
            <Image src="/verde-deschis.svg" alt="Educational Resources" width={697} height={1146} className="w-5/6 mx-auto mb-4" />
            <p className="text-gg-light-grey">Învață</p>
            <h3 className="text-3xl font-semibold text-gray-900">Lecții practice despre mediu</h3>
            <p className="text-gg-text-grey">Învață cum să reciclezi, să protejezi resursele naturale și să devii un adevărat protector al planetei.
            </p>
          </div>
          <div className="bg-gg-bej p-6 rounded-xl shadow-lg w-full xl:max-w-sm text-left">
            <Image src="/verde-inchis.svg" alt="Join the Green Generation" width={697} height={1146} className="w-5/6 mx-auto mb-4" />
            <p className="text-gg-light-grey">Acționează</p>
            <h3 className="text-3xl font-semibold text-gray-900">Fă un pas spre schimbare</h3>
            <p className="text-gg-text-grey">În cadrul activităților de grup, vei colabora cu alți tineri pentru a proteja natura și a construi un viitor mai sustenabil.</p>
          </div>
        </div>
      </section>

      {/* Ways to Make a Difference Section */}
      <section className="md:container lg:max-w-screen-lg xl:max-w-screen-xl 3xl:max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center justify-between lg:px-6 px-4 xl:px-16 py-16 xl:h-[80vh]">
      <div className="md:w-1/2 space-y-4 xl:space-y-6 h-full flex flex-col justify-center text-center md:text-left">
          <p className="font-semibold text-gg-text-orange">Fii Activ</p>
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 leading-tight">Cum poți contribui la schimbare?</h2>
          <p>
          Fiecare pas mic contează! Participă la evenimentele noastre, implică-te în campanii de protejare a mediului și descoperă resursele educaționale pe care le punem la dispoziție. Alege să fii eroul mediului tău!
          </p>
          <Link href="/blog">
            <button className="text-white transition duration-300">
              Resurse educaționale
            </button>
          </Link>
        </div>
        <div className="w-full mt-8 md:mt-0 md:w-1/2 flex justify-end h-full pl-12 lg:pl-0">
          <Image src="/despre-proiectul-green-generation.svg" alt="Our Founder" width={778} height={759} className="w-full max-w-md" />
        </div>
      </section>      

      {/* Explore, Discover, Learn, Connect Section */}
      <section className="bg-gg-bej-dark px-6 md:px-16 py-20">
        <div className="md:container lg:max-w-screen-lg xl:max-w-screen-xl 3xl:max-w-screen-2xl mx-auto flex sm:flex-row flex-col space-y-12 sm:space-y-0 justify-around space-x-4">
          <div className="text-center">
            <Image src="/explorare.svg" alt="Explore" width={890} height={890} className="w-16 h-16 mx-auto" />
            <p className="text-lg font-semibold text-gray-900 mt-4">Explorează</p>
          </div>
          <div className="text-center">
            <Image src="/descoperire.svg" alt="Discover" width={890} height={890} className="w-16 h-16 mx-auto" />
            <p className="text-lg font-semibold text-gray-900 mt-4">Descoperă</p>
          </div>
          <div className="text-center">
            <Image src="/invatare.svg" alt="Learn" width={890} height={890} className="w-16 h-16 mx-auto" />
            <p className="text-lg font-semibold text-gray-900 mt-4">Invață</p>
          </div>
          <div className="text-center">
            <Image src="/conectare.svg" alt="Connect" width={890} height={890} className="w-16 h-16 mx-auto" />
            <p className="text-lg font-semibold text-gray-900 mt-4">Acționează</p>
          </div>
        </div>
      </section>

{/* Ways to Make a Difference Section */}
<section className="md:container lg:max-w-screen-lg xl:max-w-screen-xl 3xl:max-w-screen-2xl mx-auto flex flex-row md:flex-row items-center justify-between lg:px-6 py-16">
      <div className="space-y-4 lg:space-y-6 flex flex-col items-center w-full text-center">
          <p className="font-semibold text-gg-green">Fii parte din schimbare</p>
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900">Campaniile noastre</h2>
          <p className='text-center w-8/12'>
          În următoarele 18 luni, Green Generation va organiza 12 campanii pline de activități practice și excursii educative, toate dedicate protejării mediului. Află mai multe despre fiecare campanie și cum te poți implica!
          </p>
          <Carousel />
        </div>

      </section>      

    </main>
  );
};

export default Home;
