import Image from "next/image";
import VideoCarousel from "./components/VideoCarousel";
import ContactForm from "./components/ContactForm";

const WA_NUMBER = "5511994316205";
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=Olá%20Junior!%20Quero%20saber%20mais%20sobre%20as%20caricaturas`;

const navLinks = [
  { label: "Reações", href: "#reacoes" },
  { label: "Tradicional", href: "#tradicional" },
  { label: "Digital", href: "#digital" },
  { label: "IA", href: "#ia" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];


function SectionHeader({ tag, title }: { tag: string; title: string }) {
  return (
    <div className="mb-10 md:mb-12">
      <p className="text-[#1E56A0] font-semibold text-xs md:text-sm uppercase tracking-widest mb-2">{tag}</p>
      <h2 className="font-black text-3xl md:text-4xl text-[#1B2A4A]">{title}</h2>
      <div className="w-16 h-1 bg-[#F5A623] rounded-full mt-4" />
    </div>
  );
}

function ServiceSection({
  tag, title, desc, img, alt, cta, reverse = false, dark = false,
}: {
  tag: string; title: string; desc: string; img: string; alt: string; cta: string; reverse?: boolean; dark?: boolean;
}) {
  const waLink = `https://wa.me/5511994316205?text=Olá%20Ivo!%20Quero%20saber%20mais%20sobre%20as%20caricaturas`;
  return (
    <section className={`py-14 md:py-24 ${dark ? "bg-[#1B2A4A]" : "bg-white"}`}>
      <div className={`max-w-6xl mx-auto px-4 flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} gap-10 md:gap-16 items-center`}>
        {/* Foto destaque */}
        <div className="w-full md:w-5/12 shrink-0">
          <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
            <Image src={img} alt={alt} fill sizes="(max-width: 768px) 100vw, 40vw" className="object-cover object-top" loading="lazy" />
          </div>
        </div>
        {/* Texto */}
        <div className="flex-1 text-center md:text-left">
          <p className={`font-semibold text-xs md:text-sm uppercase tracking-widest mb-3 ${dark ? "text-[#F5A623]" : "text-[#1E56A0]"}`}>{tag}</p>
          <h2 className={`font-black text-3xl md:text-5xl leading-tight mb-5 ${dark ? "text-white" : "text-[#1B2A4A]"}`}>{title}</h2>
          <p className={`text-base md:text-lg leading-relaxed mb-8 max-w-lg mx-auto md:mx-0 ${dark ? "text-white/70" : "text-[#1B2A4A]/60"}`}>{desc}</p>
          <a href={waLink} target="_blank" rel="noopener noreferrer"
            className="inline-block bg-[#F5A623] hover:bg-[#F7C262] text-[#0F1C30] font-bold px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 text-sm md:text-base shadow-lg">
            {cta}
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#1B2A4A]/95 backdrop-blur-sm shadow-lg">
        <nav className="max-w-6xl mx-auto px-4 h-14 md:h-16 flex items-center justify-between gap-2">
          <span className="font-bold text-base md:text-xl text-white tracking-wide shrink-0">
            Junior <span className="text-[#F5A623]">Caricaturas</span>
          </span>
          <ul className="hidden md:flex gap-6">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-white/80 hover:text-[#F5A623] text-sm font-medium transition-colors duration-200">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#F5A623] hover:bg-[#F7C262] text-[#0F1C30] font-bold text-xs md:text-sm px-3 md:px-4 py-2 rounded-full transition-colors duration-200 shrink-0"
          >
            Orçamento
          </a>
        </nav>
      </header>

      <main className="flex-1">
        {/* HERO */}
        <section id="inicio" className="min-h-screen flex flex-col items-center justify-center bg-[#1B2A4A] pt-14 md:pt-16 text-center px-4">
          <p className="text-[#F5A623] font-semibold text-xs md:text-sm uppercase tracking-widest mb-4">
            Caricaturista Profissional
          </p>
          <h1 className="font-black text-4xl md:text-6xl text-white leading-tight mb-4">
            Arte que faz<br />
            <span className="text-[#F5A623]">todo mundo</span><br />
            sorrir
          </h1>
          <p className="text-white/70 text-base md:text-lg leading-relaxed mb-10 max-w-xl">
            Caricaturas personalizadas para eventos, brindes corporativos e presentes únicos.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-black text-lg md:text-2xl px-10 md:px-16 py-5 md:py-6 rounded-full shadow-2xl transition-all duration-200 hover:scale-105"
          >
            <svg viewBox="0 0 24 24" className="w-7 h-7 md:w-9 md:h-9 fill-white shrink-0">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Pedir Orçamento pelo WhatsApp
          </a>
          <a href="#reacoes" className="mt-12 text-white/40 hover:text-white/70 transition-colors flex flex-col items-center gap-2 text-sm">
            Ver trabalhos
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2 animate-bounce">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </a>
        </section>

        {/* REAÇÕES */}
        <section id="reacoes" className="py-14 md:py-24 bg-[#FFF8F0]">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-10 md:mb-14">
              <p className="text-[#1E56A0] font-semibold text-xs md:text-sm uppercase tracking-widest mb-2">Veja ao vivo</p>
              <h2 className="font-black text-3xl md:text-4xl text-[#1B2A4A]">Reações</h2>
              <div className="w-16 h-1 bg-[#F5A623] rounded-full mx-auto mt-4" />
            </div>
            <VideoCarousel />
          </div>
        </section>

        {/* CARICATURA TRADICIONAL */}
        <div id="tradicional">
          <ServiceSection
            tag="Feito à mão"
            title="Caricatura Tradicional"
            desc="Desenhada na hora, ao vivo, em papel. Ideal para festas, feiras e eventos corporativos. O público adora e leva para casa como lembrança única!"
            img="/fotos/kaka.png"
            alt="Caricatura do Kaká"
            cta="Quero no meu evento"
          />
        </div>

        {/* CARICATURA DIGITAL */}
        <div id="digital">
          <ServiceSection
            tag="Arte moderna"
            title="Caricatura Digital"
            desc="Arte digital colorida, impressa em papel A4 de alta qualidade. Estilo vibrante e moderno, perfeita para brindes corporativos e presentes especiais."
            img="/fotos/DIGITAL.png"
            alt="Caricatura digital"
            cta="Solicitar orçamento"
            reverse
            dark
          />
        </div>

        {/* INTELIGÊNCIA ARTIFICIAL */}
        <div id="ia">
          <ServiceSection
            tag="Tecnologia + Arte"
            title="Inteligência Artificial"
            desc="Caricaturas geradas com inteligência artificial, com acabamento profissional. Resultado único, colorido e entregue rapidamente para qualquer ocasião."
            img="/fotos/ia/foto destaque ia.png"
            alt="Caricatura com IA"
            cta="Solicitar orçamento"
          />
        </div>

        {/* SOBRE MIM */}
        <section id="sobre" className="py-12 md:py-20 bg-[#1B2A4A]">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                <Image src="/fotos/WhatsApp Image 2026-01-07 at 16.15.38 (1).jpeg" alt="Junior trabalhando" fill sizes="(max-width: 768px) 45vw, 25vw" className="object-cover" loading="lazy" />
              </div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mt-6 md:mt-8">
                <Image src="/fotos/WhatsApp Image 2026-03-02 at 10.41.28 (1).jpeg" alt="Caricatura ao vivo" fill sizes="(max-width: 768px) 45vw, 25vw" className="object-cover" loading="lazy" />
              </div>
            </div>
            <div className="text-center md:text-left">
              <p className="text-[#F5A623] font-semibold text-xs md:text-sm uppercase tracking-widest mb-3">Sobre mim</p>
              <h2 className="font-black text-3xl md:text-4xl text-white mb-4 md:mb-6">
                Quem é o <span className="text-[#F5A623]">Ivo Favero</span>?
              </h2>
              <p className="text-white/70 text-sm md:text-base leading-relaxed mb-4">
                Caricaturista e ilustrador desde 2000 atuando no mercado de caricaturas em eventos e ilustrações em studio.
              </p>
              <p className="text-white/70 text-sm md:text-base leading-relaxed">
                Formado em administração de empresas, fundou a Fast Caricaturas e utiliza seus conhecimentos técnicos e habilidades artísticas para mesclar profissionalismo e arte, formando uma equipe de artistas que atende em todo o Brasil!
              </p>
            </div>
          </div>
        </section>

        {/* CONTATO */}
        <section id="contato" className="py-12 md:py-20 bg-[#FFF8F0]">
          <div className="max-w-5xl mx-auto px-4">
            <SectionHeader tag="Fale conosco" title="Contato" />
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {/* Info */}
              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-[#1B2A4A] flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-white stroke-2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-[#1B2A4A]">Localização</p>
                    <p className="text-[#1B2A4A]/60 text-sm">São Paulo, SP — Brasil<br/>Atendemos em todo o Brasil</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-[#25D366] flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-[#1B2A4A]">WhatsApp / Telefone</p>
                    <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="text-[#25D366] font-semibold text-sm hover:underline">(11) 99431-6205</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-[#1E56A0] flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-white stroke-2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-[#1B2A4A]">E-mail</p>
                    <a href="mailto:contato@fastcaricaturas.com.br" className="text-[#1E56A0] text-sm hover:underline">contato@fastcaricaturas.com.br</a>
                  </div>
                </div>
              </div>

              {/* Formulário */}
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#0F1C30] py-6 md:py-8">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
          <span className="font-bold text-base md:text-lg text-white">
            Junior <span className="text-[#F5A623]">Caricaturas</span>
          </span>
          <p className="text-white/40 text-xs md:text-sm text-center">
            © 2025 Ivo Caricaturas & Brindes. Todos os direitos reservados.
          </p>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="text-[#F5A623] hover:text-[#F7C262] text-sm font-medium transition-colors">
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
        className="fixed bottom-5 right-5 md:bottom-6 md:right-6 z-50 w-12 h-12 md:w-14 md:h-14 bg-[#25D366] hover:bg-[#1ebe5d] rounded-full shadow-2xl flex items-center justify-center transition-all duration-200 hover:scale-110"
      >
        <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-7 md:h-7 fill-white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </>
  );
}
