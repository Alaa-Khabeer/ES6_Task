function GETdata(){
    new Promise((suc,fail)=>{
        const URL = "https://jsonplaceholder.typicode.com/users";
        var xml = new XMLHttpRequest();
        xml.open("GET",URL);
        xml.onreadystatechange = function(){
            if(xml.readyState == 4){
                if(xml.status == 200){
                    let data = JSON.parse(xml.responseText);
                    suc(data);
                }
                else{
                    fail("expected an error happened");
                }
            }
        };
        xml.send("");
    })
          .then((response) => {
        response.forEach((element) => {
            addData(element);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }  

function addData (res){
    var div = document.getElementsByTagName('div')[0];
    var table = document.createElement('TABLE');
    table.border = "1"
    table.style.borderCollapse = "collapse";
    table.style.fontFamily = "arial, sans-serif";
    table.style.width = '100%';
    var tableBody = document.createElement('TBODY');
    var tr = document.createElement('TR');
    let td;
    desiredInfo =[res.id,res.name,res.username,res.email,res.address.street,res.address.suite,res.address.city]
    for (var j of desiredInfo) {
        td = document.createElement('TD');
        td.textAlign= "center";
        td.style.padding = "10px";
        td.style.border = "none";
        td.style.textAlign = "center";
        td.style.width="150px";
        td.appendChild(document.createTextNode(j));
        tr.appendChild(td);
        tr.style.border = "1px solid #ababab";
        tr.style.backgroundColor = "#dddddd";
        tableBody.appendChild(tr);
    }

    table.appendChild(tableBody);
    div.appendChild(table);
  }

  function addTable(){
    var div = document.getElementsByTagName('div')[0];
    var table = document.createElement('TABLE');
    table.border = "1"
    table.style.borderCollapse = "collapse";
    table.style.fontFamily = "arial, sans-serif";
    table.style.width = '100%';
    var tableBody = document.createElement('TBODY');
    var tr = document.createElement('TR');
    tr.style.backgroundColor = "#4CAF50";
    tr.style.color = "white";
    let head = ["ID","Name","User Name","Email","Address(Street)","Address(Suite)","Address(City)"]
    let th;
    for (i of head){
        th = document.createElement('TH');
        th.style.padding = "10px";
        th.style.border = "none";
        th.style.textAlign = "center";
        th.style.width="150px";
        th.appendChild(document.createTextNode(i));
        tr.appendChild(th);
        tr.style.border = "1px solid #ababab";
        tableBody.appendChild(tr);
    }

    table.appendChild(tableBody);
    div.appendChild(table);
    GETdata();
  }
 

var btn = document.getElementsByTagName('button')[0];
btn.style.backgroundColor = "#4CAF50";
btn.style.border = "none";
btn.style.borderRadius = "5px";
btn.style.padding = "15px 32px";
btn.style.textAlign = "center";
btn.style.cursor = "pointer";
btn.style.color = "white";
btn.style.display = "block";
btn.style.marginLeft = "auto";
btn.style.marginRight = "auto";