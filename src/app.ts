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
// / <reference path="models/drag-drop.ts"/>
// / <reference path="models/project.ts"/>
// / <reference path="state/project-state.ts"/>
// / <reference path="util/validation.ts"/>
// / <reference path="decorators/autobind.ts"/>
/// <reference path="components/"
// import _ from 'lodash'
// import { ProjectInput  } from "./components/project-input";
// import { ProjectList } from "./components/project-list";
// // namespace App{
    
// //Project Type
// enum ProjectStatus { Active }
// class Project {
//     constructor(public id:string, public title:string, public description:string, 
//         public people:number, public status:ProjectStatus ){}
// }
// type Listener<T> = (items:T[]) =>void;
// class State<T>{
//     private listeners:Listener<T>[] =[];
//     addListener(listenerFn:Listener<T>){
//         this.listeners.push(listenerFn)
//     }
// }

// const prjInput = new ProjectInput();
// const activePrjList = new ProjectList('active');
// const finishedPrjList = new ProjectList('finished')
// console.log(_.shuffle([1,2,3]))
// }
import { Product } from './product.model'
import "reflect-metadata"
import {plainToClass } from 'class-transformer'
import { transform } from 'lodash'
const products = [ {title:'A Carpet', price:29.99},{title:'A Book', price:10.99}]
// const p1 = new Product('A Book',12.99)
// const loadedProducts = products.map(prod =>{
//     return new Product(prod.title, prod.price)
// })
const loadedProducts =plainToClass(Product, products)
for (const prod of loadedProducts){
    console.log(prod.getInformation())
}