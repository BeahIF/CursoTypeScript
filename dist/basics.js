"use strict";
var Role;
(function (Role) {
    Role["ADMIN"] = "Admin";
    Role[Role["READ_ONLY"] = 100] = "READ_ONLY";
    Role[Role["AUTHOR"] = 101] = "AUTHOR";
})(Role || (Role = {}));
var person 
//  :{name:string;age:number, hobbies:string[],role:[number,string]}
= {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.AUTHOR
};
// person.role.push('admin');
// person.role[1]=10;
console.log(person);
console.log(person.name);
var favoriteActivities;
favoriteActivities = ['Sports'];
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
if (person.role === Role.AUTHOR) {
    console.log('is author');
}
