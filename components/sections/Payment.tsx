import { PlanCard } from "../PlanCard";
import { Badge } from "../ui/Badge";

export const Payment = () => {
    return (
        <section id="planos" className="bg-white py-24">
            <div className="max-w-6xl mx-auto px-6">
                <Badge text="Planos ZapScale" />
                <h2 className="text-[28px] font-semibold leading-tight text-[#1a1a1a] mb-8 mt-4">
                    Escolha o plano ideal para acelerar suas vendas no WhatsApp
                </h2>
                <div className="flex gap-8">
                    <PlanCard
                        title="Plano Gratuito"
                        price="Grátis"
                        subtitle="para sempre"
                        features={[
                            "1 número",
                            "até 30 mensagens/dia",
                            "respostas rápidas",
                            "automações básicas",
                            "testes da IA",
                        ]}
                    />
                    <PlanCard
                        title="Plano Starter"
                        price="R$ 49,90"
                        subtitle="mensal"
                        buttonText="ASSINAR AGORA"
                        features={[
                            "mensagens ilimitadas",
                            "funis automáticos",
                            "gatilhos inteligentes",
                            "IA assistente básica",
                            "agendamento de mensagens",
                        ]}
                        targetLink="https://pay.cakto.com.br/ct5rqbd_760625"
                    />
                    <PlanCard
                        title="Plano PRO"
                        price="R$460,00"
                        subtitle="anual"  
                        buttonText="ASSINAR AGORA"
                        recommended
                        features={[
                            "IA avançada integrada",
                            "automações ilimitadas",
                            "funis e gatilhos inteligentes",
                            "disparos em massa ilimitados",
                            "múltiplos fluxos simultâneos",
                            "prioridade em suporte",
                        ]}
                        targetLink="https://pay.cakto.com.br/4amkt8d"
                    />
                </div>
            </div>
        </section>
    );
}