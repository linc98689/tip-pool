function handleServerDelClick(event){
    let key = event.target.parentElement.getAttribute('id');
    if (key.includes("server")){ //delete row from server table
        delete allServers[key];
        updateServerTable();
    }
    else{ // delete row from payment tables
        delete allPayments[key];
        event.target.parentElement.remove();
        updateSummary();
        updateServerTable();
    }  
}

function appendDeleteBtn(tr){
    let delTd = document.createElement('td');
    delTd.innerText = "X";
    delTd.addEventListener("click", handleServerDelClick);
    tr.append(delTd);
}
