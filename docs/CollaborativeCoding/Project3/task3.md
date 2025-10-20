---
title: "Can Place Flowers"
description: "Collaborative coding exercise"
id: session09
---

## Problem: Can Place Flowers

Suppose you have a long flowerbed in which some of the plots are planted and some are not. However, flowers cannot be planted in adjacent plots - they would compete for water and both would die.

Given a flowerbed (represented as an array containing 0 and 1, where 0 means empty and 1 means not empty), and a number `n`, return if `n` new flowers can be planted in it without violating the no-adjacent-flowers rule.

You can implement this in **any language**. 

---

## Examples

### Example 1:

**Input:** `flowerbed = [1,0,0,0,1]`, `n = 1`

**Output:** `true`

**Explanation:** We can plant 1 flower in the middle position (index 2).

### Example 2:

**Input:** `flowerbed = [1,0,0,0,1]`, `n = 2`

**Output:** `false`

**Explanation:** We can only plant 1 flower without violating the adjacency rule.

---

## Constraints

- The input array won't violate the no-adjacent-flowers rule
- The input array size is in the range of `[1, 20000]`
- `n` is a non-negative integer which won't exceed the input array size

---

## Function prototype

You can implement this in any language. Here's the JavaScript prototype:
```javascript
function canPlaceFlowers(flowerbed, n) {
    // Your code here
}
```

---

## Your task

1. Implement the `canPlaceFlowers` function
2. Test it with the provided examples
3. Consider edge cases (empty flowerbed, n = 0, flowerbed with all 0s or all 1s)
4. Think about the time and space complexity of your solution

---

## Hints

<details>
<summary>Click to reveal hint 1</summary>

You can plant a flower at position `i` if `flowerbed[i] === 0` AND both neighbors are also 0 (or don't exist).

</details>

<details>
<summary>Click to reveal hint 2</summary>

Loop through the flowerbed array. For each empty spot, check if the previous and next positions are also empty.

</details>

<details>
<summary>Click to reveal hint 3</summary>

Don't forget edge cases: what if you're at the first position (no left neighbor) or last position (no right neighbor)?

</details>

<details>
<summary>Click to reveal hint 4</summary>

When you successfully plant a flower, remember to update the flowerbed array and increment your counter.

</details>

<details>
<summary>Click to reveal hint 5</summary>

You can return `true` early if you've planted `n` flowers before reaching the end of the array.

</details>