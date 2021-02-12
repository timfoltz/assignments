package com.tim.pokemon;
import java.util.ArrayList;

public class Pokedex extends AbstractPokemon {
	public static ArrayList<Pokemon> myPokemons = new ArrayList<Pokemon>();

	public Pokedex() {
		
	}
	
	public static ArrayList<Pokemon> getMyPokemons() {
		return myPokemons;
	}
	public static void setMyPokemons(ArrayList<Pokemon> myPokemons) {
		Pokedex.myPokemons = myPokemons;
	}
	
	

}
