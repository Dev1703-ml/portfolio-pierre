import Image from "next/image";

const menu = [
  { label: "Profil", href: "#profil" },
  { label: "Experience", href: "#experience" },
  { label: "Competences", href: "#competences" },
  { label: "Projets", href: "#projets" },
  { label: "Contact", href: "#contact" },
];

const stats = [
  { value: "5+ ans", label: "d experience" },
  { value: "2018", label: "1er national en specialite" },
  { value: "4", label: "roles actifs en 2026" },
];

const pillars = [
  {
    title: "Statistique appliquee",
    text: "Collecte, traitement et interpretation de donnees quantitatives et qualitatives pour la decision.",
  },
  {
    title: "Data visualisation",
    text: "Conception de dashboards avec R Shiny, bs4Dash, Highcharter, DT, Leaflet et reporting dynamique.",
  },
  {
    title: "Donnees et Big Data",
    text: "SQL avance, modelisation des donnees, ETL/BI et experimentation sur Hadoop, Cloudera, Hive et Impala.",
  },
];

const experiences = [
  {
    period: "Depuis le 12 aout 2025",
    role: "Chef de departement des Contractuels",
    org: "Centre National de Concours de la Fonction Publique (CNCFP)",
    text: "Organisation des tests, suivi statistique, production de rapports annuels et contribution aux textes reglementaires.",
  },
  {
    period: "14 avril 2019 - 11 aout 2025",
    role: "Charge de Statistique",
    org: "CNCFP",
    text: "Collecte, analyse et interpretation des donnees, gestion du fichier statistique des concours et harmonisation du systeme d information.",
  },
  {
    period: "07 aout - 14 octobre 2023",
    role: "Stagiaire (mention tres bien)",
    org: "Direction Generale des Impots du Cameroun",
    text: "Conception de LUMINEX: ACM dynamique, carte interactive, automatisation de traitements et rapports sous R.",
  },
  {
    period: "Depuis le 22 janvier 2026",
    role: "Enseignant vacataire en Data Visualisation",
    org: "CFP-STAT, Bamako",
    text: "Enseignement de Flexdashboard, Officer, OfficeDown, Shiny, Shinydashboard, bs4Dash, HTML, CSS, JavaScript, Highcharter, DT et Leaflet.",
  },
  {
    period: "Depuis le 08 juin 2024",
    role: "Professeur assistant en Data Visualisation",
    org: "ISSEA-CEMAC",
    text: "Cours appliques autour du reporting interactif et de la conception de tableaux de bord metiers.",
  },
  {
    period: "Depuis le 1er janvier 2022",
    role: "Consultant formateur et free-lance",
    org: "Ateliers de Maintenance Informatique (AMI), Kati",
    text: "Formation bureautique (initial a avance), appui a l organisation d examens et production de documents administratifs.",
  },
];

const education = [
  "Master de Recherche en Economie Quantitative Calculable (2024-2026) - USSBG, Bamako",
  "Licence en Base de Donnees et Big Data (2023, major, mention Bien) - ISSEA, Yaounde",
  "Licence en Statistique Appliquee a l Economie (2022, mention Bien) - GGMI, Bamako",
  "Technicien Superieur de la Statistique (2016-2018, mention Bien) - CFP-STAT, Bamako",
];

const certifications = [
  "Formation analyse de donnees avec R (2025, Ghana R Users Community)",
  "Formation en protection des donnees a caractere personnel (2025)",
  "Formation en communication efficace pour dirigeants et cadres (2025)",
  "Formation Excel avance et analyse de donnees (2019-2020)",
];

const skills = [
  "R, R Studio, Python (avance), SQL (avance), SPSS, STATA, Eviews, Excel (expert)",
  "CSPro, KoboCollect, Sphinx, Google Forms, SurveyMonkey",
  "MySQL, PostgreSQL, HiveQL, MongoDB, DBeaver, DB Browser SQLite, XAMPP",
  "Talend, Power BI, Power Pivot, Power Query",
  "Hadoop (debutant), Cloudera (debutant), Hive, Impala",
  "Photoshop, Illustrator, Premiere Pro, After Effects",
  "Francais courant, Anglais intermediaire, Bambara",
];

const projects = [
  {
    title: "LUMINEX - DGI Cameroun",
    text: "Application de valorisation d activite des contribuables: analyse structurelle, conjoncturelle, ACM dynamique et cartographie interactive.",
  },
  {
    title: "Prediction du score d appetence credit",
    text: "Cas Afriland First Bank: ACP, ACM, ADL, regression logistique, evaluation et implementation de la prediction sur Excel.",
  },
  {
    title: "YamaKO - Data visualisation",
    text: "Modelisation de base, requetes de donnees, interface Shiny/bs4Dash, controle d acces et visualisations Highcharter.",
  },
  {
    title: "Administration base de donnees ISSEA",
    text: "MCD/MLD, script SQL, triggers, gestion utilisateurs et administration de donnees via DBeaver.",
  },
];

const engagements = [
  "Responsable R User Mali (depuis 2025) - R Community Mali",
  "Secretaire administratif AJS-MALI (2018-2019)",
  "Tresorier adjoint AES-CFP-STAT (2016-2017)",
  "Secretaire administratif MJC-LMSK (2015-2016)",
];

const links = [
  { label: "Final DataViz (YouTube)", href: "https://www.youtube.com/@FinalDataViz" },
  { label: "Volonte de Dieu (Facebook)", href: "https://www.facebook.com/volontedeDieu0" },
  {
    label: "Volonte de Dieu (YouTube)",
    href: "https://www.youtube.com/@volont%C3%A9_de_dieu",
  },
];

type SocialPlatform = "youtube" | "facebook" | "whatsapp";

const heroSocialLinks: { label: string; href: string; platform: SocialPlatform }[] = [
  {
    label: "Final DataViz (YouTube)",
    href: "https://www.youtube.com/@FinalDataViz",
    platform: "youtube",
  },
  {
    label: "Volonte de Dieu (Facebook)",
    href: "https://www.facebook.com/volontedeDieu0",
    platform: "facebook",
  },
  {
    label: "Volonte de Dieu (YouTube)",
    href: "https://www.youtube.com/@volont%C3%A9_de_dieu",
    platform: "youtube",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/22370838368?text=Bonjour%20Pierre%20Claver%20Sidibe",
    platform: "whatsapp",
  },
];

function SocialIcon({ platform, className }: { platform: SocialPlatform; className?: string }) {
  if (platform === "youtube") {
    return (
      <svg
        viewBox="0 0 24 24"
        className={className}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        <rect x="2.5" y="5.5" width="19" height="13" rx="4.2" />
        <path d="M10 9l5 3-5 3V9z" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (platform === "facebook") {
    return (
      <svg
        viewBox="0 0 24 24"
        className={className}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        <path d="M14 8h2.3V5.5H14c-2.2 0-3.8 1.6-3.8 3.8V12H8v2.5h2.2v4H13v-4h2.6L16 12h-3V9.5c0-.9.5-1.5 1-1.5z" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path d="M5.5 20l1.2-4A7.8 7.8 0 114 11.7a7.8 7.8 0 012.7 4.4L5.5 20z" />
      <path d="M9.2 8.8c.3-.6.6-.7 1-.7.3 0 .7 0 .9.1.3.1.7 1.2.7 1.3.1.2.1.4 0 .5-.1.2-.2.3-.4.5l-.4.4c-.2.2-.3.3-.1.7.3.7.9 1.4 1.6 1.8.3.2.5.2.7 0l.5-.6c.2-.2.3-.2.5-.1l1.2.6c.2.1.3.2.3.4 0 .5-.2 1-.6 1.3-.3.2-.8.4-1.4.2-2.3-.8-4.8-3.3-5.6-5.5-.2-.6 0-1.1.2-1.4.2-.3.6-.5.9-.5z" />
    </svg>
  );
}

function ReasonCard({ title, text }: { title: string; text: string }) {
  return (
    <article className="relative h-full rounded-2xl border border-[#dbe4ff] bg-white px-5 py-6 shadow-[0_14px_38px_-28px_rgba(10,32,92,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_45px_-30px_rgba(10,32,92,0.3)]">
      <span className="absolute left-3 top-3 h-6 w-6 border-l-2 border-t-2 border-[#1f4fae]" />
      <span className="absolute bottom-3 right-3 h-6 w-6 border-b-2 border-r-2 border-[#1f4fae]" />
      <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#dfe7ff] text-sm font-bold text-[#163a8c]">D</div>
      <h3 className="mt-3 text-lg font-bold text-[#132f73]">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[#596f9e]">{text}</p>
    </article>
  );
}

export default function Home() {
  const stepItems = experiences.slice(0, 3);
  const year = new Date().getFullYear();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio-pierre-six.vercel.app";

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Pierre Claver Sidibe",
    url: siteUrl,
    jobTitle: "Ingenieur de la Statistique",
    description:
      "Data analyst, formateur et specialiste en visualisation de donnees avec plus de 5 ans d experience.",
    email: "mailto:sidibepierreclaver@outlook.com",
    telephone: "+22370838368",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kati",
      addressCountry: "ML",
    },
    sameAs: [
      "https://www.youtube.com/@FinalDataViz",
      "https://www.facebook.com/volontedeDieu0",
      "https://www.youtube.com/@volont%C3%A9_de_dieu",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <div className="min-h-screen overflow-x-hidden bg-[#133a90]">
        <main className="w-full">
        <section
          id="profil"
          className="relative overflow-hidden bg-[linear-gradient(140deg,#0c2458_0%,#133a90_46%,#1f56c2_100%)] pb-24 pt-6 text-white shadow-[0_14px_32px_-20px_rgba(1,10,12,0.75)] sm:pt-8"
        >
          <div className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-[#6f93ff]/20 blur-3xl" />
          <div className="pointer-events-none absolute -right-10 top-10 h-52 w-52 rounded-full bg-[#b9c9ff]/10 blur-3xl" />
          <div className="pointer-events-none absolute left-10 top-20 h-2 w-2 rotate-45 bg-[#f2d458]" />
          <div className="pointer-events-none absolute right-24 top-32 h-2 w-2 rotate-45 bg-[#f2d458]" />
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-8">
            <header className="relative z-10 flex items-center justify-between gap-4">
              <div className="text-xl font-bold tracking-tight">Pierre Claver Sidibe</div>
              <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
                {menu.map((item) => (
                  <a key={item.label} href={item.href} className="transition hover:text-white">
                    {item.label}
                  </a>
                ))}
              </nav>
              <a
                href="/Pierre-Claver-Sidibe-CV.docx"
                download
                className="rounded-full bg-[#1f56c2] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#2c63d2]"
              >
                Telecharger CV
              </a>
            </header>

            <nav className="relative z-10 mt-4 flex gap-2 overflow-x-auto pb-1 text-xs text-white/80 md:hidden">
              {menu.map((item) => (
                <a
                  key={`mobile-${item.label}`}
                  href={item.href}
                  className="shrink-0 rounded-full border border-white/20 px-3 py-1.5 transition hover:border-white/45 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="relative z-10 mt-8 grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
              <div>
                <p className="text-xs font-semibold tracking-[0.22em] text-[#f5cf70]">INGENIEUR DE LA STATISTIQUE</p>
                <h1 className="mt-3 max-w-xl text-4xl font-extrabold leading-[1.1] sm:text-5xl">
                  Data analyst, formateur et specialiste en visualisation de donnees
                </h1>
                <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/80 sm:text-base">
                  Specialise en statistique appliquee, analyse de donnees, visualisation, protection des donnees a caractere personnel, base de donnees et big data avec plus de 5 ans d experience.
                </p>

                <div className="mt-6 grid gap-2 text-sm text-white/90 sm:grid-cols-2">
                  <p>Email: sidibepierreclaver@outlook.com</p>
                  <p>Telephone: +223 70 83 83 68 / +223 98 87 12 11</p>
                  <p>Residence: Kati, Koko Plaine, Rue 205, Porte 270</p>
                  <p>Nationalite: Malienne</p>
                </div>

                <div id="contact" className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="/Pierre-Claver-Sidibe-CV.docx"
                    download
                    className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#12357f] transition hover:bg-[#e8eeff]"
                  >
                    CV complet (DOCX)
                  </a>
                  <a
                    href="mailto:sidibepierreclaver@outlook.com"
                    className="rounded-full border border-white/40 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-white"
                  >
                    Me contacter
                  </a>
                  <a
                    href="https://demo-impot.shinyapps.io/Luminex_connect_alpha/"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/40 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-white"
                  >
                    Voir LUMINEX
                  </a>
                </div>

                <div className="mt-8 grid max-w-xl grid-cols-3 gap-3 text-center sm:gap-4">
                  {stats.map((item) => (
                    <div
                      key={item.value}
                      className="min-h-20 rounded-2xl border border-white/15 bg-white/10 px-3 py-3 backdrop-blur"
                    >
                      <p className="text-2xl font-extrabold leading-none">{item.value}</p>
                      <p className="mt-1 text-xs text-white/80">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mx-auto w-full max-w-sm">
                <div className="relative h-[470px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#102f73] p-2 shadow-[0_25px_45px_-20px_rgba(0,0,0,0.65)]">
                  <Image
                    src="/images/1.jpeg"
                    alt="Pierre Claver Sidibe portrait"
                    fill
                    sizes="(max-width: 640px) 92vw, 384px"
                    className="rounded-[1.6rem] object-cover object-top"
                    priority
                  />
                </div>
                <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
                  {heroSocialLinks.map((item) => (
                    <a
                      key={`hero-social-${item.label}`}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={item.label}
                      title={item.label}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/35 bg-white/10 text-white transition hover:-translate-y-0.5 hover:border-white hover:bg-white/20"
                    >
                      <SocialIcon platform={item.platform} className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute bottom-0 left-0 w-full leading-none">
            <svg
              viewBox="0 0 1440 120"
              preserveAspectRatio="none"
              className="h-[72px] w-full"
              aria-hidden="true"
            >
              <path
                fill="#f5f7ff"
                d="M0,56 C180,104 300,20 480,44 C640,66 760,110 920,72 C1080,34 1220,32 1440,72 L1440,120 L0,120 Z"
              />
            </svg>
          </div>
        </section>

        <section className="bg-[#f5f7ff] pb-12 pt-10">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-8">
            <h2 className="text-center text-3xl font-extrabold text-[#102e71]">Axes d expertise</h2>

            <div id="competences" className="mt-10 grid auto-rows-fr gap-5 md:grid-cols-3">
              {pillars.map((card) => (
                <ReasonCard key={card.title} title={card.title} text={card.text} />
              ))}
            </div>

            <section className="mt-14 grid items-center gap-7 lg:grid-cols-[0.85fr_1fr_0.55fr]">
              <div className="space-y-4 text-[#163777]">
                <h3 className="text-4xl font-extrabold leading-tight">Experiences professionnelles</h3>
                <div className="space-y-2 text-sm text-[#6076a4]">
                  {stepItems.map((item) => (
                    <div key={item.period} className="rounded-xl border border-[#dbe4ff] bg-white px-3 py-2">
                      <p className="font-semibold text-[#102e71]">{item.period}</p>
                      <p>{item.role}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mx-auto">
                <div className="relative h-72 w-72 rounded-full border-8 border-[#dfe8ff] bg-[#123c95] p-2 shadow-[0_20px_45px_-32px_rgba(9,28,84,0.45)] sm:h-80 sm:w-80">
                  <div className="relative h-full w-full overflow-hidden rounded-full">
                    <Image
                      src="/images/2.jpeg"
                      alt="Pierre Claver Sidibe second portrait"
                      fill
                      sizes="(max-width: 640px) 288px, 320px"
                      className="object-cover object-top"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-6 text-center text-[#102e71] lg:text-right">
                {stats.map((item) => (
                  <div key={`right-${item.value}`}>
                    <p className="text-4xl font-extrabold">{item.value}</p>
                    <p className="text-sm text-[#647ca8]">{item.label}</p>
                  </div>
                ))}
              </div>
            </section>

            <section
              id="projets"
              className="mt-14 rounded-3xl bg-[linear-gradient(135deg,#0f2f72,#1c4eb2)] p-7 text-white"
            >
              <h3 className="text-center text-3xl font-extrabold">Projets marquants du CV</h3>
              <div className="mt-7 grid gap-4 md:grid-cols-2">
                {projects.map((item) => (
                  <article key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <h4 className="font-bold">{item.title}</h4>
                    <p className="mt-2 text-sm text-white/75">{item.text}</p>
                  </article>
                ))}
              </div>
            </section>

            <section id="experience" className="mt-10 grid gap-6 lg:grid-cols-2">
              <article className="rounded-2xl border border-[#dbe4ff] bg-white p-6 shadow-[0_14px_35px_-28px_rgba(10,32,92,0.3)]">
                <h3 className="text-2xl font-extrabold text-[#102e71]">Parcours professionnel detaille</h3>
                <div className="mt-4 space-y-3 text-sm text-[#556d99]">
                  {experiences.map((item) => (
                    <div key={`${item.period}-${item.role}`} className="rounded-xl border border-[#e5ebff] p-3">
                      <p className="font-semibold text-[#102e71]">{item.period} - {item.role}</p>
                      <p>{item.org}</p>
                      <p className="mt-1">{item.text}</p>
                    </div>
                  ))}
                </div>
              </article>

              <article className="rounded-2xl border border-[#dbe4ff] bg-white p-6 shadow-[0_14px_35px_-28px_rgba(10,32,92,0.3)]">
                <h3 className="text-2xl font-extrabold text-[#102e71]">Formations, competences et engagements</h3>

                <h4 className="mt-4 text-lg font-bold text-[#102e71]">Formations</h4>
                <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-[#556d99] marker:text-[#204eab]">
                  {education.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <h4 className="mt-4 text-lg font-bold text-[#102e71]">Formations complementaires</h4>
                <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-[#556d99] marker:text-[#204eab]">
                  {certifications.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <h4 className="mt-4 text-lg font-bold text-[#102e71]">Competences techniques</h4>
                <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-[#556d99] marker:text-[#204eab]">
                  {skills.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <h4 className="mt-4 text-lg font-bold text-[#102e71]">Engagements sociaux</h4>
                <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-[#556d99] marker:text-[#204eab]">
                  {engagements.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <h4 className="mt-4 text-lg font-bold text-[#102e71]">Chaines et pages</h4>
                <div className="mt-2 flex flex-col gap-1 text-sm text-[#556d99]">
                  {links.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-lg px-2 py-1 underline decoration-[#2b56b6]/50 underline-offset-4 transition hover:bg-[#eef3ff]"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </article>
            </section>
          </div>
        </section>

        <footer className="bg-[linear-gradient(145deg,#091f4d_0%,#0f2f72_60%,#133a90_100%)] text-white">
          <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-8">
            <div className="grid gap-8 md:grid-cols-3">
              <section>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b6c7ff]">Portfolio</p>
                <h4 className="mt-2 text-2xl font-bold">Pierre Claver Sidibe</h4>
                <p className="mt-3 text-sm leading-relaxed text-white/75">
                  Ingenieur de la Statistique specialise en analyse, visualisation et
                  valorisation de donnees pour la decision.
                </p>
              </section>

              <section>
                <h5 className="text-lg font-bold">Navigation rapide</h5>
                <div className="mt-3 flex flex-col gap-2 text-sm text-white/80">
                  {menu.map((item) => (
                    <a
                      key={`footer-${item.label}`}
                      href={item.href}
                      className="transition hover:text-white"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </section>

              <section>
                <h5 className="text-lg font-bold">Contacts</h5>
                <div className="mt-3 space-y-2 text-sm text-white/80">
                  <p>Email: sidibepierreclaver@outlook.com</p>
                  <p>Telephone: +223 70 83 83 68 / +223 98 87 12 11</p>
                  <p>Localisation: Kati, Mali</p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {links.map((item) => (
                    <a
                      key={`footer-link-${item.href}`}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/90 transition hover:border-white/45"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </section>
            </div>
            <div className="mt-8 border-t border-white/15 pt-4 text-center text-xs text-white/60">
              (c) {year} Pierre Claver Sidibe. Tous droits reserves.
            </div>
          </div>
        </footer>
        </main>
      </div>
    </>
  );
}


