import { arjanWisdom } from 'ts/dom-elements'
import { arjanQuotes, state } from 'ts/global-variables'

const getNextArjanQuote = (): string => {
  state.arjanQuoteIndex = (state.arjanQuoteIndex + 1) % arjanQuotes.length
  return arjanQuotes[state.arjanQuoteIndex]
}

export const advanceArjanQuote = (): void => {
  if (!arjanWisdom) return
  const quote = getNextArjanQuote()
  if (!arjanWisdom.classList.contains('arjan-wisdom--shown')) {
    arjanWisdom.textContent = quote
    return arjanWisdom.classList.add('arjan-wisdom--shown')
  }
  arjanWisdom.classList.remove('arjan-wisdom--shown')
  setTimeout(() => {
    if (!arjanWisdom) return
    arjanWisdom.textContent = quote
    arjanWisdom.classList.add('arjan-wisdom--shown')
  }, 300)
}
