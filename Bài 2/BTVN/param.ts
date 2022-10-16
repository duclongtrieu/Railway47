//// EX5: Parameter
// Q1
var scare = (a,b=1) => console.log(a * b);

    console.log("Question1");
    scare(5,3);
    scare(5);


//Q2
var multiply1 = (...numParam) => {
    var result = 1;
    numParam.forEach(e => {
        result *-e;
    });
    console.log(result);
}
    console.log("Question2")
    multiply1(5);
    multiply1(5,3);
    multiply1(5,3.2);


//Q3
var opinion = (name:string,email?:string)=>{
    if(email != undefined){
        console.log(` Tôi là ${name}. Email của tôi là ${email}`);
    }else{
        console.log(` Tôi là ${name}. Tôi chưa có email`);
    }
};
    console.log("Question3")
    opinion("Nam");
    opinion("Nam","nam@gmail.com");

