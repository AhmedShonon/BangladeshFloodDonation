let myBalance = parseFloat(document.getElementById("my-balance").innerText);
// Donate Noakhali,Feni and on quota Balances
let noakhaliBalance = parseFloat(
  document.getElementById("noakhali-balance").innerText
);

let feniBalance = parseFloat(document.getElementById("feni-balance").innerText);
let quotaBalance = parseFloat(
  document.getElementById("quota-balance").innerText
);
// modal
const modal = document.getElementById("modal");
const closeModalBtn = document.getElementById("close-modal");
const noakhaliInput = document.getElementById("donate-noakhali");
const feniInput = document.getElementById("donate-feni");
const quotaInput = document.getElementById("donate-quota");
// Function to show the modal ----- common function 1
function showModal() {
  modal.showModal(); // Show the modal
}
// Event listener for closing the modal and reloading the page
closeModalBtn.addEventListener("click", function () {
  modal.close(); // Close the modal
  noakhaliInput.value = "";
  feniInput.value = "";
  quotaInput.value = "";
});

// Function to get and display the dynamic donation message with time ----- common function 2
function displayDonationMessage(amount, location) {
  const date = new Date(); // Get current date and time

  // Create a new div element to act as a card
  const donationCard = document.createElement("div");
  donationCard.classList.add(
    "p-5",
    "my-7",
    "border",
    "border-gray-200",
    "rounded-xl"
  );

  // Determine the message based on the location
  let donationMessage;
  if (location === "Noakhali") {
    donationMessage = `${amount} Taka is Donated for Donate for Flood at Noakhali, Bangladesh`;
  } else if (location === "Feni") {
    donationMessage = `${amount} Taka is Donated for Donate for Flood Relief in Feni, Bangladesh`;
  } else if (location === "Quota") {
    donationMessage = `${amount} Taka is Donated for Aid for Injured in the Quota Movement`;
  }
  // Set the inner HTML for the donation card
  donationCard.innerHTML = `
    <strong style="color: black;">${donationMessage}</strong>
    <br>
    <span style="font-weight: 300; color: gray;">Date: ${date.toString()}</span>
  `;
  // Append the new donation card to the container
  document.getElementById("donation-message").appendChild(donationCard);
}

//Noakhali
const cardDonationBtn1 = document.getElementById("card-donation-btn1");

cardDonationBtn1.addEventListener("click", function () {
  const donateNoakhaliInput = document
    .getElementById("donate-noakhali")
    .value.trim();

  // Function to check if the input is a valid number
  function isValidNumber(input) {
    let decimalCount = 0;

    for (let i = 0; i < input.length; i++) {
      const char = input[i];

      // Check if the character is a number or a decimal point
      if (char >= "0" && char <= "9") {
        continue; // Valid numeric character
      } else if (char === ".") {
        decimalCount++;
        if (decimalCount > 1) {
          return false; // More than one decimal point
        }
      } else {
        return false; // Invalid character
      }
    }

    // Check if the input contains at least one number
    return input.length > 0 && input !== ".";
  }

  // Call the validation function
  if (!isValidNumber(donateNoakhaliInput)) {
    alert("Invalid donation amount. Please enter a valid number.");
    return;
  }

  const donateNoakhali = parseFloat(donateNoakhaliInput);

  // Ensure the donation amount is valid
  if (donateNoakhali > myBalance) {
    alert("You cannot donate more than your available balance.");
    return;
  } else if (donateNoakhali > 0) {
    // Update the balance
    myBalance -= donateNoakhali;
    noakhaliBalance += donateNoakhali;
    // Update the balance display in the HTML
    document.getElementById("my-balance").innerText = myBalance.toFixed(2);
    document.getElementById("noakhali-balance").innerText =
      noakhaliBalance.toFixed(2);
    showModal();
    displayDonationMessage(donateNoakhali, "Noakhali");
  } else {
    alert("Invalid donation amount.");
    return;
  }
});

//Feni

const cardDonationBtn2 = document.getElementById("card-donation-btn2");

cardDonationBtn2.addEventListener("click", function () {
  const donateFeniInput = document.getElementById("donate-feni").value.trim();

  function isValidNumber(input) {
    let decimalCount = 0;

    for (let i = 0; i < input.length; i++) {
      const char = input[i];

      if (char >= "0" && char <= "9") {
        continue;
      } else if (char === ".") {
        decimalCount++;
        if (decimalCount > 1) {
          return false;
        }
      } else {
        return false;
      }
    }

    return input.length > 0 && input !== ".";
  }

  if (!isValidNumber(donateFeniInput)) {
    alert("Invalid donation amount. Please enter a valid number.");
    return;
  }

  const donateFeni = parseFloat(donateFeniInput);

  if (donateFeni > myBalance) {
    alert("You cannot donate more than your available balance.");
    return;
  } else if (donateFeni > 0) {
    myBalance -= donateFeni;
    feniBalance += donateFeni;

    document.getElementById("my-balance").innerText = myBalance.toFixed(2);
    document.getElementById("feni-balance").innerText = feniBalance.toFixed(2);
    showModal();
    displayDonationMessage(donateFeni, "Feni");
  } else {
    alert("Invalid donation amount.");
    return;
  }
});

//Quota
const cardDonationBtn3 = document.getElementById("card-donation-btn3");

cardDonationBtn3.addEventListener("click", function () {
  const donateQuotaInput = document.getElementById("donate-quota").value.trim();

  function isValidNumber(input) {
    let decimalCount = 0;

    for (let i = 0; i < input.length; i++) {
      const char = input[i];

      if (char >= "0" && char <= "9") {
        continue;
      } else if (char === ".") {
        decimalCount++;
        if (decimalCount > 1) {
          return false;
        }
      } else {
        return false;
      }
    }

    return input.length > 0 && input !== ".";
  }

  if (!isValidNumber(donateQuotaInput)) {
    alert("Invalid donation amount. Please enter a valid number.");
    return;
  }

  const donateQuota = parseFloat(donateQuotaInput);

  if (donateQuota > myBalance) {
    alert("You cannot donate more than your available balance.");
    return;
  } else if (donateQuota > 0) {
    myBalance -= donateQuota;
    quotaBalance += donateQuota;

    document.getElementById("my-balance").innerText = myBalance.toFixed(2);
    document.getElementById("quota-balance").innerText =
      quotaBalance.toFixed(2);
    showModal();
    displayDonationMessage(donateQuota, "Quota");
  } else {
    alert("Invalid donation amount.");
    return;
  }
});

// History tab functionality
const historyTab = document.getElementById("history-btn");
const donationTab = document.getElementById("donation-btn");
historyTab.addEventListener("click", function () {
  historyTab.classList.add("bg-[#b5f562]", "border-none", "text-black");
  historyTab.classList.remove("text-gray-400");
  donationTab.classList.remove("bg-[#b5f562]", "border-none", "text-black");
  donationTab.classList.add("border-[2px]", "text-gray-400");
  document.getElementById("cards").classList.add("hidden");
  document.getElementById("donation-message").classList.remove("hidden");
});

//Donation tab Functionality
donationTab.addEventListener("click", function () {
  historyTab.classList.remove("bg-[#b5f562]", "border-none", "text-black");
  historyTab.classList.add("text-gray-400");
  donationTab.classList.add("bg-[#b5f562]", "border-none", "text-black");
  donationTab.classList.remove("border-[2px]", "text-gray-400");
  document.getElementById("cards").classList.remove("hidden");
  document.getElementById("donation-message").classList.add("hidden");
});
