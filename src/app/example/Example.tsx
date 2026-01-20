"use client";

import { useState, useMemo } from "react";
import FollowupBar from "./components/FollowupBar";
import AnswerCard from "./components/AnswerCard";
import LLMToggle, { type LLMMode } from "./components/LLMToggle";
import { deriveThread } from "./lib/thread";
import * as genericData from "./genericData";
import * as personalData from "./personalData";

export default function Example() {
  const [llmMode, setLlmMode] = useState<LLMMode>("generic");

  // Select data based on LLM mode
  const { mockQuestion, mockAnswers } =
    llmMode === "generic" ? genericData : personalData;

  // Derive the thread from selected data
  const thread = useMemo(
    () => deriveThread(mockQuestion, mockAnswers),
    [mockQuestion, mockAnswers],
  );

  // Hardcoded or prop-driven URLs
  const userAvatarUrl =
    "https://opulent-goat-242.convex.cloud/api/storage/cc6a02c3-0b1a-4029-9f51-a90fd8a4481e";
  const overbaseIconUrl =
    "https://opulent-goat-242.convex.cloud/api/storage/7b74cd3f-0f8a-4535-a4b4-edc4cf9ff6bb";

  return (
    <div className="h-full w-full">
      <div className="max-w-7xl mx-auto py-8 px-4">
        <div className="flex gap-8">
          {/* Main content area */}
          <div className="flex-1 max-w-3xl space-y-2">
            {thread.map((card) => {
              switch (card.type) {
                case "question":
                  return (
                    <AnswerCard
                      key="question"
                      type="question"
                      content={card.content}
                      date={card.date}
                      privacy={card.privacy}
                      userAvatarUrl={userAvatarUrl}
                      overbaseIconUrl={overbaseIconUrl}
                    />
                  );

                case "response":
                  return (
                    <AnswerCard
                      key={card.answerId}
                      type="response"
                      answerId={card.answerId}
                      sender={card.sender}
                      content={card.content}
                      privacy={card.privacy}
                      tableData={card.tableData}
                      userAvatarUrl={userAvatarUrl}
                      overbaseIconUrl={overbaseIconUrl}
                    />
                  );
              }
            })}

            <FollowupBar userAvatarUrl={userAvatarUrl} />
          </div>

          {/* LLM Mode Toggle - Top Right */}
          <div className="flex-shrink-0 sticky top-8 self-start">
            <LLMToggle mode={llmMode} onModeChange={setLlmMode} />
          </div>
        </div>
      </div>
    </div>
  );
}
