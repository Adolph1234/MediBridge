// Handle form submission
document.getElementById("requestForm").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("popup").style.display = "block";
  });
  
  // Close popup
  function closePopup() {
    document.getElementById("popup").style.display = "none";
  }
  
  // Back button navigation
  function goBack() {
    window.location.href = "dashboard.html"; // Replace with your actual dashboard file
  }
  