
// mobile responsive 

function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }



  // Accordian javascript start .....
var acc = document.getElementsByClassName("accordion");

for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// Accordian javascript end .....

  // price extimator javascript start .....
  // price extemator javascript end .....

 
    // Subscribe form function start
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("subscribe-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const message = document.getElementById("message");

    // Email format validation using RegEx
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(email)) {
      message.textContent = "Thanks for subscribing!";
      message.style.color = "lightgreen";
      document.getElementById("email").value = "";
    } else {
      message.textContent = "Please enter a valid email.";
      message.style.color = "red";
    }
  });
});

    // Subscribe form function end


// scroll behavior 
window.scroll({
    behavior: 'smooth'
});



// appoinment booking  .......start


  // document.getElementById("booking-form").addEventListener("submit", function (e) {
  //   e.preventDefault(); // prevent default submit

  //   const name = document.getElementById("name").value.trim();
  //   const phone = document.getElementById("phone").value.trim();
  //   const address = document.getElementById("address").value.trim();
  //   const date = document.getElementById("date").value;
  //   const piercing = document.getElementById("piercing").value.trim();
  //   const material = document.getElementById("material").value.trim();

  //   // Simple validation checks
  //   if (!name || !phone || !address || !date || !piercing || !material) {
  //     alert("Please fill in all required fields.");
  //     return;
  //   }

  //   // Phone number validation (10+ digits)
  //   if (!/^\d{10,}$/.test(phone)) {
  //     alert("Please enter a valid phone number with at least 10 digits.");
  //     return;
  //   }

  //   // If all checks pass
  //   alert("Thank you! Your appointment is booked.");
  //   this.reset(); // Clear the form
  // });


// appoinment booking  .......end


