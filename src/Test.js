import React, { useState } from "react";

const Test = () => {
 const languages = ["java","python"];
  const [toggle, setToggle] = useState(false);
  const [fav, setFav] = useState(languages[0]);
  const handleToggle = () => {
      setToggle(true);
      setFav(languages[1]);
    
  };
  return (
    <div>
      <p id="favoriteLanguage">
        Favorite programing language: {!toggle ? languages[0] : fav}
      </p>
      <button id="changeFavorite" onClick={() => handleToggle}>
        Toggle language
      </button>
    </div>
  );
};

export default Test;
