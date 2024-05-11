function expandAroundCenter(input: string, left: number, right: number): number {
    while (left >= 0 && right < input.length && input[left] === input[right]) {
        left--;
        right++;
    }
    return right - left - 1;
}


export default function longestPalindromicSubstring(input: string): string {
    let start = 0;
    let end = 0;

    for (let i = 0; i < input.length; i++) {
        // This will find the longest palindrome with i as the center
        const len1 = expandAroundCenter(input, i, i);
        // This will find the longest palindrome with the gap between i and i + 1 as the center
        const len2 = expandAroundCenter(input, i, i + 1);
        const len = Math.max(len1, len2);
        if (len > end - start) {
            start = i - Math.floor((len - 1) / 2);
            end = i + Math.floor(len / 2);
        }
    }

    return input.substring(start, end + 1);
}