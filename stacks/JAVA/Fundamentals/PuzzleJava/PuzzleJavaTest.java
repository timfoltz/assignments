import java.util.Arrays;


public class PuzzleJavaTest {
    public static void main(String[] args){
        PuzzleJava puzzle = new PuzzleJava();
        int[] myArr = {3,5,1,2,7,9,8,13,25,32};
        String[] nameArr = {"Nancy", "Jinichi", "Fujibayashi", "Momochi", "Ishikawa"};
        Character[] abcArr = {'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'};

        // System.out.println(puzzle.greaterThan10(myArr));
        // System.out.println(puzzle.longNames(nameArr));
        // puzzle.abcs(abcArr);
        // System.out.println(puzzle.randomNumberArr());
        System.out.println(puzzle.randomNumberArrSorted());
        // System.out.println(puzzle.randomString());
        // System.out.println(Arrays.toString(puzzle.randomStringArr()));
    }
    
}
