"use client";

import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";

// --- Tipos ---
interface Product {
  id: number;
  img: string;
  name: string;
  rating: number; // 0-5
  reviews: number;
  price: string;
}

interface CarruselEcomerceProps {
  products?: Product[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

// --- Datos de ejemplo (reemplaza con tus productos reales) ---
const PRODUCTS: Product[] = [
  {
    id: 1,
    img: "/images/ecomerce13.jpg",
    name: "Polo urban solo",
    rating: 4,
    reviews: 30,
    price: "129.00",
  },
  {
    id: 2,
    img: "/images/ecomerce12.jpg",
    name: "Polo urban solo",
    rating: 4,
    reviews: 30,
    price: "129.00",
  },
  {
    id: 3,
    img: "/images/ecomerce11.jpg",
    name: "Polo urban solo",
    rating: 4,
    reviews: 30,
    price: "129.00",
  },
  {
    id: 4,
    img: "/images/ecomerce10.jpg",
    name: "Polo urban solo",
    rating: 4,
    reviews: 30,
    price: "129.00",
  },
  {
    id: 5,
    img: "/images/ecomerce13.jpg",
    name: "Polo urban solo",
    rating: 4,
    reviews: 30,
    price: "129.00",
  },
  {
    id: 6,
    img: "/images/ecomerce12.jpg",
    name: "Polo urban solo",
    rating: 4,
    reviews: 30,
    price: "129.00",
  },
];

const COLORS = ["bg-blue-500", "bg-yellow-500", "bg-red-500", "bg-green-500"];

function Star({ filled }: { filled: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`h-5 w-5 ${filled ? "text-yellow-500" : "text-slate-300"}`}
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="flex flex-col gap-3 px-3">
      <figure className="relative w-full h-auto overflow-hidden rounded-lg group">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
          draggable={false}
        />
      </figure>
      <div className="flex flex-col gap-2">
        <a href="" className="text-xl font-bold uppercase">
          {product.name}
        </a>
        <div className="flex flex-row gap-3 items-center">
          <ul className="flex flex-row gap-0.5 items-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <li key={i}>
                <Star filled={i < product.rating} />
              </li>
            ))}
          </ul>
          <p>({product.reviews})</p>
        </div>
        <div className="flex flex-row gap-3 items-center">
          <p>S/ {product.price}</p>
          <span>PEN</span>
        </div>
        <div className="flex flex-row gap-3 items-center pt-3">
          {COLORS.map((c) => (
            <a
              key={c}
              href=""
              className={`${c} rounded-full block h-6 w-6 border-4 border-white hover:border-black transition-colors cursor-pointer`}
            >
              &nbsp;
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function CarruselEcomerce({
  products = PRODUCTS,
  autoPlay = true,
  autoPlayInterval = 4000,
}: CarruselEcomerceProps) {
  // Cuántos items se ven a la vez, según el ancho de pantalla
  const [visibleCount, setVisibleCount] = useState<number>(4);
  const isHovering = useRef<boolean>(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  // Detecta el breakpoint actual (lg: 4, sm/md: 2, móvil: 1)
  useEffect(() => {
    const getVisible = (): number => {
      const w = window.innerWidth;
      if (w >= 1024) return 4;
      if (w >= 640) return 2;
      return 1;
    };
    const handleResize = () => setVisibleCount(getVisible());
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Repite los productos si hay menos items que "visibleCount" para que nunca se vea un hueco
  const baseItems = useMemo<Product[]>(() => {
    if (products.length === 0) return [];
    let arr: Product[] = [...products];
    let guard = 0;
    while (arr.length < visibleCount && guard < 20) {
      arr = [...arr, ...products];
      guard++;
    }
    return arr;
  }, [products, visibleCount]);

  // Lista con clones al inicio y al final -> loop infinito real
  const displayItems = useMemo(() => {
    if (baseItems.length === 0) return [];
    const startClones = baseItems.slice(-visibleCount);
    const endClones = baseItems.slice(0, visibleCount);
    return [...startClones, ...baseItems, ...endClones].map((item, i) => ({
      ...item,
      _key: `${item.id}-${i}`,
    }));
  }, [baseItems, visibleCount]);

  const realLength = baseItems.length;

  // "position" = índice del primer item visible dentro de displayItems.
  // La zona "real" (sin clones) va de [visibleCount, visibleCount + realLength - 1]
  const [position, setPosition] = useState<number>(visibleCount);
  const [withTransition, setWithTransition] = useState<boolean>(true);

  // Cada vez que cambian los breakpoints o los items, reseteamos sin animación
  useEffect(() => {
    setWithTransition(false);
    setPosition(visibleCount);
    const id = requestAnimationFrame(() => setWithTransition(true));
    return () => cancelAnimationFrame(id);
  }, [visibleCount, realLength]);

  const next = useCallback(() => {
    setWithTransition(true);
    setPosition((p) => p + 1);
  }, []);

  const prev = useCallback(() => {
    setWithTransition(true);
    setPosition((p) => p - 1);
  }, []);

  const goToIndex = useCallback(
    (index: number) => {
      setWithTransition(true);
      setPosition(visibleCount + index);
    },
    [visibleCount],
  );

  // Al terminar la transición, si quedamos en zona de clones, saltamos sin animación al equivalente real
  const handleTransitionEnd = useCallback(() => {
    if (realLength === 0) return;
    if (position >= visibleCount + realLength) {
      setWithTransition(false);
      setPosition((p) => p - realLength);
    } else if (position < visibleCount) {
      setWithTransition(false);
      setPosition((p) => p + realLength);
    }
  }, [position, realLength, visibleCount]);

  // Re-habilita la transición en el siguiente frame tras un salto instantáneo
  useEffect(() => {
    if (!withTransition) {
      const id = requestAnimationFrame(() => setWithTransition(true));
      return () => cancelAnimationFrame(id);
    }
  }, [withTransition]);

  // Auto-scroll continuo
  useEffect(() => {
    if (!autoPlay || realLength <= 1) return;
    intervalRef.current = setInterval(() => {
      if (!isHovering.current) next();
    }, autoPlayInterval);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [autoPlay, autoPlayInterval, realLength, next]);

  const activeIndex =
    realLength > 0
      ? (((position - visibleCount) % realLength) + realLength) % realLength
      : 0;

  const itemWidthPercent = 100 / visibleCount;
  const translatePercent = position * itemWidthPercent;

  if (displayItems.length === 0) return null;

  return (
    <div
      className="w-full"
      onMouseEnter={() => (isHovering.current = true)}
      onMouseLeave={() => (isHovering.current = false)}
    >
      {/* Viewport */}
      <div className="relative overflow-hidden">
        <div
          ref={trackRef}
          className={`flex ${withTransition ? "transition-transform duration-500 ease-out" : ""}`}
          style={{ transform: `translateX(-${translatePercent}%)` }}
          onTransitionEnd={handleTransitionEnd}
        >
          {displayItems.map((product) => (
            <div
              key={product._key}
              style={{ width: `${itemWidthPercent}%` }}
              className="flex-shrink-0"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Flechas */}
        {realLength > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Anterior"
              className="hidden sm:flex absolute left-1 top-1/2 -translate-y-1/2 h-9 w-9 items-center justify-center rounded-full bg-white/90 shadow hover:bg-white transition-colors cursor-pointer"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                <path
                  d="M15 6l-6 6 6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              onClick={next}
              aria-label="Siguiente"
              className="hidden sm:flex absolute right-1 top-1/2 -translate-y-1/2 h-9 w-9 items-center justify-center rounded-full bg-white/90 shadow hover:bg-white transition-colors cursor-pointer"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                <path
                  d="M9 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Bullets */}
      {realLength > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {baseItems.map((_, i) => (
            <button
              key={i}
              onClick={() => goToIndex(i)}
              aria-label={`Ir al item ${i + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                i === activeIndex
                  ? "w-6 bg-black"
                  : "w-2.5 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
