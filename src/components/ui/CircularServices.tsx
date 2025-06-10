"use client";
import React, {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
} from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

interface Service {
  title: string;
  description: string;
  icon: JSX.Element;
  shortDesc: string;
  bgColor: string;
  iconColor: string;
}

interface CircularServicesProps {
  autoplay?: boolean;
}

function calculateGap(width: number) {
  const minWidth = 1024;
  const maxWidth = 1456;
  const minGap = 60;
  const maxGap = 86;
  if (width <= minWidth) return minGap;
  if (width >= maxWidth)
    return Math.max(minGap, maxGap + 0.06018 * (width - maxWidth));
  return minGap + (maxGap - minGap) * ((width - minWidth) / (maxWidth - minWidth));
}

export const CircularServices = ({
  autoplay = true,
}: CircularServicesProps) => {
  // Services data
  const services: Service[] = [
    {
      title: "Personalvermittlung",
      description: "Direktvermittlung qualifizierter Fachkräfte in Festanstellung. Wir finden die perfekte Besetzung für Ihre offenen Positionen.",
      shortDesc: "Direktvermittlung von Fachkräften",
      bgColor: "bg-gradient-to-br from-blue-500/20 to-blue-600/30",
      iconColor: "text-blue-400",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
        </svg>
      ),
    },
    {
      title: "Zeitarbeit",
      description: "Flexible Personallösungen für temporäre Projekte und Auftragsspitzen. Schnell verfügbare, qualifizierte Mitarbeiter.",
      shortDesc: "Flexible Personallösungen",
      bgColor: "bg-gradient-to-br from-purple-500/20 to-purple-600/30",
      iconColor: "text-purple-400",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Personalberatung",
      description: "Strategische Beratung für optimale Personalplanung und -entwicklung. Maßgeschneiderte Lösungen für Ihr Unternehmen.",
      shortDesc: "Strategische Personalberatung",
      bgColor: "bg-gradient-to-br from-green-500/20 to-green-600/30",
      iconColor: "text-green-400",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: "Internationale Fachkräfte",
      description: "Rekrutierung qualifizierter Fachkräfte aus dem Ausland. Komplette Betreuung von Visa bis Integration.",
      shortDesc: "Internationale Rekrutierung",
      bgColor: "bg-gradient-to-br from-orange-500/20 to-orange-600/30",
      iconColor: "text-orange-400",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Bewerbungshilfe",
      description: "Professionelle Unterstützung bei der Optimierung Ihrer Bewerbungsunterlagen und Vorbereitung auf Vorstellungsgespräche.",
      shortDesc: "Bewerbungsunterstützung",
      bgColor: "bg-gradient-to-br from-pink-500/20 to-pink-600/30",
      iconColor: "text-pink-400",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
    },
    {
      title: "Karriereberatung",
      description: "Individuelle Beratung für Ihre berufliche Weiterentwicklung. Strategische Planung für nachhaltigen Karriereerfolg.",
      shortDesc: "Karriereentwicklung",
      bgColor: "bg-gradient-to-br from-cyan-500/20 to-cyan-600/30",
      iconColor: "text-cyan-400",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
  ];

  // State
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverPrev, setHoverPrev] = useState(false);
  const [hoverNext, setHoverNext] = useState(false);
  const [containerWidth, setContainerWidth] = useState(1200);

  const serviceContainerRef = useRef<HTMLDivElement>(null);
  const autoplayIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const servicesLength = useMemo(() => services.length, []);
  const activeService = useMemo(
    () => services[activeIndex],
    [activeIndex, services]
  );

  // Responsive gap calculation
  useEffect(() => {
    function handleResize() {
      if (serviceContainerRef.current) {
        setContainerWidth(serviceContainerRef.current.offsetWidth);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Autoplay
  useEffect(() => {
    if (autoplay) {
      autoplayIntervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % servicesLength);
      }, 7000);
    }
    return () => {
      if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
    };
  }, [autoplay, servicesLength]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeIndex, servicesLength]);

  // Navigation handlers
  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % servicesLength);
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
  }, [servicesLength]);
  
  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + servicesLength) % servicesLength);
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
  }, [servicesLength]);

  // Compute transforms for each service card
  function getServiceStyle(index: number): React.CSSProperties {
    const gap = calculateGap(containerWidth);
    const maxStickUp = gap * 0.8;
    const isActive = index === activeIndex;
    const isLeft = (activeIndex - 1 + servicesLength) % servicesLength === index;
    const isRight = (activeIndex + 1) % servicesLength === index;
    
    if (isActive) {
      return {
        zIndex: 3,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(0px) translateY(0px) scale(1) rotateY(0deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    if (isLeft) {
      return {
        zIndex: 2,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(-${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(15deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    if (isRight) {
      return {
        zIndex: 2,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(-15deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    // Hide all other services
    return {
      zIndex: 1,
      opacity: 0,
      pointerEvents: "none",
      transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
    };
  }

  // Framer Motion variants
  const contentVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8">
      <div className="grid gap-16 md:gap-20">
        {/* Service Cards */}
        <div className="relative w-full h-96 perspective-1000" ref={serviceContainerRef}>
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`absolute w-full h-full ${service.bgColor} backdrop-blur-sm rounded-3xl border border-white/10 shadow-2xl overflow-hidden`}
              style={getServiceStyle(index)}
            >
              <div className="p-8 h-full flex flex-col items-center justify-center text-center">
                <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 ${service.iconColor}`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  {service.shortDesc}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Content */}
        <div className="flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              variants={contentVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="text-center md:text-left"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {activeService.title}
              </h3>
              <motion.p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
                {activeService.description.split(" ").map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{
                      filter: "blur(10px)",
                      opacity: 0,
                      y: 5,
                    }}
                    animate={{
                      filter: "blur(0px)",
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.22,
                      ease: "easeInOut",
                      delay: 0.025 * i,
                    }}
                    className="inline-block"
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </motion.p>
            </motion.div>
          </AnimatePresence>
          
          <div className="flex gap-6 justify-center md:justify-start">
            <button
              className="w-12 h-12 rounded-full bg-slate-800 hover:bg-blue-600 flex items-center justify-center cursor-pointer transition-all duration-300 border border-white/10"
              onClick={handlePrev}
              onMouseEnter={() => setHoverPrev(true)}
              onMouseLeave={() => setHoverPrev(false)}
              aria-label="Previous service"
            >
              <FaArrowLeft size={20} className="text-white" />
            </button>
            <button
              className="w-12 h-12 rounded-full bg-slate-800 hover:bg-blue-600 flex items-center justify-center cursor-pointer transition-all duration-300 border border-white/10"
              onClick={handleNext}
              onMouseEnter={() => setHoverNext(true)}
              onMouseLeave={() => setHoverNext(false)}
              aria-label="Next service"
            >
              <FaArrowRight size={20} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircularServices; 