import { useState } from "react";

export default function Drink() {
  const [drinkType, setDrinkType] = useState("red");
  const [drinkList, setDrinkList] = useState();

  const getDrink = async(drinkType) =>  {
    const res = await fetch(`https://api.sampleapis.com/wines/${drinkType}`)
    const data = await res.json();
    setDrinkList(data);
  }
  
  return (
    <section>
      <nav>
        <button onClick={ () => setDrinkType("reds")}>Red</button>
        <button onClick={ () => setDrinkType("whites")}>White</button>
        <button onClick={ () => setDrinkType("sparkling")}n>Sparkling</button>
        <button onClick={ () => setDrinkType("rose")}>Rose</button>
        <button onClick={ () => setDrinkType("dessert")}>Dessert</button>
        <button onClick={ () => setDrinkType("port")}>Port</button>
      </nav>

      <div>
        <button onClick={ ()=> getDrink(drinkType)}>Get Drink</button>
      </div>

      <h2>{drinkType}</h2>

      <div className="drink-list">
        {
          !drinkList
            ? <p>No List Available</p>
            : drinkList.map( (element,index) => {
                return (
                  <div key={index}>
                    <img src={element.image} alt="Cover" />
                      <h3>{element.wine}</h3>
                      <p>Origin: {element.location}</p>
                      <p>Rating: {element.rating.average}</p>
                      <p>Reviews: {element.rating.reviews}</p>
                  </div>
                )
              })
        }
      </div>
    </section>
  )
}
