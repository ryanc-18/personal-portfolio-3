interface ProgressBarProps {
  currentIndex: number;
  total: number;
}

export function ProgressBar({ currentIndex, total }: ProgressBarProps) {
  const progressPercentage = ((currentIndex + 1) / total) * 100;

  return (
    <div className="sticky top-0 left-0 right-0 z-50 h-[5px] bg-neutral-200">
      <div
        className="h-full bg-gray-800 transition-all duration-500 ease-in-out"
        style={{ width: `${progressPercentage}%` }}
      ></div>
    </div>
  );
}
