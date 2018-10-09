var verbIndex = 0;

var verbs = [
  "yields",
  "provides",
  "achieves",
  "shoulders",
  "handles",
  "rocks",
  "serves",
  "does",
  "crushes",
  "completes",
  "performs"
];

var arjanQuoteIndex = 0;
var arjanQuotes = [
  "80/20.",
  "This is why we can’t have nice things.",
  "Waka waka!",
  "Can we get some test coverage on that?",
  "Our job ends at the \"add\" button."
];

function getNextArjanQuote () {
  arjanQuoteIndex = (arjanQuoteIndex + 1) % arjanQuotes.length;
  return arjanQuotes[arjanQuoteIndex];
}

var arjan = document.querySelector('.arjan-img-container');
var arjanWisdom = document.querySelector('.arjan-wisdom')
var slotMachine = document.querySelector(".slot-machine");

slotMachine.textContent = verbs[verbIndex];

arjan.addEventListener('click', () => {
  const quote = getNextArjanQuote();
  if (!arjanWisdom.classList.contains('arjan-wisdom--shown')) {
    arjanWisdom.textContent = quote;
    return arjanWisdom.classList.add('arjan-wisdom--shown');
  }
  arjanWisdom.classList.remove('arjan-wisdom--shown');
  setTimeout(() => {
    arjanWisdom.textContent = quote;
    arjanWisdom.classList.add('arjan-wisdom--shown');
  }, 300);
});

function advanceSlotMachine () {
  slotMachine.classList.add('slot-machine--fading-out');
  setTimeout(() => {
    verbIndex = (verbIndex + 1) % verbs.length;
    slotMachine.textContent = verbs[verbIndex];
    slotMachine.classList.remove('slot-machine--fading-out');
  }, 400);
}

setTimeout(() => {
  setInterval(advanceSlotMachine, 3000);
}, 2000);
