import { useEffect } from "react";
import type { RefObject } from "react";

const SELECTORS = ["title", "roles", "techs", "description", "footer"];

export const useSyncCardHeights = (containerRef: RefObject<HTMLElement>) => {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const syncHeights = () => {
      SELECTORS.forEach((selector) => {
        const elements = container.querySelectorAll<HTMLElement>(
          `[data-section="${selector}"]`
        );
        elements.forEach((el) => {
          el.style.minHeight = "0";
        });
      });

      requestAnimationFrame(() => {
        SELECTORS.forEach((selector) => {
          const elements = container.querySelectorAll<HTMLElement>(
            `[data-section="${selector}"]`
          );
          if (elements.length === 0) return;

          // 모든 요소의 높이를 측정하여 가장 높은 값을 찾음
          let maxHeight = 0;
          elements.forEach((el) => {
            if (el.offsetHeight > maxHeight) {
              maxHeight = el.offsetHeight;
            }
          });

          elements.forEach((el) => {
            el.style.minHeight = `${maxHeight}px`;
          });
        });
      });
    };

    const resizeObserver = new ResizeObserver(syncHeights);
    resizeObserver.observe(container);

    const images = container.querySelectorAll("img");
    let loadedImages = 0;
    const handleImageLoad = () => {
      loadedImages++;
      if (loadedImages === images.length) {
        syncHeights();
      }
    };
    if (images.length > 0) {
      images.forEach((img) => {
        if (img.complete) {
          handleImageLoad();
        } else {
          img.addEventListener("load", handleImageLoad);
        }
      });
    } else {
      syncHeights();
    }

    return () => {
      resizeObserver.disconnect();
      images.forEach((img) => img.removeEventListener("load", handleImageLoad));
    };
  }, [containerRef]);
};
