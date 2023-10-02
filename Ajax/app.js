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




let loadData = ()=> {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState ==4 && this.status == 200){
            document.getElementById("demo").innerHTML = this.responseText
        }else if(this.readyState ==4 && this.status == 404){
            document.getElementById("demo").innerHTML = "your data not found"

        }
    }
    xhttp.open('GET',"/file/data.txt",true);
    xhttp.send();
    
}