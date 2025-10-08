---
sidebar_label: 'DS Quest04'
sidebar_position: 3
---

# [Ds Quest04](https://upskill.us.qwasar.io/tracks/season-02-data-science/track_users/1352-reinis_d-jul-2021-30-2ed9/projects/ds-quest04)

Understanding the topics covered in this quest is crucial for **AI**, **deep learning**, and **evaluation**.  
Some tasks are confusing though.

---

## 🧩 For ex00, ex01, ex02

What is done here is **mathematically incorrect** and **logically wrong**.  
Those exercises are not intuitive, and to solve them you should dive deep into **Gandalf errors** when testing (break your code to get those errors).

> ⚠️ **Warning:** Never do what this broken test wants anywhere outside of Qwasar.

---

### 💡 Hints to Pass the Tests

- Nonsense is expected in tests
- For all Gandalf tests: `len(param_1) <= len(param_2)`

---

### 📊 Evaluating a Predictive Model

When evaluating a predictive model, the key idea is to compare what the model **predicted** with what is actually **true**.

You start with your **features** `x`, which are the inputs to your model.  
The real-world outcomes you want to predict are your **true values** `y` or `y_true`.  
Your model, represented as a function `f(x)`, generates predictions `y_pred = f(x)`.

The important part is:

> ✅ Always compare each **true value** `y` to its **corresponding prediction** `y_pred` from the same `x`.

That way, you’re not comparing random values, but directly evaluating how well the model captured the relationship between inputs and outputs.

---

### 🧠 Reasoning About This Exercise

For these exercises, my initial intuition was that the field called `model_name` represented the input features `x`,  
while the remaining values represented `y` for `param_1` and `y_pred` for `param_2`.

Based on that assumption, I tried to **align the datasets** by intersecting the values of `x` and then comparing the corresponding `y` values.  
However, the tests did not expect this approach.

An alternative way to think about it is to treat `param_1` as `y` and `param_2` as `y_pred` (this is the expected when evaluating).  
In that case, we don’t explicitly see the input `x`. Instead, we assume that the rows are already ordered correctly — meaning each `y` aligns with its corresponding prediction `y_pred`.

This assumption only makes sense if both datasets (`param_1` and `param_2`) have the **same shape**.  
If the sizes differ, it suggests that the alignment between `y` and `y_pred` is not guaranteed, which makes evaluation problematic and confusing.

---

### ⚠️ Final Thoughts for ex00, ex01 and ex02

This exercise is a **bad demonstration** of how models should be evaluated, because normally we ensure that each true value `y` is directly paired with its predicted value `y_pred`.

My recommendation is always to **explicitly verify** that the values being compared are properly matched.  
In this exercise, that alignment was not handled correctly, which created unnecessary confusion.