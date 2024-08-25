function checkWeekend() {
    const day = document.getElementById("dayInput").value.trim().toLowerCase();
    let result;
  
    switch (day) {
      case 'saturday':
      case 'sunday':
        result = `${day.charAt(0).toUpperCase() + day.slice(1)} is a weekend!`;
        break;
      case 'monday':
      case 'tuesday':
      case 'wednesday':
      case 'thursday':
      case 'friday':
        result = `${day.charAt(0).toUpperCase() + day.slice(1)} is not a weekend.`;
        break;
      default:
        result = 'Invalid day entered. Please enter a valid day of the week.';
    }
  
    document.getElementById("result").textContent = result;
  }
  