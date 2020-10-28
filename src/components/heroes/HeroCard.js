import React from "react";
import { Link } from "react-router-dom";

export const HeroCard = ({
   id,
   superhero,
   alter_ego,
   first_appearance,
   characters,
}) => {
   return (
      <div className="card ms-3" style={{ maxWidth: 540 }}>
         <div className="row  no-gutters">
            <div className="col-md-4">
               <img
                  className="card-img"
                  src={`./assets/heroes/${id}.jpg`}
                  alt={superhero}
               />
            </div>

            <div className="col-md-8 pl-3">
               <div className="Card-body">
                  <h5 className="Card-title">
                     {superhero}
                  </h5>
                  <p className="card-text">{alter_ego}</p>

                  {alter_ego !== characters && (
                     <p className="card-text">
                        {characters}
                     </p>
                  )}
                  <p className="card-text">
                     <small className="text-muted">
                        {first_appearance}
                     </small>
                  </p>
                  <Link to={`./hero/${id}`}>More...</Link>
               </div>
            </div>
         </div>
      </div>
   );
};
