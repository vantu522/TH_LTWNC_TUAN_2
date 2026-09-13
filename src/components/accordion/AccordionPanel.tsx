import React, { useContext } from "react";
import useAccordionContext from "../../hooks/useAccordionContext";
import { AccordionItemContext } from "../../types/AccordionItemContext";

type AccordionPanelProp = {
  children: React.ReactNode;
};
const AccordionPanel = ({ children }: AccordionPanelProp) => {
  const { activeIndex } = useAccordionContext();
  const itemContext = useContext(AccordionItemContext);

  if (!itemContext) {
    throw new Error("AccordionPanel must be used inside AccordionItem");
  }

  const { index } = itemContext;
  const isActive = activeIndex === index;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: isActive ? "1fr" : "0fr",
        transition: "grid-template-rows 0.3s ease-in-out",
        backgroundColor: "#f8fafc",
      }}
    >
      <div style={{ overflow: "hidden" }}>
        <div
          style={{
            padding: isActive ? "16px 20px" : "0 20px",
            color: "#475569",
            lineHeight: "1.6",
            borderBottom: isActive ? "1px solid #e2e8f0" : "none",
            transition: "padding 0.3s ease-in-out",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default AccordionPanel;
