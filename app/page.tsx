import Image from "next/image";
import Carousel from "./components/Carousel";

const products = [
  {
    id: 1,
    name: "Caneca",
    desc: "Caricatura digital impressa em caneca personalizada. Presente perfeito para eventos e brindes corporativos.",
    img: "/fotos/CANECA.png",
  },
  {
    id: 2,
    name: "Papel Tradicional",
    desc: "Caricatura desenhada à mão na hora, ideal para festas, feiras e eventos ao vivo.",
    img: "/fotos/PAPEL.png",
  },
  {
    id: 3,
    name: "Papel Digital",
    desc: "Arte digital colorida impressa em papel de alta qualidade. Estilo moderno e vibrante.",
    img: "/fotos/DIGITAL.png",
  },
  {
    id: 4,
    name: "Cardeneta",
    desc: "Caricatura estampada em cardeneta exclusiva. Lembrança que dura para sempre.",
    img: "/fotos/CARDENETA.png",
  },
  {
    id: 5,
    name: "Squeeze",
    desc: "Squeeze personalizado com caricatura. Brinde prático e diferenciado para qualquer ocasião.",
    img: "/fotos/SQUEEZE 1.png",
  },
  {
    id: 6,
    name: "Desenho com IA",
    desc: "Caricatura gerada com inteligência artificial, colorida e com acabamento profissional.",
    img: "/fotos/caderno a5 I.A Carlos - Copia.jpg",
    showTitle: true,
  },
];

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Produtos", href: "#produtos" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Sobre", href: "#sobre" },
];

const WA_NUMBER = "5511994316205";
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=Olá%20Junior!%20Quero%20saber%20mais%20sobre%20as%20caricaturas`;

export default function Home() {
  return (
    <>
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#1B2A4A]/95 backdrop-blur-sm shadow-lg">
        <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <span className="font-bold text-xl text-white tracking-wide">
            Junior <span className="text-[#F5A623]">Caricaturas</span>
          </span>
          <ul className="hidden md:flex gap-8">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-white/80 hover:text-[#F5A623] text-sm font-medium transition-colors duration-200"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#F5A623] hover:bg-[#F7C262] text-[#0F1C30] font-bold text-sm px-4 py-2 rounded-full transition-colors duration-200"
          >
            Orçamento
          </a>
        </nav>
      </header>

      <main className="flex-1">
        {/* HERO */}
        <section
          id="inicio"
          className="min-h-screen flex items-center bg-[#1B2A4A] pt-16 relative overflow-hidden"
        >
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-[#F5A623]/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-[#1E56A0]/20 blur-3xl pointer-events-none" />
          <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <p className="text-[#F5A623] font-semibold text-sm uppercase tracking-widest mb-3">
                Caricaturista Profissional
              </p>
              <h1 className="font-black text-5xl md:text-6xl text-white leading-tight mb-6">
                Arte que faz
                <br />
                <span className="text-[#F5A623]">todo mundo</span>
                <br />
                sorrir
              </h1>
              <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-md">
                Caricaturas personalizadas para eventos, brindes corporativos e
                presentes únicos. Papel tradicional, digital, canecas e muito mais.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#produtos"
                  className="bg-[#F5A623] hover:bg-[#F7C262] text-[#0F1C30] font-bold px-8 py-3 rounded-full transition-all duration-200 hover:scale-105"
                >
                  Ver Produtos
                </a>
                <a
                  href="#portfolio"
                  className="border border-white/30 hover:border-[#F5A623] text-white hover:text-[#F5A623] font-semibold px-8 py-3 rounded-full transition-all duration-200"
                >
                  Ver Portfólio
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-80 md:w-96">
                {/* Moldura decorativa */}
                <div className="absolute -inset-3 rounded-3xl border border-[#F5A623]/30" />
                <div className="absolute -inset-6 rounded-3xl border border-[#F5A623]/10" />

                {/* Imagem */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ aspectRatio: "3/4" }}>
                  <Image
                    src="/fotos/kaka.png"
                    alt="Caricatura do Kaká"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                  {/* Gradiente inferior */}
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0F1C30] to-transparent" />
                </div>

                {/* Badge Kaká */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-[#F5A623] text-[#0F1C30] px-5 py-2 rounded-full shadow-lg whitespace-nowrap">
                  <span className="text-lg">⚽</span>
                  <span className="font-black text-sm tracking-wide">Caricatura do Kaká</span>
                </div>

                {/* Badge canto */}
                <div className="absolute -top-3 -right-3 bg-[#1E56A0] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  Trabalho Real
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STATS BAR */}
        <section className="bg-[#F5A623] py-8">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { num: "500+", label: "Clientes Atendidos" },
              { num: "5+", label: "Anos de Experiência" },
              { num: "5", label: "Tipos de Produto" },
              { num: "100%", label: "Satisfação Garantida" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-black text-3xl text-[#0F1C30]">{s.num}</div>
                <div className="text-[#0F1C30]/70 text-sm font-medium mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* PRODUTOS */}
        <section id="produtos" className="py-20 bg-[#FFF8F0]">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-14">
              <p className="text-[#1E56A0] font-semibold text-sm uppercase tracking-widest mb-2">
                O que ofereço
              </p>
              <h2 className="font-black text-4xl text-[#1B2A4A]">
                Produtos & Serviços
              </h2>
              <div className="w-16 h-1 bg-[#F5A623] rounded-full mx-auto mt-4" />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((p) => (
                <div
                  key={p.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group"
                >
                  <div className="relative h-96 overflow-hidden">
                    <Image
                      src={p.img}
                      alt={p.name}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    {p.showTitle && (
                      <div className="absolute top-0 left-0 right-0 flex justify-center bg-white py-2">
                        <span style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 900, fontSize: "1.75rem", letterSpacing: "0em", color: "#1B2A4A" }}>
                          DESENHO COM IA
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="px-6 py-4">
                    <p className="text-[#1B2A4A]/60 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PORTFÓLIO COM CARROSSEL */}
        <section id="portfolio" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-14">
              <p className="text-[#1E56A0] font-semibold text-sm uppercase tracking-widest mb-2">
                Trabalhos realizados
              </p>
              <h2 className="font-black text-4xl text-[#1B2A4A]">
                Portfólio
              </h2>
              <div className="w-16 h-1 bg-[#F5A623] rounded-full mx-auto mt-4" />
            </div>
            <Carousel />
          </div>
        </section>

        {/* SOBRE */}
        <section id="sobre" className="py-20 bg-[#1B2A4A]">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                <Image
                  src="/fotos/WhatsApp Image 2026-01-07 at 16.15.38 (1).jpeg"
                  alt="Junior trabalhando"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mt-8">
                <Image
                  src="/fotos/WhatsApp Image 2026-03-02 at 10.41.28 (1).jpeg"
                  alt="Caricatura ao vivo"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <p className="text-[#F5A623] font-semibold text-sm uppercase tracking-widest mb-3">
                Sobre mim
              </p>
              <h2 className="font-black text-4xl text-white mb-6">
                Quem é o <span className="text-[#F5A623]">Junior Favero</span>?
              </h2>
              <p className="text-white/70 text-base leading-relaxed mb-4">
                Caricaturista e ilustrador desde 2000 atuando no mercado de caricaturas em eventos e ilustrações em studio.
              </p>
              <p className="text-white/70 text-base leading-relaxed mb-8">
                Formado em administração de empresas, fundou a Fast Caricaturas e utiliza seus conhecimentos técnicos e habilidades artísticas para mesclar profissionalismo e arte, formando uma equipe de artistas que atende em todo o Brasil!
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#0F1C30] py-8">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-bold text-lg text-white">
            Junior <span className="text-[#F5A623]">Caricaturas</span>
          </span>
          <p className="text-white/40 text-sm text-center">
            © 2025 Junior Caricaturas & Brindes. Todos os direitos reservados.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#F5A623] hover:text-[#F7C262] text-sm font-medium transition-colors"
          >
            WhatsApp
          </a>
        </div>
      </footer>

      {/* BOTÃO FLUTUANTE WHATSAPP */}
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Pedir orçamento pelo WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#1ebe5d] rounded-full shadow-2xl flex items-center justify-center transition-all duration-200 hover:scale-110"
      >
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </>
  );
}
