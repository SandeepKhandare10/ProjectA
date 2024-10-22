function demoProgram() {
    // 1. window.prompt() - Ask user for input
    let name = window.prompt("Enter your name:");
    
    // 2. window.confirm() - Ask user for confirmation
    let isConfirmed = window.confirm("Are you sure you want to proceed, " + name + "?");
    
    if (isConfirmed) {
      // 3. window.focus() - Bring window to the front
      window.focus();
      
      // 4. window.setTimeout() - Display a message after a delay
      let timeoutId = window.setTimeout(() => {
        alert("This message appears after 3 seconds.");
      }, 3000);
      
      // 5. window.setInterval() - Repeatedly log a message every 2 seconds
      let intervalId = window.setInterval(() => {
        console.log("Repeating message every 2 seconds.");
      }, 2000);
      
      // Stop the interval after 10 seconds
      window.setTimeout(() => {
        window.clearInterval(intervalId);
        alert("Interval cleared after 10 seconds!");
      }, 10000);
      
      // 6. window.blur() - Send window to the back after a timeout
      window.setTimeout(() => {
        window.blur();
        alert("Window blurred (sent to back).");
      }, 5000);
      
      // 7. window.clearTimeout() - Clear the previous timeout
      window.setTimeout(() => {
        window.clearTimeout(timeoutId);
        console.log("Timeout cleared!");
      }, 2000);
    } else {
      alert("Action canceled!");
    }
  }
  document.createElementById("two").addEventListener('input',function(e){
    console.log(e.target.value)
  })
  document.createElementById("one").addEventListener('click',function(){
    console.log("you clickrd")
  })