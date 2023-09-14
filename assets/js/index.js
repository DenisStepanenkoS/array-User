function getFullName(){
    return this.firstName;
}



function User(name, surname, age, isMale, email, isSubscribed) {
    this.firstName = name;
    this.lastName = surname;
    this.age = age;
    this.isMale = isMale;
    this.email = email;
    this.isSubscribed = isSubscribed;
    this.getFullName = getFullName;
  }
  
  const users = [];
  
  for (let i = 0; i < 100; i++) {
    const user = new User(
      `Username${i}`,
      `Usersurname${i}`,
      Math.floor(Math.random() * 90),
      Math.random() > 0.5,
      `useremail${i}@gmail.com`,
      Math.random() > 0.5
    );
    users.push(user);
  }

console.log(users[5].getFullName());

let arr2 = [];
arr2 = users.filter((element) => (element.isSubscribed === false));
console.log(arr2);
arr2 = [];
for(let i = 0; i<100; i++){
    if((users[i].age <= 18 && users[i].age >= 6) && (users[i].isMale === false)){
        arr2.push(users[i]);
    }
}
console.log(arr2);
let tmp = users.findIndex((element) => element.email === "useremail5@gmail.com");
if(tmp !== -1){
    users.splice(tmp, 1);
}


console.log(users.some((elem) => elem.email === "useremail99@gmail.com"));

console.log(users.every((elem) => elem.isSubscribed === true));


