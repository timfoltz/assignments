public class GreeterTest {
    public static void main(String[] args){
        Greeter g = new Greeter();
        String greeting = g.greet();
        String greetingWithName = g.greet("Eduardo");
        System.out.println(greetingWithName);
        System.out.println(greeting);
    }
}
