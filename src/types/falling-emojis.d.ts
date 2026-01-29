declare module "falling-emojis" {
  import { ReactNode } from "react";

  interface FallingEmojisProps {
    emojis: string[];
    [key: string]: any;
  }

  export const FallingEmojis: React.FC<FallingEmojisProps>;
}
