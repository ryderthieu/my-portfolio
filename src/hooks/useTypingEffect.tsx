import { useEffect, useState } from "react";

interface UseTypingEffectProps {
  text: string;
  speed?: number;
  delay?: number;
}

interface UseTypingEffectReturn {
  displayedText: string;
  isCompleted: boolean;
}

export const useTypingEffect = ({
  text,
  speed = 50,
  delay = 0,
}: UseTypingEffectProps): UseTypingEffectReturn => {
  const [displayedText, setDisplayedText] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!text) return;

    const start = setTimeout(() => {
      setHasStarted(true);
    }, delay);

    return () => clearTimeout(start);
  }, [delay, text]);

  useEffect(() => {
    if (!hasStarted) return;

    if (displayedText.length === text.length) {
      setIsCompleted(true);
      return;
    }
    const typing = setTimeout(() => {
      setDisplayedText(text.slice(0, displayedText.length + 1));
    }, speed);

    return () => clearTimeout(typing);
  }, [displayedText, hasStarted, speed, text]);

  return { displayedText, isCompleted };
};
