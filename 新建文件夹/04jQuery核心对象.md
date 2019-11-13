# jQuery核心对象

## 理解:jQuery对象是一个包含所有匹配的任意多个dom元素的伪数组对象

* 执行jQuery核心函数返回的对象
* jQuery对象内部包含的是dom元素对象的伪数组（可能只有一个元素）
* jQuery对象拥有很多有用的属性和方法，让程序员能方便的操作

## 属性（方法）

1. 基本行为

   * size()/length

     * > 内部包含的dom元素对象的个数

   * [index]/get(index)

     * > 返回dom元素对象

   * each()
   * index()

2. 属性  

3. CSS

4. 文档

5. 筛选

6. 事件

7. 效果

## 伪数组

* Object对象

  * > typeof Array 为false

* length属性

* 数值下标属性

* 没有数组特有的方法：forEach(),push(),pop(),splice()

  