// Execute the below function.
// - There is an issue with the order of messages

// - Reason here why is it so.
// Answer: First log is instant, but for second and third log the setTimeout() is called and because of that, even though the timeout is for 0 or 1 millisec, the execution has already reached fourth log. 

// - Explain in your own terms what are event loops?
// Answer: In the below function we get an illusion of multi-threading even though JavaScript is single threaded. The reason is Event Loop - An event is a way where a calling functino function (learnEventLoops()) is push from Event Queue to function stack and then this function can perform callbacks (in this case) because of which the callback function (setTimeout) is added to the Event Queue waiting for its turn.
// Thus effecting the order of the messages in this case.

function learnEventLoops() {
  console.log("Learning event loops");
  setTimeout(function print() {
    console.log("50% Learning done!");
  }, 0); // 0 millisec
  setTimeout(function print() {
    console.log("75% Learning done!");
  }, 1); // 1 millisec
  console.log("Learning completed!!");
}


learnEventLoops();
