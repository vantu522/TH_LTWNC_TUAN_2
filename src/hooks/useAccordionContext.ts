import { useContext } from "react";
import { AccordionContext } from "../types/AccordionContext";

function useAccordionContext() {
    const ctx =useContext(AccordionContext);
    if (!ctx) throw new Error('...')
    return ctx
}

export default useAccordionContext