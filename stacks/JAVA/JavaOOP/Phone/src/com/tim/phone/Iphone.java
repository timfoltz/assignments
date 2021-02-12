package com.tim.phone;

public class Iphone extends Phone implements Ringable {

	public Iphone(String versionNumber, int batteryPercentage, String carrier, String ringTone) {
		super(versionNumber, batteryPercentage, carrier, ringTone);
		
	}

	@Override
	public String ring() {
		return this.getRingTone();
	}

	@Override
	public String unlock() {
		return "You've got mail";
	}

	@Override
	public void displayInfo() {
		System.out.println("versionNumber: " + this.getVersionNumber() +
				", batteryPercentage: " + this.getBatteryPercentage() +
				", carrier: " + this.getCarrier() +
				", ringTone: " + this.getRingTone());

	}

}
