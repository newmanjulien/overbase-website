import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { RegisterFlowLayout } from "@/components/layouts/register-flow-layout";
import {
  getRegisterDynamicStepStaticParams,
  getRegisterStep,
  getRegisterStepNavigation,
} from "@/app/register/register-flow";

type RegisterStepRouteProps = {
  params: Promise<{
    step: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getRegisterDynamicStepStaticParams();
}

export async function generateMetadata({
  params,
}: RegisterStepRouteProps): Promise<Metadata> {
  const { step } = await params;
  const entry = getRegisterStep(step);

  if (!entry) {
    notFound();
  }

  return entry.metadata;
}

export default async function RegisterStepRoute({
  params,
}: RegisterStepRouteProps) {
  const { step } = await params;
  const entry = getRegisterStep(step);

  if (!entry) {
    notFound();
  }

  const navigation = getRegisterStepNavigation(entry.slug);

  return <RegisterFlowLayout {...entry.content} {...navigation} />;
}
