
enum Role{ADMIN='Admin',READ_ONLY=100,AUTHOR}

const person 
//  :{name:string;age:number, hobbies:string[],role:[number,string]}
= {
    name:'Maximilian',
    age:30,
    hobbies:['Sports', 'Cooking'],
    role:Role.AUTHOR
};
// person.role.push('admin');
// person.role[1]=10;
console.log(person)
console.log(person.name)

let favoriteActivities:string[];
favoriteActivities = ['Sports'];
for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase())
}
if(person.role===Role.AUTHOR){
    console.log('is author')
}

typing typing typing 
