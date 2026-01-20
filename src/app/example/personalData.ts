import { SENDER } from "./lib/types";
import type { Question, ThreadAnswer } from "./lib/types";

// Personal LLM Mock Data - More detailed and personalized responses
export const mockQuestion: Question = {
  displayContent:
    "Which deals from next quarter could we pull forward if we gave them a discount? Focus on those in advanced negotiation or where there's a strong relationship with the AE or with our business. I'm also mostly interested in deals which don't show up in my CRM dashboard",
  askedDate: "Dec 15, 2025",
  displayPrivacy: "team",
};

export const mockAnswers: ThreadAnswer[] = [
  // The response from Overbase with Personal LLM
  {
    _id: "personal_response_id",
    sender: SENDER.OVERBASE,
    content:
      "These are all AMER deals. Net new +$200k or renewals +$100k. They're worth ~$40,000,000 and many of them come from the Hubspot instance which the Chicago office uses and which hasn't been migrated to Salesforce yet. I gathered input from all the AEs who work on the deals",
    privacy: "team",
    tableData: [
      {
        column1: "Account name",
        column2: "Type",
        column3: "Description",
        column4: "AE's comments",
        column5: "Salesforce opportunity",
      },
      {
        column1: "Globex",
        column2: "Net new",
        column3: "The CEO is onboard and pushing this deal forward",
        column4:
          "Sarah Chen says: Strong relationship with VP of Engineering. They've been waiting on budget approval since Q3.",
        column5:
          "acme.lightning.force.com/lightning/r/Opportunity/006Hs00001k8pLmNO/view",
      },
      {
        column1: "Stark Industries",
        column2: "Net new",
        column3: "The buyer used us at a previous employer",
        column4:
          "Michael Torres says: Decision maker is on vacation until Jan 20. I'd wait until then to reach out.",
        column5: "app.hubspot.com/contacts/44385712/deal/19847362501",
      },
      {
        column1: "Wayne Enterprises",
        column2: "Renewal",
        column3: "Successful account which is likely to renew",
        column4:
          "Jennifer Park says: They're evaluating a competitor but I think we can win if we offer multi-year pricing.",
        column5:
          "acme.lightning.force.com/lightning/r/Opportunity/006Hs00001w5xYzAB/view",
      },
    ],
  },
];
