# Longest Palindromic Substring

The "Longest Palindromic Substring" problem is a classic question in computer science that asks you to find 
the longest substring (sequence of characters) within a given string that reads the same forwards and backwards. 

## Expand Around Center implementation

The idea behind this approach is to treat each character in the string (and each pair of consecutive characters, 
to account for even-length palindromes) as the center of a potential palindrome. You then expand outwards and 
check for the longest palindromic substring centered at that point.

**Algorithm Steps**:
- Iterate through each character in the string.
- For each character, expand outwards with two pointers: one moving to the left and the other to the right.
- Check if characters at both pointers are the same; if they are, it's a part of the palindrome.
- Keep track of the length of the palindrome.
- Move the pointers outward until they are not the same or out of bounds.
- Update the longest palindrome if the current one is longer than what was previously recorded.
- Do this twice for each character: once considering the character as the center, and once considering the gap 
between this and the next character as the center (for even-length palindromes).

**Complexity**: Time complexity is \(O(n^2)\), and space complexity is \(O(1)\).

