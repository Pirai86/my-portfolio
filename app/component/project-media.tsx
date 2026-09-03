import Image from "next/image";
import type { ProjectMedia } from "@/app/data/data";

export function mediaLabel(media?: ProjectMedia) {
  if (!media) return null;
  if (media.kind === "image") return "Photo";
  if (media.kind === "youtube") return "YouTube";
  return "Video";
}

export default function ProjectMediaPlayer({
  media,
  title,
  variant = "preview",
}: {
  media: ProjectMedia;
  title: string;
  variant?: "preview" | "article";
}) {
  const frame =
    variant === "preview"
      ? "aspect-video w-[28rem] max-w-[min(28rem,calc(100vw-3rem))]"
      : "aspect-video w-full";

  if (media.kind === "image") {
    return (
      <div className={`relative overflow-hidden bg-white ${frame}`}>
        <Image
          src={media.src}
          alt={media.alt}
          fill
          className="object-contain"
          sizes={variant === "preview" ? "448px" : "90vw"}
        />
      </div>
    );
  }

  if (media.kind === "video") {
    return (
      <video
        controls
        playsInline
        preload="metadata"
        title={title}
        className={`${frame} bg-black`}
      >
        <source src={media.src} type={media.mime} />
        Your browser does not support this video.
      </video>
    );
  }

  return (
    <iframe
      src={`https://www.youtube-nocookie.com/embed/${media.videoId}`}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      className={`${frame} border-0 bg-black`}
    />
  );
}
