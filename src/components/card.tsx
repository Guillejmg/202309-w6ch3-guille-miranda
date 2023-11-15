import { CharacterStructure } from "../models/character"

type Props={
  info:CharacterStructure
}

export function Card ({info}:Props){



  return(
  <li className="character col">
      <div className="card character__card">
        <img
          src={`${info.name}.jpg`}
          alt={info.name + ' ' + info.family}
          className="character__picture card-img-top"
        />
        <div className="card-body">
          <h2 className="character__name card-title h4">
            {info.name + ' ' + info.family}
          </h2>
          <div className="character__info">
            <ul className="list-unstyled">
              <li>Edad: {info.age} años</li>
              <li>
                Estado:
                {info.isAlive ? (
                  <i className="fas fa-thumbs-up" />
                ) : (
                  <i className="fas fa-thumbs-down" />
                )}
              </li>
            </ul>
          </div>
          <div className="character__overlay">
            <ul className="list-unstyled">
              {info.category === 'Kings' && (
                <li>Años de reinado: {info.kingdomYears}</li>
              )}
              {info.category === 'Figther' && <li>Arma: {info.weapon}</li>}
              {info.category === 'Figther' && (
                <li>Destreza: {info.skill}</li>
              )}
              {info.category === 'Squire' && (
                <li>Peloteo: {info.servilityGrade}</li>
              )}
              {info.category === 'Advisor' && (
                <li>Asesora a: {info.advisorBoss?.name}</li>
              )}
              {info.category === 'Squire' && (
                <li>Sirve a: {info.patron?.name}</li>
              )}
            </ul>
            <div className="character__actions">
              <button className="character__action btn">habla</button>
              <button className="character__action btn">muere</button>
            </div>
          </div>
        </div>
        <i className="emoji">
          {info.category === 'Kings' && '👑'}
          {info.category === 'Figther' && '🗡'}
          {info.category === 'Squire' && '🛡'}
          {info.category === 'Advisor' && '🎓'}
        </i>
      </div>
    </li>
  )
}
