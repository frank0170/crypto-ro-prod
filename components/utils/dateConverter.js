export function dateConverter( dateString ) {
    // Convert the provided date string to a Date object
    const providedDate = new Date(dateString);
  
    // Get the current time
    const currentTime = new Date();
  
    // Calculate the difference in milliseconds between the current time and provided time
    const timeDifference = currentTime - providedDate;
  
    // Convert milliseconds to hours
    const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));
  
    // If the difference is less than 24 hours, show hours, else show days
    const output = timeDifference < (1000 * 60 * 60 * 24) ?
      `${hoursDifference} ore` :
      `${Math.floor(timeDifference / (1000 * 60 * 60 * 24))} ${Math.floor(timeDifference / (1000 * 60 * 60 * 24)) <= 2 ? 'zile' : 'zi'}`;
  
    return output
  }