package com.tim.calculator;

import java.io.Serializable;

public class Calculator implements Serializable {
	private double operandOne = 0.0;
	private String operation ="";
	private double operandTwo = 0.0;

	public Calculator() {
		
	}

	public double getOperandOne() {
		return operandOne;
	}

	public void setOperandOne(double operandOne) {
		this.operandOne = operandOne;
	}

	public String getOperation() {
		return operation;
	}

	public void setOperation(String operation) {
		this.operation = operation;
	}

	public double getOperandTwo() {
		return operandTwo;
	}

	public void setOperandTwo(double operandTwo) {
		this.operandTwo = operandTwo;
	}
	
	public double perfomOperation() {
		if(this.getOperation()=="+") {
			
			double result = (this.getOperandOne() + this.getOperandTwo());
			return result;
		}
		if(this.getOperation() == "-") {
			
			double result = (this.getOperandOne() - this.getOperandTwo());
			return result;
		}
		return 0.0;
	}
	
	public void getResults() {
		System.out.println(this.perfomOperation());
	}

}
