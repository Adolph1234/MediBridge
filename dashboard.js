function updateDateTime() {
    const now = new Date();
    document.getElementById("datetime").innerText =
      now.toDateString() + " | " + now.toLocaleTimeString();
  }
  
  setInterval(updateDateTime, 1000);
  updateDateTime();

  function handleLogout() {
    // Remove saved login data
    localStorage.removeItem("userToken");
    sessionStorage.clear();

    // Redirect to login page
    window.location.href = "login.html";
}

  