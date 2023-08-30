1).
let obj1 = {name:"person1",age:5};
let obj2 = {age:5,name:"person2"};
console.log(is equal(obj1,obj2))
console.log(obj1==obj2)
***********************************
2).
 let xhr = new XMLHttpRequest();
console.log(xhr);
xhr.open("GET","https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload = function () {
    const data JSON.parse(xhr.Response);
    console.log(data);
    console.log(xhr.status);
    for(let i=0;i<data.length;i++) {
        console.log("flag:",data[i].flags);
    }
};
3). 
let xhr = new XMLHttpRequest();
console.log(xhr);
xhr.open("GET","https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload = function () {
    const data JSON.parse(xhr.Response);
    console.log(data);
    console.log(xhr.status);
    for(let i=0;i<data.length;i++) {
        console.log(
            Name : ${data[i].name.common}
            Region : ${data[i].postalcode.region}
            Sub-region : ${data[i].postalcode.sub-region}
            Population : ${data[i].population}
        );
    }
};