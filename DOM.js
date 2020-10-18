//const h1 = document.querySelector("#witty");
//console.log(h1);
//h1.textContent = "Get hacked, me";

const main = document.querySelector('main');

const joke1 = 'What do you get when you cross and owl with a bungee cord? I cannot finish the joke, but if you have seen Kung Pow, then you know.';
const joke2 = 'Two fish are in a tank. One looks at the other and says "hey, do you know how to drive this thing?"';
const joke3 = "I don't always code but when I do, I cry";

const template = `
    <section>
        <h1>My Jokes</h1>
        <li>${joke1}</li>
        <li>${joke2}</li>
        <li>${joke3}</li>
    </section>
`;

main.innerHTML = template;

const p = document.createElement("p");
p.textContent = "That's all, folks!";
document.body.appendChild(p);