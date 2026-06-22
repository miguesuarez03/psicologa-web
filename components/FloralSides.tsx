/**
 * FloralSides — decorative botanical illustration.
 * SVGs served as static files from /public to keep the JS bundle lean.
 * Only visible on xl+ screens (hidden on narrower viewports).
 */
export function FloralSides() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 hidden xl:block"
      aria-hidden="true"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/floral-left.svg"
        alt=""
        className="absolute left-0 top-0 h-full"
        style={{
          width: "clamp(80px, calc((100vw - 72rem) / 2 + 40px), 200px)",
          opacity: 0.32,
        }}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/floral-right.svg"
        alt=""
        className="absolute right-0 top-0 h-full"
        style={{
          width: "clamp(80px, calc((100vw - 72rem) / 2 + 40px), 200px)",
          opacity: 0.32,
        }}
      />
    </div>
  );
}
