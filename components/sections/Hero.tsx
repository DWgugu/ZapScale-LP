import Button from "../ui/Button";
import { Stats } from "./Stats";

export const Hero = () => {
    return (
      <section
        id="inicio"
        className="relative pt-32 bg-[#f5f5f7] text-center"
      >
        {/* Parte branca - conteúdo principal */}
        <div className="max-w-6xl mx-auto px-6 pb-20">
  
          {/* Badge */}
          {/* <div className="mb-6 flex justify-center">
            <span className="px-4 py-1 text-sm rounded-full bg-purple-100 text-purple-600 font-medium">
              ProdutoX
            </span>
          </div> */}
  
          {/* Headline */}
          <h1 className="text-4xl md:text-[54px] font-bold leading-tight text-gray-900">
            Atenda mais clientes no WhatsApp
            <br />
            <span className="text-zapscale-primary">
                sem perder sua essência.
            </span>
          </h1>
  
          {/* Subtítulo */}
          <p className="mt-6 text-base text-[#1a1a1a] max-w-2xl mx-auto">
            Responda várias conversas ao mesmo tempo, automatize mensagens com inteligência e
            encante seus clientes com rapidez, qualidade e humanização real.
          </p>
  
          {/* Botões */}
          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <Button isAnimated className="bg-gradient-to-r from-[#33d6ca] via-[#0abdb0] to-[#089a8f] text-white text-xs">
                Escolher um plano ZapScale
            </Button>
  
            <Button className="border border-gray-300 text-black hover:bg-gray-100 text-xs">
                Começar gratuitamente
            </Button>
          </div>
  
        </div>

        {/* Vídeo - sobrepondo parte branca e parte preta (30% na seção preta) */}
        <div className="relative -mb-[120px] md:-mb-[150px] max-w-6xl mx-auto px-6 z-30">
          <div className="rounded-2xl overflow-hidden shadow-xl bg-gradient-to-r from-purple-600 via-blue-600 to-green-500 p-1">
            <div className="bg-black rounded-2xl h-[400px] md:h-[500px] flex items-center justify-center text-white text-lg">
              {/* Vídeo será inserido aqui */}
            </div>
          </div>
        </div>

        {/* Seção preta - dentro do Hero */}
        <div className="bg-black text-white pt-[120px] md:pt-[150px] pb-20 overflow-x-hidden">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-gray-400 text-center max-w-2xl mx-auto mt-10">
               + de 100 mil empreendedores já
               <br />
               transformaram seus atendimentos
            </p>
          </div>
          <Stats />
        </div>
      </section>
    );
  }