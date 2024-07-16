var data = [
    {
        'Name': 'chandu',
        'Age': 20,
        'Gender': 'Male',
        'Branch': 'CSE',
        'College': 'AEC',
        'CGPA': '9.0'
    },
    {
        'Name': 'venkat',
        'Age': 19,
        'Gender': 'Male',
        'Branch': 'CSE',
        'College': 'AECT',
        'CGPA': '9.9'
    },
    {
        'Name': 'Sanjay',
        'Age': 18,
        'Gender': 'Male',
        'Branch': 'CSE',
        'College': 'AEC',
        'CGPA': '9.3'
    },
    {
        'Name': 'Siva',
        'Age': 20,
        'Gender': 'Male',
        'Branch': 'CSE',
        'College': 'AEC',
        'CGPA': '9.5'
    },
    {
        'Name': 'Teja',
        'Age': 22,
        'Gender': 'Male',
        'Branch': 'IT',
        'College': 'AEC',
        'CGPA': '10'
    }
];
var headings = ['Name', 'Age', 'Gender', 'Branch', 'College', 'CGPA'];
var tab = document.getElementsByClassName('table')[0];
var body =document.getElementsByTagName('body')[0];
const y=document.getElementsByTagName('button')[0];
var rs=document.getElementsByTagName('tr');

function create() {
    tab.style = "border:2px none black;background-color: black;";
    // y.style="margin-top:2%";
    // rs.style = "background-color: yellow";
    
    var row = document.createElement('tr');

    for (let i = 0; i < headings.length; i++) {
        var z = document.createElement('th');
        z.innerHTML = headings[i];
        row.appendChild(z);
    }
    tab.appendChild(row);
    for (let i = 0; i < data.length; i++) {
        let r1 = document.createElement('tr');
        for (let j = 0; j < headings.length; j++) {
            z = document.createElement('td');
            ip = document.createElement('input');
            ip.value = data[i][headings[j]];
            z.appendChild(ip);

            r1.appendChild(z);
        }
        tab.appendChild(r1);
      
    }
   y.onclick=add;
       y.innerHTML="ADD";
       var btn=document.createElement('button');
       btn.innerHTML="DELETE";
       body.appendChild(btn);
       btn.type="button";
       btn.onclick=delet;
 }

 
 function add(){
       
    let r1 = document.createElement('tr');
        for (let j = 0; j < headings.length; j++) {
            var d=window.prompt("enter "+headings[j])
            if(d==0)
            {
              window.alert("Please Enter Data");
              j--;
              continue;
            }
          else{
            
            z = document.createElement('td');
            ip = document.createElement('input');
            ip.value = d;
            z.appendChild(ip);
            r1.appendChild(z);
          }
        }
        tab.appendChild(r1);
        y.onclick=add;
        var btn=document.getElementsByTagName('button')[1];
        btn.onclick=delet;
        // btn.style.borderRadius="15px";
 }

function delet()
{
    var x=window.prompt("enter row number to delete");
    if(x==0)
    {
        alert("cannot Delete table header");
    }
    else{
        var tr=document.getElementsByTagName('tr')[x];
        tab.removeChild(tr);
    }
    y.onclick=add;
    var btn=document.getElementsByTagName('button')[1];
    btn.onclick=delet;
}


