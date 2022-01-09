给定两个字符串 s 和 t，它们只包含小写字母。

字符串 t 由字符串 s 随机重排，然后在随机位置添加一个字母。

请找出在 t 中被添加的字母。


示例 1：
```
输入：s = "abcd", t = "abcde"
输出："e"
解释：'e' 是那个被添加的字母。
```

示例 2：
```
输入：s = "", t = "y"
输出："y"
```

示例 3：
```
输入：s = "a", t = "aa"
输出："a"
```

示例 4：
```
输入：s = "ae", t = "aea"
输出："a"
```

提示：

- 0 <= s.length <= 1000
- t.length == s.length + 1
- s 和 t 只包含小写字母

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/find-the-difference
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


### 第一遍错误思路
```
var findTheDifference = function (s, t) {
    let target = s.length > t.length ? s : t
    let other = s === target ? t : s
    let result = ''

    for (let i = 0; i < target.length; i++) {
        const ele = target[i]
        if (ele !== other[i]) {
            result = ele
        }
    }

    return result
}
```

错误原因，题目说了，随机重排并且加入一个字母。我们这里就忽略了重排

### 解题

思路：

使用查找表套路，使用 Object或者Map记录次数，然后再遍历找不同

```
// 使用查找表套路

/**
    * @param {string} s
    * @param {string} t
    * @return {character}
    */
var findTheDifference = function (s, t) {
    let mapS = charMap(s)
    let mapT = charMap(t)

    let targetMap = s.length > t.length ? mapS : mapT
    let otherMap = mapS === targetMap ? mapT : mapS

    for (const key in targetMap) {
        if (targetMap[key] !== otherMap[key]) {
            return key
        }
    }
}

function charMap(s) {
    let map = {}
    for (let i = 0; i < s.length; i++) {
        let ele = s[i]
        if (ele in map) {
            map[ele] = map[ele] + 1
        } else {
            map[ele] = 1
        }
    }
    return map
}
```

### 思路2： 求和
将字符串 ss 中每个字符的 ASCII 码的值求和，得到 A_sA 
s
​
 ；对字符串 tt 同样的方法得到 A_tA 
t
​
 。两者的差值 A_t-A_sA 
t
​
 −A 
s
​
  即代表了被添加的字符。

作者：LeetCode-Solution
链接：https://leetcode-cn.com/problems/find-the-difference/solution/zhao-bu-tong-by-leetcode-solution-mtqf/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

```
// 求和
var findTheDifference = function(s, t) {
    let as = 0, at = 0;
    for (let i = 0; i < s.length; i++) {
        as += s[i].charCodeAt();
    }
    for (let i = 0; i < t.length; i++) {
        at += t[i].charCodeAt();
    }
    return String.fromCharCode(Math.abs(at - as));
};

作者：LeetCode-Solution
链接：https://leetcode-cn.com/problems/find-the-difference/solution/zhao-bu-tong-by-leetcode-solution-mtqf/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
```

复杂度分析

时间复杂度：O(N)O(N)。

空间复杂度：O(1)O(1)。
