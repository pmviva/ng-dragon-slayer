/**
 * Generates a random number between min and max.
 * @param min The minimum number to generate.
 * @param max The maximum number to generate.
 */
export function randomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min)) + min;
}
