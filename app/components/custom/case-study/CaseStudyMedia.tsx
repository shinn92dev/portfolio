import { CaseStudyFigure } from "./CaseStudyPrimitives";

import type { ProjectMedia, ProjectMediaOrientation } from "@/contents/types";

interface CaseStudyMediaItemProps {
  media: ProjectMedia;
  priority?: boolean;
}

interface CaseStudyMediaGalleryProps {
  media: ProjectMedia[];
}

const MEDIA_ASPECT_CLASS: Record<ProjectMediaOrientation, string> = {
  wide: "aspect-video",
  landscape: "aspect-[16/10]",
  portrait: "aspect-[451/907]",
};

const MEDIA_WIDTH_CLASS: Record<ProjectMediaOrientation, string> = {
  wide: "w-full",
  landscape: "w-full",
  portrait: "mx-auto w-full max-w-md",
};

export const CaseStudyMediaItem = ({
  media,
  priority = false,
}: CaseStudyMediaItemProps) => {
  const aspectClass = MEDIA_ASPECT_CLASS[media.orientation];
  const widthClass = MEDIA_WIDTH_CLASS[media.orientation];

  return (
    <div className={widthClass}>
      <CaseStudyFigure label={media.label} caption={media.caption}>
        <div
          className={[
            "bg-image relative w-full overflow-hidden",
            aspectClass,
          ].join(" ")}
        >
          {media.kind === "image" ? (
            <img
              src={media.src}
              alt={media.alt}
              loading={priority ? "eager" : "lazy"}
              fetchPriority={priority ? "high" : "auto"}
              className="h-full w-full object-contain"
            />
          ) : (
            <video
              controls
              playsInline
              preload="metadata"
              poster={media.poster}
              aria-label={media.alt}
              className="h-full w-full bg-black object-contain"
            >
              <source src={media.src} type="video/mp4" />
              Your browser does not support embedded video.
            </video>
          )}
        </div>
      </CaseStudyFigure>
    </div>
  );
};

export const CaseStudyMediaGallery = ({
  media,
}: CaseStudyMediaGalleryProps) => {
  return (
    <div className="mt-14 grid gap-x-8 gap-y-14 md:grid-cols-2 sm:mt-18 lg:mt-24 lg:gap-y-20">
      {media.map((item) => (
        <div
          key={`${item.kind}-${item.src}`}
          className={
            item.orientation === "portrait" ? "md:col-span-1" : "md:col-span-2"
          }
        >
          <CaseStudyMediaItem media={item} />
        </div>
      ))}
    </div>
  );
};
