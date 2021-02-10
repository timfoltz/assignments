import java.util.ArrayList;
import java.util.Arrays;

public class Portfolio {
    private ArrayList<Project> projects = new ArrayList<Project>();

    public void setProjects(Project projectName){
        this.projects.add(projectName);
    }
    public ArrayList<Project> getProjects(){
        return this.projects;
    }
    // public void getPortfolioCost(){
    //     Double portfolioCost = 0.0;
    //     for(int i = 0; i<projects.size(); i++){
    //         System.out.println(projects.get(i));
    //         for(int j = 0; j<)

    //     }
    // }
}
