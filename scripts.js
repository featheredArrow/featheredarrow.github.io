



const app_url = 'https://script.google.com/macros/s/AKfycby0U3GoQLuJUNMAXiFdFqpVBiLwy7CbChvuuGJ0rrEL_XYCfXSIARMqnnmEBUdHPfNp/exec';
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
        document.getElementById("slug").style.visibility = 'hidden';
        document.getElementById("err_txt").style.display = 'none';
        document.getElementById("results").style.display = 'flex';
        document.getElementById("msg_txt").textContent = data[2];
        document.getElementById("date_txt").textContent = data[1];
        document.getElementById("str_txt").textContent = data[0] + " ";
        document.getElementById("total_txt").textContent = data[3]
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
    

    