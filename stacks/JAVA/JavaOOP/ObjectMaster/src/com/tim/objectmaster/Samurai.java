package com.tim.objectmaster;

public class Samurai extends Human {
	private int health = 200;
	private static int numberOfSams = 0;

	public Samurai() {

		numberOfSams++;
	}

	public Samurai(String name) {
		super(name);
		numberOfSams++;
	}

	public int getHealth() {
		return health;
	}

	public void setHealth(int health) {
		this.health = health;
	}
	
	public void deathBlow(Human h) {
		h.setHealth(0);
		System.out.println(h.getName() + " has DIED from a Death Blow from " + this.getName());
		this.setHealth(this.getHealth()/2);
		System.out.println(this.getName()+"'s health has been reduce by half (" + this.getHealth() +") for dealing Death Blow to " + h.getName());
	}
	
	public void meditate() {
		int half = (this.getHealth()/2);
		this.setHealth(this.getHealth()+(this.getHealth()/2) );
		System.out.println(this.getName()+" has been healed through meditation for " + half);
		System.out.println(this.getName()+"'s health is " + this.getHealth());
	}
	
	public static int howMany() {
		return numberOfSams;
	}
	

}
