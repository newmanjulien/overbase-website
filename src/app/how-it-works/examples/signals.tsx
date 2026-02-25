import Image from "next/image";
import type { PreviewSignal } from "@/data/examples/types";

export type { PreviewSignal, PreviewSignalSource } from "@/data/examples/types";

export function Signals({
  id,
  signals,
}: {
  id: string;
  signals: PreviewSignal[];
}) {
  if (signals.length === 0) {
    return null;
  }

  return (
    <div
      id={id}
      className="mt-4 flex flex-col divide-y divide-gray-100 overflow-hidden rounded-xl bg-white border border-gray-100"
    >
      {signals.map((signal) => (
        <div key={signal.id} className="group w-full px-6 py-5">
          <h3 className="text-sm text-gray-900">{signal.title}</h3>
          <p className="mt-2 text-xs text-gray-400">{signal.summary}</p>
          <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-gray-500">
            <div className="flex items-center -space-x-2">
              {signal.sources.map((source) => (
                <div
                  key={source.name}
                  className="h-6 w-6 overflow-hidden rounded-full border border-gray-200 bg-gray-50"
                >
                  <Image
                    src={source.logo}
                    alt={`${source.name} logo`}
                    width={24}
                    height={24}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
            <span>
              Sources: {signal.sources.map((source) => source.name).join(" & ")}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
