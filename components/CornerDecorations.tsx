// components/CornerDecorations.tsx
export function CornerDecorations() {
  return (
    <>
      {/* Top-left */}
      <div className="absolute -top-1 -left-1 w-6 h-6 border-l-2 border-t-2 border-black rounded-tl-lg" />

      {/* Top-right */}
      <div className="absolute -top-1 -right-1 w-6 h-6 border-r-2 border-t-2 border-black rounded-tr-lg" />

      {/* Bottom-left */}
      <div className="absolute -bottom-1 -left-1 w-6 h-6 border-l-2 border-b-2 border-black rounded-bl-lg" />

      {/* Bottom-right */}
      <div className="absolute -bottom-1 -right-1 w-6 h-6 border-r-2 border-b-2 border-black rounded-br-lg" />
    </>
  );
}
