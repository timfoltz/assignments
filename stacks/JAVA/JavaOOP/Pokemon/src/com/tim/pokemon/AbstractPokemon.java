package com.tim.pokemon;
import java.util.ArrayList;

public abstract class AbstractPokemon implements PokemonInterface {

	

	@Override
	public Pokemon createPokemon(String name, int health, String type) {
		Pokemon newPoke = new Pokemon(name,health,type);
		Pokedex.myPokemons.add(newPoke);
		return newPoke;
	}

	@Override
	public String pokemonInfo(Pokemon pokemon) {
		
		return "Name: " + pokemon.getName() + " Health: " + pokemon.getHealth() + pokemon.getType();
	}

	@Override
	public void listPokemon() {
		ArrayList<Pokemon> myPokes = Pokedex.myPokemons;
		
		for(Pokemon name : myPokes) {
			System.out.println(name.getName());
		}

	}

}
