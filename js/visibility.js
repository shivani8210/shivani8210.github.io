document.addEventListener("visibilitychange", function(){
    if(document.visibilityState == "visible")
    {
        document.title = "SHIVANI Gupta | SOFTWARE DEVELOPER";
        
    }
    else{
        document.title = "Comback to portfolio";
    }
})