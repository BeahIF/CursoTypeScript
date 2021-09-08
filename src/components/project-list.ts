// / <reference path="base-component.ts"/>
// / <reference path="../decorators/autobind.ts"/>
// / <reference path="../state/project-state.ts"/>
// / <reference path="../models/drag-drop.ts"/>
import {DragTarget} from '../models/drag-drop.js'
import { Project ,ProjectStatus} from '../models/project.js'
import { Component } from './base-components.js'
import { autobind } from './decorators/autobind.js'
import { projectState } from '../state/project-state.js'
import { ProjectItem } from './project-item.js'

// namespace App{
    
//ProjectInputClass
export class ProjectList extends Component<HTMLDivElement, HTMLElement> implements DragTarget{
    // templateElement: HTMLTemplateElement;
    // hostElement:HTMLDivElement;
    // element:HTMLElement;
    assignedProjects : Project[]
    constructor(private type:'active'| 'finished'){
        super('project-list','app',false, `${this.type}-projects`)
        // this.templateElement = document.getElementById('project-list')! as HTMLTemplateElement;
        // this.hostElement = document.getElementById('app')! as HTMLDivElement;
        this.assignedProjects = []
        // const importedNode =document.importNode(this.templateElement,true)
        // this.element=importedNode.firstElementChild as HTMLFormElement;
        // this.element.id =`${this.type}=projects`;
            this.configure()
            this.renderContent()
        }
        @autobind
        dragOverHandler(event:DragEvent){
            if(event.dataTransfer && event.dataTransfer.types[0])
            const listEl = this.element.querySelector('ul');
            listEl?.classList.add('droppable')

        }
        dropHandler(event:DragEvent){
            const prjId = (event.dataTransfer!.getData('txt/plain'))
            projectSstate.moveProject(
                prjId,
                this.type == 'active' ? ProjectStatus.Active : ProjectStatus.Active:ProjectStatus.Finished
            )
        }
        @autobind
        dragLeaveHandler(_:DragEvent){
            const listEl =  this.element.querySelector('ul')
            listEl?.classList.remove('droppable')
        }
        configure(){
            this.element.addEventListener('dragover', this.dragOverHandler)
            this.element.addEventListener('dragleave', this.dragLeaveHandler)
            this.element.addEventListener('drop', this.dropHandler)


            projectState.addListener((project:Project[])=>{
                const rerlevantProjects = projects.filter(prj =>{
                    if(this.type === 'active'){
                        return prj.status === ProjectStatus.Active
                    }
                    return prj.status === ProjectStatus.Finished       })
                this.assignedProjects =relevantProjects;
                this.renderProjects();
    
            })
        }
        //this.attach()
        rederContent(){
            const listId = `${this.type}-projects-list`;
            this.element.querySelector('ul')!.id= listId;
            this.element.querySelector('h2')!.textContent = this.type.toUpperCase()+' PROJECTS';
        }
       
    
    private renderProjects(){
        const listEl = document.getElementById(`${this.type}-project-list`)! as HTMLUListElement
        listEl.innerHTML ='';
        for(const prjItem of this.assignedProjects){
            // const listItem = document.createElement('li')
            // listItem.textContent = prjItem.title
            // listEl.appendChild(listItem)
            new ProjectItem(this.element.querySelector('ul')!.id, prjItem)
        }

    }
    private rederContent(){
        const listId = `${this.type}-projects-list`;
        this.element.querySelector('ul')!.id = listId;
        this.element.querySelector('h2')!.textContent = this.type.toUpperCase()
    }
    private attach(){
        this.hostElement.insertAdjacentElement('afterbegin',this.element)
    }

}
// }