import React from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

// import { heroes } from "../../data/heroes";
import { HeroCard } from "../heroes/HeroCard";
import { useForm } from "../../hooks/useform";
import { getHeroesByName } from "../../selectors/getHeroesByName";

export const SearchScreen = ({ history }) => {
   // location para obtener los parametros del link
   const location = useLocation();

   const { q = "" } = queryString.parse(location.search);

   const [values, handleInputChange] = useForm({
      searchtext: q,
   });

   const { searchtext } = values;

   const heroesFilterd = React.useMemo(
      () => getHeroesByName(q),
      [q]
   );

   const handleSearch = (e) => {
      e.preventDefault();
      // console.log(searchtext);

      // agregar l parametro en el link
      history.push(`?q=${searchtext}`);
   };

   return (
      <div className="animate__animated animate__fadeIn">
         <h2>serch screen</h2>
         <hr />

         <div className="row">
            <div className="col-5">
               <h4>Search Form</h4>
               <hr />
               <form onSubmit={handleSearch}>
                  <input
                     type="text"
                     placeholder="Find your Hero"
                     className="form-control"
                     autoComplete="off"
                     name="searchtext"
                     value={searchtext}
                     onChange={handleInputChange}
                  />
                  <button
                     type="submit"
                     className="btn m-1 btn-block btn-outline-primary"
                  >
                     Search...
                  </button>
               </form>
            </div>

            <div className="col-7 animate__animated animate__fadeIn">
               <h4>Results</h4>
               <hr />

               {q === "" && (
                  <div className="alert alert-info">
                     Search a Hero
                  </div>
               )}

               {q !== "" && heroesFilterd.length === 0 && (
                  <div className="alert alert-danger">
                     There is no a hero with {`${q}`}
                  </div>
               )}

               {heroesFilterd.length > 0 && (
                  <p className="alert alert-success">
                     <b>Result:</b>
                     {`"${heroesFilterd.length}"`} Heroes
                     found
                  </p>
               )}

               {heroesFilterd.map((hero) => (
                  <HeroCard key={hero.id} {...hero} />
               ))}
            </div>
         </div>
      </div>
   );
};
