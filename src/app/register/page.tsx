import type { Metadata } from "next";

import Register from "./register";

export const metadata: Metadata = {
  title: "Register | Overbase",
  description: "Register for Overbase with your work email.",
};

export default function RegisterPage() {
  return <Register />;
}
