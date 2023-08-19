const u = require('./user');

console.log("hello this is my first node js project");
let  i =5;
while(i > 0){
    console.log(i);
    i--;
}
u.user("vikash saini . i love pizza");
console.log(u.userinfo.name);
console.log(u.userinfo.age);

