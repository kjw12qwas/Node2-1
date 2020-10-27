function add(a, b){
    return a+b;
}

//console.log('before');
//var result = add(3,4);
//console.log('after');
//console.log(result)

function addAsync(a, b, callback){
    setTimeout(function(){
        callback(a+b);
    },2000)
}

console.log('before');
addAsync(3,4,function(result){
    console.log(result)
})
console.log('after');

