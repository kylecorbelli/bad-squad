interface State {
  arjanQuoteIndex: number
  verbIndex: number
}

export const state: State = {
  arjanQuoteIndex: 0,
  verbIndex: 0,
}

export const verbs: ReadonlyArray<string> = [
  'yields',
  'provides',
  'achieves',
  'shoulders',
  'handles',
  'serves',
  'does',
  'crushes',
  'completes',
  'performs',
]

export const arjanQuotes: ReadonlyArray<string> = [
  '80/20.',
  'This is why we can’t have nice things.',
  'Waka waka!',
  'Can we get some test coverage on that?',
  'Our job ends at the \'add\' button.',
  '¯\\_(ツ)_/¯',
]
