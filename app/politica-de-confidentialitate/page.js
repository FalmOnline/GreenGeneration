import Link from "next/link";

export default function PoliticaConfidentialitate() {
    return (
      <main className="flex flex-col justify-center mb-8">
        <article>
          {/* Banner */}
          <div className="bg-gh-green flex items-center justify-center mb-12  flex-col">
            <div className="md:container lg:max-w-screen-lg xl:max-w-screen-xl 3xl:max-w-screen-2xl mx-auto h-[380px] flex flex-col justify-center p-2 xs:p-8">
            <h1>Politica de confidențialitate</h1>
            </div>
          </div>
          {/* Content */}
          <div className="flex flex-col gap-4 justify-center items-center container lg:max-w-screen-lg xl:max-w-screen-xl 3xl:max-w-screen-2xl mx-auto">
                    <div className="container p-8">
              <div className="privacy-policy-container">
                <p><strong>Ultima actualizare:</strong> 25-Aug-2024 </p>
                <section>
                  <h5>1. Colectarea Datelor Personale</h5>
                  <p>Colectăm date personale în următoarele moduri:</p>
                  <ul>
                    <li><strong>Formulare de contact:</strong> Nume, prenume, adresa de e-mail, număr de telefon și alte informații pe care le oferi voluntar.</li>
                    <li><strong>Comentarii:</strong> Colectăm informațiile introduse în formularul de comentarii, adresa IP și șirul agenților utilizator ai browser-ului pentru a preveni spam-ul.</li>
                    <li><strong>Cookie-uri și tehnologii similare:</strong> Website-ul folosește cookie-uri pentru a personaliza experiența utilizatorului și a analiza traficul.</li>
                  </ul>
                </section>
                <section>
                  <h5>2. Scopurile Prelucrării Datelor</h5>
                  <p>Utilizăm datele tale personale pentru:</p>
                  <ul>
                    <li>A răspunde la întrebările și solicitările trimise prin formularul de contact;</li>
                    <li>A monitoriza și preveni fraudele și comportamentele abuzive (inclusiv spam-ul);</li>
                    <li>A îmbunătăți funcționalitatea site-ului și experiența utilizatorului.</li>
                  </ul>
                </section>
                <section>
                  <h5>3. Temeiul Legal al Prelucrării</h5>
                  <p>Prelucrăm datele personale pe baza următoarelor temeiuri legale:</p>
                  <ul>
                    <li><strong>Consimțământ:</strong> În cazul în care ai oferit consimțământul pentru anumite scopuri, cum ar fi abonarea la newsletter.</li>
                    <li><strong>Interes legitim:</strong> Pentru a îmbunătăți serviciile și a asigura securitatea website-ului.</li>
                    <li><strong>Obligații legale:</strong> Pentru a respecta cerințele legale în vigoare.</li>
                  </ul>
                </section>
                <section>
                  <h5>4. Drepturile Utilizatorilor</h5>
                  <p>Conform GDPR, ai următoarele drepturi în legătură cu datele tale personale:</p>
                  <ul>
                    <li><strong>Dreptul de acces:</strong> Poți solicita informații despre datele tale stocate de noi.</li>
                    <li><strong>Dreptul la rectificare:</strong> Poți cere corectarea datelor inexacte.</li>
                    <li><strong>Dreptul la ștergere:</strong> Ai dreptul să soliciți ștergerea datelor, cu anumite excepții.</li>
                    <li><strong>Dreptul la restricționarea prelucrării:</strong> Poți cere limitarea modului în care îți procesăm datele.</li>
                    <li><strong>Dreptul la portabilitatea datelor:</strong> Poți cere transferul datelor către un alt operator de date.</li>
                    <li><strong>Dreptul de a depune o plângere:</strong> Ai dreptul de a depune o plângere la autoritatea de supraveghere (<Link href="https://www.dataprotection.ro/" target="_blank">ANSPDCP</Link> în România).</li>
                  </ul>
                </section>
                <section>
                  <h5>5. Partajarea Datelor</h5>
                  <p>Nu vom partaja datele tale personale cu terți fără consimțământul tău, cu excepția cazurilor prevăzute de lege sau necesare pentru furnizarea serviciilor noastre (de exemplu, servicii de hosting, procesare plăți).</p>
                </section>
                <section>
                  <h5>6. Cookie-uri</h5>
                  <p>Utilizăm cookie-uri pentru a:</p>
                  <ul>
                    <li>Îmbunătăți funcționalitatea site-ului;</li>
                    <li>Furniza conținut personalizat;</li>
                    <li>Analiza traficul și comportamentul utilizatorilor.</li>
                  </ul>
                  <p>Te rugăm să consulți <a href="/politica-de-cookies">Politica de Cookie-uri</a> pentru mai multe detalii.</p>
                </section>
                <section>
                  <h5>7. Securitatea Datelor</h5>
                  <p>Implementăm măsuri tehnice și organizaționale adecvate pentru a proteja datele personale împotriva accesului neautorizat, pierderii, distrugerii sau dezvăluirii accidentale. Accesul la datele personale este limitat doar la personalul autorizat care are nevoie să prelucreze datele pentru scopuri legitime.</p>
                </section>
                <section>
                  <h5>8. Durata Păstrării Datelor</h5>
                  <p>Păstrăm datele tale personale doar atât timp cât este necesar pentru scopurile menționate în această politică sau conform cerințelor legale.</p>
                </section>
                <section>
                  <h5>9. Modificări ale Politicii de Confidențialitate</h5>
                  <p>Ne rezervăm dreptul de a actualiza această politică de confidențialitate periodic. Orice modificare va fi publicată pe această pagină și te vom notifica printr-un mesaj pe site dacă este cazul.</p>
                </section>
                <section>
                  <h5>10. Contact</h5>
                  <p>Pentru orice întrebări sau solicitări legate de protecția datelor tale personale, ne poți contacta la:</p>
                  <ul>
                    <li><strong>Email:</strong> contact@asociatiauman.ro</li>
                    <li><strong>Telefon:</strong>+ 0756 585 150</li>
                    <li><strong>Adresă:</strong> Sat Tibru, Nr. 172, Comuna Cricău, Județul Alba, cod 517267</li>
                  </ul>
                </section>
              </div>
            </div>
            </div>
        </article>
      </main>
    );
  }