---
title: "FizzBuzz"
description: "Collaborative coding exercise"
id: session10
---

# FizzBuzz Problem

## Problem Description

Write a program that outputs the string representation of numbers from 1 to n.

**Rules:**
- For multiples of **3**, output `"Fizz"` instead of the number
- For multiples of **5**, output `"Buzz"` instead of the number
- For multiples of **both 3 and 5**, output `"FizzBuzz"`
- For all other numbers, output the number as a string

---

### Example:
```
Input: n = 15
Output: ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]
```

### Explanation:
```
1  → "1"        (not divisible by 3 or 5)
2  → "2"        (not divisible by 3 or 5)
3  → "Fizz"     (divisible by 3)
4  → "4"        (not divisible by 3 or 5)
5  → "Buzz"     (divisible by 5)
6  → "Fizz"     (divisible by 3)
7  → "7"        (not divisible by 3 or 5)
8  → "8"        (not divisible by 3 or 5)
9  → "Fizz"     (divisible by 3)
10 → "Buzz"     (divisible by 5)
11 → "11"       (not divisible by 3 or 5)
12 → "Fizz"     (divisible by 3)
13 → "13"       (not divisible by 3 or 5)
14 → "14"       (not divisible by 3 or 5)
15 → "FizzBuzz" (divisible by both 3 and 5)
```

---