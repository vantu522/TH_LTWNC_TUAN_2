import { createContext } from "react";

export type AccordionItemContextType = {
  index: number;
};

export const AccordionItemContext = createContext<AccordionItemContextType | null>(null);
