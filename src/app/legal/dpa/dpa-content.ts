/**
 * Data Processing Agreement content
 * This file contains all legal content for the DPA page.
 * Edit the sections array to update the terms.
 */

import type {
  LegalSection,
  LegalPageMetadata,
} from "../../../components/layouts/LegalPageLayout";

export const dpaMetadata: LegalPageMetadata = {
  title: "Data Processing Addendum",
  lastUpdated: "January 16, 2026",
  introduction:
    'This Data Processing Addendum ("DPA") forms part of, and is subject to, the Master SaaS Agreement or other written or electronic terms of service or subscription agreement (the “Agreement”) between Overbase (“Overbase”) and the entity or person defined as ‘Customer’ (“Customer”) thereunder; and together with Overbase, collectively, the “Parties” or individually, a “Party”). All capitalized terms not defined in this DPA shall have the meanings set forth in the Agreement.',
};

export const dpaSections: LegalSection[] = [
  {
    id: "definitions",
    title: "Definitions",
    content: [
      "“Account” means Customer’s account in the Service in which Customer stores and processes Customer Data.",
      "“California Consumer Privacy Act” or “CCPA” means the California Consumer Privacy Act of 2018, as may be amended from time to time.",
      "“Customer Data” has the meaning set forth in the Agreement.",
      "“Customer Personal Data” means any Customer Data that is Personal Data.",
      "“Data Controller” means an entity that determines the purposes and means of the Processing of Personal Data.",
      "“Data Processor” means an entity that Processes Personal Data on behalf of a Data Controller.",
      "“Data Protection Laws” means all data protection and privacy laws applicable to the respective party in its role in the Processing of Personal Data under the Agreement, including, where applicable, EU & UK Data Protection Law and the CCPA.",
      "“Data Subject” means the identified or identifiable natural person to whom Customer Personal Data relates.",
      "“EU & UK Data Protection Law” means (i) Regulation 2016/679 of the European Parliament and of the Council on the protection of natural persons with regard to the Processing of Personal Data and on the free movement of such data (General Data Protection Regulation) (“GDPR”); and (ii) the GDPR as it forms part of United Kingdom law pursuant to Section 3 of the European Union (Withdrawal) Act 2018 (“UK GDPR”) and the Data Protection Act 2018.",
      "“Personal Data” means any information, including opinions, relating to an identified or identifiable natural person and includes similarly defined terms in Data Protection Laws, including, but not limited to, the definition of “personal information” in the CCPA.",
      "“Processing” means any operation or set of operations which is performed on Personal Data or on sets of Personal Data, whether or not by automated means, such as collection, recording, organisation, structuring, storage, adaptation or alteration, retrieval, consultation, use, disclosure by transmission, dissemination, and “Process”, “Processes” and “Processed” will be interpreted accordingly.",
      "“Purposes” means (i) Overbase’s provision of the Overbase Offerings as described in the Agreement, including Processing initiated by Users in their use of the Overbase Offerings; and (ii) further documented, reasonable instructions from Customer agreed upon by the Parties.",
      "“Security Incident” means a breach of Overbase's security leading to the accidental or unlawful destruction, loss, alteration, unauthorized disclosure of or access to Customer Personal Data.",
      "“Service” has the meaning set forth in the Agreement.",
      "“Overbase Offering(s)” has the meaning set forth in the Agreement.",
      "“Sub-processor” means any other Data Processors engaged by Overbase to Process Customer Personal Data.",
    ],
  },
  {
    id: "scope-and-applicability",
    title: "Scope and Applicability of this DPA",
    content: [
      "This DPA applies where and only to the extent that Overbase Processes Customer Personal Data on behalf of Customer as Data Processor in the course of providing the Overbase Offerings.",
    ],
  },
  {
    id: "roles-and-scope",
    title: "Roles and Scope of Processing",
    content: [],
    subsections: [
      {
        title: "3.1. Role of the Parties",
        content: [
          "As between Overbase and Customer, Overbase shall Process Customer Personal Data only as a Data Processor (or sub-processor) acting on behalf of Customer and, with respect to CCPA, as a “service provider” as defined therein, in each case regardless of whether Customer acts as a Data Controller or as a Data Processor on behalf of a third-party Data Controller (such third-party, the “Third-Party Controller”) with respect to Customer Personal Data. To the extent any Usage Data (as defined in the Agreement) is considered Personal Data under applicable Data Protection Laws, Overbase is the Data Controller of such data and shall Process such data in accordance with the Agreement and applicable Data Protection Laws.",
        ],
      },
      {
        title: "3.2. Customer Instructions",
        content: [
          "Overbase will Process Customer Personal Data only for the Purposes. Customer shall ensure its Processing instructions are lawful and that the Processing of Customer Personal Data in accordance with such instructions will not violate applicable Data Protection Laws. The Parties agree that the Agreement (including this DPA) sets out the exclusive and final instructions to Overbase for all Processing of Customer Personal Data, and (if applicable) include and are consistent with all instructions from Third-Party Controllers. Any additional requested instructions require the prior written agreement of Overbase. Overbase shall promptly notify Customer if, in Overbase’s opinion, such instruction violates EU & UK Data Protection Law. Where applicable, Customer shall be responsible for any communications, notifications, assistance and/or authorizations that may be required in connection with a Third-Party Controller.",
        ],
      },
      {
        title: "3.3. Processing of Personal Data",
        content: [
          "Each Party will comply with its respective obligations under Data Protection Laws. Customer agrees (i) it will use the Service in a manner designed to ensure a level of security appropriate to the particular content of the Customer Personal Data, such as pseudonymizing and backing-up Customer Personal Data; and (ii) it has obtained all consents, permissions and/or rights necessary under Data Protection Laws for Overbase to lawfully Process Customer Personal Data for the Purposes, including, without limitation, Customer’s sharing and/or receiving of Customer Personal Data with third-parties via the Service.",
        ],
      },
      {
        title: "3.4. Details of Customer Personal Data Processing",
        content: [
          "(a) Subject matter: The subject matter of the Processing under this DPA is the Customer Personal Data.",
          "(b) Frequency and duration: Notwithstanding expiration or termination of the Agreement, Overbase will Process the Customer Personal Data continuously and until deletion of all Customer Personal Data as described in this DPA.",
          "(c) Purpose: Overbase will Process the Customer Personal Data only for the Purposes.",
          "(d) Nature of the Processing: Overbase will perform Processing as needed for the Purposes, and to comply with Customer’s Processing instructions as provided in accordance with the Agreement and this DPA.",
          "(e) Retention Period. The period for which Customer Personal Data will be retained and the criteria used to determine that period is determined by Customer during the term of the Agreement via Customer’s use and configuration of the Service. Upon termination or expiration of the Agreement, Customer may retrieve or delete Customer Personal Data as described in the Agreement. Any Customer Personal Data not deleted by Customer shall be deleted by Overbase promptly upon the later of (i) expiration or termination of the Agreement and (ii) expiration of any post-termination “retrieval period” described in the Agreement.",
          "(f) Categories of Data Subjects: The categories of Data Subjects to which Customer Personal Data relate are determined and controlled by Customer in its sole discretion, and may include, but are not limited to:",
          "(i) Prospects, customers, business partners and vendors of Customer (who are natural persons);",
          "(ii) Employees or contact persons of Customer’s prospects, customers, business partners and vendors; and/or",
          "(iii) Employees, agents, advisors, and freelancers of Customer (who are natural persons).",
          "(g) Categories of Personal Data: The types of Customer Personal Data are determined and controlled by Customer in its sole discretion, and may include, but are not limited to:",
          "(i) Identification and contact data (name, address, title, contact details);",
          "(ii) Financial information (credit card details, account details, payment information);",
          "(iii) Employment details (employer, job title, geographic location, area of responsibility); and/or",
          "(iv) IT information (IP addresses, cookies data, location data).",
          "(h) Special Categories of Personal Data (if applicable): Subject to any applicable restrictions and/or conditions in the Agreement or Documentation, Customer may also include ‘special categories of personal data’ or similarly sensitive Personal Data (as described or defined in Data Protection Laws) in Customer Personal Data, the extent of which is determined and controlled by Customer in its discretion, and which may include, but is not limited to Customer Personal Data revealing racial or ethnic origin, political opinions, religious or philosophical beliefs, or trade union membership, genetic data, biometric data Processed for the purposes of uniquely identifying a natural person, data concerning health and/or data concerning a natural person’s sex life or sexual orientation.",
        ],
      },
    ],
  },
  {
    id: "sub-processing",
    title: "Sub-processing",
    content: [],
    subsections: [
      {
        title: "4.1. Authorized Sub-processors",
        content: [
          "Customer provides Overbase with a general authorization to engage Sub-processors, subject to Section 4.3 (Changes to Sub-processors), as well as Overbase’s current Sub-processors listed at https://www.overbase.app/legal/sub-processors (“Sub-processor Site”) as of the effective date of this DPA and Overbase.",
        ],
      },
      {
        title: "4.2. Sub-processor Obligations",
        content: [
          "Overbase shall: (i) enter into a written agreement with each Sub-processor imposing data protection obligations no less protective of Customer Personal Data as Overbase’s obligations under this DPA to the extent applicable to the services provided by the Sub-processor; and (ii) remain liable for each Sub-processor’s compliance with the obligations under this DPA. Upon written request, and subject to any confidentiality restrictions, Overbase shall provide Customer all relevant information it reasonably can in connection with its applicable Sub-processor agreements where required to satisfy Customer’s obligations under Data Protection Laws.",
        ],
      },
      {
        title: "4.3. Changes to Sub-processors",
        content: [
          "Overbase shall make available on its Sub-processor Site a mechanism to subscribe to notifications of new Sub-processors. Overbase shall provide such notification both to (i) email addresses that have subscribed for notifications on the Sub-processor Site, and (ii) email addresses designated by Customer as ‘privacy notices’ recipients within Service, at least twenty-eight (28) days in advance of allowing the new Sub-processor to Process Customer Personal Data (the “Objection Period”). During the Objection Period, objections (if any) to Overbase’s appointment of the new Sub-processor must be provided to Overbase in writing and based on reasonable grounds. In such event, the Parties will discuss those objections in good faith with a view to achieving resolution. If it can be reasonably demonstrated to Overbase that the new Sub-processor is unable to Process Customer Personal Data in compliance with the terms of this DPA and Overbase cannot provide an alternative Sub-processor, or the Parties are not otherwise able to achieve resolution as provided in the preceding sentence, Customer, as its sole and exclusive remedy, may terminate the Order Form(s) with respect to only those aspects which cannot be provided by Overbase without the use of the new Sub-processor by providing advance written notice to Overbase of such termination. Overbase will refund Customer any prepaid unused fees of such Order Form(s) following the effective date of such termination.",
        ],
      },
    ],
  },
  {
    id: "security",
    title: "Security",
    content: [],
    subsections: [
      {
        title: "5.1. Security Measures",
        content: [
          "Overbase shall implement and maintain appropriate technical and organizational security measures designed to protect Customer Personal Data from Security Incidents and to preserve the security and confidentiality of the Customer Personal Data as described in Overbase’s Security Addendum found at https://www.overbase.app/legal/ (“Security Addendum”).",
        ],
      },
      {
        title: "5.2. Confidentiality of Processing",
        content: [
          "Overbase shall ensure that any person who is authorized by Overbase to Process Customer Personal Data (including its staff, agents and subcontractors) shall be under an appropriate obligation of confidentiality (whether a contractual or statutory duty).",
        ],
      },
      {
        title: "5.3. No Assessment of Customer Personal Data by Overbase",
        content: [
          "Overbase shall have no obligation to assess the contents or accuracy of Customer Personal Data, including to identify information subject to any specific legal, regulatory, or other requirement. Customer is responsible for making an independent determination as to whether its use of the Service will meet Customer’s requirements and legal obligations under Data Protection Laws.",
        ],
      },
    ],
  },
  {
    id: "data-transfers",
    title: "Data Transfers",
    content: [],
    subsections: [
      {
        title: "6.1. Hosting and Processing Locations",
        content: [
          "Overbase will only host Customer Personal Data in the region(s) offered by Overbase and selected by Customer on an Order Form or as Customer otherwise configures via the Service, including as described in the Documentation (the “Hosting Region”). Customer is solely responsible for the regions from which its Users access the Customer Personal Data, for any transfer or sharing of Customer Personal Data by Customer or its Users and for any subsequent designation of other Hosting Regions (either for the same Account, a different Account, or a separate Service). Once Customer has selected a Hosting Region, Overbase will not Process Customer Personal Data from outside the Hosting Region except as reasonably necessary to provide the Overbase Offerings procured by Customer, or as necessary to comply with the law or binding order of a governmental body.",
        ],
      },
    ],
  },
  {
    id: "security-incident-response",
    title: "Security Incident Response",
    content: [],
    subsections: [
      {
        title: "7.1. Security Incident Reporting",
        content: [
          "If Overbase becomes aware of a Security Incident, Overbase shall notify Customer without undue delay, and in any case, where feasible, notify Customer within seventy-two (72) hours after becoming aware. Overbase’s notification shall be sent to the email registered by Customer within the Service for such purposes, and where no such email is registered, Customer acknowledges that the means of notification shall be at Overbase’s reasonable discretion (which may include using the Customer-designated email address associated with the OrgAdmin or AccountAdmin roles of the affected Account(s)) and Overbase’s ability to timely notify shall be negatively impacted. Overbase shall promptly take reasonable steps to contain, investigate, and mitigate any Security Incident.",
        ],
      },
      {
        title: "7.2. Security Incident Communications",
        content: [
          "Overbase shall provide Customer timely information about the Security Incident, including, but not limited to, the nature and consequences of the Security Incident, the measures taken and/or proposed by Overbase to mitigate or contain the Security Incident, the status of Overbase’s investigation, a contact point from which additional information may be obtained, and the categories and approximate number of data records concerned. Notwithstanding the foregoing, Customer acknowledges that because Overbase personnel may not have visibility to the content of Customer Personal Data, it is unlikely Overbase can provide information as to the particular nature of the Customer Personal Data, or where applicable, the identities, number or categories of affected Data Subjects. Communications by or on behalf of Overbase with Customer in connection with a Security Incident shall not be construed as an acknowledgment by Overbase of any fault or liability with respect to the Security Incident.",
        ],
      },
    ],
  },
  {
    id: "cooperation",
    title: "Cooperation",
    content: [],
    subsections: [
      {
        title: "8.1. Data Subject Requests",
        content: [
          "Overbase shall promptly notify Customer if Overbase receives a request from a Data Subject that identifies Customer Personal Data or otherwise identifies Customer, including where the Data Subject seeks to exercise any of its rights under applicable Data Protection Laws (collectively, “Data Subject Request”). The Service provides Customer with a number of controls that Customer may use to assist it in responding to Data Subject Requests and, subject to the next sentence, Customer will be responsible for responding to any such Data Subject Requests. To the extent Customer is unable to access the relevant Customer Personal Data within the Service using such controls or otherwise, Overbase shall (upon Customer’s written request and taking into account the nature of Overbase’s Processing) provide commercially reasonable cooperation to assist Customer in responding to Data Subject Requests.",
        ],
      },
      {
        title: "8.2. Data Protection Impact Assessments",
        content: [
          "Overbase shall provide reasonably requested information regarding the Service to enable Customer to carry out data protection impact assessments or prior consultations with data protection authorities as required by Data Protection Laws, so long as Customer does not otherwise have access to the relevant information.",
        ],
      },
      {
        title: "8.3. Government & Law Enforcement Inquiries",
        content: [
          "If Overbase receives a demand to retain, disclose, or otherwise Process Customer Personal Data from law enforcement or any other government and/or public authority (“Governmental Inquiry”), then Overbase shall attempt to redirect the Governmental Inquiry to Customer. Customer agrees that Overbase can provide information to such third-party to the extent reasonably necessary to redirect the Governmental Inquiry to Customer. If Overbase cannot redirect the Governmental Inquiry to Customer, then Overbase shall, to the extent legally permitted to do so, provide Customer reasonable notice of the Governmental Inquiry as promptly as feasible under the circumstances to allow Customer to seek a protective order or other appropriate remedy. This section does not diminish Overbase’s obligations under any applicable Transfer Mechanisms with respect to access by public authorities.",
        ],
      },
    ],
  },
  {
    id: "relationship-with-agreement",
    title: "Relationship with the Agreement",
    content: [],
    subsections: [
      {
        title: "9.1. Prior Agreements",
        content: [
          "The Parties agree that this DPA shall replace and supersede any existing data processing addendum, attachment, exhibit or standard contractual clauses that Overbase and Customer may have previously entered into in connection with the Service. Overbase may update this DPA from time to time, with such updated version posted to https://www.overbase.app/legal/, or a successor website designated by Overbase; provided, however, that no such update shall materially diminish the privacy or security of Customer Personal Data.",
        ],
      },
      {
        title: "9.2. Conflicts",
        content: [
          "Except as provided by this DPA, the Agreement remains unchanged and in full force and effect. If there is any conflict between this DPA and the Agreement, this DPA shall prevail to the extent of that conflict in connection with the Processing of Customer Personal Data. Notwithstanding the foregoing, and solely to the extent applicable to any Customer Personal Data comprised of patient, medical or other protected health information regulated by HIPAA, if there is any conflict between this DPA and a business associate agreement between Customer and Overbase, then the business associate agreement shall prevail solely with respect to such Customer Personal Data.",
        ],
      },
      {
        title: "9.3. Liability",
        content: [
          "Notwithstanding anything to the contrary in the Agreement or this DPA, each Party’s liability, taken together in the aggregate, arising out of or relating to this DPA, the Transfer Mechanisms, and any other data protection agreements in connection with the Agreement (if any), shall be subject to any aggregate limitations on liability set out in the Agreement. Without limiting the Parties’ obligations under the Agreement, each Party agrees that any regulatory penalties incurred by one Party (the “Incurring Party”) in relation to the Customer Personal Data that arise as a result of, or in connection with, the other Party’s failure to comply with its obligations under this DPA or any applicable Data Protection Laws shall count toward and reduce the Incurring Party’s liability under the Agreement as if it were liability to the other Party under the Agreement.",
        ],
      },
      {
        title: "9.4. No Third-Party Beneficiaries",
        content: [
          "In no event shall this DPA benefit or create any right or cause of action on behalf of a third party (including a Third-Party Controller), but without prejudice to the rights or remedies available to Data Subjects under Data Protection Laws or this DPA (including the Transfer Mechanisms).",
        ],
      },
      {
        title: "9.5. Governing Law",
        content: [
          "This DPA will be governed by and construed in accordance with governing law and jurisdiction provisions in the Agreement.",
        ],
      },
    ],
  },
];
