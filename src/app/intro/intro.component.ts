import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
  ngOnInit(): void {
    this.fetchPokemonDetails();
  }

  fetchPokemonDetails(): void {
    const randomId = Math.floor(Math.random() * 1010) + 1;
    const pokeTitle = document.getElementById('pokemon-title') as HTMLDivElement;
    const pokeEntry = document.getElementById('pokemon-entry') as HTMLDivElement;
    const pokeImg = document.getElementById('pokemon-image') as HTMLImageElement;

    fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
      .then(response => response.json())
      .then(pokemonData => {
        fetch(pokemonData.species.url)
          .then(response => response.json())
          .then(speciesData => {
            const pokedexEntry = speciesData.flavor_text_entries
              .find((entry: { language: { name: string; }; }) => entry.language.name === 'en');
            
            pokeEntry.innerHTML += pokedexEntry?.flavor_text
                                                  .replace(/\f/g, ' ')
                                                  .replace(/\s+/g, ' ') 
                                                  .trim() || 'No entry available';
            pokeTitle.innerHTML += pokemonData.name;
            pokeImg.src = pokemonData.sprites.front_default;
          })
          .catch(error => console.error('Error fetching Pokémon species data:', error));
      })
      .catch(error => console.error('Error fetching Pokémon details:', error));
  }
}
