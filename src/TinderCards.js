import React ,{useState,useEffect}from 'react';
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import database from './firebase';

function TinderCards() {
    const [people,setPeople]=useState([
       {
        name:'steve jobs',
        url:"https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png"
       },
       {
           name:'mark zukerberg',
           url:'https://images.saymedia-content.com/.image/cs_srgb,dpr_1.0,q_80/MTY2NjgyODgxMTMxODE2Mjg4/markzuckerberg_facts_desktop.jpg'
       }
    ]);
    return (
        <div>
              <div className="tinderCards__cardContainer">
              {people.map(person =>(
                <TinderCard className="swipe" key={person.name} preventSwipe={['up','down']} >
                    <div  style={{backgroundImage:'url(${person.url})'}} className="card">
                        <h3> {person.name}</h3>
                        </div>
                    </TinderCard>
            ))} 
                
             
              </div>

            
        </div>
    )
}

export default TinderCards
