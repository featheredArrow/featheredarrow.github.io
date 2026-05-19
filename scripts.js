



const app_url = 'https://script.google.com/macros/s/AKfycbytl05bquHKYsnL_gJzweDeYCBPLq7EMjLE5N12F63I0alM68-sMxXbjna4MCFjUBOL/exec';
function err(text) {
    
    document.getElementById("err_txt").textContent = text;
    document.getElementById("results").style.display = 'none';
    document.getElementById("err_txt").style.display = 'inline';
    document.getElementById("err_txt").style.visibility = 'visible';
}
async function get_data(key, id) {
    console.log("pair: " + key + ", " + id);
  try {
    err("...");
    document.getElementById("slug").style.visibility = 'visible';
    const u = app_url + "?id=" + id + "&key=" + key;
    console.log(u);
    const response = await fetch(u, {
        method: 'GET',
    });
    if (!response.ok) {
        document.getElementById("slug").style.visibility = 'hidden';
        err("bad network. try again?");
    }
    const data = await response.json();

    //all is good, ball.
    
    if(data[1]!=null){
        var found = data[3];
        var total = data[4];
        document.getElementById("slug").style.visibility = 'hidden';
        document.getElementById("err_txt").style.display = 'none';
        document.getElementById("results").style.display = 'flex';
        document.getElementById("msg_txt").textContent = data[2];
        document.getElementById("date_txt").textContent = data[1];
        document.getElementById("str_txt").textContent = data[0] + " ";

        per = (100 * (data[3]/data[4])).toFixed(1);

        var str = " • you've opened " + data[3] + " out of " + data[4] + " stars (" + per + "%)";
        document.getElementById("total_txt").textContent = str;


        var percent = data
    } else{
        document.getElementById("slug").style.visibility = 'hidden';
        err(data[0]);
    }
  } catch (error) {
    document.getElementById("slug").style.visibility = 'hidden';

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
    

    