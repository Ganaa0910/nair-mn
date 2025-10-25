import React, { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { GoArrowUpRight } from "react-icons/go";

type CardNavLink = {
  label: string;
  href: string;
  ariaLabel: string;
};

export type CardNavItem = {
  label: string;
  href?: string;
  bgColor: string;
  textColor: string;
  links: CardNavLink[];
};

export interface CardNavProps {
  logo: string;
  logoAlt?: string;
  logoText?: string;
  items: CardNavItem[];
  className?: string;
  ease?: string;
  baseColor?: string;
  menuColor?: string;
}

const CardNav: React.FC<CardNavProps> = ({
  logo,
  logoAlt = "Logo",
  logoText,
  items,
  className = "",
  ease = "power3.out",
  baseColor = "#fff",
  menuColor,
}) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<(HTMLDivElement | HTMLAnchorElement)[]>([]);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  const calculateHeight = () => {
    const navEl = navRef.current;
    if (!navEl) return 300;

    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const contentEl = navEl.querySelector(".card-nav-content") as HTMLElement;
    
    if (contentEl) {
      // Store original styles
      const originalStyles = {
        visibility: contentEl.style.visibility,
        pointerEvents: contentEl.style.pointerEvents,
        position: contentEl.style.position,
        height: contentEl.style.height,
        overflow: contentEl.style.overflow
      };

      // Temporarily make visible to measure
      contentEl.style.visibility = "visible";
      contentEl.style.pointerEvents = "auto";
      contentEl.style.position = "static";
      contentEl.style.height = "auto";
      contentEl.style.overflow = "visible";

      // Force layout
      contentEl.offsetHeight;

      const topBar = 60;
      const padding = 16;
      const contentHeight = contentEl.scrollHeight;

      // Restore original styles
      Object.assign(contentEl.style, originalStyles);

      if (isMobile) {
        return topBar + contentHeight + padding;
      } else {
        // Desktop: calculate based on actual content
        return Math.max(topBar + contentHeight + padding, 350);
      }
    }
    
    return isMobile ? 400 : 350;
  };

  const createTimeline = () => {
    const navEl = navRef.current;
    if (!navEl) return null;

    // Filter out any null/undefined refs
    const validCards = cardsRef.current.filter(Boolean);
    
    if (validCards.length === 0) {
      return null;
    }

    // Set initial states more explicitly
    gsap.set(navEl, { 
      height: 60, 
      overflow: "hidden",
      clearProps: "all"
    });
    
    // Set initial state for cards - ensure they start hidden
    gsap.set(validCards, { 
      y: 30, 
      opacity: 0,
      visibility: "visible",
      clearProps: "transform,opacity"
    });

    const tl = gsap.timeline({ 
      paused: true,
      onStart: () => {
        // Ensure cards are visible when animation starts
        gsap.set(validCards, { visibility: "visible" });
      }
    });

    // Animate nav height
    tl.to(navEl, {
      height: calculateHeight,
      duration: 0.5,
      ease,
    });

    // Animate cards with stagger
    tl.to(
      validCards,
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.6, 
        ease, 
        stagger: {
          amount: 0.3,
          from: "start"
        }
      },
      "-=0.2"
    );

    return tl;
  };

  useLayoutEffect(() => {
    // Give a moment for refs to be set, then create timeline
    const timeoutId = setTimeout(() => {
      const tl = createTimeline();
      tlRef.current = tl;
    }, 50);

    return () => {
      clearTimeout(timeoutId);
      tlRef.current?.kill();
      tlRef.current = null;
    };
  }, [ease, items]);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (!tlRef.current) return;

      if (isExpanded) {
        const newHeight = calculateHeight();
        gsap.set(navRef.current, { height: newHeight });

        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          newTl.progress(1);
          tlRef.current = newTl;
        }
      } else {
        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          tlRef.current = newTl;
        }
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isExpanded]);

  const toggleMenu = () => {
    const tl = tlRef.current;
    if (!tl) return;
    if (!isExpanded) {
      setIsHamburgerOpen(true);
      setIsExpanded(true);
      tl.play(0);
    } else {
      setIsHamburgerOpen(false);
      tl.eventCallback("onReverseComplete", () => setIsExpanded(false));
      tl.reverse();
    }
  };

  const setCardRef = (i: number) => (el: HTMLDivElement | HTMLAnchorElement | null) => {
    if (el) {
      cardsRef.current[i] = el as HTMLDivElement;
    }
  };

  return (
    <div
      className={`card-nav-container fixed left-1/2 -translate-x-1/2 w-[90%] max-w-[800px] z-[99] top-[1.2em] md:top-[2em] ${className}`}
    >
      <nav
        ref={navRef}
        className={`card-nav ${isExpanded ? "open" : ""} block h-[60px] p-0 rounded-xl shadow-md relative overflow-hidden will-change-[height] backdrop-blur-md bg-opacity-80`}
        style={{ backgroundColor: baseColor }}
      >
        <div className="card-nav-top absolute inset-x-0 top-0 h-[60px] flex items-center justify-between p-2 pl-[1.1rem] z-[2]">
          <div
            className={`hamburger-menu ${isHamburgerOpen ? "open" : ""} group h-full flex flex-col items-center justify-center cursor-pointer gap-[6px] order-2 md:order-none`}
            onClick={toggleMenu}
            role="button"
            aria-label={isExpanded ? "Close menu" : "Open menu"}
            tabIndex={0}
            style={{ color: menuColor || "#000" }}
          >
            <div
              className={`hamburger-line w-[30px] h-[2px] bg-current transition-[transform,opacity,margin] duration-300 ease-linear [transform-origin:50%_50%] ${
                isHamburgerOpen ? "translate-y-[4px] rotate-45" : ""
              } group-hover:opacity-75`}
            />
            <div
              className={`hamburger-line w-[30px] h-[2px] bg-current transition-[transform,opacity,margin] duration-300 ease-linear [transform-origin:50%_50%] ${
                isHamburgerOpen ? "-translate-y-[4px] -rotate-45" : ""
              } group-hover:opacity-75`}
            />
          </div>

          <div className="logo-container flex items-center gap-3 md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 order-1 md:order-none">
            <img src={logo} alt={logoAlt} className="logo h-[28px]" />
            {logoText && (
              <span className="font-bold text-[16px] md:text-[18px] tracking-[-0.3px]">
                {logoText}
              </span>
            )}
          </div>
        </div>

        <div
          className={`card-nav-content absolute left-0 right-0 top-[60px] bottom-0 p-2 z-[1] ${
            isExpanded
              ? "visible pointer-events-auto"
              : "invisible pointer-events-none"
          } grid grid-cols-1 md:grid-cols-3 gap-2 auto-rows-min`}
          aria-hidden={!isExpanded}
        >
          {(items || []).map((item, idx) => {
            const CardContent = (
              <>
                <div className="nav-card-label font-normal tracking-[-0.5px] text-[16px] md:text-[18px] leading-tight">
                  {item.label}
                </div>
                <div className="nav-card-links mt-auto flex flex-col gap-[2px]">
                  {item.links?.map((lnk, i) => (
                    <a
                      key={`${lnk.label}-${i}`}
                      className="nav-card-link inline-flex items-center gap-[6px] no-underline cursor-pointer transition-opacity duration-300 hover:opacity-75 text-[13px] md:text-[14px] relative z-10"
                      href={lnk.href}
                      aria-label={lnk.ariaLabel}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <GoArrowUpRight
                        className="nav-card-link-icon shrink-0 w-3 h-3"
                        aria-hidden="true"
                      />
                      {lnk.label}
                    </a>
                  ))}
                </div>
              </>
            );

            if (item.href) {
              return (
                <a
                  key={`${item.label}-${idx}`}
                  href={item.href}
                  className="nav-card select-none relative flex flex-col gap-2 p-[12px_16px] rounded-[calc(0.75rem-0.2rem)] min-h-[60px] no-underline cursor-pointer transition-opacity duration-300 hover:opacity-90"
                  ref={setCardRef(idx)}
                  style={{ 
                    backgroundColor: item.bgColor, 
                    color: item.textColor,
                    display: 'flex'
                  }}
                >
                  {CardContent}
                </a>
              );
            }

            return (
              <div
                key={`${item.label}-${idx}`}
                className="nav-card select-none relative flex flex-col gap-2 p-[12px_16px] rounded-[calc(0.75rem-0.2rem)] min-h-[60px]"
                ref={setCardRef(idx)}
                style={{ backgroundColor: item.bgColor, color: item.textColor }}
              >
                {CardContent}
              </div>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default CardNav;
