import java.util.Arrays;
public class ProjectTest {
    public static void main(String[] args){
        Project coffee = new Project();
        Project makeCoffee = new Project("Make Coffee");
        Project makeGoodCoffee = new Project("Brew Good Coffee","Brew 2.5 scoops of Black Riffle SS coffee, and 12 cups of water");
        Project makeExpensiveCoffee = new Project("Brew Expensive Coffee","Brew 2.5 scoops of Black Riffle SS coffee, and 12 cups of water",15.0);
        
        
        System.out.println(coffee);
        System.out.println("before" + coffee.getName());
        coffee.setName("Buy Coffee");
        System.out.println(coffee.getName());
        System.out.println("Description: " + makeCoffee.getDescription());
        makeCoffee.setDescription("We need to make Coffee in the morning");
        System.out.println("Updated Description: " + makeCoffee.getDescription());
        System.out.println("Cost " + makeGoodCoffee.getInitialCost());
        makeGoodCoffee.setInitialCost(35.6);
        System.out.println("Updated Cost " + makeGoodCoffee.getInitialCost());
        
        System.out.println("Elevator pitch: " + coffee.elevatorPitch());
        System.out.println("Elevator pitch: " + makeCoffee.elevatorPitch());
        System.out.println("Elevator pitch: " + makeGoodCoffee.elevatorPitch());
        System.out.println("Elevator pitch: " + makeExpensiveCoffee.elevatorPitch());

        Portfolio firstPortfolio = new Portfolio();
        firstPortfolio.setProjects(coffee);
        firstPortfolio.setProjects(makeCoffee);
        firstPortfolio.setProjects(makeGoodCoffee);
        firstPortfolio.setProjects(makeExpensiveCoffee);
        System.out.println(firstPortfolio.getProjects());
        // firstPortfolio.getPortfolioCost();
    }

}
