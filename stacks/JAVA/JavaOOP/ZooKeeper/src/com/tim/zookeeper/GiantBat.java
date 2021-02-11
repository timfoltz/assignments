package com.tim.zookeeper;

public class GiantBat extends Mammal {

	public GiantBat() {
		this.setEnergyLevel(300);
	}
	public void fly() {
		this.setEnergyLevel(getEnergyLevel()-50);
		System.out.println("Screech! Woosh! The GiantBat Flys over the town looking for victims! Energy decreased by 50. New energy level is: "+this.getEnergyLevel());
	}
	public void eatHumans() {
		this.setEnergyLevel(getEnergyLevel()+25);
	}
	public void attackTown() {
		this.setEnergyLevel(getEnergyLevel()-100);
		System.out.println("Crash and burn! The GiantBat attacks the town! Energy decreased by 100. New energy level is: "+this.getEnergyLevel());
		
	}
	

}
