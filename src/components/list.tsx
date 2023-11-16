import { useEffect } from "react";
import { useCharacters } from "../hooks/useCharacter";
import { Card } from "./card";
import { CharacterStructure } from "../models/character";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";



export function List (){
  const { characters, pageState } = useSelector(
  (state: RootState) => state.charactersState);
  const {loadCharacters} = useCharacters();
  
  useEffect(() => {
    loadCharacters();
  },[loadCharacters])

  if (pageState === 'loading') {
    return <p>Loading</p>;
  }

  if (pageState === 'error') {
    return <p>Error lading tasks</p>;
  };

  return(
        <ul className="characters-list row list-unstyled">
          {characters.map((item: CharacterStructure) => (
            <Card info={item} key={item.name}></Card>
          ))}
        </ul>
      )
    }
