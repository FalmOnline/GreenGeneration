import Image from "next/image";
import logo from '../../public/Logo-green-generation.svg';
import facebookIcon from '../../public/facebook-icon.svg';
import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
    <footer className="bg-[url('/bb-gg.png')] bg-no-repeat bg-cover bg-top relative z-30 bg-gg-bej pt-10">
        <div className="container lg:max-w-screen-lg xl:max-w-screen-xl 3xl:max-w-screen-2xl mx-auto flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8 pb-8 px-3">
                <div className="lg:w-80 text-center md:text-left flex flex-col justify-between">
                    <div className="mb-8 text-center pt-12">
   
                    <Link href="/">
                          <Image className="text-center md:text-left md:mx-0 block mx-auto text-gg-bej" src="/logo-gg-bej.svg" alt="Green Generation logo" width={44} height={47}></Image>
					</Link>
                    </div>


                    <div className="flex flex-col gap-4 mt-4">
                    <div>
                        <p className="text-sm md:text-sm text-gg-bej">
                           &copy; {currentYear} Green Generation. <br /> Toate drepturile rezervate.
                         </p>
                    </div>
                        {/* Facebook */}
                        <div className="mx-auto md:ml-0">
                            <a className="text-gg-bej" href="https://www.facebook.com/AsociatiaUMAN/" target="_blank" rel="noopener noreferrer">
                            <svg
                                className="h-6 text-gg-bej"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 26 26"
                            >
                                <path className="fill-gg-bej" d="M17.525 9H14V7c0-1.032.084-1.682 1.563-1.682h1.868v-3.18A26.065 26.065 0 0014.693 2C11.98 2 10 3.657 10 6.699V9H7v4l3-.001V22h4v-9.003l3.066-.001L17.525 9z"></path>
                            </svg>
                            </a>
                        </div>

                    </div>

                </div>

                <div className="flex flex-col lg:flex-grow items-center gap-2">
                <Link className="text-gh-dark-green text-sm" href="https://www.afm.ro" target="_blank"><Image src="/logo-afm-200.png" alt="Logo AFM" width={100} height={72} /></Link>
                   <p className="text-sm text-center leading-tight text-gg-bej">Proiect finanţat din Fondul pentru mediu în cadrul Programului vizând educaţia şi conştientizarea publicului privind protecţia mediului</p>
                   <Link className="text-gg-bej text-sm" href="https://www.afm.ro" target="_blank">www.afm.ro</Link>
                   <p className="text-xs text-center text-gg-bej"><strong>Beneficiar</strong>: Asociația Uman <br />
                   <strong>Partener</strong>: Școala Gimnazială „Mihai Eminescu” Ighiu (P1) și Școala Gimnazială ”Decebal” Cricău (P2) <br />
                   Valoarea totală a proiectului este de 499.975,00 lei<br />
                   Data începerii investiției: 16.05.2024<br />
                   Data finalizării investiției: 15.11.2025</p>


                </div>

                <div className="lg:w-80 text-center md:text-left">

                    <nav className="md:pl-5 lg:pl-32">
                        <h6 className="text-gg-bej">Linkuri Rapide</h6>
                        <ul className="[&>li]:list-none [&>li]:text-sm [&>li>a:hover]:text-gg-green [&>li>a]:text-gg-bej">
                        <li><Link className='no-underline' href="/despre-noi">Despre noi</Link></li>
                            <li><Link className='no-underline' href="/blog">Resurse educaționale</Link></li>
                            <li><Link className='no-underline' href="/contact">Contact</Link></li>
                            <li><Link className='no-underline' href="/politica-de-confidentialitate">Politică de confidențialitate</Link></li>
                    <li><Link className='no-underline' href="/politica-de-cookies">Politică de cookies</Link></li>
                    <li><Link className='no-underline' href="/harta-site">Harta site</Link></li>
                        </ul>
                    </nav>

                </div>

            </div>
            <div className="flex flex-col sm:flex-row justify-center items-center border-t border-line-grey pt-6 pb-8 px-3">
                {/* <!-- Credentials --> */}
                <div className="text-sm md:text-xs mt-4 sm:mt-0 flex md:flex-row flex-col justify-center gap-1 w-full text-white text-center">
                    <div><strong>Creat de:</strong></div>
                    <div>Asociatia Uman |  Școala Gimnazială &quot;Mihai Eminescu&quot; Ighiu | Școala Gimnazială &quot;Decebal&quot; Cricău</div>
                </div>
            </div>
        </div>
    </footer>
    );
  }