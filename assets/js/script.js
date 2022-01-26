let array = [1, 2, 3, 4, 6, 8];


function createMap(arr,func){

    let result = [];

    for (const item of arr) {

        result.push(func(item))
    }
    return result;
}

function multiplyTwo(n){
    return n * 2
}

console.log(createMap(array,n => n*2));



let result = array.map(m => m);

console.log(result);

array[0] = 33;
console.log(array)
console.log(result);



function test(ar){
    return ar;
}

console.log(array.map(m => m *2));


 array.forEach((n,i) => {

    console.log(n + " " +i);

});











// let result = array.map((n)=>{
//     return n ++ ;
// });
// console.log(result);