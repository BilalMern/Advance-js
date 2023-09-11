function foo(name,...args){
    let sum=0;
    for(let i in args){
        sum+=args[i]
    }
    console.log(`hello ${name} Your sum is ${sum}`)
}
let arr=[2,4,3]
foo("billa",...arr)