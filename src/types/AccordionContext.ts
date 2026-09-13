import { createContext } from "react";

export type AccordionContextType = {
  activeIndex: number | null;
  setActiveIndex: (index: number | null) => void;
};

export const AccordionContext = createContext<AccordionContextType | null>(null);
