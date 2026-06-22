import Image from "next/image";
import ProductCarousel from "./components/ProductCarousel";
import IACarousel from "./components/IACarousel";
import VideoCarousel from "./components/VideoCarousel";
import WixContactForm from "./components/WixContactForm";

const WA_LINK = "https://wa.me/5511994316205?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento";

const WaButton = () => (
  <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
    <Image src="/icones/banner whats.png" alt="Peça pelo WhatsApp" width={180} height={70} className="object-contain" />
  </a>
);

const iaSet1 = [
  { src: "/fotos/ia/ia1.jpeg", alt: "Arte IA 1" },
  { src: "/fotos/ia/ia2.jpeg", alt: "Arte IA 2" },
  { src: "/fotos/ia/ia3.jpeg", alt: "Arte IA 3" },
];
const iaSet2 = [
  { src: "/fotos/ia/ia4.jpeg", alt: "Arte IA 4" },
  { src: "/fotos/ia/ia5.jpeg", alt: "Arte IA 5" },
  { src: "/fotos/ia/ia6.jpeg", alt: "Arte IA 6" },
];

export default function Home() {
  return (
    <>
      {/* ── HEADER ── */}
      <header className="bg-[#1B2A4A]">
        <div className="max-w-5xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center gap-4">
          <div className="shrink-0">
            <span className="wix-title text-[#F5A623] text-2xl md:text-3xl tracking-wider">FAST</span>
            <span className="wix-title text-white text-sm md:text-base block -mt-1 tracking-widest">CARICATURAS</span>
          </div>
          <p className="text-white font-bold text-sm md:text-lg text-center sm:text-left leading-snug">
            Empresa especializada em caricaturas ao vivo em eventos e produtos personalizados!
          </p>
        </div>

        {/* Solicite bar */}
        <div className="border-t border-white/10">
          <div className="max-w-5xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="script-text text-white text-2xl md:text-3xl">Solicite um orçamento!</p>
            <WaButton />
            <div className="flex items-center gap-3">
              <p className="text-white text-sm font-medium">Siga nossas<br/>redes sociais</p>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Image src="/icones/instagram copiar.png" alt="Instagram" width={36} height={36} className="object-contain" />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                <Image src="/icones/tiktok copiar.png" alt="TikTok" width={36} height={36} className="object-contain" />
              </a>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* ── A FAST FAZ O SEU EVENTO VIRAR ARTE ── */}
        <section className="bg-white">
          <div className="max-w-5xl mx-auto px-4 py-8 md:py-12 grid md:grid-cols-2 gap-6 items-center">
            <div className="relative aspect-[4/3] rounded overflow-hidden">
              <Image src="/fotos/WhatsApp Image 2026-01-07 at 16.15.38 (1).jpeg" alt="Caricatura ao vivo" fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover" priority />
            </div>
            <div>
              <div className="flex items-start gap-2 mb-3">
                <div className="w-2 shrink-0 mt-1">
                  <Image src="/icones/faixa laranja.png" alt="" width={8} height={60} className="h-16 w-2 object-cover" />
                </div>
                <h2 className="wix-title text-[#1B2A4A] text-2xl md:text-4xl">A FAST FAZ O SEU EVENTO VIRAR ARTE!</h2>
              </div>
              <p className="text-[#1B2A4A] text-sm md:text-base leading-relaxed mb-3 text-justify">
                Transformamos eventos corporativos e sociais em experiências únicas e exclusivas com caricaturas personalizadas de alta qualidade técnica e rapidez na execução!! Sua festa será ainda melhor com a Fast! Atendemos em todo o Brasil!
              </p>
              <p className="text-[#1B2A4A] text-sm md:text-base leading-relaxed text-justify">
                A Caricatura é perfeita para feiras, congressos, festas de aniversário, casamentos, debutantes e qualquer evento que necessite de um atração ou lembrança!
              </p>
            </div>
          </div>
        </section>

        {/* ── A REAÇÃO DAS PESSOAS ── */}
        <section className="bg-[#1B2A4A]">
          <div className="max-w-5xl mx-auto px-4 py-8 md:py-12 grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h2 className="wix-title text-white text-2xl md:text-4xl mb-4">A reação das pessoas é o nosso maior presente!</h2>
              <p className="text-white/80 text-sm leading-relaxed mb-3 text-justify">
                Surpreender um convidado na festa sempre é uma satisfação para um artista!
              </p>
              <p className="text-white/80 text-sm leading-relaxed mb-3 text-justify">
                A Fast caricaturas é especialista em desenhar caricaturas ao vivo em menos de 5 minutos e com uma equipe experiente que faz a diferença!
              </p>
              <p className="text-white/80 text-sm leading-relaxed text-justify">
                Criamos a técnica de aguada de nanquim ao vivo que transforma o desenho mais real e nítido!
              </p>
            </div>
            <div className="relative aspect-video rounded overflow-hidden">
              <video src="/videos/edited/reacao1.mp4" controls playsInline preload="metadata" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        {/* ── ESTILOS ── */}
        <section className="bg-white">
          <div className="max-w-5xl mx-auto px-4 py-8 md:py-12 grid grid-cols-3 gap-4 items-center">
            <div className="relative aspect-[3/4] rounded overflow-hidden">
              <Image src="/fotos/WhatsApp Image 2026-01-07 at 16.15.38 (2).jpeg" alt="Caricatura estilo 1" fill sizes="33vw" className="object-cover" loading="lazy" />
            </div>
            <div className="text-center px-2">
              <p className="wix-title text-[#1B2A4A] text-sm md:text-base mb-2">NOSSAS ARTES PODEM SER MAIS ENGRAÇADAS OU MAIS FORMAIS!</p>
              <p className="wix-title text-[#1B2A4A] text-sm md:text-base mb-2">O CLIENTE ESCOLHE E DEFINE NA HORA!</p>
              <p className="wix-title text-[#1B2A4A] text-sm md:text-base">AH, E PODEMOS FAZER DAS DUAS FORMAS AO MESMO TEMPO NO SEU EVENTO!</p>
            </div>
            <div className="relative aspect-[3/4] rounded overflow-hidden">
              <Image src="/fotos/WhatsApp Image 2026-05-25 at 16.24.51.jpeg" alt="Caricatura estilo 2" fill sizes="33vw" className="object-cover" loading="lazy" />
            </div>
          </div>
        </section>

        {/* ── CARICATURA ARTÍSTICA ── */}
        <section>
          <div className="bg-[#1B2A4A] py-6 px-4">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-4 items-start">
              <div>
                <h2 className="wix-title text-white text-3xl md:text-5xl">CARICATURA<br/>ARTÍSTICA</h2>
              </div>
              <div>
                <p className="wix-title text-white text-base md:text-xl mb-2">ARTE PURA FEITA MANUALMENTE POR NOSSOS ARTISTAS EXPERIENTES!</p>
                <p className="text-white/80 text-sm">Caricatura tradicional em papel, caricatura digital em canecas, cardernetas, squeezes e muito mais!</p>
              </div>
            </div>
          </div>
          <div className="bg-[#f5f5f0]">
            <div className="max-w-5xl mx-auto">
              <ProductCarousel />
            </div>
          </div>
        </section>

        {/* ── PROCESSO / SENSAÇÃO ── */}
        <section className="bg-white">
          <div className="max-w-5xl mx-auto px-4 py-8 md:py-12 grid md:grid-cols-2 gap-6 items-center">
            <div className="relative aspect-video rounded overflow-hidden">
              <video src="/videos/edited/reacao2.mp4" controls playsInline preload="metadata" className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="wix-title text-[#1B2A4A] text-xl md:text-3xl mb-4">A SENSAÇÃO DE ASSISTIR O PROCESSO DA CRIAÇÃO DA CARICATURA É INCRÍVEL!</h2>
              <p className="wix-title text-[#1B2A4A] text-base mb-4">SOLICITE UM ORÇAMENTO COM NOSSA EQUIPE!</p>
              <div className="mb-6">
                <WaButton />
              </div>
              <p className="text-[#1B2A4A] text-sm leading-relaxed text-justify">
                Personalizamos nossos brindes corporativos com o logo da empresa ou evento, além de criar um layout personalizado de acordo com o tema da festa!
              </p>
              <p className="wix-title text-[#1B2A4A] text-sm mt-3">NOSSAS CANECAS SÃO ENTREGUES EMBALADAS BONITINHAS EXCLUSIVAS!</p>
            </div>
          </div>
        </section>

        {/* ── INTELIGÊNCIA ARTIFICIAL ── */}
        <section className="bg-[#1B2A4A]">
          <div className="max-w-5xl mx-auto px-4 py-8 md:py-12">
            <div className="grid md:grid-cols-2 gap-6 items-start mb-8">
              <div>
                <h2 className="wix-title text-white text-3xl md:text-5xl mb-4">INTELIGÊNCIA<br/>ARTIFICIAL</h2>
                <p className="wix-title text-white text-sm md:text-base mb-6">JÁ CONHECE NOSSO SERVIÇO DE ARTE EM I.A COM CARICATURA PARA EVENTOS CORPORATIVOS?</p>
                <div className="grid grid-cols-2 gap-3">
                  <IACarousel images={iaSet1} />
                  <IACarousel images={iaSet2} />
                </div>
              </div>
              <div className="relative aspect-[3/4] rounded overflow-hidden">
                <Image src="/fotos/ia/foto destaque ia.png" alt="Arte IA destaque" fill sizes="(max-width:768px) 100vw, 40vw" className="object-cover object-top" loading="lazy" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-white/80 leading-relaxed">
              <p className="text-justify">
                Nossa equipe transforma os participantes do evento em artes feitas na hora por I.A com diversos estilos!! Atendimentos mais rápido para eventos onde tiver demanda alta e pouco tempo de execução.
              </p>
              <p className="text-justify">
                Personalizamos canecas, squeezes, cardenetas tipo moleskine, ecobags, camisetas e muitos mais! Tudo 100% exclusivo para sua empresa ter um brinde mais que especial!
              </p>
            </div>
          </div>
        </section>

        {/* ── BENEFÍCIOS DA IA ── */}
        <section className="bg-[#1B2A4A]">
          <div className="max-w-5xl mx-auto px-4 pb-8 md:pb-12 grid md:grid-cols-2 gap-6 items-center">
            <div className="relative aspect-[3/4] rounded overflow-hidden max-w-xs mx-auto w-full">
              <Image src="/fotos/ia/destaque-ia1.png" alt="Arte IA benefícios" fill sizes="(max-width:768px) 80vw, 30vw" className="object-cover object-top" loading="lazy" />
            </div>
            <div>
              <h3 className="wix-title text-white text-xl md:text-3xl mb-4 text-center md:text-left">
                QUAIS OS<br/>BENEFÍCIOS<br/>DA ARTE EM I.A?
              </h3>
              <ul className="space-y-2 text-white/80 text-sm leading-relaxed">
                <li className="flex gap-2"><span className="text-[#F5A623] font-bold mt-0.5">•</span><span>Técnica ideal para atender grandes demandas.</span></li>
                <li className="flex gap-2"><span className="text-[#F5A623] font-bold mt-0.5">•</span><span>Cada artista pode fazer até 250 artes por dia.</span></li>
                <li className="flex gap-2"><span className="text-[#F5A623] font-bold mt-0.5">•</span><span>Artes em diversos estilos, desde caricaturas, retratos, 3D Disney Pixar e muito mais.</span></li>
                <li className="flex gap-2"><span className="text-[#F5A623] font-bold mt-0.5">•</span><span>Facilidade em compor cenários, criar atmosferas perfeitas para o seu negócio ou ramo de atividade!</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── PRODUTOS POR ENCOMENDA ── */}
        <section className="bg-[#f5f5f0]">
          <div className="max-w-5xl mx-auto px-4 py-8 md:py-12 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="wix-title text-[#1B2A4A] text-3xl md:text-4xl mb-4">PRODUTOS<br/>POR ENCOMENDA</h2>
              <div className="relative aspect-[4/3] rounded overflow-hidden">
                <Image src="/fotos/canecas-time.jpg" alt="Canecas personalizadas" fill sizes="(max-width:768px) 100vw, 40vw" className="object-cover" loading="lazy" />
              </div>
            </div>
            <div>
              <h3 className="wix-title text-[#1B2A4A] text-xl md:text-3xl mb-4">SUA EMPRESA<br/>PRECISA<br/><span className="text-2xl md:text-4xl">DE UM BRINDE<br/>DIFERENTE?</span></h3>
              <p className="text-[#1B2A4A] text-sm leading-relaxed mb-3 text-justify">
                Em nosso studio criamos artes exclusivas e imprimimos em canecas, squeezes, cardenetas, agendas, mouse pads e tudo para que você possa dar ao seu colaborador!
              </p>
              <p className="text-[#1B2A4A] text-sm leading-relaxed mb-5 text-justify">
                Seu logo, texto ou imagem que desejar impressos em diversos produtos de forma personalizada e artística!
              </p>
              <WaButton />
            </div>
          </div>
        </section>

        {/* ── IVO FAVERO ── */}
        <section className="bg-white">
          <div className="max-w-5xl mx-auto px-4 py-8 md:py-12 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-black text-[#1B2A4A] text-3xl md:text-4xl mb-4">Ivo Favero</h2>
              <p className="text-[#1B2A4A] text-sm leading-relaxed mb-3 text-justify font-semibold">
                Caricaturista e ilustrador desde 2000 atuando no mercado de caricaturas em eventos e ilustrações em studio.
              </p>
              <p className="text-[#1B2A4A] text-sm leading-relaxed text-justify">
                Formado em administração de empresas fundou a Fast Caricaturas e utiliza seus conhecimentos técnicos e habilidades artísticas para mesclar profissionalismo e arte, com isso formando uma equipe de artistas que atende em todo o Brasil!
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded overflow-hidden">
              <Image src="/fotos/ivo-foto.jpeg" alt="Ivo Favero" fill sizes="(max-width:768px) 100vw, 40vw" className="object-cover object-top" loading="lazy" />
            </div>
          </div>
        </section>

        {/* ── CONTATO / FOOTER ── */}
        <section className="bg-[#1B2A4A]">
          <div className="max-w-5xl mx-auto px-4 py-8 md:py-12 grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="font-black text-white text-2xl md:text-3xl mb-4">Quer um orçamento?</h2>
              <p className="text-white/70 text-sm leading-relaxed mb-4 text-justify">
                Estamos prontos para transformar sua ideia em uma caricatura ao vivo ou ilustração personalizada.
              </p>
              <p className="text-white/70 text-sm leading-relaxed mb-6 text-justify">
                Entre em contato para orçamentos e agendamentos exclusivos.
              </p>
              <p className="text-white font-bold mb-1">CONTATO: (11) 99390-7020</p>
              <p className="text-white font-bold">contato@caricaturas.com.br</p>
            </div>
            <WixContactForm />
          </div>
          <div className="border-t border-white/10 py-4 text-center">
            <p className="text-white/40 text-xs">© 2025 Fast Caricaturas & Brindes. Todos os direitos reservados.</p>
          </div>
        </section>
      </main>

      {/* ── BOTÃO FLUTUANTE WHATSAPP ── */}
      <a href={WA_LINK} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
        className="fixed bottom-5 right-5 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#1ebe5d] rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110">
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </>
  );
}
