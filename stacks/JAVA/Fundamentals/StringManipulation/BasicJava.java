import java.lang.reflect.Array;
import java.util.ArrayList;

public class BasicJava {
    public void print1To255(){
        for(int i = 1; i<256; i++){
            System.out.println(i);
        }
    };
    public void oddTo255(){
        for(int i = 1; i<256; i=i+2){
            System.out.println(i);
        }
    };
    public void printSum(){
        int sumNum = 0;
        for(int i = 0; i<256; i++){
            sumNum = sumNum +i;
            System.out.println("New number: "+ i + " Sum: " + sumNum);
        }
    };
    public void printArray(int[] arr){
        for(int i=0; i<arr.length;i++){
            System.out.println(arr[i]);
        }
    };
    public Integer findMax(int[] arr){
        int high = arr[0];
        for(int i=0; i<arr.length; i++){
            if(arr[i]> high){
                high = arr[i];
            }
        }
        return high;
    };
    public void average(int[] arr){
        int sum = 0;
        for(int i=0; i<arr.length;i++){
            sum = sum + arr[i];
        }
        System.out.println("Average: "+ (sum/arr.length));
    };
    public ArrayList<Integer> makeOddArray(){
        ArrayList<Integer> myArray = new ArrayList<Integer>();
        for(int i =1; i<256; i=i+2){
            myArray.add(i);
        };
        return myArray;
    };
    public Integer greaterThanY(int[] arr, int num){
        int count = 0;
        for(int i = 0; i<arr.length; i++){
            if(arr[i]>num){
                count=count+1;
            };
        };
        return count;
    };
    public int[] squareArray(int[] arr){
        for(int i=0; i<arr.length;i++){
            arr[i]=(arr[i]*arr[i]);
        };
        return arr;
    };
    public int[] noNegsArray(int[] arr){
        for(int i=0; i<arr.length; i++){
            if(arr[i]<0){
                arr[i] = 0;
            };
        };
        return arr;
    };
    public int[] minMaxAvg(int[] arr){
        int min = arr[0];
        int max = arr[0];
        int sum = 0;
        for(int i =0; i<arr.length;i++){
            sum=sum+arr[i];
            if(arr[i]<min){
                min = arr[i];
            };
            if(arr[i]>max){
                max = arr[i];
            };
        };
        int[] newArr = {min, max, (sum/arr.length)};
        return newArr;
    };
    public int[] shiftArray(int[] arr){
        for(int i=0;i<arr.length-1;i++){
            arr[i] = arr[i+1];
        };
        arr[arr.length-1] = 0;
        return arr;
    };
}