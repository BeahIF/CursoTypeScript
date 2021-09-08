// / <reference path="base-component.ts"/>
// / <reference path="../decorators/autobind.ts"/>
// / <reference path="../util/autobind.ts"/>
// / <reference path="../models/drag-drop.ts"/>

import { Component } from './base-components'
import  * as Validation  from '../util/validation'
import { autobind } from '../decorators/autobind'
import { projectState } from '../state/project-state'
// namespace App{
    
 export class ProjectInput extends Component<HTMLDivElement, HTMLFormElement>{
    // templateElement : HTMLTemplateElement;
    // hostElement: HTMLDivElement;
    // element : HTMLFormElement;
    titleInputElement:HTMLInputElement;
    descriptionInputElement:HTMLInputElement;
    peopleInputElement: HTMLInputElement;
    constructor(){
        super('project-input', 'app',true, 'user-input')
        this.titleInputElement = this.element.querySelector('#title')as HTMLInputElement;
        this.descriptionInputElement= this.element.querySelector('#description')as HTMLInputElement;
        this.peopleInputElement = this.element.querySelector('#people')as HTMLInputElement;
        
        // this.templateElement = document.getElementById('project-input')! as HTMLTemplateElement;
        // this.hostElement = document.getElementById('app')! as HTMLDivElement;

        // const importedNode =document.importNode(this.templateElement,true)
        // this.element=importedNode.firstElementChild as HTMLFormElement;
        // this.element.id ='user-input';
        // this.titleInputElement = this.element.querySelector('#title') as HTMLInputElement;
        // this.descriptionInputElement = this.element.querySelector('#description') as HTMLInputElement;
        // this.peopleInputElement = this.element.querySelector('#people') as HTMLInputElement;
        // this.configure();
        // this.attach()
    }
    private gatherUserInput():[string,string,number] | void{
        const enteredTitle = this.titleInputElement.value;
        const enteredDescription = this.descriptionInputElement.value;
        const enteredPeople = this.peopleInputElement.value;
        const titleValidatable : Validation.Validatable = {
            value:enteredTitle,
            required:true
        };
        const descriptionValidatable : Validation.Validatable = {
            value:enteredDescription,
            required:true,
            minLength:5
        };
        const peopleValidatable : Validation.Validatable = {
            value:+enteredPeople,
            required:true,
            min:1
        };

        // if(validate({value:enteredTitle,required:true,minLength:5})&&
        // validate({value:enteredDescription,required:true, minLength:5})&&

            // enteredTitle.trim().length === 0 || enteredDescription.trim().length === 0
        // || enteredPeople.trim().length === 0){
        if(!Validation.validate(titleValidatable)||!Validation.validate(descriptionValidatable)||
        !Validation.validate(peopleValidatable)){
               alert('Invalid input,please try again!')
               return
        }else{
            return [enteredTitle,enteredDescription, +enteredPeople]
        }

    }
    private clearInputs(){

    }
    @autobind
    private submitHandler(event: Event){
        event.preventDefault();
        // console.log(this.titleInputElement.value)
        const userInput = this.gatherUserInput();
        if(Array.isArray(userInput)){
            const [title, desc,people]=userInput;
            projectState.addProject(title, desc, people)
            this.clearInputs()

        }
    }
    configure(){
      this.element.addEventListener('submit',this.submitHandler)
    }
    renderContent(){}
    private attach(){
        this.hostElement.insertAdjacentElement('afterbegin',this.element)
    }
}

// }