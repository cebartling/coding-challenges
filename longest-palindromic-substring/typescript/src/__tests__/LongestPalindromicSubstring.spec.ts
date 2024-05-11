import {beforeEach, describe, expect, it, vi} from 'vitest';
import longestPalindromicSubstring from "../LongestPalindromicSubstring.ts";

describe('longestPalindromicSubstring', () => {

    beforeEach( () => {
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
        it(`should return ${expected}`, () => {
            expect(longestPalindromicSubstring(input)).toEqual(expected);
        });
    });
});
