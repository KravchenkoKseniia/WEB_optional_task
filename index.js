document.getElementById('submit').addEventListener('click', async () => {
    const numberOfJokes = parseInt(document.getElementById('input').value, 10);
    const output = document.getElementById('output');

    if (numberOfJokes === 0) {
        output.innerHTML = `<p>Please enter a number greater than 0.</p>`;
    }

    if (numberOfJokes > 0) {
        try {
            const response = await fetch(`https://official-joke-api.appspot.com/jokes/random/${numberOfJokes}`);
            const data = await response.json();
            const jokes = data.map(joke => render(joke.setup, joke.punchline));

            const container = document.body.querySelector('.output-container');
            container.innerHTML = jokes.join("");

        } catch (error) {
            output.innerHTML = `<p>Something went wrong. Please try again later.</p>`;
        }
    }
    else {
        output.innerHTML = `<p>Please enter a valid number.</p>`;
    }
});

function render(setup, punchline) {
    return `
        <div class="joke-div">
            <p class="quote">${setup}</p>
            <p>${punchline}</p>
        </div>
    `
}
