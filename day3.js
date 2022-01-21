var obj = {
    name : "person",
    age : 22,
    gender : "male",
    email : "person@mail.com",
    mobileNumber : 9876543210
    }


for(i=0;i<Object.keys(obj).length;i++){
    console.log(Object.entries(obj)[i]);
}


// For in - it will print the keys
for(keys in obj){
    console.log(keys);
}

// For of  - it prints key and value 
for(keys of Object.keys(obj)){
    console.log(keys,":",obj[keys]);
}


// For each 
Object.entries(obj).forEach(val => {
    console.log(val);
});