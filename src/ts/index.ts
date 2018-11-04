import { arjan, arjanWisdom, slotMachine } from 'ts/dom-elements'
import { advanceSlotMachine } from 'ts/advance-slot-machine'
import { advanceArjanQuote } from 'ts/advance-arjan-quote'
import { arjanQuotes, state, verbs } from 'ts/global-variables'
import 'styles/index.scss'

if (arjanWisdom) arjanWisdom.textContent = arjanQuotes[state.arjanQuoteIndex]
if (slotMachine) slotMachine.textContent = verbs[state.verbIndex]

if (arjan) arjan.addEventListener('click', advanceArjanQuote)

setTimeout(() => {
  setInterval(advanceSlotMachine, 3000)
}, 2000)
