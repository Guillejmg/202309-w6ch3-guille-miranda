import { CharacterStructure } from '../models/character';

export class repoSerial {
  charactersUrl = 'http://localhost:3000/character';

  async getCharacters(): Promise<CharacterStructure[]> {
    const response = await fetch(this.charactersUrl);
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }
  async updateCharacter(name: CharacterStructure['name'], updatedCharacter:Partial <CharacterStructure>): Promise<CharacterStructure> {
    const finalUrl = `${this.charactersUrl}/${name}`;
    const response = await fetch(finalUrl, {
      method: 'PATCH',
      body: JSON.stringify(updatedCharacter),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }
}

