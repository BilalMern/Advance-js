// let loadData=()=>{
//     let xhttp= new XMLHttpRequest();
//     xhttp.onreadystatechange = function(){
// if(this.readyState == 4 && this.status ==200){
//             console.log(this.responseText)
//         }
//     }
//     xhttp.open('GET', "/file/data.txt", true);
//     xhttp.send()
// }





// function loadData(){
//     let xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function(){
//         if(this.readyState == 4 && this.status == 200){
//             document.getElementById("demo").innerHTML = this.responseText
//         }
//     }
// xhttp.open('GET',"/file/data.txt",true)
// xhttp.send()
// }

let loadData = ()=>{
let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
    if(this.readyState ==4 && this.status== 200){
        document.getElementById("demo").innerHTML=this.responseText
    }
}
xhttp.open('GET',"file/data.txt",true)
xhttp.send()
}