import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

const eslintConfig = [
  ...nextCoreWebVitals,
  ...nextTypescript,
  {
    rules: {
      "react/no-unescaped-entities": [
        "error",
        {
          forbid: [">", "}"], // keep important checks, allow apostrophes/quotes
        },
      ],
    },
  },
];

export default eslintConfig;
