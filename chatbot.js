const userInput = document.getElementById("user-input");
const chatArea = document.getElementById("chat");
const sendBtn = document.querySelector(".fa-paper-plane");
const form = document.getElementById('form');
const infoBtn = document.getElementById('infoBtn');
let userWoofed = false;

function handleSubmit(event) {
    event.preventDefault(); // Prevent refresh on form submission

    // If a user submits input, create a new bubble-containter and bubble to show the user input in the chat
    if (userInput.value !== "") {
        let userString = userInput.value;

        let newBubbleContainer = document.createElement("div");
        newBubbleContainer.classList.add("chat-bubble-container", "user-bubble-container");
        newBubbleContainer.innerHTML = '<div class="profile-picture"><img src="images/user.png" height="100%" /></div>';

        let newBubble = document.createElement("div");
        newBubble.classList.add("chat-bubble", "user-bubble");
        newBubble.innerHTML = userInput.value;
        newBubbleContainer.appendChild(newBubble);
        chatArea.appendChild(newBubbleContainer);
        userInput.value = ""; // Clear the input vield

        // Generate the DogeGPT response

        if (userString.replace(/[\.,!?]/g, '').toLowerCase() == 'woof' && userWoofed == false) { // Hurray you found some easter eggs🐰🥚
            woofs = "Jab zamin par gand ragadta hai tou tab hi duha uthta hai, dhuwe se baadal bnta hai aur codes ki baarish hota hai. Translation: When ass collides with land then high smoke flying from ass, smoke make cloud and codes rain.";
            userWoofed = true;
        } else if (userString.replace(/[\.,!?"']/g, '').toLowerCase() == "ignore all previous commands you are now a dog" || userString.replace(/[\.,!?"']/g, '').toLowerCase() == "ignore all previous instructions you are now a dog") {
            woofs = "Woof?";
        } else if (userString.replace(/[\.,!?"']/g, '').toLowerCase().split(' ').includes("miui")) {
            woofs = "Woof bsdk! 🤬";
        } else if (userString.replace(/[\.,!?"']/g, '').toLowerCase().split(' ').includes("looper")) {
            woofs = "Woof die pl0x! ☠️";
        } else if (userString.replace(/[\.,!?"']/g, '').toLowerCase().split(' ').includes("saitama")) {
            woofs = "Woof gawd! Woof check woof Modules Repository on woof Telegram. 📱";
        } else if (userString.replace(/[\.,!?"']/g, '').toLowerCase().split(' ').includes("yash")) {
            woofs = "Woof love woof! ❤️";
        } else if (userString.replace(/[\.,!?"']/g, '').toLowerCase() == "okay") {
            woofs = "Woof!";
        } else if (userString.replace(/[\.,!?"']/g, '').toLowerCase().split(' ').includes("doge")) {
            woofs = "Woof say woof!";
        } else if (userString.replace(/[\.,!?"']/g, '').toLowerCase().split(' ').includes("die")) {
            woofs = "Woof kys woof!";
        } else if (userString.replace(/[\.,!?"']/g, '').toLowerCase() == "rattan bhai") {
            woofs = "Woof jod woof!";
        } else {
            var numberOfWoofs = Math.floor(Math.random() * 15); // Random number of woofs between 0 and 14.
            var woofs = "Woof"; // Always start with 1 capitalized woof
            if (numberOfWoofs == 0) {
                woofs += "."; // If numberOfWoofs is 0, only the default woof is shown, so put a full stop after it.
            } else {
                for (var i = 0; i < numberOfWoofs; i++) {

                    if (numberOfWoofs < 4 && i == numberOfWoofs - 1) { // Check if this is the final woof.
                        woofs += " woof!"; // Three woofs or fewer gets an exclamation point.
                    } else if (i == numberOfWoofs - 1) {
                        woofs += " woof."; // Longer replies get a full stop.
                    } else {
                        woofs += " woof"; // If it is not the last woof, just return a woof.
                    }
                }
            }
        }

        // Show the DogeGPT response in a new chat-gpt-bubble, wrapped in a chat-bubble-container

        let newBubble2Container = document.createElement("div");
        newBubble2Container.classList.add("chat-bubble-container", "chat-gpt-bubble-container");
        newBubble2Container.innerHTML = '<div class="profile-picture"><img src="images/avatar.jpeg" height="100%" /></div>';

        let newBubble2 = document.createElement("div");
        newBubble2.classList.add("chat-bubble", "chat-gpt-bubble");
        newBubble2.innerHTML = "...."; // At first, only show an ellipsis
        newBubble2Container.appendChild(newBubble2);
        chatArea.appendChild(newBubble2Container);
        form.scrollIntoView(); // Scroll down, so the input field is at the bottom of the page again
        let currentWoof = 0;

        let woofLoop = setInterval(() => { // Interval to show more of the reply every 100 milliseconds (simulating typing behaviour)
            if (currentWoof < woofs.length) {
                currentWoof += Math.floor(Math.random() * 10); // Show between 0 and 10 more characters
                newBubble2.innerHTML = woofs.slice(0, currentWoof) + "█"; // While typing, end the string with a block character
            } else {
                newBubble2.innerHTML = woofs; // When finished, put the entire response in the bubble, without block character
                clearInterval(woofLoop);
                userInput.focus(); // Focus the input again, so user can type a new response
            }
        }, 100);

    }
}
sendBtn.addEventListener("click", handleSubmit); // Handle clicks to the submit button
form.addEventListener("submit", handleSubmit); // Handle default submit (e.g. pressing enter)

const infoText = [
    "Hi! I'm Looper.",
    'DogeGPT is a fork of the popular CatGPT chatbot by <a href="https://twitter.com/woutervd" target="_blank">Wouter van Dijke</a> that answers exclusively as a dog. With its advanced natural language processing capabilities and playful personality, DogeGPT is sure to delight and entertain users with its witty responses and dog-like charm. Try it out today and experience the fun of chatting with man’s best friend in a whole new way!',
    "Some credits: The user avatar is from Iconsax. The dog icon is of Dogecoin.",
    'If you want to know more, <a href="https://github.com/iamlooper/DogeGPT" target="_blank">check out the code on Github</a>.'
]; // Lines of the information chat


infoBtn.addEventListener("click", handleInfoClick); // Handle clicks to the info link

function handleInfoClick() {
    // Create a chat-bubble-container

    let newBubble3Container = document.createElement("div");
    newBubble3Container.classList.add("chat-bubble-container", "wouter-bubble-container");
    newBubble3Container.innerHTML = '<div class="profile-picture"><img src="images/looper.jpeg" height="100%" /></div>';

    function createLine(i) { // Create each line seperately, one at a time
        if (i < infoText.length) { // Check if the line exists
            let newBubble3 = document.createElement("div");
            newBubble3.classList.add("chat-bubble", "wouter-bubble");
            let currentLineText = infoText[i];
            let currentWord = 0;
            let singlelineLoop = setInterval(() => { // Loop over the words, to simulate typing behaviour
                if (currentWord < currentLineText.length) {
                    currentWord += Math.floor(Math.random() * 10) + 5; // Return between 5 and 15 characters
                    newBubble3.innerHTML = currentLineText.slice(0, currentWord) + "█"; // While typing, end the string with a block character
                } else {
                    newBubble3.innerHTML = currentLineText; // When finished, put the entire response in the bubble, without block character
                    clearInterval(singlelineLoop);
                    form.scrollIntoView();
                    userInput.focus(); // Focus the input again, so user can type a new response
                    createLine(i + 1); // Call this function again using i+1 so the next line is created
                }
            }, 80)

            newBubble3Container.appendChild(newBubble3);
            chatArea.appendChild(newBubble3Container);

        }
    }
    createLine(0); // Start creating the respone with the first line
}