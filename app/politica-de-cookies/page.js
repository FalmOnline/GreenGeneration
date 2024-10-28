export default function PoliticaCookies() {
  return (
    <main className="flex flex-col justify-center mb-16">
      <article>
        {/* Banner */}
        <div className="bg-gh-green flex items-center justify-center mb-12 flex-col">
          <div className="md:container lg:max-w-screen-lg xl:max-w-screen-xl 3xl:max-w-screen-2xl mx-auto h-[380px] flex flex-col justify-center p-2 xs:p-8">
            <h1>Politica de Cookies</h1>
          </div>
        </div>
        {/* Content */}
        <div className="flex flex-col gap-4 justify-center container lg:max-w-screen-lg xl:max-w-screen-xl 3xl:max-w-screen-2xl mx-auto">
          <p className="block text-left">
            Ultima actualizare: 25-Aug-2024
          </p>

          <h5>Ce sunt cookie-urile?</h5>
          <div className="cookie-policy-p">
            <p>
              Cookie-urile sunt fișiere text de mici dimensiuni care sunt plasate pe dispozitivul dumneavoastră atunci când vizitați un site web. Acestea ajută la salvarea unor informații despre vizita dumneavoastră, cum ar fi preferințele și setările, și permit site-ului să funcționeze corect, să ofere o experiență mai bună și să îmbunătățească performanța sa.
            </p>
          </div>

          <h5>Cum utilizăm cookie-urile?</h5>
          <div className="cookie-policy-p">
            <p>
              Site-ul nostru folosește atât cookie-uri proprii (first-party), cât și cookie-uri de la terți (third-party). Iată cum le folosim:
            </p>
            <ul>
              <li><strong>Cookie-uri esențiale:</strong> Aceste cookie-uri sunt necesare pentru funcționarea corectă a site-ului și pentru furnizarea serviciilor solicitate de dumneavoastră, cum ar fi autentificarea și securizarea sesiunilor.</li>
              <li><strong>Cookie-uri de performanță:</strong> Acestea ne ajută să analizăm modul în care vizitatorii utilizează site-ul nostru și să identificăm zonele care necesită îmbunătățiri.</li>
              <li><strong>Cookie-uri de funcționalitate:</strong> Ne permit să reținem preferințele dumneavoastră (de exemplu, limba și setările de afișare) pentru a oferi o experiență personalizată.</li>
              <li><strong>Cookie-uri de targetare/publicitate:</strong> Acestea sunt folosite pentru a furniza reclame relevante pentru dumneavoastră și pentru a limita numărul de afișări ale acestor reclame.</li>
              <li><strong>Google Analytics:</strong> Utilizăm Google Analytics pentru a analiza traficul și performanța site-ului nostru. Aceste cookie-uri ne ajută să înțelegem cum interacționează utilizatorii cu site-ul nostru. Puteți dezactiva Google Analytics urmând [acest link](https://tools.google.com/dlpage/gaoptout).</li>
            </ul>
          </div>

          <h5>Tipuri de cookie-uri pe care le folosim</h5>
          <div className="cookie-policy-p">
            <p>Folosim două tipuri de cookie-uri:</p>
            <ul>
              <li><strong>Cookie-uri per sesiune:</strong> Acestea sunt temporare și sunt șterse automat atunci când închideți browserul.</li>
              <li><strong>Cookie-uri persistente:</strong> Acestea rămân pe dispozitivul dumneavoastră pentru o perioadă specificată sau până sunt șterse manual.</li>
            </ul>
          </div>

          <h5>Cum să gestionați cookie-urile</h5>
          <div className="cookie-policy-p">
            <p>
              Puteți controla și modifica setările cookie-urilor direct din browserul dumneavoastră, inclusiv pe dispozitive mobile. Aceste setări pot varia de la un browser la altul, dar, în general, le puteți accesa prin intermediul opțiunilor de confidențialitate și securitate ale browserului. De asemenea, aveți posibilitatea să vă retrageți consimțământul în orice moment folosind opțiunile disponibile în bannerul de consimțământ al cookie-urilor de pe site-ul nostru.
            </p>

            <p><a className="bg-gh-green p-3 rounded-3xl no-underline max-w-xs text-center cky-banner-element">Setari cookies</a></p>
            <p className="mt-8">Pentru informații detaliate despre cum să gestionați cookie-urile pe diferite browsere, consultați linkurile de mai jos:</p>
            <ul>
              <li><a target="_blank" rel="noopener noreferrer" href="https://support.google.com/accounts/answer/32050">Chrome</a></li>
              <li><a target="_blank" rel="noopener noreferrer" href="https://support.apple.com/en-in/guide/safari/sfri11471/mac">Safari</a></li>
              <li><a target="_blank" rel="noopener noreferrer" href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox?redirectslug=delete-cookies-remove-info-websites-stored&redirectlocale=en-US">Firefox</a></li>
              <li><a target="_blank" rel="noopener noreferrer" href="https://support.microsoft.com/en-us/windows/manage-cookies-in-microsoft-edge-view-allow-block-delete-and-use-168dab11-0753-043d-7c16-ede5947fc64d">Microsoft Edge</a></li>
            </ul>
          </div>

          <h5>De ce sunt importante cookie-urile?</h5>
          <div className="cookie-policy-p">
            <p>
              Cookie-urile sunt esențiale pentru funcționarea optimă a site-urilor web și contribuie la îmbunătățirea experienței utilizatorului. Ele permit site-urilor să rețină preferințele dumneavoastră, să ofere conținut personalizat și să măsoare performanța site-ului, contribuind astfel la dezvoltarea și optimizarea acestuia.
            </p>
          </div>

        </div>
      </article>
    </main>
  );
}
