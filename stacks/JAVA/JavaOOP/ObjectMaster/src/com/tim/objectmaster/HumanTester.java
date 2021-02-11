package com.tim.objectmaster;

public class HumanTester {

	public static void main(String[] args) {
		Human bob = new Human("Bob");
		Human fred = new Human("Fred");
		
		bob.attack(fred);
		bob.attack(fred);

	}

}
