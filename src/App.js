import { useState } from 'react';
import { data } from './data';
import './App.css';

function App() {
  const [attractions, setAttractions] = useState(data);
  const [showMore, setShowMore] = useState(false); 

  const removeAttraction = (id) => {
    let newAttractions = attractions.filter((element) => element.id !== id);
    setAttractions(newAttractions);
  }

  const showTextClick = (element) => {
    element.showMore =!element.showMore;
    setShowMore(!showMore);
  }

  return (
    <div>
      <div className='container'>
        <h1>TOP {attractions.length} attractions in the world.</h1>
      </div>

      {attractions.map((element => {
        const {id, attractionName, description, image, source, showMore} = element;

      return(
        <div key={id}>
        <div className='container'>
        <h2>{id} - {attractionName}</h2>
      </div>

      <div className='container'>
        <p>{showMore? description: description.substring(0, 220) + "..."}
        <button onClick={()=> showTextClick(element)}>{showMore? "Show less" : "Show more"}</button>
        </p>
      </div>

      <div className='container'>
        <img src={image} width="500px" alt="attraction"/>
      </div>

      <div className='container'>
        <p>{source}</p>
      </div>

      <div className='container'>
        <button className='btn' onClick={() => removeAttraction(id)}>Remove</button>
      </div>

      </div>
      );
    }))} 
     
    </div>
  );
}

export default App;
