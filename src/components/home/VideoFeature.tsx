"use client";

import { useEffect, useRef, useState } from "react";
import { ExternalLink, Play } from "lucide-react";

interface VideoFeatureProps {
  videoId: string;
  title: string;
}

export function VideoFeature({ videoId, title }: VideoFeatureProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [shouldPlay, setShouldPlay] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node || shouldPlay) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldPlay(true);
          observer.disconnect();
        }
      },
      { threshold: 0.45 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [shouldPlay]);

  const watchUrl = `https://www.youtube.com/watch?v=${videoId}`;
  const baseUrl = `https://www.youtube.com/embed/${videoId}?mute=1&playsinline=1&rel=0`;
  const autoplayUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&playsinline=1&rel=0`;

  return (
    <div className="space-y-4">
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden rounded-[1.5rem] border border-[hsl(var(--nav-theme)/0.24)] bg-black"
        style={{ paddingBottom: "56.25%" }}
      >
        <iframe
          className="absolute left-0 top-0 h-full w-full"
          src={shouldPlay ? autoplayUrl : baseUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />

        {!shouldPlay && (
          <button
            type="button"
            onClick={() => setShouldPlay(true)}
            className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/60 via-black/15 to-black/40 transition-colors hover:bg-black/35"
            aria-label={`Play ${title}`}
          >
            <span className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-black/60 px-5 py-3 text-sm font-semibold text-white backdrop-blur">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[hsl(var(--nav-theme))]">
                <Play className="ml-0.5 h-4 w-4 fill-current" />
              </span>
              Play Trailer
            </span>
          </button>
        )}
      </div>

      <div className="flex justify-center">
        <a
          href={watchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-white/10 hover:text-foreground"
        >
          Watch on YouTube
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
