import Button from "../ui/Button";
import { Card } from "../ui/Card";
import { BriefcaseBusiness, HandCoins, MonitorCheck, UsersRound } from "lucide-react";

export const TargetAudience = () => {
    return (
      <section className="bg-gray-100 py-24">
        <div className="max-w-6xl mx-auto px-6">
          
          <div className="grid lg:grid-cols-2 gap-16 items-start">
  
            {/* ===== LADO ESQUERDO ===== */}
            <div>
              <h2 className="text-[28px] font-semibold leading-tight text-[#1a1a1a]">
                Transforme seu WhatsApp 
                <br />
                em uma máquina de vendas inteligente
              </h2>
  
              <p className="mt-6 mb-6 text-base text-[#1a1a1a] leading-relaxed">
                Se você:
                <br />
                ✔ passa horas respondendo as mesmas perguntas
                <br />
                ✔ perde vendas por demora no atendimento
                <br />
                ✔ sente que o cliente esfria enquanto você responde
                <br />
                ✔ quer automatizar sem perder o toque humano
                <br />
                <span className="bg-gradient-to-r
                    from-[#33d6ca]
                    via-[#0abdb0]
                    to-[#089a8f]
                    bg-clip-text
                    text-transparent font-semibold">
                  a ZapScale foi feita para você!
                </span>
              </p>
  
              <Button isAnimated className="bg-gradient-to-r from-[#33d6ca] via-[#0abdb0] to-[#089a8f] text-white text-xs">
                QUERO VENDER MAIS PELO WHATSAPP
              </Button>
            </div>
  
            {/* ===== LADO DIREITO ===== */}
            <div className="grid sm:grid-cols-2 gap-6">

              <Card
                icon={<BriefcaseBusiness />}
                title="Microempreendedores"
                description="Atenda com agilidade e profissionalismo, economize tempo e fidelize clientes."
              />
  
              <Card
                icon={<HandCoins />}
                title="Vendedores"
                description="Organize conversas, responda rapidamente e feche mais vendas com eficiência."
              />
  
              <Card
                icon={<MonitorCheck />}
                title="Infoprodutores"
                description="Automatize respostas estratégicas e aumente seu engajamento e conversão."
              />
  
              <Card
                icon={<UsersRound />}
                title="Afiliados"
                description="Envie scripts inteligentes, aumente conversões e escale sua comunicação."
              />
  
            </div>
  
          </div>
        </div>
      </section>
    );
  }