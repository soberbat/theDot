import { MutableRefObject } from "react";

const rootMargin = "-10% 0px -90% 0px";

export default function DetectIntersect(
  setActiveBlock: React.Dispatch<React.SetStateAction<number | null>>,
  children: HTMLCollection
) {
  const targets = Array.from(children);

  let callback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      const id = parseInt(entry.target.id);
      if (entry.isIntersecting) {
        setActiveBlock((prevIdx) => (prevIdx !== id ? id + 1 : id + 1));
      } else {
        if (id === 0) {
          setActiveBlock(0);
        }
      }
    });
  };

  let observer = new IntersectionObserver(callback, { rootMargin });

  targets.forEach((target) => observer.observe(target));

  return { targets, observer };
}
