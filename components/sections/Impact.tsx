import { InfiniteCarousel } from "../InfiniteCarousel";

export const Impact = () => {
    return (
      <section className="bg-black text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col items-center w-fit mx-auto">
            
            <h2 className="text-[28px] font-semibold leading-tight text-center">
              Empreendedores reais. Resultados reais.
            </h2>

            <p className="mt-4 text-left w-full">
              A ZapScale já ajudou milhares de negócios a:
            </p> 
            
            <ul className="mt-4 text-left w-full">
              <li><span className="text-[#0abdb0] font-semibold">✔</span> reduzir tempo de atendimento</li>
              <li><span className="text-[#0abdb0] font-semibold">✔</span> aumentar conversões</li>
              <li><span className="text-[#0abdb0] font-semibold">✔</span> melhorar relacionamento com clientes</li>
              <li><span className="text-[#0abdb0] font-semibold">✔</span> vender de forma previsível</li>
            </ul>

          </div>
        </div>
        <InfiniteCarousel>
          <p className="text-lg">
            <span className="text-[#0abdb0] font-semibold">+ 12 mil </span>assinantes
          </p>

          <p className="text-lg">
            <span className="text-[#0abdb0] font-semibold">+ 150 mil </span>negócios impactados
          </p>

          <p className="text-lg">
            presente em + de <span className="text-[#0abdb0] font-semibold">120 países</span>
          </p>
        </InfiniteCarousel>
      </section>
    );
  }