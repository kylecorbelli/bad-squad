import { slotMachine } from 'ts/dom-elements'
import {
  state,
  verbs,
} from 'ts/global-variables'

export const advanceSlotMachine = (): void => {
  if (!slotMachine) return
  slotMachine.classList.add('slot-machine--fading-out')
  setTimeout(() => {
    if (!slotMachine) return
    state.verbIndex = (state.verbIndex + 1) % verbs.length
    slotMachine.textContent = verbs[state.verbIndex]
    slotMachine.classList.remove('slot-machine--fading-out')
  }, 400)
}
