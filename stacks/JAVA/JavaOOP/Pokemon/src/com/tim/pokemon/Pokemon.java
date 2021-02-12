package com.tim.pokemon;

public class Pokemon {
	private String name;
	private int health;
	private String type;
	private static int numberOfPokemon;
	
	public Pokemon(String name, int health, String type) {
		this.name = name;
		this.health = health;
		this.type = type;
		numberOfPokemon++;
	}
	
	public void attackPokemon(Pokemon p) {
		p.setHealth(p.getHealth()-10);
		System.out.println(p.getName()+" was damaged for 10 health by "+this.getName());
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getHealth() {
		return health;
	}

	public void setHealth(int health) {
		this.health = health;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public static int getNumberOfPokemon() {

		System.out.println();
		return numberOfPokemon;
	}



	
	

}
