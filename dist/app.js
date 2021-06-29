"use strict";
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
var ProjectInput = /** @class */ (function () {
    function ProjectInput() {
        this.templateElement = document.getElementById('project-input');
        this.hostElement = document.getElementById('app');
        var importedNode = document.importNode(this.templateElement, true);
        this.element = importedNode.firstElementChild;
        this.element.id = 'user-input';
        this.titleInputElement = this.element.querySelector('#title');
        this.descriptionInputElement = this.element.querySelector('#description');
        this.peopleInputElement = this.element.querySelector('#people');
        this.configure();
        this.attach();
    }
    ProjectInput.prototype.submitHandler = function (event) {
        event.preventDefault();
        console.log(this.titleInputElement.value);
    };
    ProjectInput.prototype.configure = function () {
        this.element.addEventListener('submit', this.submitHandler.bind(this));
    };
    ProjectInput.prototype.attach = function () {
        this.hostElement.insertAdjacentElement('afterbegin', this.element);
    };
    return ProjectInput;
}());
