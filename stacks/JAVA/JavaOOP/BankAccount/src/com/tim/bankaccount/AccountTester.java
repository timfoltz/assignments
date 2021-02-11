package com.tim.bankaccount;

public class AccountTester {

	public static void main(String[] args) {
		BankAccount bob = new BankAccount("Bob");
		BankAccount frank = new BankAccount("Frank");
		BankAccount george = new BankAccount("George");
		bob.depositeChecking(55.0);
		bob.depositeSavings(45.0);
		bob.getTotalBalance();
		bob.withdrawChecking(56.0);
		bob.withdrawSavings(46.0);
		frank.depositeChecking(35.0);
		frank.depositeSavings(100.0);
		frank.getTotalBalance();
		frank.withdrawChecking(15.0);
		frank.withdrawSavings(23.0);
		george.depositeChecking(335.0);
		george.depositeSavings(10.0);
		george.getTotalBalance();
		george.withdrawChecking(5.0);
		george.withdrawSavings(230.0);
		System.out.println(bob.getName()+" " + bob.getAccountNumber());
		System.out.println(frank.getName()+" " + frank.getAccountNumber());
		System.out.println(george.getName()+" " + george.getAccountNumber());
		System.out.println(BankAccount.showNumberOfAccounts());
		System.out.println(BankAccount.showNetMoney());

	}

}
