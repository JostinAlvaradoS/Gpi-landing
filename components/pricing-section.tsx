"use client"

import { Check, Sparkles } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

const plans = [
  {
    tier: "B\u00c1SICO",
    price: "Gratis",
    priceDetail: "Trial de 14 d\u00edas",
    features: [
      "1 proceso activo",
      "Dashboard b\u00e1sico",
      "Alertas por email",
      "Soporte comunitario",
    ],
    cta: null,
    highlighted: false,
  },
  {
    tier: "PRO",
    price: "$99",
    priceDetail: "/mes por instituci\u00f3n",
    features: [
      "Procesos ilimitados",
      "Compliance autom\u00e1tico LOSNCP",
      "Integraci\u00f3n SERCOP",
      "Reportes avanzados",
      "Alertas inteligentes",
      "Soporte prioritario",
    ],
    cta: null,
    highlighted: true,
  },
  {
    tier: "ENTERPRISE",
    price: "Contacto",
    priceDetail: "Soluci\u00f3n personalizada",
    features: [
      "Todo lo de Pro",
      "API personalizada",
      "SLA garantizado",
      "Capacitaci\u00f3n in-situ",
      "Integraciones custom",
      "Gerente de cuenta dedicado",
    ],
    cta: "Contactar Ventas",
    highlighted: false,
  },
]

function PricingCard({ plan, delay }: { plan: typeof plans[number]; delay: string }) {
  const { ref, inView } = useInView()
  return (
    <div
      ref={ref}
      className={cn(
        "relative rounded-2xl border p-8 opacity-0 transition-[border-color,box-shadow] duration-300",
        plan.highlighted
          ? "border-[#FFA80D]/40 bg-background shadow-lg shadow-[#FFA80D]/10"
          : "border-border bg-background hover:border-primary/30 hover:shadow-md",
        inView && `animate-fade-up opacity-100 ${delay}`
      )}
    >
      {plan.highlighted && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FFA80D] px-4 py-1.5 text-xs font-semibold text-[#003B72]">
            <Sparkles className="h-3.5 w-3.5" />
            {"M\u00e1s Popular"}
          </span>
        </div>
      )}

      <p className="mb-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">
        {plan.tier}
      </p>

      <div className="mb-6 flex items-baseline gap-2">
        <span className="text-4xl font-bold text-foreground lg:text-5xl">
          {plan.price}
        </span>
        <span className="text-sm text-muted-foreground">
          {plan.priceDetail}
        </span>
      </div>

      <ul className="mb-8 flex flex-col gap-3.5">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <Check
              className={`mt-0.5 h-4 w-4 shrink-0 ${
                plan.highlighted ? "text-[#FFA80D]" : "text-primary"
              }`}
              strokeWidth={2.5}
            />
            <span className="text-sm leading-relaxed text-foreground/80">
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {plan.cta && (
        <button
          className="w-full rounded-lg border border-[#003B72] bg-[#003B72] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#003B72]/90"
        >
          {plan.cta}
        </button>
      )}
    </div>
  )
}

export function PricingSection() {
  const { ref: headerRef, inView: headerInView } = useInView()

  return (
    <section id="precios" className="bg-secondary/50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div
          ref={headerRef}
          className={cn(
            "mx-auto mb-16 max-w-2xl text-center opacity-0",
            headerInView && "animate-fade-up opacity-100"
          )}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#FFA80D]">
            Precios
          </p>
          <h2 className="text-pretty text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Ahorra tiempo y evita multas
          </h2>
          <p className="mt-4 text-balance text-lg leading-relaxed text-muted-foreground">
            {"Planes dise\u00f1ados para instituciones p\u00fablicas de cualquier tama\u00f1o."}
          </p>
        </div>

        <div className="grid items-start gap-6 md:grid-cols-3 lg:gap-8">
          {plans.map((plan, i) => (
            <PricingCard key={plan.tier} plan={plan} delay={["", "delay-200", "delay-400"][i]} />
          ))}
        </div>
      </div>
    </section>
  )
}
