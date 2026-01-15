import { SENDER } from "./lib/types";
import type { QuestionVariant, ThreadAnswer, Id } from "./lib/types";

// Mock Data
export const mockQuestion: QuestionVariant = {
  _id: "mock_question_id" as Id<"questions">,
  _creationTime: Date.now(),
  privacy: "team",

  // Derived fields
  displayContent:
    "Which deals from next quarter could we pull forward if we gave them a discount? Focus on those in advanced negotiation or where there's a strong relationship with the AE or with our business. I'm also mostly interested in deals which don't show up in my CRM dashboard",
  askedDate: "Dec 15, 2025",
  askedTimestamp: Date.now(),
  displayPrivacy: "team",
  isRecurring: false,
  variant: "answered",
  tableData: [],
};

export const mockAnswers: ThreadAnswer[] = [
  // First abstract answer = the question itself
  {
    _id: "mock_q_answer_id",
    sender: SENDER.USER,
    content:
      "Which deals from next quarter could we pull forward if we gave them a discount? Focus on those in advanced negotiation or where there's a strong relationship with the AE or with our business. I'm also mostly interested in deals which don't show up in my CRM dashboard",
    privacy: "team",
    attachedKpis: [],
  },
  // The response from Overbase
  {
    _id: "mock_response_id",
    sender: SENDER.OVERBASE,
    content:
      "We identified 68 deals with a projected value of +$18,000,000. 1/2 of them likely show up already in your CRM dashboards. 1/2 are likely not yet on your radar. There are 12 EMEA deals, 16 APAC deals and 40 AMER deals",
    privacy: "team",
    tableData: [
      {
        column1: "Description",
        column2: "Account name",
        column3: "Data sources",
        column4: "AE",
        column5: "Salesforce opportunity",
      },
      {
        column1: "Champion asked about discount",
        column2: "Umbrella",
        column3: "Gong, Outlook",
        column4: "Cindy Li",
        column5:
          "acme.lightning.force.com/lightning/r/Opportunity/006Hs00001a2bCdEF/view",
      },
      {
        column1: "Champion asked about discount",
        column2: "Initech",
        column3: "Gong, Outlook",
        column4: "James Randall",
        column5:
          "acme.lightning.force.com/lightning/r/Opportunity/006Hs00001x7yZaBC/view",
      },
      {
        column1: "AE worked with this buyer before",
        column2: "Globex",
        column3: "Gong, Salesforce",
        column4: "James Randall",
        column5:
          "acme.lightning.force.com/lightning/r/Opportunity/006Hs00001m4nPqRS/view",
      },
    ],
  },
  // Follow-up question from user
  {
    _id: "mock_followup_q_id",
    sender: SENDER.USER,
    content:
      "Focus only on AMER deals. Net new +$200k or renewals +$100k. And find deals which would be a little harder to close fast. But which I might still be able to pull forward if I called the buyer myself. For each deal you find, ask the AE what they think and tell me",
    privacy: "team",
    attachedKpis: [],
  },
  // Second Overbase response
  {
    _id: "mock_response_id_2",
    sender: SENDER.OVERBASE,
    content:
      "These deals are worth ~$10,000,000. I'll flag more when we gather comments from the AEs who haven't yet answered. Respond to let me know if I should be solliciting the AEs more aggressively",
    privacy: "team",
    tableData: [
      {
        column1: "Account name",
        column2: "AE's name",
        column3: "AE's comments",
        column4: "Value",
        column5: "Salesforce opportunity",
      },
      {
        column1: "Acme Corp",
        column2: "Sarah Chen",
        column3:
          "Strong relationship with VP of Engineering. They've been waiting on budget approval since Q3.",
        column4: "$285,000",
        column5:
          "acme.lightning.force.com/lightning/r/Opportunity/006Hs00001k8pLmNO/view",
      },
      {
        column1: "Stark Industries",
        column2: "Michael Torres",
        column3:
          "Decision maker is on vacation until Jan 20. I'd wait until then to reach out.",
        column4: "$450,000",
        column5:
          "acme.lightning.force.com/lightning/r/Opportunity/006Hs00001r3sQtUV/view",
      },
      {
        column1: "Wayne Enterprises",
        column2: "Jennifer Park",
        column3:
          "They're evaluating a competitor but I think we can win if we offer multi-year pricing.",
        column4: "$320,000",
        column5:
          "acme.lightning.force.com/lightning/r/Opportunity/006Hs00001w5xYzAB/view",
      },
    ],
  },
];
