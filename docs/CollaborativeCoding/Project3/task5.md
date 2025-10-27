---
title: "Palindrome number"
description: "Collaborative coding exercise"
id: session11
---

# Palindrome number

## Problem description

Given an integer `x`, return `true` if `x` is a palindrome, and `false` otherwise.

A palindrome is a number that reads the same backward as forward.

---

## Examples

### Example 1:

```
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
```

### Example 2:

```
Input: x = -121
Output: false
Explanation: from left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
```

### Example 3:

```
Input: x = 10
Output: false
Explanation: reads 01 from right to left. Therefore it is not a palindrome.
```

---

## Test Cases

```javascript
// Test case 1
Input: x = 121
Output: true

// Test case 2
Input: x = -121
Output: false

// Test case 3
Input: x = 10
Output: false

// Test case 4
Input: x = 0
Output: true

// Test case 5
Input: x = 1221
Output: true

// Test case 6
Input: x = 12321
Output: true

// Test case 7
Input: x = 123
Output: false

// Test case 8
Input: x = 1
Output: true

// Test case 9
Input: x = -1
Output: false

// Test case 10
Input: x = 1000021
Output: false
```

---

## Edge Cases to Consider

1. **Negative numbers**: all negative numbers are not palindromes (due to the minus sign)
2. **Single digit numbers**: all single digit numbers (0-9) are palindromes
3. **Numbers ending in zero**: numbers ending in 0 (except 0 itself) cannot be palindromes
4. **Zero**: 0 is a palindrome
5. **Large numbers**: ensure solution works within the integer range

---

## Follow-up Question

**Could you solve it without converting the integer to a string?**

---

## Hints

1. Negative numbers cannot be palindromes
2. Numbers ending in 0 (except 0 itself) cannot be palindromes
3. You can reverse the entire number and compare it with the original
4. Alternatively, you can reverse only half of the number to optimize

---
