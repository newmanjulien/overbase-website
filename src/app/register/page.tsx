import type { Metadata } from "next";

import { RegisterFlowLayout } from "@/components/layouts/register-flow-layout";
import {
  getRegisterStartStep,
  getRegisterStepNavigation,
} from "@/app/register/register-flow";

export async function generateMetadata(): Promise<Metadata> {
  const startStep = getRegisterStartStep();

  return startStep.metadata;
}

export default async function RegisterPage() {
  const startStep = getRegisterStartStep();
  const navigation = getRegisterStepNavigation(startStep.slug);

  return <RegisterFlowLayout {...startStep.content} {...navigation} />;
}
