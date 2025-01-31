// Array of cards with their image paths and fortune messages
const cards = [
    {
        image: 'card1.png',  // Replace with the actual filename of the image you downloaded
        fortune: "The future is bright, full of possibilities and new beginnings."
    },
    {
        image: 'card2.jpg',  // Placeholder for other cards, replace with other images you have
        fortune: "An unexpected change is on the horizon. Prepare yourself."
    },
    {
        image: 'card3.jpg',
        fortune: "Success is within your reach, but patience is required."
    },
    {
        image: 'card4.jpg',
        fortune: "A new friendship or partnership will soon enter your life."
    },
    {
        image: 'card5.jpg',
        fortune: "Beware of distractions; focus on your goals to achieve greatness."
    },
    {
        image: 'card6.jpg',
        fortune: "Adventure awaits! Embrace new experiences and open yourself to new opportunities."
    },
];

// Function to draw a random card and show the result
function drawCard() {
    // Generate a random index to select a card
    const randomIndex = Math.floor(Math.random() * cards.length);

    // Get the card image and fortune from the array
    const selectedCard = cards[randomIndex];

    // Display the card image and fortune message
    const cardImage = document.getElementById('cardImage');
    const fortuneMessage = document.getElementById('fortuneMessage');

    // Set the image source and make it visible
    cardImage.src = selectedCard.image;
    cardImage.style.display = 'block';

    // Set the fortune message
    fortuneMessage.textContent = selectedCard.fortune;
}
