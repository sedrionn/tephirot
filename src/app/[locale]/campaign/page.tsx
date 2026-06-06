import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
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
      <CampaignScrollLayout />
    </PageShell>
  );
}
