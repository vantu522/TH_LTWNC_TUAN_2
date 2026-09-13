import React from 'react';
import { AccordionItemContext } from '../../types/AccordionItemContext';


type AccordionItemProps ={
    index:number ;
    children: React.ReactNode
}

const AccordionItem = ({index,children}:AccordionItemProps) => {

    return (
        <AccordionItemContext.Provider value={{index}}>
            {children}

        </AccordionItemContext.Provider>
    );
};

export default AccordionItem;