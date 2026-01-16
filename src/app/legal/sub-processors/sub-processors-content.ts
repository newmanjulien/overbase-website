/**
 * Sub-processors content
 * This file contains all legal content for the Sub-processors page.
 * Edit the sections array to update the terms.
 */

import type {
  LegalSection,
  LegalPageMetadata,
} from "../../../components/layouts/LegalPageLayout";

export const subProcessorsMetadata: LegalPageMetadata = {
  title: "Sub-processors",
  lastUpdated: "January 16, 2026",
  introduction:
    "To deliver services, Overbase Inc. (“Overbase”) may use third-party data processors (“Third-Party Sub-processors”) and Overbase Affiliates to process Customer Data. Capitalized terms not defined on this page have the meanings ascribed to them by the terms set forth in the Overbase Terms of Service or the written agreement between you and Overbase, as applicable (the “Agreement”). By subscribing to receive updates about this page, you will be notified by email about relevant updates to Third-Party Sub-processors that are involved in processing your Customer Data.",
};

export const subProcessorsSections: LegalSection[] = [
  {
    id: "authorized-sub-processors",
    title: "Authorized Third-Party Sub-processors",
    content: [],
    subsections: [
      {
        title: "Amazon Web Services",
        content: [],
        compactContent: [
          "Purpose: Cloud hosting and infrastructure provider",
          "Location: Customer Selected*",
          "Transfer Mechanism: SCCs",
          "Resources: AWS Sub-processors",
        ],
      },
      {
        title: "Microsoft Azure",
        content: [],
        compactContent: [
          "Purpose: Cloud hosting and infrastructure provider",
          "Location: Customer Selected*",
          "Transfer Mechanism: SCCs",
          "Resources: Microsoft Sub-processors",
        ],
      },
      {
        title: "Google Cloud Platform",
        content: [],
        compactContent: [
          "Purpose: Cloud hosting and infrastructure provider",
          "Location: Customer Selected*",
          "Transfer Mechanism: SCCs",
          "Resources: GCP Sub-processors",
        ],
      },
    ],
  },
  {
    id: "locations-and-entities",
    title: "Sub-processor Locations and Legal Entities",
    content: [],
    subsections: [
      {
        title: "Amazon Web Services",
        content: [
          "Amazon Web Services, Inc. (410 Terry Ave North, Seattle, Washington, USA, 98109)",
          "Regions: US West (Oregon), US East (Ohio), US East (N. Virginia), US Gov East 1 (FedRAMP High Plus), US Gov West 1 (FedRAMP High Plus), US Gov West 1 (DoD), US East (Commercial Gov - N. Virginia), US West (Commercial Gov - Oregon), Africa (Cape Town), Asia Pacific (Tokyo), Asia Pacific (Osaka), Asia Pacific (Mumbai)",
          "---",
          "Amazon Web Services EMEA SARL (38 Avenue John F. Kennedy, L-1855, Luxembourg, Luxembourg)",
          "Regions: EU (Frankfurt), EU (Zurich), EU (Stockholm), EU (Ireland), Europe (London), EU (Paris), Asia Pacific (Seoul), Asia Pacific (Singapore), Asia Pacific (Jakarta)",
          "---",
          "Amazon Web Services Australia Pty Ltd (Level 37, 2–26 Park Street, Sydney, NSW, 2000, Australia)",
          "Regions: Asia Pacific (Sydney)",
          "---",
          "Amazon Web Services Canada, Inc. (120 Bremner Blvd, 26th Floor, Toronto, ON, M5J 0A8, Canada)",
          "Regions: Canada (Central)",
          "---",
          "Amazon AWS Serviços Brasil Ltda. (Av. Presidente Juscelino Kubitschek, 2,041, Torre E – 18th and 19th Floors, Vila Nova Conceição, São Paulo, Brasil)",
          "Regions: South America (São Paulo)",
        ],
      },
      {
        title: "Microsoft Azure",
        content: [
          "Microsoft Corporation (1 Microsoft Way, Redmond, Washington, USA, 98052)",
          "Regions: Canada Central (Toronto), East US 2 (Virginia), Central US (Iowa), South Central US (Texas), West US 2 (Washington), Mexico Central (Querétaro), North Europe (Ireland), Switzerland North (Zurich), West Europe (Netherlands), UAE North (Dubai), UK South (London), Australia East (New South Wales), Central India (Pune), Japan East (Tokyo), Southeast Asia (Singapore), Korea Central (Seoul), US Gov Virginia, US Gov Virginia (FedRAMP High Plus)",
        ],
      },
      {
        title: "Google Cloud Platform",
        content: [
          "Google LLC (1600 Amphitheatre Parkway, Mountain View, California, USA, 94043)",
          "Regions: US Central1 (Iowa), US East4 (N. Virginia), Europe West2 (London), Europe West3 (Frankfurt), Europe West4 (Netherlands), Middle East Central2 (Dammam)",
        ],
      },
    ],
  },
];
