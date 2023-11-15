import { useEffect } from "react";
import { useCharacters } from "../hooks/useCharacter";
import { Card } from "./card";
import { CharacterStructure } from "../models/character";



export function List (){
  const {loadCharacters, characters} = useCharacters();
  
  useEffect(() => {
    loadCharacters();
  },[loadCharacters])
  return(
        <ul className="characters-list row list-unstyled">
          {characters.map((item: CharacterStructure) => (
            <Card info={item} key={item.name}></Card>
          ))}
        </ul>
      )
    }
