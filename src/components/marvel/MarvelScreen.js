import React from "react";
import { HeroList } from "../heroes/HeroList";

export const MarverScreen = () => {
   return (
      <div>
         <h1>Mavel screen</h1>
         <hr />
         <HeroList publisher="Marvel Comics" /> 
      </div>
   );
};
