export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-bg/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <a href="#" className="text-lg font-bold text-accent">
            Dracula Catering
          </a>
          <nav className="hidden gap-6 text-sm font-medium text-text-muted sm:flex">
            <a href="#mancare" className="hover:text-accent">Mâncare</a>
            <a href="#prajituri" className="hover:text-accent">Prăjituri</a>
            <a href="#comanda" className="hover:text-accent">Comenzi</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-bg-alt px-6 py-20 text-center">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold leading-tight text-text sm:text-5xl">
            DRACULA CATERING – <span className="text-accent">GUSTUL DE ACASĂ</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-text-muted">
            Dor de gustul mâncării de acasă? 🥰 Eu și Camelia ne-am reunit pentru a vă aduce din nou preparatele românești pe care le iubiți, gătite cu drag, ca acasă! ❤️
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-text-muted">
            🍽️ De la tochitură, sarmale și pomana porcului până la cozonaci pufoși, savarine, Medovik și multe alte bunătăți!
          </p>
          <a
            href="#comanda"
            className="mt-8 inline-block rounded-lg bg-accent px-8 py-3 font-semibold text-white transition-colors hover:bg-accent-hover"
          >
            Comandă acum
          </a>
        </div>
      </section>

      {/* Secțiunea 1: Mâncare (Camelia) */}
      <section id="mancare" className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-center text-3xl font-bold text-accent">🍽️ Preparatele Cameliei</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              { name: "Salată de vinete", desc: "Preparată după rețeta de casă.", price: "£35/kg" },
              { name: "Salată de boeuf", desc: "Cremoasă și aromată.", price: "£35/kg" },
              { name: "Tochitură muntenească", desc: "Carne fragedă de porc în sos de roșii cu usturoi și vin alb, cârnați afumați și costiță afumată, însoțite de mămăliguță, brânză și ou prăjit.", price: "£15/porție" },
              { name: "Pomana porcului", desc: "Carne fragedă de porc, cârnați afumați, costiță afumată, asezonate cu vin și usturoi. Servită cu mămăliguță, brânză și ou.", price: "£15/porție" },
              { name: "Rață cu varză", desc: "Pulpă de rață confiată, pe pat de varză călită și rumenită, însoțită de mămăliguță.", price: "£15/porție" },
              { name: "Sărmăluțe (5 buc.)", desc: "Însoțite de mămăliguță, smântână și ardei iute.", price: "£12,50/porție" },
              { name: "Ostropel de pui", desc: "Piept de pui tras la tigaie, asezonat cu vin și usturoi, în sos cremos de roșii, servit cu piure de cartofi sau mămăliguță.", price: "£12,50/porție" },
            ].map((dish) => (
              <div key={dish.name} className="rounded-xl border border-border bg-surface p-6 shadow-sm transition-transform hover:-translate-y-1">
                <div className="mb-2 flex items-start justify-between">
                  <h3 className="text-lg font-semibold text-text">{dish.name}</h3>
                  <span className="font-bold text-accent">{dish.price}</span>
                </div>
                <p className="text-sm text-text-muted">{dish.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Secțiunea 2: Prăjituri și Cozonaci (Marlena) */}
      <section id="prajituri" className="bg-bg-alt px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-center text-3xl font-bold text-accent">🍰 Prăjituri și Cozonaci</h2>
          
          <h3 className="mb-4 text-xl font-bold text-text">Prăjituri (Marlena)</h3>
          <div className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Amandine", desc: "Cremă delicioasă de ciocolată și blat ușor însiropat.", price: "£5/buc" },
              { name: "Savarine", desc: "Bine însiropate, cu frișcă fină din smântână.", price: "£5/buc" },
              { name: "Medovik", desc: "Foi cu miere de albine și cremă proaspătă, ușor acrișoară.", price: "£5/buc" },
            ].map((dish) => (
              <div key={dish.name} className="rounded-xl border border-border bg-surface p-6 shadow-sm transition-transform hover:-translate-y-1">
                <div className="mb-2 flex items-start justify-between">
                  <h3 className="text-lg font-semibold text-text">{dish.name}</h3>
                  <span className="font-bold text-accent">{dish.price}</span>
                </div>
                <p className="text-sm text-text-muted">{dish.desc}</p>
              </div>
            ))}
          </div>

          <h3 className="mb-4 text-xl font-bold text-text">Cozonaci (Marlena)</h3>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              { name: "Cozonac însiropat", desc: "În sirop de zahăr ars și coniac, cu felii proaspete de portocală.", price: "£35/buc" },
              { name: "Cozonac tradițional", desc: "Pufos, aromat, cu umplutură generoasă de nucă și cacao.", price: "£35/buc" },
            ].map((dish) => (
              <div key={dish.name} className="rounded-xl border border-border bg-surface p-6 shadow-sm transition-transform hover:-translate-y-1">
                <div className="mb-2 flex items-start justify-between">
                  <h3 className="text-lg font-semibold text-text">{dish.name}</h3>
                  <span className="font-bold text-accent">{dish.price}</span>
                </div>
                <p className="text-sm text-text-muted">{dish.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Secțiunea 3: Comenzi și Ridicare */}
      <section id="orar" className="px-6 py-16 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-3xl font-bold text-accent">📅 Comenzi și Ridicare</h2>
          
          <div className="mb-8 rounded-2xl border border-border bg-surface p-8 shadow-sm">
            <p className="mb-2 text-lg font-bold text-text">
              📞 COMENZILE SE PREIAU DE LUNI PÂNĂ JOI
            </p>
            <p className="mb-6 text-xl font-bold text-accent">
              020 8202 9654
            </p>
            
            <p className="mb-2 text-lg font-bold text-text">
              📍 RIDICAREA COMENZILOR
            </p>
            <div className="text-lg text-text-muted">
              <p>Vineri și sâmbătă: <span className="font-bold text-text">11:00 – 19:00</span></p>
              <p>Duminică: <span className="font-bold text-text">10:00 – 17:00</span></p>
            </div>
            
            <p className="mt-6 text-lg font-bold text-text">
              🏠 Adresa:
            </p>
            <p className="text-lg text-text-muted">7 Watford Way, London, NW4 3JL</p>
          </div>

          <p className="mx-auto max-w-xl text-text-muted">
            Pe lângă meniul săptămânal, vom pregăti și alte bunătăți, pe care vi le vom prezenta aici, pe pagină. Așa că urmăriți-ne pentru a descoperi ce mai pregătim! ❤️
          </p>
        </div>
      </section>

      {/* Secțiunea 4: Comandă / Telefoane */}
      <section id="comanda" className="bg-accent px-6 py-16 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 text-3xl font-bold">Nu lăsați comanda pe ultima zi!</h2>
          <p className="mb-8 text-white/90">
            Sunați de luni până joi, alegeți preparatele preferate și noi le pregătim cu drag pentru voi!
          </p>
          
          <div className="mb-8 grid gap-4 sm:grid-cols-3">
            <a href="tel:02082029654" className="rounded-lg border-2 border-white/30 bg-white/10 px-6 py-4 text-lg font-bold transition-colors hover:bg-white/20">
              📞 Fix<br/><span className="text-base font-normal">020 8202 9654</span>
            </a>
            <a href="tel:07792395772" className="rounded-lg border-2 border-white/30 bg-white/10 px-6 py-4 text-lg font-bold transition-colors hover:bg-white/20">
              📞 Camelia<br/><span className="text-base font-normal">07792 395772</span>
            </a>
            <a href="tel:07928365954" className="rounded-lg border-2 border-white/30 bg-white/10 px-6 py-4 text-lg font-bold transition-colors hover:bg-white/20">
              📞 Marlena<br/><span className="text-base font-normal">07928 365954</span>
            </a>
          </div>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a href="https://www.just-eat.co.uk" target="_blank" rel="noopener noreferrer" className="rounded-lg bg-white px-8 py-3 font-semibold text-accent transition-colors hover:bg-gray-100">
              Comandă pe Just Eat
            </a>
            <a href="https://www.ubereats.com" target="_blank" rel="noopener noreferrer" className="rounded-lg border-2 border-white px-8 py-3 font-semibold text-white transition-colors hover:bg-white/10">
              Comandă pe Uber Eats
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-bg-alt px-6 py-8 text-center text-sm text-text-muted">
        <p>© 2026 Dracula Catering. Toate drepturile rezervate.</p>
        <p className="mt-2">Marlena & Camelia – Gustul de acasă!</p>
      </footer>
    </main>
  );
}
