import { Badge } from "../ui/Badge";
import { Card } from "../ui/Card";

export const Features = () => {
    return (
        <section id="funcoes" className="bg-gray-100 py-24">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-[28px] font-semibold leading-tight text-[#1a1a1a] mb-8">
                    Funcionalidades que aceleram suas vendas
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8 items-start">
                    {/* Coluna esquerda */}
                    <div className="flex flex-col gap-16 min-h-[500px]">
                        <div>
                            <Badge text="Mensagens Instantâneas" />
                            <h3 className="text-[28px] mt-4 font-semibold leading-tight text-[#1a1a1a]">
                                Ganhe tempo e 
                                <br />
                                impressione seus clientes
                            </h3>
                            <ul className="mt-4 text-base text-[#1a1a1a] leading-relaxed">
                                <li>✔ respostas rápidas e profissionais</li>
                                <li>✔ mensagens prontas para dúvidas frequentes</li>
                                <li>✔ atendimento ágil e padronizado</li>
                            </ul>
                        </div>

                        <img src="https://placehold.co/540x220" alt="placeholder" />
                        
                        <div className="mt-auto">
                            <Badge text="Gatilhos Automatizados" />
                            <h3 className="text-[28px] mt-4 font-semibold leading-tight text-[#1a1a1a]">
                                Atenda antes mesmo 
                                <br />
                                de ser chamado
                            </h3>
                            <ul className="mt-4 text-base text-[#1a1a1a] leading-relaxed">
                                <li>✔ respostas automáticas personalizadas</li>
                                <li>✔ redução do tempo de resposta</li>
                                <li>✔ aumento da satisfação do cliente</li>
                            </ul>
                        </div>
                    </div>

                    {/* Coluna direita - Funis no meio */}
                    <div className="flex flex-col gap-16 min-h-[500px]">
                        <img src="https://placehold.co/540x220" alt="placeholder" />

                        <div>
                            <Badge text="Funis Inteligentes de Conversa" />
                            <h3 className="text-[28px] mt-4 font-semibold leading-tight text-[#1a1a1a]">
                                Transforme conversas 
                                <br />
                                em vendas automáticas
                            </h3>
                            <ul className="mt-4 text-base text-[#1a1a1a] leading-relaxed">
                                <li>✔ mensagens enviadas no momento certo</li>
                                <li>✔ experiência personalizada e natural</li>
                                <li>✔ nutrição automática de leads</li>
                            </ul>
                        </div>

                        <img src="https://placehold.co/540x220" alt="placeholder" />
                    </div>
                </div>

                <div className="mt-12">
                    <Badge text="O DIFERENCIAL: IA INTEGRADA" />
                    <h3 className="text-[28px] mt-4 font-semibold leading-tight text-[#1a1a1a]">
                        Automatização inteligente com humanização real
                    </h3>
                    <ul className="mt-4 text-base text-[#1a1a1a] leading-relaxed text-left inline-block">
                        <li>A ZapScale utiliza <span className="font-bold text-[#00b678]">Inteligência Artificial</span> para:</li>
                        <li>✔ sugerir respostas inteligentes em tempo real</li>
                        <li>✔ adaptar mensagens ao perfil do cliente</li>
                        <li>✔ criar respostas mais naturais e humanas</li>
                        <li>✔ otimizar abordagens que aumentam conversões</li>
                        <li>✔ aprender com seus atendimentos</li>
                    </ul>
                    <p className="text-xl text-[#1a1a1a] leading-relaxed">
                        A tecnologia trabalha por você — sem substituir sua essência.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-start mt-12">
  
                    {/* ===== LADO ESQUERDO ===== */}
                    <div>
                        <h2 className="text-[28px] text-wrap font-semibold leading-tight text-[#1a1a1a]">
                            Atendimento Humanizado de Verdade
                        </h2>
        
                        <p className="text-xl mt-4 text-[#1a1a1a] leading-relaxed text-wrap">
                            Com a ZapScale, seu cliente sente que está falando com você — mesmo quando o sistema
                            está ajudando.
                        </p>
                    </div>
  
                    {/* ===== LADO DIREITO ===== */}
                    <div className="grid sm:grid-cols-2 gap-6">

                        <Card
                            title=""
                            description="Áudios enviados sem parecer encaminhados."
                        />
            
                        <Card
                            title=""
                            description="Simulação de digitação natural."
                        />
            
                        <Card
                            title=""
                            description="Envio programado com comportamento humano."
                        />
            
                        <Card
                            title=""
                            description="Mensagens naturais que geram confiança."
                        />
        
                    </div>
  
                </div>
            </div>
        </section>
    );
}
