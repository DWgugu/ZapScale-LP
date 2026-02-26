import { AccordionItem } from "../ui/Accordion";
import { Badge } from "../ui/Badge";
import Button from "../ui/Button";

export const About = () => {
    return (
        <section id="about" className="bg-gray-100 py-24">
            <div className="mx-auto">
                <div className="max-w-6xl mx-auto px-6 mb-16">
                    <Badge text="Nossa Missão" />
                    <h2 className="text-[28px] font-semibold leading-tight text-[#1a1a1a] mb-8 mt-4">
                        A ZapScale nasceu para resolver um problema real:
                    </h2>
                    <p className="text-base text-[#1a1a1a] leading-relaxed">
                        Empreendedores perdiam vendas por não conseguir atender com rapidez e qualidade.
                    </p>
                    <p className="text-base text-[#1a1a1a] leading-relaxed">
                        Unimos tecnologia, automação e inteligência artificial para tornar a comunicação mais rápida, eficiente e humana.
                    </p>
                    <ul className="mt-4 text-left w-full text-base text-[#1a1a1a] leading-relaxed">
                        <li><span className="text-[#1a1a1a] font-semibold">✔</span> reduzir tempo de atendimento</li>
                        <li><span className="text-[#1a1a1a] font-semibold">✔</span> aumentar conversões</li>
                        <li><span className="text-[#1a1a1a] font-semibold">✔</span> melhorar relacionamento com clientes</li>
                        <li><span className="text-[#1a1a1a] font-semibold">✔</span> vender de forma previsível</li>
                    </ul>
                </div>

                <div className="relative -mb-[120px] md:-mb-[150px] max-w-4xl mx-auto px-6 z-30">
                    <div className="rounded-2xl overflow-hidden shadow-xl bg-gradient-to-r from-purple-600 via-blue-600 to-green-500 p-1">
                        <div className="bg-white rounded-2xl h-[300px] flex flex-col items-center justify-center text-white text-lg gap-8">
                            <h3 className="text-[28px] font-semibold leading-tight text-[#1a1a1a] mt-4">
                                Experimente gratuitamente
                            </h3>
                            <p className="text-base text-[#1a1a1a] leading-relaxed">
                                Descubra o poder de um atendimento inteligente e humanizado.
                            </p>
                            <Button isAnimated className="bg-gradient-to-r from-[#33d6ca] via-[#0abdb0] to-[#089a8f] text-white text-xs h-12">
                                Experimente gratuitamente
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="bg-black text-white pt-[120px] md:pt-[150px] pb-20 overflow-x-hidden">
                    <div className="mx-auto px-6 max-w-6xl pt-12">
                        <h3 className="text-[28px] font-semibold leading-tight text-white mt-4">
                            FAQ
                        </h3>
                        <div className="flex flex-col gap-4">
                            <AccordionItem title="A ZapScale faz disparos em massa?">
                                <p className="text-base text-white leading-relaxed">
                                    Sim, com controle inteligente para evitar bloqueios e manutenção de mensagens.
                                </p>
                            </AccordionItem>
                            <AccordionItem title="Funciona no WhatsApp Business?">
                                <p className="text-base text-white leading-relaxed">
                                    Sim.
                                </p>
                            </AccordionItem>
                            <AccordionItem title="Posso conectar mais de um número?">
                                <p className="text-base text-white leading-relaxed">
                                    Sim, nos planos avançados.
                                </p>
                            </AccordionItem>
                            <AccordionItem title="Preciso instalar algo?">
                                <p className="text-base text-white leading-relaxed">
                                    A ZapScale funciona como extensão segura.
                                </p>
                            </AccordionItem>
                            <AccordionItem title="A IA responde sozinha?">
                                <p className="text-base text-white leading-relaxed">
                                    Ela pode sugerir respostas e roteiro, conforme sua configuração para atender no semi-automatico.
                                </p>
                            </AccordionItem>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}