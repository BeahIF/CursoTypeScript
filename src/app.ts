// function add(n1:number, n2:number, showResult:boolean, phrase:string){
//     const result=n1+n2;
//     if(showResult){
//         console.log(phrase+result)
//     }else{
//         return result;
//     }
// }
// const number1=5;
// const number2=2.8;
// const printResult =true;
// const resultPhrase ="Result is ";
// add(number1, number2, printResult, resultPhrase);
// const button = document.querySelector('button');

// button?.addEventListener('click',()=>{
//     console.log('Clicked!')
// })
//Validation
interface Validatable{
    value:string|number;
    required?:boolean;
    minLength?:number;
    maxLength?:number;
    min?:number;
    max?:number
}
function validate(validatableInput:Validatable){
    let isValid = true;
    if(validatableInput.required){

        isValid = isValid && validatableInput.value.toString().trim().length != 0
    }
    if(validatableInput.minLength && typeof validatableInput.value === 'string'){
        isValid = isValid && validatableInput.value.length > validatableInput.minLength
    }
    if(validatableInput.min != null && typeof validatableInput.value === 'number'){
        isValid = isValid && validatableInput.value > validatableInput.min;
    }
    if(validatableInput.max != null && typeof validatableInput.value === 'number'){
        isValid = isValid && validatableInput.value > validatableInput.max;
    }
    return isValid;
}
//autobind decorator
function autobind(target: any, methodName: string, descriptor:PropertyDescriptor){
    const originalMethod = descriptor.value;
    const adjDescriptor:PropertyDescriptor ={
        configurable:true,
        get(){
            const boundFn: originalMethod.bind(this)
            return boundFn;
        }
    }
    return adjDescriptor;
}
//ProjectInputClass
class ProjectInput{
    templateElement : HTMLTemplateElement;
    hostElement: HTMLDivElement;
    element : HTMLFormElement;
    titleInputElement:HTMLInputElement;
    descriptionInputElement:HTMLInputElement;
    peopleInputElement: HTMLInputElement;
    constructor(){
        this.templateElement = document.getElementById('project-input')! as HTMLTemplateElement;
        this.hostElement = document.getElementById('app')! as HTMLDivElement;

        const importedNode =document.importNode(this.templateElement,true)
        this.element=importedNode.firstElementChild as HTMLFormElement;
        this.element.id ='user-input';
        this.titleInputElement = this.element.querySelector('#title') as HTMLInputElement;
        this.descriptionInputElement = this.element.querySelector('#description') as HTMLInputElement;
        this.peopleInputElement = this.element.querySelector('#people') as HTMLInputElement;
        this.configure();
        this.attach()
    }
    private gatherUserInput():[string,string,number] | void{
        const enteredTitle = this.titleInputElement.value;
        const enteredDescription = this.descriptionInputElement.value;
        const enteredPeople = this.peopleInputElement.value;
        const titleValidatable : Validatable = {
            value:enteredTitle,
            required:true
        };
        const descriptionValidatable : Validatable = {
            value:enteredDescription,
            required:true,
            minLength:5
        };
        const peopleValidatable : Validatable = {
            value:+enteredPeople,
            required:true,
            min:1
        };

        if(validate({value:enteredTitle,required:true,minLength:5})&&
        validate({value:enteredDescription,required:true, minLength:5})&&

            // enteredTitle.trim().length === 0 || enteredDescription.trim().length === 0
        || enteredPeople.trim().length === 0){
            alert('Invalid input,please try again!')
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

        }
    }
    private configure(){
        this.element.addEventListener('submit',this.submitHandler.bind(this))
    }
    private attach(){
        this.hostElement.insertAdjacentElement('afterbegin',this.element)
    }
}