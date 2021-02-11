package com.tim.objectmaster;

public class Wizard extends Human {

	public Wizard() {
		this.setHealth(50);
		this.setIntelligence(8);
	}

	public Wizard(String name) {
		super(name);
		this.setHealth(50);
		this.setIntelligence(8);
	}
	
	public void heal(Human h) {
		h.setHealth(h.getHealth()+ this.getIntelligence());
		System.out.println(h.getName() + " was healed by " + this.getName() + " for : "+ this.getIntelligence()+ " health!");
		System.out.println(h.getName() + " has " + h.getHealth() + " health remaining!");
	}
	
	public void fireball(Human h) {
		h.setHealth(h.getHealth()- (this.getIntelligence()*3));
		System.out.println(h.getName() + " was injured with a fireball by " + this.getName() + " for "+ this.getIntelligence()*3 + " damage!");
		System.out.println(h.getName() + " has " + h.getHealth() + " health remaining!");
	}

}
