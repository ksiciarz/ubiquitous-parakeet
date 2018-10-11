var waitForElement = function (){
  console.log("Hello");
    if(typeof window.localStorage.logonResult !== "undefined"){
        return window.localStorage.logonResult;
    }
    else{
      console.log("Hello");
        setTimeout(waitForElement, 250);
    }
}
