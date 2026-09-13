import { useState,  } from "react";
import { AccordionContext } from "../../types/AccordionContext";
import AccordionItem from "./AccordionItem";
import AccordionHeader from "./AccordionHeader";
import AccordionPanel from "./AccordionPanel";



type AccordionProps = {
  children: React.ReactNode;
};

function Accordion({ children }: AccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <AccordionContext.Provider value={{ activeIndex, setActiveIndex }}>
      <div>{children}</div>
    </AccordionContext.Provider>
  );
}
Accordion.Item = AccordionItem
Accordion.Header=AccordionHeader
Accordion.Panel=AccordionPanel
export default Accordion;
