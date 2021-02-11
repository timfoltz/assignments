package com.tim.zookeeper;

public class BatTest {

	public static void main(String[] args) {
		GiantBat b = new GiantBat();
		b.attackTown();
		b.attackTown();
		b.attackTown();
		b.eatHumans();
		b.displayEnergy();
		b.eatHumans();
		b.displayEnergy();
		b.fly();
		b.fly();
		b.displayEnergy();
	}

}
