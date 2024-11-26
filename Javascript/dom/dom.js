// Function to generate a random color in hex format
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Select all boxes
const boxes = document.querySelectorAll('.box');

// Loop through each box and apply random colors
boxes.forEach(box => {
    const textColor = getRandomColor();
    const backgroundColor = getRandomColor();

    box.style.color = textColor;           // Set random text color
    box.style.backgroundColor = backgroundColor; // Set random background color
});
