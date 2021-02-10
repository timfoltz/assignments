class Project {
    private String name;
    private String description;
    private double initialCost;
    
    public String getName(){
        return name;
    }
    public void setName(String newName){
        name = newName;
    }
    public String getDescription(){
        return description;
    }
    public void setDescription(String newDesc){
        description = newDesc;
    }
    public double getInitialCost(){
        return initialCost;
    }
    public void setInitialCost(Double num){
        initialCost = num;
    }


    public String elevatorPitch(){
        return "Name " + this.getName() + " " +"("+ this.getInitialCost() +")"+ ":" + " Description: " + this.getDescription();
    }

    public Project(){

    }

    public Project(String name){
        this.name = name;
    }

    public Project(String name, String description){
        this.name = name;
        this.description = description;
    }
    public Project(String name, String description, Double newInitialCost){
        this.name = name;
        this.description = description;
        this.initialCost = newInitialCost;
    }
}
