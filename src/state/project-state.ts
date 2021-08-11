namespace App{
    //Project State Management

export class ProjectState extends State<Project>{
    // private listeners: any[] =[]
    private projects:any[] = [];
    private static instance:ProjectState;
    private constructor(){
        super()
    }
    static getInstance(){
        if(this.instance){
            return this.instance
        }
        this.instance = new ProjectState();
        return this.instance;
    }
    addListener(listenerFn:Listener){
        this.listeners.push(listenerFn)
    }
    addProject(title:string, description:string, numOfPeople:number){
        const newProject = {
            id:Math.random().toString(),
            title:title, 
            description:description,
            people:numOfPeople,
            ProjectStatus.Active
        }
        this.projects.push(newProject)
        // for(const listenerFn of this.listeners){
        //     listenerFn(this.projects.slice())
        // }]
        this.updateListeners();
    }
    moveProject(projectId : String, newStatus:ProjectStatus){
        const project = this.projects.find(prj => prj.id === projectId)
        if(project && project.status !== newStatus){
            project.status = newStatus
            this.updateListeners();
        }

    }
    private updateListeners(){
        for(const listenerFn of this.listeners){
            listenerFn(this.projects.slice())
        }
    }
}
const projectState =  new ProjectState.getInstance()

}