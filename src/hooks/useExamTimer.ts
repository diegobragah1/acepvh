import { useEffect } from 'react';

/**
 * Drives a 1-second interval while `active` is true and invokes `onTick`.
 */
export function useExamTimer(active: boolean, onTick: () => void): void {
  useEffect(() => {
    if (!active) return;
    const id = window.setInterval(onTick, 1000);
    return () => window.clearInterval(id);
  }, [active, onTick]);
}
