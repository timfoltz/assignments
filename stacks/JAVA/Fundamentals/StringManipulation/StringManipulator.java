public class StringManipulator {
    public String trimAndConcat(String string1, String string2){
        String trimmedString1 = string1.trim();
        String trimmedString2 = string2.trim();
        String concatStrings = trimmedString1.concat(trimmedString2);
        return concatStrings;
    }
    public Integer getIndexOrNull (String string1, char char1){
        int result = string1.indexOf(char1);
        if(result>=0){
            return result;
        }else{return null;}
    }
    public Integer getIndexOrNull(String string1, String string2){
        int result = string1.indexOf(string2);
        if(result>=0){
            return result;
        }else{return null;}
    }
    public String concatSubstring(String string1, int number1, int number2, String string2){
        String substring1 = string1.substring(number1,number2);
        String result = substring1.concat(string2);
        return result;
    }
}
