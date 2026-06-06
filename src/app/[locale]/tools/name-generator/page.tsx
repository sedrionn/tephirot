import { PageShell } from "@/components/page-shell";
import { NameGeneratorForm } from "./name-generator-form";

export default function NameGeneratorPage() {
  return (
    <PageShell activePath="/tools">
      <NameGeneratorForm />
    </PageShell>
  );
}
