---
title: "Regular expression matching"
description: "Collaborative coding exercise"
id: session12
---

# Regular expression matching

## Problem description

Given an input string `s` and a pattern `p`, implement regular expression matching with support for `'.'` and `'*'` where:

- `'.'` matches any single character
- `'*'` matches zero or more of the preceding element

The matching should cover the **entire input string** (not partial).

---

## Examples

### Example 1:

```
Input: s = "aa", p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".
```

### Example 2:

```
Input: s = "aa", p = "a*"
Output: true
Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".
```

### Example 3:

```
Input: s = "ab", p = ".*"
Output: true
Explanation: ".*" means "zero or more (*) of any character (.)".
```

---

## Constraints

- `1 <= s.length <= 20`
- `1 <= p.length <= 20`
- `s` contains only lowercase English letters
- `p` contains only lowercase English letters, `'.'`, and `'*'`
- It is guaranteed for each appearance of the character `'*'`, there will be a previous valid character to match

---

## Pattern Rules

### The '.' character:
- Matches **exactly one** of any character
- Example: `"a."` matches `"ab"`, `"ac"`, `"a1"`, etc.
- Does NOT match zero characters

### The '*' character:
- Matches **zero or more** of the **preceding element**
- Always appears after another character
- Example: `"a*"` can match `""` (zero a's), `"a"` (one a), `"aa"` (two a's), `"aaa"` (three a's), etc.
- Example: `".*"` can match any string (zero or more of any character)

### Important notes:
- `'*'` applies to the character immediately before it
- `'*'` cannot appear at the start of a pattern
- Multiple `'*'` can appear in a pattern (e.g., `"a*b*c*"`)

---

## Test Cases

```javascript
// Basic cases
Input: s = "aa", p = "a"
Output: false

Input: s = "aa", p = "a*"
Output: true

Input: s = "ab", p = ".*"
Output: true

// Edge cases with '*'
Input: s = "aab", p = "c*a*b"
Output: true
Explanation: c* matches zero c's, a* matches two a's, b matches b

Input: s = "mississippi", p = "mis*is*p*."
Output: false

Input: s = "mississippi", p = "mis*is*ip*."
Output: true

// Edge cases with '.'
Input: s = "ab", p = ".."
Output: true

Input: s = "ab", p = "."
Output: false

Input: s = "a", p = "ab*"
Output: true
Explanation: b* matches zero b's

// Empty matches
Input: s = "", p = ""
Output: true

Input: s = "", p = "a*"
Output: true
Explanation: a* can match zero a's

Input: s = "a", p = ""
Output: false

// Complex patterns
Input: s = "aaa", p = "a*a"
Output: true
Explanation: a* matches "aa", then a matches "a"

Input: s = "aaa", p = "ab*a*c*a"
Output: true
Explanation: b* matches zero b's, a* matches two a's, c* matches zero c's, a matches "a"

Input: s = "a", p = ".*..a*"
Output: false

Input: s = "ab", p = ".*c"
Output: false
```

---

## Edge Cases to Consider

1. **Empty string and empty pattern**: both empty should return true
2. **Empty string with pattern**: pattern with '*' can match empty string
3. **Empty pattern with string**: cannot match non-empty string
4. **Star at beginning**: guaranteed not to happen per constraints
5. **Multiple stars in a row**: e.g., `"a**"` is not valid per constraints
6. **Pattern longer than string**: can still match (e.g., `s = "a"`, `p = "ab*c*"`)
7. **String longer than pattern**: pattern with `.*` or multiple `*` can match

---

## Key Observations

1. **Greedy vs non-greedy matching**: `'*'` can match different amounts
   - For `s = "aaa"`, `p = "a*a"`: the `a*` could match 0, 1, or 2 a's

2. **Order matters**: pattern must match from left to right
   - `s = "ba"`, `p = "ab"` returns false

3. **Complete match required**: entire string must be consumed
   - `s = "aaa"`, `p = "a"` returns false (doesn't match all three a's)

4. **Star flexibility**: `x*` can match zero occurrences
   - `s = "b"`, `p = "a*b"` returns true

---

## Approach Considerations

Think about:
- How do you handle the `'*'` character matching zero or more?
- How do you handle the `'.'` character?
- Should you use recursion or iteration?
- Can you use dynamic programming?
- What are the base cases?

---

