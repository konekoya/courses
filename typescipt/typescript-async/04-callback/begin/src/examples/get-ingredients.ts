import { ingredients } from './ingredients';

/**
 * TODO
 * Wait for a delay, get the ingredients,
 * then pass them in a callback function
 */

export function getDataAfterDelay(
  delayMs: number,
  callBack: (data: string[]) => void,
) {
  setTimeout(() => {
    callBack(ingredients);
  }, delayMs);
}
