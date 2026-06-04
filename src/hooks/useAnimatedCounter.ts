import { useRef, useState, useEffect, useCallback } from "react";
import { useInView } from "framer-motion";

/* ─── Persian numeral converter ─── */

const PERSIAN_DIGITS = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

function toPersianNumerals(num: number): string {
  return String(num).replace(/[0-9]/g, (d) => PERSIAN_DIGITS[parseInt(d, 10)]);
}

/* ─── Hook ─── */

interface UseAnimatedCounterOptions {
  value?: number;
  suffix?: string;
  duration?: number;
  once?: boolean;
}

interface UseAnimatedCounterReturn {
  ref: React.RefObject<HTMLDivElement>;
  displayValue: string;
  isComplete: boolean;
  restart: () => void;
}

export function useAnimatedCounter(
  options: UseAnimatedCounterOptions = {},
): UseAnimatedCounterReturn {
  const { value = 0, suffix = "", duration = 2000, once = true } = options;
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-80px" });

  const [currentValue, setCurrentValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const targetRef = useRef(value);
  targetRef.current = value;

  const restart = useCallback(() => {
    setCurrentValue(0);
    setHasAnimated(false);
    setIsComplete(false);
  }, []);

  useEffect(() => {
    if (!isInView || hasAnimated) return;
    setHasAnimated(true);

    const start = performance.now();
    const endTarget = targetRef.current;
    let raf: number;

    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * endTarget);

      setCurrentValue(current);

      if (progress < 1) {
        raf = requestAnimationFrame(animate);
      } else {
        setCurrentValue(endTarget);
        setIsComplete(true);
      }
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [isInView, hasAnimated, duration]);

  const displayValue =
    value === 0 && suffix === ""
      ? "۰"
      : `${toPersianNumerals(currentValue)}${suffix}`;

  return { ref, displayValue, isComplete, restart };
}