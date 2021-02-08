public class StringManipulatorTest {
    public static void main(String[] args){
        System.out.println("Trim and Concat");
        StringManipulator manipulator = new StringManipulator();
        String str = manipulator.trimAndConcat("    Hello    ", "    World    ");
        System.out.println(str);
        System.out.println("Get index of string and char");
        StringManipulator manipulator2 = new StringManipulator();
        char indexLetter = 'o';
        Integer indexChar1 = manipulator2.getIndexOrNull("Coding", indexLetter);
        Integer indexChar2 = manipulator2.getIndexOrNull("Hello World", indexLetter);
        Integer indexChar3 = manipulator2.getIndexOrNull("Hi", indexLetter);
        System.out.println(indexChar1);
        System.out.println(indexChar2);
        System.out.println(indexChar3);
        System.out.println("Get index of 2 strings");
        StringManipulator manipulator3 = new StringManipulator();
        String indexWord = "Hello";
        String subString = "llo";
        String notSubString = "world";
        Integer indexString1 = manipulator3.getIndexOrNull(indexWord, subString);
        Integer indexString2 = manipulator3.getIndexOrNull(indexWord, notSubString);
        System.out.println(indexString1);
        System.out.println(indexString2);
        System.out.println("Concat substring");
        StringManipulator manipulator4 = new StringManipulator();
        String word = manipulator4.concatSubstring("Hello", 1, 2, "world");
        System.out.println(word);

    }
}
