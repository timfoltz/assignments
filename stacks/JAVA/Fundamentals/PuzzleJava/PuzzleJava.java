import java.util.Arrays;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.Random;

public class PuzzleJava {
    public ArrayList<Integer> greaterThan10(int[] arr){
        ArrayList<Integer> newArr = new ArrayList<Integer>();
        int sum = 0;
        for(int i=0; i<arr.length; i++){
            sum +=arr[i];
            if(arr[i]>10){
                newArr.add(arr[i]);
            };
        };
        System.out.print(sum);
        return newArr;
    };
    public ArrayList<String> longNames(String[] arr){
        List<String> list = Arrays.asList(arr);
        Collections.shuffle(list);
        String[] array = new String[list.size()];
        array = list.toArray(array);
        ArrayList<String> nameArr = new ArrayList<String>();
        for(int i = 0; i<array.length;i++){
            System.out.println(array[i]);
            if(array[i].length()>5){
                nameArr.add(array[i]);
            };
        };
        return nameArr;
    };
    public void abcs(Character[] arr){
        List<Character> abcList = Arrays.asList(arr);
        Collections.shuffle(abcList);
        Character[] abcArray = new Character[abcList.size()];
        abcArray = abcList.toArray(abcArray);
        System.out.println(abcArray[abcArray.length-1]);
        if(abcArray[0] == 'a'||
            abcArray[0] == 'e'||
            abcArray[0] == 'i'||
            abcArray[0] == 'o'||
            abcArray[0] == 'u') {
            System.out.println("The first letter is a vowel");
        }else{System.out.println(abcArray[0]);};
        System.out.println(Arrays.toString(abcArray));
        
    };
    public ArrayList<Integer> randomNumberArr(){
        ArrayList<Integer> randoArr = new ArrayList<Integer>();
        
        Random n = new Random();

        for(int i=0; i<10; i++){
            randoArr.add(n.nextInt(100-55)+55);
        }
        return randoArr;
    };
    public ArrayList<Integer> randomNumberArrSorted(){
        ArrayList<Integer> randoArr = new ArrayList<Integer>();
        Random n = new Random();
        for(int i=0; i<10; i++){
            randoArr.add(n.nextInt(101-55)+55);
        }
        Collections.sort(randoArr);
        System.out.println(randoArr.get(0));
        System.out.println(randoArr.get(9));
        return randoArr;
    };
    public String randomString(){
        String newString = "";
        Random r = new Random();
        for(int i = 0; i<5;i++){
            newString = newString+(char)(r.nextInt(26)+'a');
        };
        return newString;
    };
    public String[] randomStringArr(){
        String[] strArr;
        strArr = new String[10];
        String newString = "";
        int i =0;
        Random r = new Random();
        while(i<10){
            for(int j = 0; j<5;j++){
                newString = newString+(char)(r.nextInt(26)+'a');
            };
            strArr[i] = newString;
            newString = "";
            i++;
        };
        return strArr;

    };
}
