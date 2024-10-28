"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";


const campaigns = [
  {
    title: "Combaterea poluării aerului",
    description: "Participă la activități educative și învață cum să reducem emisiile care afectează aerul pe care îl respirăm.",
    image: "/1.combaterea-poluarii.svg"
  },
  {
    title: "Protejarea resurselor de apă",
    description: "Explorează și află cum putem proteja sursele de apă pentru viitor.",
    image: "/2.protejarea-resulrselor-de-apa.svg"
  },
  {
    title: "Prevenirea tăierilor ilegale de păduri",
    description: " Descoperă ce poți face pentru a opri defrișările ilegale și pentru a proteja pădurile.",
    image: "/3.prevenirea-taierilor-ilegale.svg"
  },
  {
    title: "Reducerea poluării cu deșeuri",
    description: "Vei învăța cum să reduci deșeurile și să ajuți la menținerea unui mediu curat.",
    image: "/4.reducerea-poluarii-cu-deseuri.svg"
  },
  {
    title: "Reciclarea și reutilizarea deșeurilor",
    description: "Împreună vom găsi modalități de a recicla și reutiliza pentru a proteja resursele naturale.",
    image: "/5.reciclarea-si-reutilizarea-deseurilor.svg"
  },
  {
    title: "Protejarea resurselor naturale",
    description: " Învață cum să conservi resursele naturale prin activități practice și excursii.",
    image: "/6.Protejarea-resurselor-naturale.svg"
  },      
  {
    title: "Beneficiile energiei regenerabile",
    description: "Vei înțelege cât de importantă este utilizarea surselor de energie regenerabilă pentru un viitor sustenabil.",
    image: "/7.beneficiile-energiei-regenerabile.svg"
  },
  {
    title: "Protecția ariilor naturale",
    description: "Descoperă frumusețea ariilor naturale protejate și cum le poți proteja.",
    image: "/8.protectia-ariilor-naturale.svg"
  },
  {
    title: "Combaterea schimbărilor climatice",
    description: "Fă parte dintr-o campanie care te ajută să înțelegi cum poți contribui la combaterea schimbărilor climatice.",
    image: "/9.combatere-schimbari-climatice.svg"
  },
  {
    title: "Promovarea transportului cu emisii reduse",
    description: "Descoperă beneficiile transportului eco și cum poate contribui la un mediu mai curat.",
    image: "/10.transport-cu-emisii-reduse.svg"
  },
  {
    title: "Eficiența energetică a clădirilor",
    description: "Participă la ateliere practice și învață cum putem reduce consumul de energie în clădiri.",
    image: "/11.eficienta-energetica-a-cladirilor.svg"
  },
  {
    title: "Drepturile și obligațiile de mediu ale cetățenilor",
    description: "Află care sunt drepturile și obligațiile tale ca cetățean în protejarea mediului.",
    image: "/12.drepturile-si-obligatiile-de-mediu.svg"
  },  
];

export default function Carousel() {
    return (
      <div className="w-full max-w-6xl mx-auto p-12 relative">
        <div className="relative overflow-hidden">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          pagination={{ clickable: true }}
          loop={true}
          className="mySwiper"
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {campaigns.map((campaign, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center bg-gg-dark-green rounded-lg shadow-md p-6 min-h-[500px]">
                <div className="relative w-4/6 mb-8">
                  <Image
                    src={campaign.image}
                    alt={campaign.title}
                    width={300} height={300}
                    className="object-fill rounded-t-lg"
                  />
                </div>
                <h2 className="text-xl font-bold mt-4 text-white text-center">{campaign.title}</h2>
                <p className="mt-2 text-gray-300 text-center">{campaign.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        </div>

        {/* Position arrows outside of the container */}
        <div className="swiper-button-prev absolute top-3/4 -left-16 transform -translate-y-3/4 z-10 cursor-pointer text-gg-dark-grey"></div>
        <div className="swiper-button-next absolute top-3/4 -right-16 transform -translate-y-3/4 z-10 cursor-pointer text-gg-dark-grey"></div>
      </div>
    );
  }
