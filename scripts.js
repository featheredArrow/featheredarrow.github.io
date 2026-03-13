



const app_url_1 = 'https://script.google.com/macros/s/AKfycbx2u7RolSpZHJ29caPIQ9H5YJl0wAGN8cSxDcnSyEOpKBtgVSFk6LW3ms8yhJmdlJYl/exec';
const app_url = 'https://script.google.com/macros/s/AKfycbyJqXZ8psHHsRelscbPnNYoyhFpL1txFdgqJCssMdDoNn3olGkioNlB2nJqAMDg_LgP/exec';
function err(text) {
    
    document.getElementById("err_txt").textContent = text;
    document.getElementById("results").style.visibility = 'hidden';
    document.getElementById("err_txt").style.visibility = 'visible';
}
async function get_data(key, id) {
    console.log("pair: " + key + ", " + id);
  try {
    err("...");
    const u = app_url + "?id=" + id + "&key=" + key;
    console.log(u);
    const response = await fetch(u, {
        method: 'GET',
    });
    if (!response.ok) {
        err("bad network. try again?");
    }
    const data = await response.json();

    //all is good, ball.
    
    if(data[1]!=null){
        document.getElementById("err_txt").style.visibility = 'hidden';
        document.getElementById("results").style.visibility = 'visible';
        document.getElementById("msg_txt").textContent = data[2];
        document.getElementById("date_txt").textContent = data[1];
        document.getElementById("str_txt").textContent = data[0] + " ";
        document.getElementById("total_txt").textContent = " • you've opened " + data[3] + " stars"
    } else{
        
        err(data[0]);
    }
  } catch (error) {
    err("something went wrong with fetching the data. please cry")
    console.error('There has been a problem with your fetch operation:', error);
  }
}

function submitted(){
    
    console.log("button pressed");
    const key = document.getElementById("key_in").value;
    const id = document.getElementById("id_in").value;
    
    if(id != "" && key != ""){
        get_data(key, id);
    } else {
        err("please fill all boxes!");
    }
}
    

    