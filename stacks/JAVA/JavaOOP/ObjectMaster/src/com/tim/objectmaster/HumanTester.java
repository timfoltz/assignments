package com.tim.objectmaster;

public class HumanTester {

	public static void main(String[] args) {
		Human bob = new Human("Bob");
		Human fred = new Human("Fred");
		Wizard gandalf = new Wizard("Gandalf");
		Ninja bruce = new Ninja("Bruce Lee");
		Samurai mulan = new Samurai("Mulan");
		Samurai po = new Samurai("Po");
		Samurai bao = new Samurai("Bao");
		
		bob.attack(fred);
		bob.attack(fred);
		gandalf.heal(fred);
		gandalf.fireball(bob);
		bruce.steal(gandalf);
		bruce.runAway();
		mulan.deathBlow(bob);
		mulan.meditate();
		System.out.println(Samurai.howMany());
		

	}

}
