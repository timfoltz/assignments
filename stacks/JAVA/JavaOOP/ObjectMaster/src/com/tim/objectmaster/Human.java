package com.tim.objectmaster;

public class Human {
	private String name;
	private int strength = 3;
	private int stealth = 3;
	private int intelligence = 3;
	private int health = 100;

	public Human() {
		
	}
	public Human(String name) {
		this.setName(name);
		
	}

	public int getStrength() {
		return strength;
	}

	public void setStrength(int strength) {
		this.strength = strength;
	}

	public int getStealth() {
		return stealth;
	}

	public void setStealth(int stealth) {
		this.stealth = stealth;
	}

	public int getIntelligence() {
		return intelligence;
	}

	public void setIntelligence(int intelligence) {
		this.intelligence = intelligence;
	}

	public int getHealth() {
		return health;
	}

	public void setHealth(int health) {
		this.health = health;
	}
	
	public void attack(Human h) {
		h.setHealth(h.getHealth()-this.getStrength());
		System.out.println("Health reduced by: " + this.getStrength()+" " + h.getName() +"'s health remaining is: "+h.getHealth());
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
}
