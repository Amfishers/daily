### 快速排序

过程：
- 取出数组中的一个值，作为基准值
- 根据这个基准值，划分小于基准值的数组 和 大于基准值的数组
- 进入递归
- 当数组小于两个时 退出递归，将这个数组返回 基准条件
- 将每个数组拼接在一起


### 冒泡排序
过程：
- 双循环， 当前数跟下一个数进行对比，如果下一个数大就进行换位置。一轮下来最大的数在最后面一位

注意：
- 冒泡排序是降序，最大的数排在最后,

补充： 发现生序和降序都可以实现

### 选择排序
过程：
- 首先取第一个位置，然后查找剩余数组中最小的数与之交换
- 0 <-> minIndex（剩余数组索引中找最小数字）进行交换
- 1 <-> minIndex 进行交换