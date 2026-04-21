// Step 1: Require datejs for date formatting
require('datejs');

// Step 1: Create combineUsers function with rest parameter ...args
function combineUsers(...args) {
  // Step 2: Initialize the Return Object
  const combinedObject = {
    users: [],
  };

  // Step 3: Loop through args to isolate each array
  for (let i = 0; i < args.length; i++) {
    // Step 4: Merge Arrays using spread operator
    combinedObject.users = [...combinedObject.users, ...args[i]];
  }

  // Step 5: Get today's date with datejs in M/d/yyyy format
  combinedObject.merge_date = Date.today().toString('M/d/yyyy');

  // Step 7: Return object
  return combinedObject;
}

// Export the function
module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers }),
};
