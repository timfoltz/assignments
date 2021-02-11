package com.tim.objectmaster;

public class Ninja extends Human {

	public Ninja() {
		this.setStealth(10);
	}

	public Ninja(String name) {
		super(name);
		this.setStealth(10);
	}
	public void steal(Human h) {
		h.setHealth(h.getHealth()- this.getStealth());
		System.out.println(h.getName() + " was injured with steal health by " + this.getName() + " for "+ this.getStealth() + " damage!");
		System.out.println(h.getName() + " has " + h.getHealth() + " health remaining!");
		this.setHealth(this.getHealth()+ this.getStealth());
//		System.out.println(this.getName() + " stole " + this.getStealth() + " health from " + h.getName() + "'s health!");
		System.out.println(this.getName() + " has " + this.getHealth() + " health remaining!");
	}
	public void runAway() {
		this.setHealth(getHealth()-10);
		System.out.println(this.getName()+" ran away! Health decreased by " + this.getStealth());
	}

}
