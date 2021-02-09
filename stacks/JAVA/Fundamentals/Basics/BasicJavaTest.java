import java.util.Arrays;
public class BasicJavaTest {
    public static void main(String[] args){
        BasicJava basic = new BasicJava();
        int[] myArray = {1,3,5,4,2,13};
        int[] negArray = {-1,3,-5,7,-9,0};

        // basic.print1To255();
        // basic.oddTo255();
        // basic.printSum();
        // basic.printArray(myArray);
        // System.out.println(basic.findMax(myArray));
        // System.out.println(basic.findMax(negArray));
        // basic.average(myArray);
        // basic.average(negArray);
        // System.out.println(basic.makeOddArray());
        // System.out.println(basic.greaterThanY(myArray, 3));
        // System.out.println(Arrays.toString(basic.squareArray(myArray)));
        // System.out.println(Arrays.toString(myArray));
        // System.out.println(Arrays.toString(basic.noNegsArray(negArray)));
        // System.out.println(Arrays.toString(basic.minMaxAvg(myArray)));
        System.out.println(Arrays.toString(basic.shiftArray(myArray)));
        System.out.println(Arrays.toString(basic.shiftArray(negArray)));
    }
}
