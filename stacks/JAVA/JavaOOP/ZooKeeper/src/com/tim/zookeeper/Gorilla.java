package com.tim.zookeeper;

public class Gorilla extends Mammal {

	public Gorilla() {
		// TODO Auto-generated constructor stub
	}
	
	public void throwSomething() {
		this.setEnergyLevel(getEnergyLevel()-5);
		System.out.println("The gorilla threw something, energy level decreased by 5. New energy is: " + this.getEnergyLevel());
	}
	
	public void eatBananas() {
		this.setEnergyLevel(getEnergyLevel()+10);
		System.out.println("Yummy bananas! Energy increased to: " + this.getEnergyLevel());
	}
	
	public void climb() {
		this.setEnergyLevel(getEnergyLevel()-10);
		System.out.println("That tree was tall!! Energy decreased to: " + this.getEnergyLevel());
	}

}
