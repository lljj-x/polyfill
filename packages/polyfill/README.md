涵盖 dom、dom、esnext 的一些垫片

### 安装

```js
npm install @gb/polyfill
```

### dom
修复了如下API
1. children
2. dateset
3. matches
4. classlist
5. closest

### bom
修复了如下API
2. location.origin
3. requestAnimationFrame

### esnext
* async await regeneratorRuntime 方法定义
1. regenerator-runtime/runtime

* 沿用 babel 的 core-js 垫片，导出了如下API：
1. es6.object.keys
1. object.assign
1. function.name
1. parse-int
1. parse-float
1. number.is-finite
1. number.is-integer
1. number.is-nan
1. number.max-safe-integer
1. number.min-safe-integer
1. number.parse-float
1. number.parse-int
1. string.trim
1. string.code-point-at
1. string.ends-with
1. string.includes
1. string.repeat
1. string.starts-with
1. date.now
1. date.to-iso-string
1. date.to-string
1. array.is-array
1. array.from
1. array.index-of
1. array.last-index-of
1. array.fill
1. array.find
1. array.find-index
1. promise
1. set
1. weak-set
1. typed.array-buffer
1. typed.int8-array
1. typed.uint8-array
1. es7.array.includes
1. es7.string.trim-left
1. es7.string.trim-right
1. es7.object.values
1. es7.object.entries
1. es7.global
1. es7.promise.finally
1. es7.promise.try

