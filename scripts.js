



const app_url = 'https://script.google.com/macros/s/AKfycbx2u7RolSpZHJ29caPIQ9H5YJl0wAGN8cSxDcnSyEOpKBtgVSFk6LW3ms8yhJmdlJYl/exec';

function err(text) {
    
    document.getElementById("err_txt").textContent = text;
    document.getElementById("results").style.visibility = 'hidden';
    document.getElementById("err_txt").style.visibility = 'visible';
    console.error("something went wrong. err: " + text);

}
async function get_data(text) {
  try {
    const u = app_url + "?str=" + text;
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
        document.getElementById("str_txt").textContent = data[0];
    } else{
        
        err("this star doesn't exist!");
    }
  } catch (error) {
    err("something went wrong with fetching the data. please cry")
    console.error('There has been a problem with your fetch operation:', error);
  }
}

function submitted(){
    const text = document.getElementById("in").value;
    if(text != ""){
        get_data(text);
    } else {
        err("enter a star ID!");
    }
}
    

    