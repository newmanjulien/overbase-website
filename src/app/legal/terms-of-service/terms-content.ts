/**
 * Terms of Service content
 * This file contains all legal content for the Terms of Service page.
 * Edit the sections array to update the terms.
 */

import type {
  LegalSection,
  LegalPageMetadata,
} from "../../../components/layouts/LegalPageLayout";

export const termsMetadata: LegalPageMetadata = {
  title: "Terms of Service",
  lastUpdated: "January 16, 2026",
  introduction:
    "These Overbase Terms of Service (“Agreement”) are entered into by and between Overbase (see Section 14 for this and other capitalized defined terms) and the entity or person placing an order for, or accessing, any Overbase Offerings (“Customer” or “you”). This Agreement consists of the terms and conditions set forth below and any ancillary documents (e.g., attachments, addenda, exhibits) expressly referenced as part of the Agreement, and any Order Forms that reference this Agreement.",
};

export const termsSections: LegalSection[] = [
  {
    id: "effective-date-modifications",
    title: "Effective Date and Modifications",
    content: [
      "The “Effective Date” of this Agreement is the date which is the earlier of (a) Customer’s initial access to any Overbase Offering (as defined below) through any online provisioning, registration or order process or (b) the effective date of the first Order Form referencing this Agreement.",
      "Modifications to this Agreement: From time to time, Overbase may modify this Agreement. Unless otherwise specified by Overbase, changes become effective for Customer upon renewal of the then-current Subscription Term or upon the effective date of a new Order Form after the updated version of this Agreement goes into effect. Overbase will use reasonable efforts to notify Customer of the changes through communications via Customer’s Account, email or other means. Customer may be required to click to accept or otherwise agree to the modified Agreement before renewing a Subscription Term or upon the effective date of a new Order Form, and in any event continued use of any Overbase Offering after the updated version of this Agreement goes into effect will constitute Customer’s acceptance of such updated version.",
    ],
  },
  {
    id: "use-of-service",
    title: "Use of Service",
    content: [],
    subsections: [
      {
        title: "1.1. Service Provision and Access",
        content: [
          "Overbase will make the Service available to Customer for the Subscription Term solely for use by Customer and its Users in accordance with the terms and conditions of this Agreement, the Documentation, and the Order Form. Customer shall be responsible for each User’s compliance with this Agreement, and acts or omissions by any User shall be deemed acts by Customer. To the extent Customer installs Client Software in connection with its use of the Service, Overbase grants to Customer and its Users a limited, non-transferable, non-sublicensable, non-exclusive license during the Subscription Term to use the object code form of the Client Software internally in connection with Customer’s use of the Service, subject to the terms and conditions of this Agreement and the Documentation.",
        ],
      },
      {
        title: "1.2. Compliance with Applicable Laws",
        content: [
          "Overbase will provide the Overbase Offerings in accordance with its obligations under laws and government regulations applicable to Overbase’s provision of such Overbase Offerings to its customers generally, including, without limitation, those related to data privacy and data transfer, international communications, and the exportation of Overbase Offerings, without regard to Customer’s particular use of the Overbase Offerings and subject to Customer’s use of the Overbase Offerings in accordance with this Agreement.",
        ],
      },
    ],
  },
  {
    id: "customer-data",
    title: "Customer Data",
    content: [],
    subsections: [
      {
        title: "2.1. Rights in Customer Data",
        content: [
          "As between the parties, Customer or its licensors retain all right, title and interest (including any and all intellectual property rights) in and to the Customer Data and any modifications made thereto in the course of operation of the Service. Subject to the terms of this Agreement, Customer hereby grants to Overbase a non-exclusive, worldwide, royalty-free right to process the Customer Data solely to the extent necessary to provide the Overbase Offerings to Customer, to prevent or address service or technical problems therein, or as may be required by law.",
        ],
      },
      {
        title: "2.2. Use Obligations",
        content: [
          "(a) In General. Customer’s use of the Overbase Offerings and all Customer Data will comply with applicable laws, government regulations, and any other legal requirements, including but not limited to, any data localization or data sovereignty laws, regulations, and any other third-party legal requirements applicable to Customer. Customer is solely responsible for the accuracy, content and legality of all Customer Data. Customer warrants that Customer has and will have sufficient rights in the Customer Data to grant the rights to Overbase under this Agreement and that the processing of Customer Data by Overbase in accordance with this Agreement will not violate any laws or the rights of any third party.",
          "(b) HIPAA Data. Customer agrees not to process any HIPAA Data in the Service unless Customer has entered into a BAA with Overbase. Unless a BAA is in place, Overbase will have no liability under this Agreement for HIPAA Data, notwithstanding anything to the contrary in this Agreement or in HIPAA or any similar federal or state laws, rules or regulations. If Customer is permitted to process HIPAA Data in the Service, then Customer may process HIPAA Data in the Service only by providing it as Customer Data. Upon mutual execution of the BAA, the BAA is incorporated by reference into this Agreement and is subject to its terms.",
        ],
      },
      {
        title: "2.3. Data Privacy",
        content: ["The parties shall comply with the DPA."],
      },
    ],
  },
  {
    id: "security",
    title: "Security",
    content: ["The parties shall comply with the Security Addendum."],
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    content: [],
    subsections: [
      {
        title: "4.1. Overbase Technology",
        content: [
          "Customer agrees that Overbase or its suppliers retain all right, title and interest (including all patent, copyright, trademark, trade secret and other intellectual property rights) in and to the Overbase Technology. Except for the express limited rights set forth in this Agreement, no right, title or interest in any Overbase Technology is granted to Customer. Further, Customer acknowledges that the Service is offered as an online, hosted solution, and that Customer has no right to obtain a copy of the underlying computer code for the Service, except (if applicable) for the Client Software in object code format. Overbase may freely use and incorporate any suggestions, comments or other feedback about the Overbase Offerings voluntarily provided by Customer or Users into the Overbase Technology.",
        ],
      },
      {
        title: "4.2. Usage Data",
        content: [
          "Notwithstanding anything to the contrary in this Agreement, Overbase may collect and use Usage Data to develop, improve, support, and operate its products and services. Overbase may not share any Usage Data that includes Customer’s Confidential Information with a third party except (a) in accordance with Section 5 (Confidentiality) of this Agreement, or (b) to the extent the Usage Data is aggregated and anonymized such that Customer and Customer’s Users cannot be identified.",
        ],
      },
      {
        title: "4.3. Customer Reference",
        content: [
          "Overbase may identify Customer as its customer to other Overbase customers or prospective customers, including for purposes of facilitating Customer-controlled data sharing hereunder. Without limiting the foregoing, Overbase may use and display Customer’s name, logo, trademarks, and service marks on Overbase’s website and in Overbase’s marketing materials in connection with identifying Customer as a customer of Overbase. Upon Customer’s written request, Overbase will promptly remove any such marks from Overbase’s website and, to the extent commercially feasible, Overbase’s marketing materials.",
        ],
      },
    ],
  },
  {
    id: "confidentiality",
    title: "Confidentiality",
    content: [
      "Each party (as “Receiving Party”) will use the same degree of care that it uses to protect the confidentiality of its own confidential information of like kind (but not less than reasonable care) to not use any Confidential Information of the other party (the “Disclosing Party”) for any purpose outside the scope of this Agreement. If Receiving Party is required by law, regulation or court order to disclose Confidential Information, then Receiving Party shall, to the extent legally permitted, provide Disclosing Party with advance written notice and cooperate in any effort to obtain confidential treatment of the Confidential Information including, without limitation, the opportunity to seek appropriate administrative or judicial relief. The Receiving Party acknowledges that disclosure of Confidential Information would cause substantial harm for which damages alone would not be a sufficient remedy, and therefore that upon any such disclosure by the Receiving Party, the Disclosing Party will be entitled to seek appropriate equitable relief in addition to whatever other remedies it might have at law.",
    ],
  },
  {
    id: "fees-and-payment",
    title: "Fees and Payment; Taxes; Payment Disputes",
    content: [],
    subsections: [
      {
        title: "6.1. Fees and Payment",
        content: [
          "All Fees and payment terms are as set forth in the applicable Order Form. Except as expressly set forth in this Agreement and to the extent permitted by law, all payment obligations are non-cancelable and Fees are non-refundable. If Customer issues a purchase order upon entering into an Order Form, then: (i) any such purchase order submitted by Customer is for its internal purposes only, and Overbase rejects, and in the future is deemed to have rejected, any purchase order terms to the extent they add to or conflict in any way with this Agreement or the applicable Order Form and such additional or conflicting terms will have no effect; (ii) it shall be without limitation to Overbase’s right to collect Fees owing hereunder; (iii) it shall be for the total Fees owing under the applicable Order Form; and (iv) on request, Overbase will reference the purchase order number on its invoices (solely for administrative convenience), so long as Customer provides the purchase order reasonably in advance of the invoice date. Overbase will invoice Customer using the billing contact information set forth in the applicable Order Form or as updated by Customer in the Service. In the event Customer prefers to use any other billing platform for invoicing and payment hereunder, the parties will reasonably work together to facilitate the same, provided that such platform is: (i) able to accommodate the services payable hereunder; and (ii) operational without cost to Overbase (i.e., use of such platform is either without out-of-pocket cost to Overbase, including for any related set-up fees, or Customer promptly reimburses or otherwise credits Overbase for any such additional costs or fees).",
        ],
      },
      {
        title: "6.2. Taxes",
        content: [
          "Fees do not include Taxes. Customer is responsible for paying all Taxes associated with its purchases hereunder, including without limitation all use or access of the Overbase Offerings by its Users. If Overbase has the legal obligation to pay or collect Taxes for which Customer is responsible under this section, Overbase will invoice Customer and Customer will pay that amount unless Customer provides Overbase with a valid tax exemption certificate authorized by the appropriate taxing authority. Taxes will not be deducted from payments to Overbase, except as required by applicable law, in which case Customer will increase the amount payable as necessary so that, after making all required deductions and withholdings, Overbase receives and retains (free from any liability for Taxes) an amount equal to the amount it would have received had no such deductions or withholdings been made. Upon Overbase’s request, Customer will provide to Overbase its proof of withholding tax remittance to the respective tax authority. Where applicable, Customer will provide its VAT/GST Registration Number(s) on the Order Form to confirm the business use of the purchased services.",
        ],
      },
      {
        title: "6.3. Payment Disputes",
        content: [
          "Overbase will not exercise its rights under Section 7.2 (Termination for Cause) or Section 7.5(a) (Suspension of the Overbase Offerings) with respect to non-payment by Customer in the event of a Payment Dispute. If the parties are unable to resolve such Payment Dispute within thirty (30) days, each party shall have the right to seek any remedies it may have under this Agreement, at law or in equity, irrespective of any terms that would limit remedies on account of a dispute. For clarity, any undisputed amounts must be paid in full.",
        ],
      },
    ],
  },
  {
    id: "term-and-termination",
    title: "Term and Termination",
    content: [],
    subsections: [
      {
        title: "7.1. Term",
        content: [
          "This Agreement is effective as of the Effective Date and will remain in effect until terminated in accordance with its terms. If there is no Order Form currently in effect, either party may terminate this Agreement upon written notice to the other party. Each Order Form will terminate upon expiration of the applicable Subscription Term, unless expressly stated otherwise therein or in this Agreement.",
        ],
      },
      {
        title: "7.2. Termination for Cause",
        content: [
          "Either party may terminate this Agreement (including all related Order Forms) if the other party: (a) fails to cure any material breach of this Agreement (including a failure to pay Fees) within thirty (30) days after written notice (without limiting Section 6.3 (Payment Disputes)); (b) ceases operation without a successor; or (c) seeks protection under any bankruptcy, receivership, trust deed, creditors’ arrangement, composition, or comparable proceeding, or if any such proceeding is instituted against that party and is not dismissed within sixty (60) days (to the extent such termination is not prohibited by law). Except where an exclusive remedy is specified, the exercise by either party of any remedy under this Agreement, including termination, will be without prejudice to any other remedies it may have under this Agreement, by law or otherwise. For any termination of this Agreement by Customer for cause in accordance with Section 7.2(a), Customer shall be entitled to a refund of any prepaid unused Fees for the Service purchased hereunder.",
        ],
      },
      {
        title: "7.3. Effect of Termination; Customer Data Retrieval",
        content: [
          "Upon written notice to Overbase, Customer will have up to thirty (30) calendar days from termination or expiration of this Agreement to access the Service solely to the extent necessary to retrieve Customer Data (“Retrieval Right”). If Customer exercises its Retrieval Right, this Agreement and the applicable Order Form shall continue in full force and effect for the duration of the Retrieval Right. Overbase shall have no further obligation to make Customer Data available after the later of (a) the effective date of termination of this Agreement, or (b) the Retrieval Right period, if applicable, and thereafter Overbase shall promptly delete the Customer Data. After the Retrieval Right period, Customer will have no further access to Customer Data and shall cease use of and access to the Overbase Offerings (including any related Overbase Technology) and delete all copies of Client Software, Documentation, any associated passwords or access codes, and any other Overbase Confidential Information in its possession. Notwithstanding any termination or anything to the contrary in this Agreement or any Order Form, Customer shall pay for all of its use of the Overbase Offerings.",
        ],
      },
      {
        title: "7.4. Survival",
        content: [
          "The following sections will survive any expiration or termination of this Agreement: 1.4 (General Restrictions), 4 (Intellectual Property), 5 (Confidentiality), 6.1 (Fees and Payment), 6.2 (Taxes), 7 (Term and Termination), 8.3 (Warranty Disclaimer), 11 (Indemnification), 12 (Limitation of Remedies and Damages), 13 (General Terms), and 14 (Definitions).",
        ],
      },
      {
        title: "7.5. Suspension of the Overbase Offerings",
        content: [
          "In addition to any of its other rights or remedies (including, without limitation, any termination rights) set forth in this Agreement, Overbase reserves the right to suspend provision of the Overbase Offerings: (a) if any Fees are thirty (30) days or more overdue (and are not otherwise subject to Section 6.3 (Payment Disputes)); (b) if Overbase deems such suspension necessary as a result of Customer’s breach of Sections 1.4 (General Restrictions) or 2.2 (Use Obligations); (c) if Overbase reasonably determines suspension is necessary to avoid material harm to Overbase or its customers, including if the Service is experiencing denial of service attacks, mail flooding, or other attacks or disruptions outside of Overbase’s control; or (d) as required by law or at the request of governmental entities.",
        ],
      },
    ],
  },
  {
    id: "warranty",
    title: "Warranty",
    content: [],
    subsections: [
      {
        title: "8.1. Service Warranty",
        content: [
          "Overbase warrants that the Service will operate in substantial conformity with the applicable Documentation. If Overbase is not able to correct any reported non-conformity with this warranty, either party may terminate the applicable Order Form, and Customer, as its sole remedy, will be entitled to receive a refund of any prepaid unused Fees for the applicable Service purchased thereunder. This warranty will not apply if the error or non-conformance was caused by: (i) Customer’s misuse of the Service; (ii) modifications to the Service by Customer or any third party; (iii) External Offerings; or (iv) any services or hardware of Customer or any of its third parties used by Customer in connection with the Service.",
        ],
      },
      {
        title: "8.2. Mutual Warranty",
        content: [
          "Each party warrants that it has validly entered into this Agreement and has the legal power to do so.",
        ],
      },
      {
        title: "8.3. Warranty Disclaimer",
        content: [
          "TO THE EXTENT PERMITTED BY LAW AND EXCEPT AS EXPRESSLY SET FORTH IN THIS AGREEMENT, EACH OVERBASE OFFERING, THE CLIENT SOFTWARE AND SAMPLE DATA ARE PROVIDED “AS IS,” AND OVERBASE MAKES NO OTHER WARRANTIES, EXPRESS OR IMPLIED, STATUTORY OR OTHERWISE, INCLUDING BUT NOT LIMITED TO, WARRANTIES OF MERCHANTABILITY, TITLE, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. OVERBASE DOES NOT WARRANT THAT THE USE OF ANY OVERBASE OFFERING WILL BE UNINTERRUPTED OR ERROR-FREE, NOR DOES OVERBASE WARRANT THAT IT WILL REVIEW THE CUSTOMER DATA FOR ACCURACY.",
        ],
      },
    ],
  },
  {
    id: "support-and-availability",
    title: "Support and Availability",
    content: [
      "During a Subscription Term, Overbase will provide Customer the level of support for the Service set forth in the applicable Order Form.",
    ],
  },
  {
    id: "indemnification",
    title: "Indemnification",
    content: [],
    subsections: [
      {
        title: "11.1. Indemnification by Overbase",
        content: [
          "Overbase will defend Customer against any claim by a third party alleging that the Service or any Deliverable, when used in accordance with this Agreement, infringes any intellectual property right of such third party and will indemnify and hold harmless Customer from and against any damages and costs awarded against Customer or agreed in settlement by Overbase (including reasonable attorneys’ fees) resulting from such claim. If Customer’s use of the Service or Deliverable results (or in Overbase’s opinion is likely to result) in an infringement claim, Overbase may either: (a) substitute functionally similar products or services; (b) procure for Customer the right to continue using the Service or Deliverable; or if (a) and (b) are not commercially reasonable, (c) terminate this Agreement, or the applicable Order Form, and refund to Customer any prepaid unused Fees for the applicable Service or Deliverable. The foregoing indemnification obligation of Overbase will not apply to the extent the applicable claim is attributable to: (1) the modification of the Service or Deliverable by any party other than Overbase or based on Customer’s specifications or requirements; (2) the combination of the Service or Deliverable with products or processes not provided by Overbase; (3) any use of the Service in non-conformity with this Agreement; or (4) any action arising as a result of Customer Data, or components not provided by Overbase. This section sets forth Customer’s sole remedy with respect to any claim of intellectual property infringement.",
        ],
      },
      {
        title: "11.2. Indemnification by Customer",
        content: [
          "Customer will defend Overbase against any claim by a third party arising from or relating to any Customer Data, any Customer-offered product or service used in connection with the Service and will indemnify and hold harmless Overbase from and against any damages and costs awarded against Overbase or agreed in settlement by Customer (including reasonable attorneys’ fees) resulting from such claim.",
        ],
      },
      {
        title: "11.3. Indemnification Procedures",
        content: [
          "In the event of a potential indemnity obligation under Section 11, the indemnified party will: (a) promptly notify the indemnifying party in writing of the claim, (b) allow the indemnifying party the right to control the investigation, defense and settlement (if applicable) of such claim at the indemnifying party’s sole cost and expense, and (c) upon request of the indemnifying party, provide all necessary cooperation at the indemnifying party’s expense. Failure by the indemnified party to notify the indemnifying party of a claim under Section 11 shall not relieve the indemnifying party of its obligations under Section 11. However, the indemnifying party shall not be liable for any litigation expenses the indemnified party incurred before such notice was given, or for any damages and/or costs resulting from any material prejudice caused by the delay or failure to provide notice to the indemnifying party in accordance with this section. The indemnifying party may not settle any claim that would bind the indemnified party to any obligation (other than payment covered by the indemnifying party or ceasing to use infringing materials) or require any admission of fault by the indemnified party, without the indemnified party’s prior written consent, such consent not to be unreasonably withheld, conditioned or delayed. Any indemnification obligation under Section 11 will not apply if the indemnified party settles or makes any admission with respect to a claim without the indemnifying party’s prior written consent.",
        ],
      },
    ],
  },
  {
    id: "limitation-of-remedies-and-damages",
    title: "Limitation of Remedies and Damages",
    content: [
      "EXCEPT AS TO “EXCLUDED CLAIMS,” TO THE MAXIMUM EXTENT PERMITTED BY LAW, AND NOTWITHSTANDING ANY OTHER PROVISION OF THIS AGREEMENT:",
      "(A) NEITHER PARTY SHALL BE LIABLE TO THE OTHER PARTY FOR ANY LOSS OF USE, LOST OR INACCURATE DATA, INTERRUPTION OF BUSINESS, COSTS OF DELAY, COVER COSTS, LOST PROFITS, OR ANY INDIRECT, SPECIAL, INCIDENTAL, RELIANCE, PUNITIVE, EXEMPLARY OR CONSEQUENTIAL DAMAGES OF ANY KIND, EVEN IF INFORMED OF THE POSSIBILITY OF SUCH DAMAGES IN ADVANCE;",
      "(B) SUBJECT TO SUBSECTION (C) BELOW, EACH PARTY’S TOTAL LIABILITY TO THE OTHER PARTY FOR ALL CLAIMS IN THE AGGREGATE (FOR DAMAGES OR LIABILITY OF ANY TYPE) SHALL NOT EXCEED THE AMOUNT ACTUALLY PAID OR PAYABLE TO OVERBASE IN THE PRIOR 12 MONTHS UNDER THE APPLICABLE ORDER FORM(S) TO WHICH SUCH LIABILITY RELATES (“GENERAL LIABILITY CAP”);",
      "(C) IN THE CASE OF “DATA PROTECTION CLAIMS,” EACH PARTY’S TOTAL LIABILITY TO THE OTHER PARTY FOR ALL CLAIMS IN THE AGGREGATE (FOR DAMAGES OR LIABILITY OF ANY TYPE) SHALL NOT EXCEED TWO TIMES (2X) THE AMOUNT ACTUALLY PAID OR PAYABLE TO OVERBASE IN THE PRIOR TWELVE (12) MONTHS UNDER THE APPLICABLE ORDER FORM(S) TO WHICH SUCH LIABILITY RELATES (“DATA PROTECTION CLAIMS CAP”);",
      "(D) IN NO EVENT SHALL EITHER PARTY BE LIABLE FOR THE SAME EVENT UNDER BOTH THE GENERAL LIABILITY CAP AND THE DATA PROTECTION CLAIMS CAP. SIMILARLY, THOSE CAPS SHALL NOT BE CUMULATIVE; IF A PARTY HAS ONE OR MORE CLAIMS SUBJECT TO THE “GENERAL LIABILITY CAP” AND THE “DATA PROTECTION CLAIMS CAP,” THE MAXIMUM TOTAL LIABILITY FOR ALL CLAIMS IN THE AGGREGATE SHALL NOT EXCEED THE “DATA PROTECTION CLAIMS CAP”;",
      "(E) THE PARTIES AGREE THAT SECTION 12 WILL APPLY REGARDLESS OF THE FORM OF ACTION, WHETHER IN CONTRACT, TORT (INCLUDING NEGLIGENCE), STRICT LIABILITY OR OTHERWISE AND WILL APPLY EVEN IF ANY LIMITED REMEDY SPECIFIED IN THIS AGREEMENT IS FOUND TO HAVE FAILED OF ITS ESSENTIAL PURPOSE; AND",
      "(F) THE APPLICABLE MONETARY CAPS SET FORTH IN SECTION 12 SHALL APPLY, ON AN AGGREGATED BASIS, ACROSS THIS AGREEMENT AND ANY AND ALL SEPARATE AGREEMENT(S) GOVERNING CUSTOMER’S USE OF THE “OVERBASE OFFERINGS” ENTERED INTO BETWEEN OVERBASE.",
    ],
  },
  {
    id: "general-terms",
    title: "General Terms",
    content: [],
    subsections: [
      {
        title: "13.1. Assignment",
        content: [
          "This Agreement will bind and insure to the benefit of each party’s permitted successors and assigns. Neither party may assign this Agreement without the advance written consent of the other party, except that either party may assign this Agreement in its entirety in connection with a merger, reorganization, acquisition, or other transfer of all or substantially all of such party’s assets or voting securities to such party’s successor. Each party shall promptly provide notice of any such assignment. Any attempt to transfer or assign this Agreement except as expressly authorized under this section will be null and void.",
        ],
      },
      {
        title: "13.2. Severability; Interpretation; Conflicts",
        content: [
          "Except as specified in Section 13.3(b) (U.S. Customer) below, if an arbitrator or a court of competent jurisdiction holds any provision of this Agreement to be unenforceable or invalid, that provision will be limited to the minimum extent necessary so that this Agreement will otherwise remain in effect. Section headings are inserted for convenience only and shall not affect interpretation of this Agreement. Except for the DPA and the Security Addendum, each of which shall govern solely with respect to the subject matter therein, this Agreement governs and controls in the event of a conflict with any other ancillary documents or provisions applicable to the Overbase Offerings unless otherwise expressly agreed in writing by the parties.",
        ],
      },
      {
        title: "13.3. Dispute Resolution",
        content: [
          "(a) Generally. Each party agrees that before it seeks any form of legal relief (except for a provisional remedy as explicitly set forth below) it shall provide written notice to the other party of the specific issue(s) in dispute (and reference the relevant provisions of the contract between the parties which are allegedly being breached). Within thirty (30) days after such notice, knowledgeable executives of the parties shall hold at least one meeting (in person or by video- or tele-conference) for the purpose of attempting in good faith, to resolve the dispute. The parties agree to maintain the confidential nature of all disputes and disagreements between them, including, but not limited to, informal negotiations, mediation or arbitration, except as may be necessary to prepare for or conduct these dispute resolution procedures or unless otherwise required by law or judicial decision. The procedures in this Section 13.3(a) (Generally) shall not apply to claims subject to indemnification under Section 11 (Indemnification) or prior to a party seeking a provisional remedy related to claims of misuse, misappropriation or ownership of intellectual property, trade secrets or Confidential Information. Where the Customer is the U.S. Government, and the parties fail to reach agreement on any request for equitable adjustment, claim, appeal, or action arising under or relating to this Agreement, the dispute shall be in accordance with applicable law and will not be subject to the binding arbitration terms set forth in Section 13.3(b) (U.S. Customer) below.",
          "(b) U.S. Customer. Without limiting Section 13.3(a) (Generally) above, if Customer is, or at any time during the term of this Agreement becomes, party to an Order Form having a “ship-to” address located in the United States, then: EACH PARTY (I) AGREES THAT, EXCEPT AS PROVIDED HEREIN, ANY DISPUTES OR CLAIMS ARISING HEREUNDER OR RELATING TO THE OVERBASE OFFERINGS INCLUDING WITHOUT LIMITATION PAYMENT DISPUTES OR DISPUTES UNDER SECTION 11 (INDEMNIFICATION) ABOVE (COLLECTIVELY, “DISPUTES”) WILL BE DETERMINED SOLELY IN BINDING, INDIVIDUAL ARBITRATION PURSUANT TO THE U.S. FEDERAL ARBITRATION ACT AND FEDERAL ARBITRATION LAW AND NOT IN A CLASS, REPRESENTATIVE, OR CONSOLIDATED ACTION OR PROCEEDING (EXCEPT THAT EITHER PARTY MAY ELECT TO PROCEED IN SMALL CLAIMS COURT IF THE DISPUTE QUALIFIES), AND (II) WAIVES THE RIGHT TO A TRIAL BY JURY. Either party may commence an arbitration proceeding by filing a demand for arbitration with the Judicial Arbitration and Mediation Services (“JAMS”). Arbitration of Disputes for total damages: (1) of $250,000 or less will be conducted under the then-applicable JAMS “Streamlined Arbitration Rules & Procedures”; and (2) exceeding $250,000, will be conducted by the then-applicable JAMS “Comprehensive Arbitration Rules & Procedures,” located at https://www.jamsadr.com/, and except as modified by this Agreement. Arbitration hearings will be conducted in the JAMS office nearest Customer’s United States mailing address set forth in the Order Form if initiated and selected by Customer, otherwise in San Francisco County, California, U.S.A. The arbitrator shall have the exclusive authority to decide all issues relating to the interpretation, applicability, enforceability, formation, existence, validity, and scope of the parties’ agreement to arbitrate. Payment of all arbitration filing, administrative, and arbitrator fees will be governed by applicable JAMS rules. If the class action waiver in Section 13.3(b)(I) is found to be unenforceable, then the entirety of this Section 13.3(b) shall be null and void. Notwithstanding the foregoing, the parties agree that a party may seek injunctive or other equitable relief in court to enjoin misuse, misappropriation or ownership of intellectual property, trade secrets or Confidential Information.",
        ],
      },
      {
        title: "13.4. Governing Law; Jurisdiction and Venue",
        content: [
          "This Agreement will be governed by the laws of the State of Delaware, U.S.A. without regard to the conflict of laws. Except with respect to any claims subject to arbitration in accordance with Section 13.3(b) (U.S. Customer), the exclusive jurisdiction and venue for any actions will be the state and federal courts located in New Castle County, Delaware, U.S.A. and Overbase and Customer each irrevocably consent to, and waive any objection to, jurisdiction and venue in such courts.",
        ],
      },
      {
        title: "13.6. Notice",
        content: [
          "Any notice or communication required or permitted under this Agreement will be in writing to the parties at the addresses set forth in this Agreement or at such other address as may be given in writing by either party to the other in accordance with this section and will be deemed to have been received by the addressee upon: (a) personal delivery; (b) the second business day after being mailed or couriered; or (c) the day of sending by email, except for notices of breach (other than for non-payment) or an indemnifiable claim, which for clarity must be made by mail or courier. Email notifications to Overbase shall be to legal@overbase.app.",
        ],
      },
      {
        title: "13.7. Amendments; Waivers",
        content: [
          "No supplement, modification, or amendment of this Agreement will be binding, unless executed in writing by a duly authorized representative of each party to this Agreement, except as expressly set forth herein. No waiver will be implied from conduct or failure to enforce or exercise rights under this Agreement, nor will any waiver be effective unless in a writing signed by a duly authorized representative on behalf of the party claimed to have waived. No terms or conditions stated in a Customer purchase order, vendor onboarding process or web portal, or any other Customer order documentation (excluding Order Forms) shall be incorporated into or form any part of this Agreement, and all such terms or conditions shall be null and void, notwithstanding any language to the contrary therein, whether signed before or after this Agreement.",
        ],
      },
      {
        title: "13.8. Entire Agreement",
        content: [
          "This Agreement is the complete and exclusive statement of the mutual understanding of the parties and supersedes and cancels all previous written and oral agreements and communications relating to the subject matter of this Agreement. Notwithstanding the foregoing, Optional Offerings may be made available for Customer’s use in its sole discretion. Overbase may change and update the Service (in which case Overbase may update the applicable Documentation accordingly), subject to the warranty in Section 8.1 (Service Warranty). For clarity, all URL terms expressly referenced herein include any updates made thereto, as posted to https://www.overabse.app/legal or a successor website designated by Overbase.",
        ],
      },
      {
        title: "13.9. Third-Party Beneficiaries",
        content: [
          "There are no third-party beneficiaries under this Agreement, except to the extent expressly stated in this Agreement.",
        ],
      },
      {
        title: "13.10. Force Majeure",
        content: [
          "Neither party will be liable to the other for any delay or failure to perform any obligation under this Agreement (except for a failure to pay Fees) if the delay or failure results from any cause beyond such party’s reasonable control, including but not limited to acts of God, labor disputes or other industrial disturbances, systemic electrical, telecommunications, or other utility failures, earthquake, storms or other elements of nature, blockages, embargoes, riots, public health emergencies (including pandemics and epidemics), acts or orders of government, acts of terrorism, or war.",
        ],
      },
      {
        title: "13.11. Independent Contractors",
        content: [
          "The parties to this Agreement are independent contractors. There is no relationship of partnership, joint venture, employment, franchise or agency created hereby between the parties. Neither party will have the power to bind the other or incur obligations on the other party’s behalf without the other party’s prior written consent and neither party’s employees are eligible for any form or type of benefits, including, but not limited to, health, life or disability insurance, offered by the other party to its employees.",
        ],
      },
      {
        title: "13.12. Export Control",
        content: [
          "Each party agrees to comply with all export and import laws and regulations, including without limitation, those of the United States, applicable to such party in connection with its respective provision or use of the Service under this Agreement. Without limiting the foregoing, Customer represents and warrants that it: (a) is not listed on, or majority-owned by any entity listed on, any U.S. government list of prohibited or restricted parties; (b) is not located in (or a national of) a country that either is subject to a U.S. government embargo or has been designated by the U.S. government as a “state sponsor of terrorism”; (c) will not (and will not permit any third parties to) access or use the Service in violation of any U.S. export embargo, prohibition or restriction; and (d) will not submit to the Service any information that is controlled under the U.S. International Traffic in Arms Regulations.",
        ],
      },
    ],
  },
  {
    id: "definitions",
    title: "Definitions",
    content: [
      "“Account” means Customer’s account in the applicable Service in which Customer stores and processes Customer Data.",
      "“BAA” means a business associate agreement governing the parties’ respective obligations with respect to any HIPAA Data processed by Customer in the Service in accordance with the terms of this Agreement.",
      "“Client Software” is any desktop client software that is made available to Customer by Overbase for installation on Users’ computers to be used in connection with the applicable Service.",
      "“Confidential Information” means all information that is identified as confidential at the time of disclosure by the Disclosing Party or reasonably should be known by the Receiving Party to be confidential or proprietary due to the nature of the information disclosed and the circumstances surrounding the disclosure. All Customer Data will be deemed Confidential Information of Customer without any marking or further designation. All Overbase Technology and the terms and conditions of this Agreement will be deemed Confidential Information of Overbase without any marking or further designation. Confidential Information shall not, however, include information that the Receiving Party can demonstrate: (a) was rightfully in its possession or known to it prior to receipt of the Confidential Information; (b) is or has become public knowledge through no fault of the Receiving Party; (c) is rightfully obtained by the Receiving Party from a third party without breach of any confidentiality obligation; or (d) is independently developed by employees of the Receiving Party.",
      "“Customer Data” means any data or data files of any type that are uploaded by or on behalf of Customer for storage or processing in the Service.",
      "“Data Protection Claims” means any claims arising from a party’s breach of Section 2.3 (Data Privacy), Section 3 (Security), Section 5 (Confidentiality) and/or the BAA (if any), where such breach results in the unauthorized disclosure of Customer Data, or breach of Section 2.2 (Use Obligations).",
      "“Data Protection Claims Cap” is defined in Section 12 (Limitation of Remedies and Damages).",
      "“Disclosing Party” is defined in Section 5 (Confidentiality).",
      "“Documentation” means Overbase’s technical documentation and usage guides expressly designated by Overbase as applicable to the Service at https://docs.overbase.app.",
      "“DPA” means the Customer Data Processing Addendum, made available at https://www.overbase.app/legal.",
      "“Excluded Claims” means obligations and claims based on: (a) a party’s breach of its obligations in Section 5 (Confidentiality) (but excluding obligations and claims relating to Customer Data); (b) either party’s express obligations under Section 11 (Indemnification); and/or (c) liability which, by law, cannot be limited (e.g., tort claims for gross negligence and intentional misconduct).",
      "“External Offerings” means separate or third-party data, databases, services, offerings or applications that are independent from, but interoperate with the Service, and may be procured or used by Customer.",
      "“Fees” means the fees payable by Customer to Overbase for the applicable Overbase Offerings.",
      "“General Liability Cap” is defined in Section 12 (Limitation of Remedies and Damages).",
      "“HIPAA” means the Health Insurance Portability and Accountability Act, as amended and supplemented.",
      "“HIPAA Data” means any patient, medical or other protected health information regulated by HIPAA or any similar federal or state laws, rules or regulations.",
      "“Optional Offerings” means optional features, functionality or other offerings that Customer may use in connection with or as part of the Service.",
      "“Order Form” means the Overbase ordering document governed by this Agreement that is signed by Overbase and Customer and specifies the Overbase Offerings procured by Customer.",
      "“Payment Dispute” means Customer’s reasonable and good faith dispute over the applicability of certain charges that have not yet been paid by Customer which Customer is diligently cooperating to resolve.",
      "“Preview(s)” means products, features, services, software, regions or cloud providers that Overbase does not yet make generally available, e.g., those that are labeled as “private preview,” “public preview,” “pre-release” or “beta.”",
      "“Receiving Party” is defined in Section 5 (Confidentiality).",
      "“Retrieval Right” is defined in Section 7.3 (Effect of Termination; Customer Data Retrieval).",
      "“Sample Data” means any data (including from third-party sources) provided or made available to Customer by Overbase solely for Customer’s internal testing, evaluation, and other non-production use of the Service during the Subscription Term, which Overbase may delete or require Customer to cease using at any time upon advance notice.",
      "“Security Addendum” means the Overbase Security Addendum, made available at https://www.overbase.app/legal.",
      "“Service” means the generally available software-as-a-service offering hosted by or on behalf of Overbase and ordered by or for Customer as set forth in an Order Form.",
      "“Overbase” means Overbase Inc.",
      "“Overbase Offering(s)” means the Service and any support and other ancillary services (including, without limitation, services to prevent or address service or technical problems) provided by Overbase.",
      "“Overbase Technology” means the Service, Documentation, Client Software, and any and all related and underlying technology and documentation in any Overbase Offerings; and any derivative works, modifications, or improvements of any of the foregoing.",
      "“Subscription Term” means the period of time during which Customer is authorized to access the relevant Overbase Offering(s), as specified in the applicable Order Form.",
      "“Taxes” means taxes, levies, duties, tariffs, or similar governmental assessments of any nature, including, for example, any sales, use, GST, value-added, withholding, or similar taxes, whether domestic or foreign, or assessed by any jurisdiction, but excluding any taxes based on net income, property, or employees of Overbase.",
      "“Usage Data” means usage and operations data in connection with the Customer’s use of the Service, including query logs and metadata (e.g., object definitions and properties).",
      "“User” means the persons designated and granted access to the Service by or on behalf of Customer.",
      "“VAT/GST Registration Number” means the value added tax/GST registration number of the business location(s) where Customer is legally registered and the ordered services are used for business use.",
    ],
  },
];
