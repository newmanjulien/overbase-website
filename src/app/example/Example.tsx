"use client";

import FollowupBar from "./components/FollowupBar";
import AnswerCard from "./components/AnswerCard";
import { deriveThread } from "./lib/thread";
import { mockQuestion, mockAnswers } from "./data";

export default function Example() {
  // Derive the thread from static data
  const thread = deriveThread(mockQuestion, mockAnswers);

  // Hardcoded or prop-driven URLs
  const userAvatarUrl =
    "https://opulent-goat-242.convex.cloud/api/storage/cc6a02c3-0b1a-4029-9f51-a90fd8a4481e";
  const overbaseIconUrl =
    "https://opulent-goat-242.convex.cloud/api/storage/7b74cd3f-0f8a-4535-a4b4-edc4cf9ff6bb";

  return (
    <div className="h-full w-full">
      <div className="max-w-5xl mx-auto py-8">
        <div className="space-y-2">
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
      </div>
    </div>
  );
}
