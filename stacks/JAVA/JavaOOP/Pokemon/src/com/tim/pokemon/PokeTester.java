package com.tim.pokemon;

public class PokeTester {

	public static void main(String[] args) {
		Pokedex pd = new Pokedex();
		Pokedex pd2 = new Pokedex();
		Pokemon frank = pd.createPokemon("Frank", 500, "Sweet");
		Pokemon frank2 = pd2.createPokemon("Frank2", 500, "Sweet");
		
		System.out.println(frank2.getHealth());
		frank.attackPokemon(frank2);
		System.out.println(frank2.getHealth());
		pd.listPokemon();
		System.out.println("END OF PD");
		
		
		

	}

}
