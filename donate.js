let myBalance = parseFloat(document.getElementById("my-balance").innerText);
// Donate Noakhali btn
let noakhaliBalance = parseFloat(
  document.getElementById("noakhali-balance").innerText
);
// modal
const modal = document.getElementById("modal");
const closeModalBtn = document.getElementById("close-modal");
const noakhaliInput = document.getElementById("donate-noakhali");
// Function to show the modal
function showModal() {
  modal.showModal(); // Show the modal
}
// Event listener for closing the modal and reloading the page
closeModalBtn.addEventListener("click", function () {
  modal.close(); // Close the modal
  noakhaliInput.value = "";
});

// Function to get and display the dynamic donation message with time
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

  // Set the inner HTML for the donation card
  donationCard.innerHTML = `
    <strong style="color: black;">${amount} Taka is Donated for Donate for Flood at ${location}, Bangladesh</strong>
    <br>
    <span style="font-weight: 300; color: gray;">Date: ${date.toString()}</span>
  `;

  // Append the new donation card to the container
  document.getElementById("donation-message").appendChild(donationCard);
}

//Noakhali
const cardDonationBtn1 = document.getElementById("card-donation-btn1");
cardDonationBtn1.addEventListener("click", function () {
  const donateNoakhali = parseFloat(
    document.getElementById("donate-noakhali").value
  );
  // Ensure the donation amount is valid
  if (donateNoakhali > myBalance) {
    alert("You cannot donate more than your available balance.");
    return;
  } else if (!isNaN(donateNoakhali) && donateNoakhali > 0) {
    // Update the balance
    myBalance -= donateNoakhali;
    noakhaliBalance += donateNoakhali;
    // Update the balance display in the HTML
    document.getElementById("my-balance").innerText = myBalance.toFixed(2);
    document.getElementById("noakhali-balance").innerText =
      noakhaliBalance.toFixed(2);
    showModal();
    displayDonationMessage(donateNoakhali, "Noakhali");
    // console.log(
    //   `Donated ${donateNoakhali} to Noakhali. Remaining balance: ${myBalance}`
    // );
  } else {
    alert("Please enter a valid donation amount.");
    return;
  }
});

// Donate Feni button
const cardDonationBtn2 = document.getElementById("card-donation-btn2");

cardDonationBtn2.addEventListener("click", function () {
  const donateFeni = parseFloat(document.getElementById("donate-feni").value);

  if (!isNaN(donateFeni) && donateFeni > 0) {
    myBalance -= donateFeni;
    document.getElementById("my-balance").innerText = myBalance.toFixed(2);
    // console.log(
    //   `Donated ${donateFeni} to Feni. Remaining balance: ${myBalance}`
    // );
    showModal();
    displayDonationMessage(donateNoakhali, "Noakhali");
  } else {
    console.log("Invalid donation amount.");
  }
});

// Donate Quota button
const cardDonationBtn3 = document.getElementById("card-donation-btn3");

cardDonationBtn3.addEventListener("click", function () {
  const donateQuota = parseFloat(document.getElementById("donate-quota").value);

  if (!isNaN(donateQuota) && donateQuota > 0) {
    myBalance -= donateQuota;
    document.getElementById("my-balance").innerText = myBalance.toFixed(2);
    // console.log(
    //   `Donated ${donateQuota} to Quota. Remaining balance: ${myBalance}`
    // );
    showModal();
  } else {
    console.log("Invalid donation amount.");
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
