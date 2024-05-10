import {beforeEach, describe, vi, it, expect} from 'vitest';
import longestPalindromicSubstring from "../LongestPalindromicSubstring.ts";

describe('longestPalindromicSubstring', () => {

    beforeEach(async () => {
        vi.restoreAllMocks();
        vi.resetModules();
    });

    const testCases = [
        ['a', 'a'],
        ['ac', 'c'],
        ['babad', 'aba'],
        ['cbbd', 'bb'],
        ['xcvbaabyui', 'baab'],
    ];

    describe.each(testCases)('given %s', (input, expected) => {
        it(`should return ${expected}`, async () => {
            expect(longestPalindromicSubstring(input)).toBe(expected);
        });
    });
});
