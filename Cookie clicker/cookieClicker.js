
let cookieAmount = 0;
let cookiesPerClick = 1;

const cookieYouClickOn = document.getElementById("cookieYouClickOn");
const amountOfCookies = document.getElementById("amountOfCookies");
const upgradeButton = document.getElementById("upgradeButton");
const upgradeSection = document.getElementById("upgradeSection");


window.onload = function() {

    cookieYouClickOn.addEventListener("click", function() {
        cookieAmount += cookiesPerClick;  // Add 1 to the cookie amount
        amountOfCookies.innerHTML = (`Cookies: ${cookieAmount}`);
        console.log(`Cookies: ${cookieAmount}`);  // Show the new cookie amount on the screen

        if (cookieAmount >= 10) {
            console.log("10 Cookies reached, you can now upgrade.");
            upgradeSection.style.display = "block";
        }
    });

    if (cookieAmount >= 10) {
        upgradeSection.style.display = "block";
    }

}


// This function sets up the button click event


    


/*
    upgradeButton.addEventListener("click", function() {
    if (cookieAmount >= 10) {
        cookieAmount -= 10;
        amountOfCookies.innerHTML = cookieAmount;
        cookiesPerClick = 2;
        upgradeButton.disabled = true;
        upgradeButton.innerHTML = "Upgrade Purchased";
    }

});
 */

    // Set up the upgrade button to be purchased
    upgradeButton.addEventListener("click", function() {
        if (cookieAmount >= 10) {  // Ensure the player has at least 10 cookies
            cookieAmount -= 10;  // Subtract 10 cookies to purchase the upgrade
            amountOfCookies.innerHTML = cookieAmount;  // Update the cookie count
            cookiesPerClick = 2;  // Increase cookies per click
            upgradeButton.disabled = true;  // Disable the upgrade button after purchase
            upgradeButton.innerHTML = "Upgrade Purchased";  // Change button text
        }
    });
