import { useEffect, useState } from "react";

interface Emoji {
  id: number;
  emoji: string;
  left: number;
  delay: number;
  duration: number;
}

export const CustomFallingEmojis = ({ emojis }: { emojis: string[] }) => {
  const [fallingEmojis, setFallingEmojis] = useState<Emoji[]>([]);

  useEffect(() => {
    const emojiList: Emoji[] = [];
    for (let i = 0; i < 50; i++) {
      emojiList.push({
        id: i,
        emoji: emojis[Math.floor(Math.random() * emojis.length)],
        left: Math.random() * 100,
        delay: Math.random() * 0.3,
        duration: 2 + Math.random() * 1,
      });
    }
    setFallingEmojis(emojiList);
  }, [emojis]);

  return (
    <>
      <style>{`
        @keyframes emojifall {
          0% {
            transform: translateY(-100px) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
      `}</style>
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
        {fallingEmojis.map((item) => (
          <div
            key={item.id}
            style={{
              position: "fixed",
              left: `${item.left}%`,
              top: "-100px",
              fontSize: "50px",
              animation: `emojifall ${item.duration}s linear ${item.delay}s forwards`,
            }}
          >
            {item.emoji}
          </div>
        ))}
      </div>
    </>
  );
};
