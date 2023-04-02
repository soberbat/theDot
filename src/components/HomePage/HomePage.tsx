import React, { useEffect, useRef, useState } from "react";
import { HeaderWithRef as Header } from "../Header/Header";
import Products from "../Product/Products";

export default function HomePage() {
  const headerRef = useRef<any>(null);
  const [activeProduct, setActiveProduct] = useState<number>(0);

  const handleProductChange = (i: number) => {
    setActiveProduct(i);
  };

  useEffect(() => {
    let headerRect = headerRef.current.getBoundingClientRect();
    let targets = [...(document.getElementsByClassName("block") as any)];

    let cb = (entries: any) => {
      entries.forEach((entry: any) => {
        let isoverlap = entry.boundingClientRect.y <= headerRect.bottom + 100;
        if (isoverlap) {
          const num = parseInt(entry.target.id);
          setActiveProduct((index) => (index !== num ? num + 1 : num + 1));
        }
      });
    };

    let Iobserver = new IntersectionObserver(cb, {});
    targets.forEach((target) => Iobserver.observe(target));

    return () => {
      targets.forEach((target) => Iobserver.unobserve(target));
    };
  }, []);

  return (
    <div className="relative w-screen h-screen bg-slate-300">
      <Header ref={headerRef} />
      <Products
        activeProduct={activeProduct}
        handleProductChange={handleProductChange}
      />
    </div>
  );
}
