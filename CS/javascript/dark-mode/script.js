function darkMode() {
   // Variable - A storage container for data
   // Const - A keyword in JS that defines a variable that cannot change
   
    // Store the body tag in a variable
    const body = document.body;
    
    // Write the code to toggle the color of the body tag
    // black and white
    if (body.style.backgroundColor == 'white')
    {
        // Change the background color to black
        body.style.backgroundColor = 'black'

        // Change the text color to white

    } else {
        body.style.color = 'white';

        body.style.backgroundColor = "white";

        body.style.color = 'black';
    }
}
