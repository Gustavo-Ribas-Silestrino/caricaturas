"use client";

const WA = "5511994316205";

export default function WixContactForm() {
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      const f = e.currentTarget;
      const nome = (f.elements.namedItem("nome") as HTMLInputElement).value;
      const email = (f.elements.namedItem("email") as HTMLInputElement).value;
      const tel = (f.elements.namedItem("tel") as HTMLInputElement).value;
      const need = (f.elements.namedItem("need") as HTMLInputElement).value;
      const text = encodeURIComponent(`Olá! Me chamo ${nome}.\nEmail: ${email}\nTel: ${tel}\nNecessidade: ${need}`);
      window.open(`https://wa.me/${WA}?text=${text}`, "_blank");
    }} className="flex flex-col gap-3">
      <div>
        <label className="text-white text-sm font-medium block mb-1">Nome *</label>
        <input name="nome" required className="w-full px-3 py-2 rounded border border-white/30 bg-white text-[#1B2A4A] text-sm focus:outline-none" />
      </div>
      <div>
        <label className="text-white text-sm font-medium block mb-1">Seu email</label>
        <input name="email" type="email" className="w-full px-3 py-2 rounded border border-white/30 bg-white text-[#1B2A4A] text-sm focus:outline-none" />
      </div>
      <div>
        <label className="text-white text-sm font-medium block mb-1">Seu telefone ou whatsapp *</label>
        <input name="tel" required className="w-full px-3 py-2 rounded border border-white/30 bg-white text-[#1B2A4A] text-sm focus:outline-none" />
      </div>
      <div>
        <label className="text-white text-sm font-medium block mb-1">Qual a sua necessidade? *</label>
        <input name="need" required className="w-full px-3 py-2 rounded border border-white/30 bg-white text-[#1B2A4A] text-sm focus:outline-none" />
      </div>
      <button type="submit" className="w-full bg-[#1B2A4A] hover:bg-[#0F1C30] border border-white text-white font-bold py-2 rounded transition-colors mt-1">
        Enviar
      </button>
    </form>
  );
}
