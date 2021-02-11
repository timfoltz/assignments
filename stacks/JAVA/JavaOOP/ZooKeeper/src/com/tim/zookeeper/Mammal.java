package com.tim.zookeeper;

public class Mammal {
	
	private int energyLevel = 100;
	
	public Mammal() {
	}

	public int getEnergyLevel() {
		return energyLevel;
	}

	public void setEnergyLevel(int energyLevel) {
		this.energyLevel = energyLevel;
	}
	
	public void displayEnergy() {
		System.out.println("Energy level is: "+this.energyLevel);
	}

	
}
