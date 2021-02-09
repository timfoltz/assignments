import java.util.HashMap;
import java.util.Set;

public class HashMapFun {
    public static void main(String[] args){
        HashMap<String, String> trackList = new HashMap<String, String>();
        trackList.put("Bodies","Let the bodies hit the floor Let the bodies hit the floor Let the bodies hit the floor Let the bodies hit the floor");
        trackList.put("Unchained Melody", "Woah, my love, my darling I've hungered for your touch A long, lonely time And time goes by so slowly And time can do so much Are you still mine? I need your love I need your love God speed your love to me");
        trackList.put("Like a Prayer", "Life is a mystery Everyone must stand alone I hear you call my name And it feels like home When you call my name it's like a little prayer I'm down on my knees, I wanna take you there In the midnight hour I can feel your power Just like a prayer you know I'll take you there");
        trackList.put("Ruff Riders Anthem","Stop, drop, shut 'em down, open up shop Oh, no, that's how Ruff Ryders roll Stop, drop, shut 'em down, open up shop Oh, no, that's how Ruff Ryders roll");
        Set<String> keys = trackList.keySet();
        System.out.println(trackList.get("Like a Prayer"));
        for(String key : keys){
            System.out.println(key+ ": " + trackList.get(key));
            System.out.println(trackList.get(key));
        };
        
    };
};
