import React, { useMemo } from "react";
import { useParams, Redirect } from "react-router-dom";
import { getHeroById } from "../../selectors/getHeroById";

export const HeroScreen = ({ history }) => {
   const { heroeId } = useParams();
 
   const hero = useMemo(() => getHeroById(heroeId), [
      heroeId,
   ]);

   if (!hero) {
      return <Redirect to="/" />;
   }

   const handlereturn = () => {
      // si el historial es mayor a 2 regresa a la
      // pagina anterior o si no retorna al principio
      if (history.length <= 2) history.push("/");
      else history.goBack();
   };

   const {
      superhero,
      publisher,
      alter_ego,
      first_appearance,
      characters,
   } = hero;

   return (
      <div className="row mt-5 ">
         <div className="col-4">
            <img
               src={`../assets/heroes/${heroeId}.jpg`}
               className="img-thumbnail animate__animated animate__fadeInLeft"
               alt={superhero}
            />
         </div>

         <div className="col-8 ">
            <h3 className="animate__animated animate__flipInX">
               {" "}
               {superhero}
            </h3>

            <ul className="list-grup list-grup-flush animate__animated animate__fadeIn">
               <li className="list-grup-item">
                  <b>Arter ego: </b>
                  {alter_ego}
               </li>
               <li className="list-grup-item">
                  <b>Publisher: </b>
                  {publisher}
               </li>
               <li className="list-grup-item">
                  <b>Firt appearance: </b>
                  {first_appearance}
               </li>
            </ul>

            <h5 className="animate__animated animate__fadeIn">
               Character
            </h5>
            <p className="animate__animated animate__fadeIn">
               {characters}
            </p>
            <button
               onClick={handlereturn}
               className="btn btn-outline-info animate__animated animate__pulse"
            >
               Return
            </button>
         </div>
      </div>
   );
};
