let result_first = 0
let result_second = 0

function myFunction(){
    checked = document.querySelector("[name='choice']:checked").value

    if (checked == "1"){
        result_first += 1
    }
    else{
        result_second += 1
    }

    console.log(checked)
    let htmlStr = "";

    htmlStr += `
                        <ol>
                          <ul>${result_first+result_second}回実行</ul>
                          <li>${(result_first/(result_first+result_second) * 100).toFixed(1)} %</li>
                          <li>${(result_second/(result_first+result_second) * 100).toFixed(1)}%</li>
                        </ol>
                        `;
                        
    var list = document.getElementById("result");
    list.innerHTML = htmlStr;

    var rad = document.getElementsByName("choice");
  
        for(var i=0;rad.length;i++){
             if(rad[i].checked){
                 rad[i].checked = false;
             }

        }
 }