"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { HotkeyButton } from "@/components/hotkey-button";
import { Button } from "@/components/ui/button";
import { cn } from "@/components/ui/utils";

// --- Base props shared by all pages ---
interface BaseHeaderProps {
  logoSrc?: string; // optional custom logo
  logoHref?: string;
  onLogoClick?: () => void;
  background?: "surface" | "tinted";
  className?: string;
}

export function Header({
  logoSrc,
  logoHref = "/",
  onLogoClick,
  background = "surface",
  className,
}: BaseHeaderProps) {
  const pathname = usePathname();
  const isActive = (href: string) =>
    pathname === href || pathname?.startsWith(`${href}/`);

  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    if (background !== "tinted") return;

    const update = () => {
      setIsScrolled(window.scrollY > 0);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [background]);

  const navItems = [
    { id: "how-it-works", href: "/how-it-works", label: "How it works" },
    { id: "pricing", href: "/pricing", label: "Pricing" },
  ];

  const activeId =
    navItems.find((item) => isActive(item.href))?.id ?? null;
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [indicator, setIndicator] = useState<{
    left: number;
    width: number;
    opacity: number;
  }>({ left: 0, width: 0, opacity: 0 });
  const navRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Record<string, HTMLSpanElement | null>>({});

  const updateIndicator = useCallback((id: string | null) => {
    const container = navRef.current;
    if (!container || !id) {
      setIndicator((prev) => ({ ...prev, opacity: 0 }));
      return;
    }
    const el = itemRefs.current[id];
    if (!el) {
      setIndicator((prev) => ({ ...prev, opacity: 0 }));
      return;
    }

    const containerRect = container.getBoundingClientRect();
    const rect = el.getBoundingClientRect();
    setIndicator({
      left: rect.left - containerRect.left,
      width: rect.width,
      opacity: 1,
    });
  }, []);

  useLayoutEffect(() => {
    updateIndicator(hoveredId ?? activeId);
  }, [activeId, hoveredId, updateIndicator]);

  useLayoutEffect(() => {
    if (!navRef.current) return;
    const ro = new ResizeObserver(() => {
      updateIndicator(hoveredId ?? activeId);
    });
    ro.observe(navRef.current);
    return () => ro.disconnect();
  }, [activeId, hoveredId, updateIndicator]);

  const backgroundClass =
    background === "tinted" && !isScrolled ? "bg-[#f9f9f9]" : "bg-surface";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 border-b border-gray-200/40 transition-all duration-200",
        backgroundClass,
        className,
      )}
    >
      <div className="w-full px-6 md:px-12 lg:px-24">
        <div className="relative flex items-center justify-between h-13">
          {/* Logo */}
          {logoHref ? (
            <Link href={logoHref} className="h-8 w-auto flex items-center">
              <Image
                src={logoSrc ?? "/logo.png"}
                alt="Logo"
                width={50}
                height={32}
                className="object-contain"
                priority
              />
            </Link>
          ) : (
            <div
              className={`h-8 w-auto flex items-center ${
                onLogoClick ? "cursor-pointer" : ""
              }`}
              onClick={onLogoClick}
            >
              <Image
                src={logoSrc ?? "/logo.png"}
                alt="Logo"
                width={50}
                height={32}
                className="object-contain"
                priority
              />
            </div>
          )}

          {/* Center nav */}
          <div
            ref={navRef}
            className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center gap-2"
            onMouseLeave={() => setHoveredId(null)}
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 -translate-y-1/2 h-8 rounded-sm bg-gray-200/40 transition-[left,width,opacity] duration-200 ease-out"
              style={{
                left: indicator.left,
                width: indicator.width,
                opacity: indicator.opacity,
              }}
            />
            {navItems.map((item) => {
              const active = activeId === item.id;
              return (
                <span
                  key={item.id}
                  ref={(el) => {
                    itemRefs.current[item.id] = el;
                  }}
                  onMouseEnter={() => setHoveredId(item.id)}
                  className="relative z-10 inline-flex"
                >
                  <Button
                    variant="ghost"
                    size="sm"
                    className={cn(
                      "rounded-sm text-sm scale-[0.92] text-secondary-foreground hover:bg-transparent",
                      active && "text-accent-foreground",
                    )}
                    asChild
                  >
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  </Button>
                </span>
              );
            })}
          </div>

          {/* Right side buttons */}
          <div className="flex items-center justify-end">
            <HotkeyButton
              hotkey="l"
              variant="ghost"
              size="sm"
              className="rounded-sm text-sm scale-[0.92] text-secondary-foreground"
              href="/login"
            >
              Login
            </HotkeyButton>

            <HotkeyButton
              hotkey="j"
              variant="light"
              size="sm"
              className="rounded-sm text-sm scale-[0.92]"
              href="/waitlist"
            >
              Join Wailist
            </HotkeyButton>
          </div>
        </div>
      </div>
    </header>
  );
}
