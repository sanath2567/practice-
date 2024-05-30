// var a=[67,89,34,78]
// a.push(83);
// console.log(a);
// a.pop(4);
// console.log(a);
// console.log(a[4]);
// var b=[12,23,45]
// var c=a.concat(b)
// console.log(c);
// console.log(a.indexOf(67));
// console.log(c.lastIndexOf(78));
// console.log();

// var  a={
//     name:"Shyam",
//     surname:"Singh",
//     Demo:function demo() {
//         return `Hello this is ${this.name} ${this.surname}`
//     },
//     edge:["sdf","erwer","qef"],

// }
// console.log(a.Demo());

var users = [
    {
      name: "Alice",
      contact: "alice@example.com",
     
      About: "Developer"
    },
    {
      name: "Bob",
      contact: "bob@example.com",
      
      About: "Designer"
    },
    {
        name: "charle",
        contact: "charle@example.com",
        About: "Designer"
      },
      {
        name: "dravid",
        contact: "dravid@example.com",  
        About: "Designer"
      }
  ];
  var user={
    name: "Alice",
    contact: "alice@example.com",
    news: "Subscribed",
    About: "Developer"
  };
for(var key in users){
  console.log(">>>>>");
    console.log(users[key]);
}
users.forEach(items=>{
    console.log(items.name+" "+items.contact);
    console.log();
})

const obj={
    name:"toyato",
    model:"cramy",
    year:2021,
    start:function() {
        console.log("Is started");
    },
    sandeep:function(){
        return `${this.name} ${this.model}`
    }
}
obj.start();
console.log(obj.sandeep());



// users.forEach(items=>{
//     console.log(items.name+" "+items.contact);
// })
  



