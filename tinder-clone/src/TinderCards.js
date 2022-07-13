import {useState,useEffect} from 'react';
import axios from 'axios'
import TinderCard from "react-tinder-card";
import "./TinderCards.css"

const TinderCards = ()=>{
    const [people,setPeople] =useState([]);
    const swiped =(dir,nameToDelete)=>{
        console.log("removing" + nameToDelete);
    }
    const outOfFrame=(name)=>{
        console.log(name+ " Left Screen")
    }
    useEffect(()=>{
        const getPeoples = async ()=>{
            const res = await axios.get('http://localhost:8001/tinder/cards');
            setPeople(res.data);
        }
        getPeoples();
    },[])
    return(
        <div className={"tinderCards"}>
            <div className="tinderCards__container">
                {people?.map((tinder)=>(
                    <TinderCard
                        className={"swipe"}
                        key={tinder.name}
                        preventSwipe={["up","down"]}
                        onSwipe={(dir)=> swiped(dir,tinder.name)}
                        onCardLeftScreen={()=> outOfFrame(tinder.name)}
                    >
                        <div style={{backgroundImage:`url(${tinder.imgUrl})`}} className={"card"}>
                            <h3>{tinder.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>

        </div>
    )
}

export default TinderCards;