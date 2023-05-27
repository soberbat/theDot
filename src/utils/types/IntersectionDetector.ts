export default function DetectIntersect(
  headerRef: any,
  activeProductChange: React.Dispatch<React.SetStateAction<number | null>>
) {
  let headerRect = headerRef.current.getBoundingClientRect();
  let targets = [...(document.getElementsByClassName("block") as any)];

  let cb = (entries: any) => {
    entries.forEach((entry: any) => {
      let isoverlap = entry.boundingClientRect.y <= headerRect.bottom - 5;
      if (isoverlap) {
        const num = parseInt(entry.target.id);
        activeProductChange((index) => (index !== num ? num + 1 : num + 1));
      }
    });
  };

  let Iobserver = new IntersectionObserver(cb, {});
  targets.forEach((target) => Iobserver.observe(target));

  return { targets, Iobserver };
}
