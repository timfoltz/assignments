package com.tim.bankaccount;
//import java.util.Random;

public class BankAccount {
	private long accountNumber;
	private String name;
	private double checkingBalance = 0.0;
	private double savingsBalance = 0.0;
	private static int numberOfAccounts;
	private static double netMoney;
	
	private long numberGen() {
		long num = (long) Math.floor(Math.random()*9_000_000_000L)+ 1_000_000_000L;
		return num;
	}
	
	
	public BankAccount(String name) {
		this.name = name;
		accountNumber = numberGen();
		numberOfAccounts++;	
	}


	public long getAccountNumber() {
		return accountNumber;
	}


//	public void setAccountNumber(long accountNumber) {
//		this.accountNumber = accountNumber;
//	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public double showCheckingBalance() {
		return checkingBalance;
	}


	public void depositeChecking(double depositeAmmount) {
		this.checkingBalance = this.checkingBalance + depositeAmmount;
		BankAccount.netMoney = BankAccount.netMoney + depositeAmmount;
		System.out.println("New Checking balance: " + this.checkingBalance);
	}
	
	public void withdrawChecking(double withdrawAmmount) {
		if(this.checkingBalance>=withdrawAmmount) {
			this.checkingBalance = this.checkingBalance - withdrawAmmount;
			BankAccount.netMoney = BankAccount.netMoney - withdrawAmmount;
			System.out.println("New Checking balance: " + this.checkingBalance);
		}else {
			System.out.println("There is insuficiant funds to dithraw from this account. Current balance is " + this.checkingBalance + ". Requested ammount is " + withdrawAmmount + ". (" + (this.checkingBalance - withdrawAmmount)+ ")");
		}
	}


	public double showSavingsBalance() {
		return savingsBalance;
	}


	public void depositeSavings(double depositeAmmount) {
		this.savingsBalance = this.savingsBalance +  depositeAmmount;
		BankAccount.netMoney = BankAccount.netMoney + depositeAmmount;
		System.out.println("New SAVINGS balance: " + this.savingsBalance);
	}
	
	public void withdrawSavings(double withdrawAmmount) {
		if(this.savingsBalance>= withdrawAmmount) {
			this.savingsBalance = this.savingsBalance - withdrawAmmount;
			BankAccount.netMoney = BankAccount.netMoney - withdrawAmmount;
			System.out.println("New SAVINGS balance: " + this.savingsBalance);
		}else {
			System.out.println("There is insuficiant funds to dithraw from this account. Current balance is " + this.savingsBalance + ". Requested ammount is " + withdrawAmmount + ". (" + (this.savingsBalance - withdrawAmmount)+ ")");
		}
	}
	
	public void getTotalBalance() {
		System.out.println("Checking balance " + this.checkingBalance);
		System.out.println("Savings balance " + this.savingsBalance);
		System.out.println("Total balance between accounts is " + (this.checkingBalance + this.savingsBalance));
	}


	public static int showNumberOfAccounts() {
		return numberOfAccounts;
	}


//	public static void setNumberOfAccounts(int numberOfAccounts) {
//		BankAccount.numberOfAccounts = numberOfAccounts;
//	}


	public static double showNetMoney() {
		return netMoney;
	}


//	public static void setNetMoney(double netMoney) {
//		BankAccount.netMoney = netMoney;
//	}

	
	
}
