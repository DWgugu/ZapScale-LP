import { Card } from "../ui/Card";
import { CircleDollarSign, Bot, MessageSquareReply, Lock, Laptop, RefreshCcw } from "lucide-react";

export const WhyChoose = () => {
    return (
        <section className="bg-gray-100 py-24">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-[28px] text-wrap font-semibold leading-tight text-[#1a1a1a] mb-8">
                    Por que escolher o ZapScale?
                </h2>
                <div className="flex flex-col gap-8">
                    <div className="flex gap-8">
                        <Card
                            title="Preço acessível"
                            icon={<CircleDollarSign />}
                            description="Invista pouco e multiplique sua produtividade"
                        />

                        <Card
                            title="Automação inteligente com IA"
                            icon={<Bot />}
                            description="Automatize sem perder naturalidade."
                        />

                        <Card
                            title="Respostas automáticas estratégicas"
                            icon={<MessageSquareReply />}
                            description="Ganhe velocidade e eficiência no atendimento"
                        />
                    </div>

                    <div className="flex gap-8">
                        <Card
                            title="Privacidade e segurança"
                            icon={<Lock />}
                            description="Seus dados protegidos e suas conversas seguras"
                        />

                        <Card
                            title="Fácil de usar"
                            icon={<Laptop />}
                            description="Interface simples e intuitiva."
                        />

                        <Card
                            title="Atualizações constantes"
                            icon={<RefreshCcw />}
                            description="Novos recursos e melhorias frequentes."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}