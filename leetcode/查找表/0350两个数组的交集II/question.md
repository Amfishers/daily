# 两个数组的交集 II

题目： https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/

给你两个整数数组 nums1 和 nums2 ，请你以数组形式返回两数组的交集。返回结果中每个元素出现的次数，应与元素在两个数组中都出现的次数一致（如果出现次数不一致，则考虑取较小值）。可以不考虑输出结果的顺序。

示例 1：
```
输入：nums1 = [1,2,2,1], nums2 = [2,2]
输出：[2,2]
```
示例 2:
```
输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出：[4,9]
```

提示：
```
1 <= nums1.length, nums2.length <= 1000
0 <= nums1[i], nums2[i] <= 1000
```

进阶：

- 如果给定的数组已经排好序呢？你将如何优化你的算法？
- 如果 nums1 的大小比 nums2 小，哪种方法更优？
- 如果 nums2 的元素存储在磁盘上，内存是有限的，并且你不能一次加载所有的元素到内存中，你该怎么办？


### 思路
使用Object或者Map存储
- 使用Object Map 或者 Set 先把数组转化为对象，以数组值作为键，出现次数作为值。出现一次就记录为1，再次出现就++
- 接着再循环处理后的其中一个对象，当前值如果在另一个对象存在，那么取当前值在两个对象中的最小值，然后 push 到输出的结果数组里面

排序
- 先将两个数组排序
- 遍历其中一个数组，如果存在相同值，则存入结果中并且另外一个删除当前值即可

执行结果
Map方法
执行用时: 76 ms
内存消耗: 39.5 MB

#### 排序方法
执行用时：72 ms, 在所有 JavaScript 提交中击败了82.38%的用户
内存消耗：39.1 MB, 在所有 JavaScript 提交中击败了86.40%的用户

### 解题
```
// 对象方法
/**
    * @param {number[]} nums1
    * @param {number[]} nums2
    * @return {number[]}
    */
var intersect = function (nums1, nums2) {
    let arr1Map = setHashObj(nums1)
    let arr2Map = setHashObj(nums2)
    let res = []

    for (const k in arr1Map) {
        if (k in arr2Map) {
            let min = Math.min(arr1Map[k], arr2Map[k])
            if (min) {
                for (let x = 0; x < min; x++) {
                    res.push(k)
                }
            }
        }
    }

    return res

}

function setHashObj(arr) {
    const obj = {}

    if (!arr || !Array.isArray(arr)) return obj

    for (let i = 0; i < arr.length; i++) {
        const ele = arr[i]
        if (ele in obj) {
            obj[ele]++
        } else {
            obj[ele] = 1
        }
    }

    return obj
}

```

```
// Map 方法
/**
    * @param {number[]} nums1
    * @param {number[]} nums2
    * @return {number[]}
    */
var intersect = function (nums1, nums2) {
    let arr1Map = setHashObj(nums1)
    let arr2Map = setHashObj(nums2)
    let res = []

    for (const k of arr1Map.keys()) {
        const count1 = arr1Map.get(k)
        const count2 = arr2Map.get(k)

        if (count2) {
            let min = Math.min(count1, count2)
            if (min) {
                for (let x = 0; x < min; x++) {
                    res.push(k)
                }
            }
        }
    }

    return res

}

function setHashObj(arr) {
    const obj = new Map()

    if (!arr || !Array.isArray(arr)) return obj

    for (let i = 0; i < arr.length; i++) {
        const ele = arr[i]
        let val = obj.get(ele)
        if (val) {
            obj.set(ele, val + 1)
        } else {
            obj.set(ele, 1)
        }
    }

    return obj
}

```

```
// 使用排序方法
var intersect = function (nums1, nums2) {
    let arr1 = sortArr(nums1)
    let arr2 = sortArr(nums2)
    let res = []

    for (let i = 0; i < arr1.length; i++) {
        let num = arr1[i]
        let arr2index = arr2.indexOf(num)
        if (arr2index > -1) {
            res.push(num)
            arr2.splice(arr2index, 1)
        }
    }

    return res
}

function sortArr(arr) {
    if (!arr || !Array.isArray(arr)) return []
    
    return arr.sort((a, b) => a - b)
}

```