// Magic 8 Ball HTML, CSS, JS. In order to generate a random number each time put the Math.random function inside a function so it calls it everytime and gives it a different number!
// math.random (array) for background color
// credits MannyLovesCoding
const respones = ['Yes', 'Absolutely', 'Maybe', 'Absolutely Not', `Don't count on it`, 'No'];
const backgroundColors = ['red', 'green', 'blue', 'orange'];
function magicBall() {
    console.log('Generating Answer');
    const reponse = document.getElementById('response');
    const questionInput = document.getElementById('questionInput').value;
    if (questionInput == '') {
        document.getElementById('response').style.visibility = 'visible';
        reponse.innerHTML = 'Type A Question First';
        reponse.style.backgroundColor = 'transparent';
    } else {
        document.getElementById('response').style.visibility = 'visible';
        document.getElementById('shake-btn').value = 'SHAKE AGAIN!';
        const randomNumber = Math.ceil(Math.random() * respones.length - 1); // Gets responses length so the random number doesn't exceed the length
        const randomNumber2 = Math.ceil(Math.random() * backgroundColors.length - 1);
        console.log(randomNumber);
        reponse.innerHTML = respones[randomNumber];
        reponse.style.backgroundColor = backgroundColors[randomNumber2];
    }
}
