import { useEffect, useState } from 'react';

interface DraggableProps {
  onDragMove?: (diff: number) => void;
}

const useDraggable = ({
  onDragMove,
}: DraggableProps) => {
  const [startX, setStartX] = useState<number | null>(null);
  const [endX, setEndX] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    setStartX(clientX);
  };

  const handleTouchMove = (e: Event) => {
    if (startX !== null) {
      const clientX = "touches" in e ? (e as TouchEvent).touches[0].clientX : (e as MouseEvent).clientX;
      setEndX(clientX);
    }
  };

  const handleTouchEnd = () => {
    if (startX !== null && endX !== null) {
      const diff = startX - endX;
      if (Math.abs(diff) > 50) {
        if (diff > 0 && onDragMove) {
          onDragMove(diff);
        } else if (diff < 0 && onDragMove) {
          onDragMove(diff);
        }
      }
    }
    setStartX(null);
    setEndX(null);
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleTouchMove);
    document.addEventListener('mouseup', handleTouchEnd);
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);
    return () => {
      document.removeEventListener('mousemove', handleTouchMove);
      document.removeEventListener('mouseup', handleTouchEnd);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [startX, endX]);

  return {
    onTouchStart: handleTouchStart,
  };
};

export default useDraggable;
