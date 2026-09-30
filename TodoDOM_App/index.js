// step1- select/catch the form
document.querySelector("from").addEventListener("submit",getdetails);

//step2 


function getdetails(e){
    e.preventdefault();
    let name = document.querySelector("#task").value;
    let priority = document.querySelector("#priority").value;

    //console.log(name,priority);

    let taskobj ={name,priority};

    console.log(taskobj);

    //<tr>
    //  <td>html</td>
    //<td>high</td>
    // <td>Add</td>
    //</tr>

    displayTable(taskobj);
}



function displayTable(taskobj){
    const row = document.createElement("tr");
    

    const td1 = document.createElement("td");
    td1.innerText = taskobj.name;

    const td2 = document.createElement("td");
    td2.innerText = taskobj.priority;

    const td3 = document.createElement("td");
    td3.innerText="add";

    row.append(td1,td2,td3);
    document.querySelector("tbody").append(row);
}