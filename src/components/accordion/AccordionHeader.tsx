import React, { useContext } from "react";
import useAccordionContext from "../../hooks/useAccordionContext";
import { AccordionItemContext } from "../../types/AccordionItemContext";

type AccordionHeaderProp = {
  children: React.ReactNode;
};

const AccordionHeader = ({ children }: AccordionHeaderProp) => {
  const { activeIndex, setActiveIndex } = useAccordionContext();
  const itemContext = useContext(AccordionItemContext);

  if (!itemContext) {
    throw new Error("....");
  }

  const { index } = itemContext;
  const isActive = activeIndex === index;

  return (
    <button
      onClick={() => setActiveIndex(index)}
      style={{
        width: "100%",
        padding: "16px 20px",
        backgroundColor: isActive ? "#f0f4f8" : "#ffffff",
        border: "none",
        borderBottom: "1px solid #e2e8f0",
        textAlign: "left",
        fontSize: "1.1rem",
        fontWeight: "600",
        color: "#1e293b",
        cursor: "pointer",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        transition: "background-color 0.3s ease",
      }}
    >
      {children}
      <span
        style={{
          transform: isActive ? "rotate(180deg)" : "rotate(0deg)",
          transition: "transform 0.3s ease",
          fontSize: "0.9rem",
          color: "#64748b",
        }}
      >
        ▼
      </span>
    </button>
  );
};

export default AccordionHeader;
