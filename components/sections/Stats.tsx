export const Stats = () => {
    return (
      <section className="bg-black text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* ===== LADO ESQUERDO (MÉTRICAS) ===== */}
            <div className="flex flex-col sm:flex-row sm:items-start gap-4">
              
              {/* ITEM 1 */}
              <div className="w-full">
                <h3 className="text-4xl font-light text-left">
                  12.8<span className="text-zapscale-primary font-semibold">K</span>
                </h3>
                <p className="text-gray-400 mt-2 text-sm text-left">
                  Usuários ativos
                </p>
              </div>
  
              <div className="hidden sm:block w-px bg-gray-700 h-20"></div>
  
              {/* ITEM 2 */}
              <div className="w-full">
                <h3 className="text-4xl font-light text-left">
                  2.8<span className="text-zapscale-primary font-semibold">MM</span>
                </h3>
                <p className="text-gray-400 mt-2 text-sm text-left">
                  Mensagens enviadas<br />por dia
                </p>
              </div>
  
              <div className="hidden sm:block w-px bg-gray-700 h-20"></div>
  
              {/* ITEM 3 */}
              <div>
                <h3 className="text-4xl font-light text-left">
                  +120<span className="text-zapscale-primary font-semibold">países</span>
                </h3>
                <p className="text-gray-400 mt-2 text-sm text-left">
                 Utilizam a ZapScale
                </p>
              </div>
  
            </div>
  
            {/* ===== LADO DIREITO (TEXTO) ===== */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-left">
                Fácil de usar, difícil de largar.
              </h2>
  
              <p className="text-gray-400 leading-relaxed text-left">
                A ZapVoice ajuda você a vender no WhatsApp sem parecer
                um robô — e sem estar preso ao celular.
              </p>
            </div>
  
          </div>
        </div>
      </section>
    );
  }