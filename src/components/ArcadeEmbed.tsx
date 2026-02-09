"use client";

import { useEffect, useRef } from "react";

export function ArcadeEmbed() {
  const arcadeIframeRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    function onArcadeIframeMessage(e: MessageEvent) {
      if (e.origin !== "https://demo.arcade.software" || !e.isTrusted) return;

      const arcadeIframe = arcadeIframeRef.current;
      if (!arcadeIframe || !arcadeIframe.contentWindow) return;

      if (e.data?.event === "arcade-init") {
        arcadeIframe.contentWindow.postMessage(
          { event: "register-popout-handler" },
          "*"
        );
      }

      if (e.data?.event === "arcade-popout-open") {
        arcadeIframe.style.position = "fixed";
        arcadeIframe.style.zIndex = "9999999";
      }

      if (e.data?.event === "arcade-popout-close") {
        arcadeIframe.style.position = "absolute";
        arcadeIframe.style.zIndex = "auto";
      }
    }

    window.addEventListener("message", onArcadeIframeMessage);

    const arcadeIframe = arcadeIframeRef.current;
    if (arcadeIframe?.contentWindow) {
      arcadeIframe.contentWindow.postMessage(
        { event: "register-popout-handler" },
        "*"
      );
    }

    return () => {
      if (arcadeIframe?.contentWindow) {
        arcadeIframe.contentWindow.postMessage(
          { event: "unregister-popout-handler" },
          "*"
        );
      }

      window.removeEventListener("message", onArcadeIframeMessage);
    };
  }, []);

  return (
    <div
      style={{
        position: "relative",
        paddingBottom: "calc(56.18055555555556% + 41px)",
        height: "0",
        width: "100%",
        borderRadius: "24px",
        overflow: "hidden",
      }}
    >
      <iframe
        ref={arcadeIframeRef}
        src="https://demo.arcade.software/orE0tJhNRbfFQayloY9h?embed&embed_mobile=tab&embed_desktop=modal&show_copy_link=true"
        title="Send a message to the Overbase app in Slack"
        frameBorder="0"
        loading="lazy"
        allowFullScreen
        allow="clipboard-write"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          colorScheme: "light",
          borderRadius: "24px",
        }}
      />
    </div>
  );
}
