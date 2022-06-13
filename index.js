// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
  return blocks - 42;
    //returns the number of blocks given a value
  }
  function distanceFromHqInFeet(feet) {
    return distanceFromHqInBlocks() * 264
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
  }
  function distanceTravelledInFeet(start, destination) {
    return (destination - start) * 264
    //returns the number of feet traveled
  }
  function calculatesFarePrice(start, destination){
    if (distanceTravelledInFeet <= 400){
      return free ;
    }
    else if(distanceTravelledInFeet>= 401 && distanceTravelledInFeet<= 2000) {
      return (distanceTravelledInFeet) * 2;
      
    } 

    else if (distanceFromHqInFeet>= 2001 && distanceFromHqInFeet<= 2499){
      return (distanceTravelledInFeet) * 25;
      
      
    } 

    else if(distanceFromHqInFeet> 2500){
      return 'cannot travel that far';
    }
    //returns the fare for the customer
  }