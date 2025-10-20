---
title: "Two Sum"
description: "Collaborative coding exercise"
id: session07
---

## Problem

Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to the target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

You can implement this in **any language**.

---

## Examples

### Example 1:

**Input:** `nums = [2,7,11,15]`, `target = 9`

**Output:** `[0,1]`

**Explanation:** Because `nums[0] + nums[1] == 9`, we return `[0, 1]`.

### Example 2:

**Input:** `nums = [3,2,4]`, `target = 6`

**Output:** `[1,2]`

### Example 3:

**Input:** `nums = [3,3]`, `target = 6`

**Output:** `[0,1]`

---

## Constraints

- `2 <= nums.length <= 10^4`
- `-10^9 <= nums[i] <= 10^9`
- `-10^9 <= target <= 10^9`
- Only one valid answer exists

---

## Function prototype

You can implement this in **any language**. Here's the JavaScript prototype:
```javascript
function twoSum(nums, target) {
    // Your code here
}
```

---

## Your task

1. Implement the `twoSum` function
2. Test it with the provided examples
3. Think about the time and space complexity of your solution
4. Can you optimize it?

---

## Hints

<details>
<summary>Click to reveal hint 1</summary>

Try using a nested loop to check every pair of numbers.

</details>

<details>
<summary>Click to reveal hint 2</summary>

Can you use a hash map (object in JavaScript) to store numbers you've already seen?

</details>

<details>
<summary>Click to reveal hint 3</summary>

For each number, calculate what number you need to reach the target, then check if you've seen it before.

</details>