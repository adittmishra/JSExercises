// Gracefully handle the error in the errorCaller function

function errorFunction() {
  throw "This is a random error";
}

function errorCaller() {
  try {
    errorFunction();
  } catch (error) {
    if(error instanceof TypeError){
      console.log('Error has been Resolved');
    }
    // else-if for all 5 types of errors
    else{
      console.log('Error has been Resolved');
    }
  } finally {
    console.log('Resource released or something !');
  }
}


module.exports = { errorCaller };
