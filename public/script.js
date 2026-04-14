// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

let quoteElem = document.querySelector("button#randomQuote");
let quotes = [
    "The greatest of all weaknesses is the fear of appearing weak ― The Pragmatic Programmer",
    "An investment in knowledge always pays the best interest ― The Pragmatic Programmer",
    "Names are deeply meaningful to your brain, and misleading names add chaos to your code ― The Pragmatic Programmer",
    "Indeed, the ratio of time spent reading versus writing is well over 10 to 1. We are constantly reading old code as part of the effort to write new code. ...[Therefore,] making it easy to read makes it easier to write ― Clean Code",
    "It is not enough for code to work ― Clean Code",
    "It is not the language that makes programs appear simple. It is the programmer that make the language appear simple! ― Clean Code",
    "Redundant comments are just places to collect lies and misinformation ― Clean Code",
    "A long descriptive name is better than a short enigmatic name. A long descriptive name is better than a long descriptive comment ― Clean Code",
    "Clean code always looks like it was written by someone who cares ― Clean Code",
    "Don’t always consider all your options. Don’t necessarily go for the outcome that seems best every time. Make a mess on occasion. Travel light. Let things wait. Trust your instincts and don’t think too long. Relax. Toss a coin. Forgive, but don’t forget. To thine own self be true ― Algorithms to Live By",
    "Seemingly innocuous language like 'Oh, I'm flexible' or 'What do you want to do tonight?' has a dark computational underbelly that should make you think twice. It has the veneer of kindness about it, but it does two deeply alarming things. First, it passes the cognitive buck: 'Here's a problem, you handle it.' Second, by not stating your preferences, it invites the others to simulate or imagine them. And as we have seen, the simulation of the minds of others is one of the biggest computational challenges a mind (or machine) can ever face ― Algorithms to Live By",
    "Even the best strategy sometimes yields bad results—which is why computer scientists take care to distinguish between “process” and “outcome.” If you followed the best possible process, then you’ve done all you can, and you shouldn’t blame yourself if things didn’t go your way ― Algorithms to Live By",
    "To try and fail is at least to learn; to fail to try is to suffer the inestimable loss of what might have been ― Algorithms to Live By",
    "Optimal stopping tells us when to look and when to leap. The explore/exploit tradeoff tells us how to find the balance between trying new things and enjoying our favorites. Sorting theory tells us how (and whether) to arrange our offices. Caching theory tells us how to fill our closets. Scheduling theory tells us how to fill our time ― Algorithms to Live By",
    "Every action you take is a vote for the type of person you wish to become. No single instance will transform your beliefs, but as the votes build up, so does the evidence of your new identity ― Atomic Habits",
    "You should be far more concerned with your current trajectory than with your current results ― Atomic Habits",
    "You do not rise to the level of your goals. You fall to the level of your systems ― Atomic Habits",
    "You don’t have to be the victim of your environment. You can also be the architect of it ― Atomic Habits",
]
quoteElem.addEventListener('click', (e) => {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    alert(quote);
})