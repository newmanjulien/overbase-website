import { useState } from "react";
import { Play } from "lucide-react";

export function Curious({}) {
  const episodes = [
    {
      id: 1,
      title: "David Kenny, CEO at Nielsen",
      thumbnail: "kenny.png",
      src: "kenny.mp4",
    },
    {
      id: 2,
      title: "Dylan Field, CEO at Figma",
      thumbnail: "field.png",
      src: "field.mp4",
    },
    {
      id: 3,
      title: "Mark Roberge, CRO at Hubspot",
      thumbnail: "roberge.png",
      src: "roberge.mp4",
    },
    {
      id: 4,
      title: "Arthur Sadoun, CEO at Publicis",
      thumbnail: "sadoun.png",
      src: "sadoun.mp4",
    },
    {
      id: 5,
      title: "Nick Mehta, CEO at Gainsight",
      thumbnail: "mehta.png",
      src: "mehta.mp4",
    },
  ];

  const [playing, setPlaying] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="px-6 md:px-12 lg:px-24 pt-32 pb-20 max-w-7xl mx-auto text-center">
        <h1 className="text-7xl text-gray-900 text-medium mb-5 mt-3">
          Curious Leadership
        </h1>
        <p className="text-xl text-gray-600 text-medium leading-relaxed">
          Roundtable discussions with execs from the best businesses
        </p>
      </section>

      {/* Quotes Section */}
      <section className="px-6 md:px-12 lg:px-24 py-4 max-w-7xl mx-auto">
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent transform -translate-x-1/2" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            <div className="text-center md:text-right space-y-6">
              <div className="inline-block">
                <svg
                  className="w-12 h-12 text-gray-300 mb-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-2xl text-gray-900 leading-tight">
                Wisdom begins in wonder
              </p>
              <div className="flex items-center justify-center md:justify-end gap-3">
                <div className="h-px w-12 bg-gray-900" />
                <p className="text-lg text-gray-600 tracking-wide">Socrates</p>
              </div>
            </div>
            <div className="text-center md:text-left space-y-6">
              <div className="inline-block">
                <svg
                  className="w-12 h-12 text-gray-300 mb-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-2xl text-gray-900 leading-tight">
                The important thing is not to stop questioning
              </p>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <div className="h-px w-12 bg-gray-900" />
                <p className="text-lg text-gray-600 tracking-wide">Einstein</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Grid */}
      <section className="px-6 md:px-12 lg:px-24 py-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {episodes.map((episode) => (
            <div key={episode.id} className="group cursor-pointer">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-900 shadow-lg">
                {playing === episode.id ? (
                  <video
                    src={episode.src}
                    controls
                    autoPlay
                    className="w-full h-full object-cover"
                    onEnded={() => setPlaying(null)}
                  />
                ) : (
                  <>
                    <img
                      src={episode.thumbnail}
                      alt={episode.title}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
                    <div
                      className="absolute inset-0 flex items-center justify-center"
                      onClick={() => setPlaying(episode.id)}
                    >
                      <div className="w-16 h-16 rounded-full bg-white/95 flex items-center justify-center shadow-2xl transform transition-all duration-300 group-hover:scale-110">
                        <Play
                          className="w-7 h-7 text-gray-900 ml-1"
                          fill="currentColor"
                        />
                      </div>
                    </div>
                  </>
                )}
              </div>
              <p className="mt-4 text-lg text-gray-900 text-center">
                {episode.title}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
