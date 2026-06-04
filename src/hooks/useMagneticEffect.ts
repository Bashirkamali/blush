import { useCallback, useEffect, useRef, useState } from "react";

interface MagneticTransform {
  x: number;
  y: number;
}

/**
 * useMagneticEffect
 *
 * Makes a tracked element magnetically follow the cursor on hover.
 * Returns a ref to attach to the target element and a CSS transform
 * string that translates the element toward the cursor.
 *
 * @param maxMovement - Maximum pixel displacement (default 15)
 * @param easeFactor  - Responsiveness factor; lower = snappier (default 0.15)
 *
 * @example
 * ```tsx
 * const { ref, transform } = useMagneticEffect();
 * return <motion.div ref={ref} style={{ transform }} />;
 * ```
 */
export function useMagneticEffect(
  maxMovement = 15,
  easeFactor = 0.15
): { ref: React.RefObject<HTMLElement>; transform: string } {
  const ref = useRef<HTMLElement>(null);
  const [transform, setTransform] = useState<MagneticTransform>({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;

      // Normalize so the edges of the element give max displacement
      const halfW = rect.width / 2;
      const halfH = rect.height / 2;
      const normX = Math.max(-1, Math.min(1, deltaX / halfW));
      const normY = Math.max(-1, Math.min(1, deltaY / halfH));

      const targetX = normX * maxMovement;
      const targetY = normY * maxMovement;

      // Smooth interpolation toward target (no spring, manual easing)
      setTransform((prev) => ({
        x: prev.x + (targetX - prev.x) * easeFactor,
        y: prev.y + (targetY - prev.y) * easeFactor,
      }));
    },
    [maxMovement, easeFactor]
  );

  const handleMouseLeave = useCallback(() => {
    // Animate back to origin
    const startX = transform.x;
    const startY = transform.y;
    const startTime = performance.now();
    const duration = 400; // ms

    function animateBack(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Cubic bezier approximation: ease-out
      const eased = 1 - Math.pow(1 - progress, 3);

      setTransform({
        x: startX * (1 - eased),
        y: startY * (1 - eased),
      });

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animateBack);
      }
    }

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(animateBack);
  }, [transform.x, transform.y]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.addEventListener("mousemove", handleMouseMove as EventListener);
    el.addEventListener("mouseleave", handleMouseLeave as EventListener);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove as EventListener);
      el.removeEventListener("mouseleave", handleMouseLeave as EventListener);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [handleMouseMove, handleMouseLeave]);

  const transformString = `translate(${transform.x.toFixed(2)}px, ${transform.y.toFixed(2)}px)`;

  return { ref, transform: transformString };
}