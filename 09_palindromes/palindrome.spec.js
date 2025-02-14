const palindrome = require('./palindrome')

describe('palindrome', () => {
  test('works with single words', () => {
    expect(palindrome('racecar')).toBe(true);
  });
  test('works with punctuation ', () => {
    expect(palindrome('racecar!')).toBe(true);
  });
  test('works with upper-case letters ', () => {
    expect(palindrome('Racecar!')).toBe(true);
  });
  test('works with multiple words', () => {
    expect(palindrome('A car, a man, a maraca.')).toBe(true);
  });
  test('works with multiple words', () => {
    expect(palindrome('Animal loots foliated detail of stool lamina.')).toBe(true);
  });
  test('doesn\'t just always return true', () => {
    expect(palindrome('ZZZZ car, a man, a maracaz.')).toBe(false);
  });
});
