/** Shared easing — smooth deceleration */
export const easeOut = [0.22, 1, 0.36, 1];

export const viewportOnce = {
  once: true,
  amount: 0.15,
  margin: '0px 0px -10% 0px',
};

export function transition(reduced, duration = 0.55) {
  return reduced ? { duration: 0 } : { duration, ease: easeOut };
}
