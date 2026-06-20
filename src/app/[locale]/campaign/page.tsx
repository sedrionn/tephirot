import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { HeroParticles } from "@/components/hero-particles";
import { PageShell } from "@/components/page-shell";
import { CampaignScrollLayout } from "@/components/campaign/campaign-scroll-layout";

type CampaignPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: CampaignPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "campaign" });

  return {
    title: `${t("hub.title")} — ${t("hub.eyebrow")}`,
    description: t("hub.subtitle"),
  };
}

export default function CampaignPage() {
  return (
    <PageShell activePath="/campaign">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 bg-[url('/campaign/campaign-background.png')] bg-cover bg-fixed bg-center bg-no-repeat"
      />
      <HeroParticles
        id="campaign-embers"
        className="pointer-events-none fixed inset-0 z-[1]"
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[2] bg-zinc-950/55"
      />
      <div className="relative z-10">
        <CampaignScrollLayout />
      </div>
    </PageShell>
  );
}
