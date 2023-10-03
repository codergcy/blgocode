# RegularCheck

## 手机号

```javascript
const phoneReg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;

const phoneStr1 = '18886233487';
console.log(phoneReg.test(phoneStr1)); // true

const phoneStr2 = '17283017203897';
console.log(phoneReg.test(phoneStr2)); // false
```

## 身份证

```javascript
const sfzReg = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;

const sfzStr1 = '415106199801012130';
console.log(sfzReg.test(sfzStr1)); // true

const sfzStr2 = '718381298381212183';
console.log(sfzReg.test(sfzStr2)); // false
```

## 统一社会信用代码

说明：同时支持 18 位和 15 位社会信用代码

```js
/*
 * 统一社会信用代码由18位数字或者大写字母组成，但是字母不包括 I、O、Z、S、V
 * 一共由五部分组成
 * 第一部分：登记管理部门代码1位 (数字或大写英文字母)
 * 第二部分：机构类别代码1位 (数字或大写英文字母)
 * 第三部分：登记管理机关行政区划码6位 (数字)
 * 第四部分：主体标识码（组织机构代码）9位 (数字或大写英文字母)
 * 第五部分：校验码1位 (数字或大写英文字母)
 */

const USCCReg = /^([0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}|[1-9]\d{14})$/;
```

## 邮箱

```javascript
const emailReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

const emailStrWY = '956666@163.com'; // 163邮箱
const emailStrQQ = '956666@qq.com'; // qq邮箱
console.log(emailReg.test(emailStrWY)); // true
console.log(emailReg.test(emailStrQQ)); // true

const noEmail = '72873213.com';
console.log(emailReg.test(noEmail)); // false
```

## URL

```javascript
const urlReg = /^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;

const urlStr1 = 'https://haha.sunshine.com/xxx/xxx';
console.log(urlReg.test(urlStr1)); // true

const urlStr2 = 'sss://haha.sunshine.com/xxx/xxx';
console.log(urlReg.test(urlStr2)); // false
```

## IPV4

```javascript
const ipv4Reg = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

const ipv4Str1 = '122.12.56.65';
console.log(ipv4Reg.test(ipv4Str1)); // true

const ipv4Str2 = '122.12.56.655';
console.log(ipv4Reg.test(ipv4Str2)); // false
```

## 16 进制颜色

```javascript
const color16Reg = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;

const color16Str1 = '#fff';
console.log(color16Reg.test(color16Str1)); // true

const color16Str2 = '#1234567';
console.log(color16Reg.test(color16Str2)); // false
```

## 日期 YYYY-MM-DD

```javascript
const dateReg = /^\d{4}(\-)\d{1,2}\1\d{1,2}$/;

const dateStr1 = '2021-10-10';
console.log(dateReg.test(dateStr1)); // true

const dateStr2 = '2021-01-01 1';
console.log(dateReg.test(dateStr2)); // false
```

## 日期 YYYY-MM-DD hh:mm:ss

```javascript
const dateReg = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/;

const dateStr1 = '2021-10-10 16:16:16';
console.log(dateReg.test(dateStr1)); // true

const dateStr2 = '2021-10-10 16:';
console.log(dateReg.test(dateStr2)); // false
```

## 整数

```javascript
const intReg = /^[-+]?\d*$/;

const intNum1 = 12345;
console.log(intReg.test(intNum1)); // true

const intNum2 = 12345.1;
console.log(intReg.test(intNum2)); // false
```

## 小数

```javascript
const floatReg = /^[-\+]?\d+(\.\d+)?$/;

const floatNum = 1234.5;
console.log(floatReg.test(floatNum)); // true
```

## 保留 N 位小数

```javascript
function checkFloat(n) {
  return new RegExp(`^([1-9]+[\d]*(.[0-9]{1,${n}})?)$`);
}
// 保留2位小数
const floatReg = checkFloat(2);

const floatNum1 = 1234.5;
console.log(floatReg.test(floatNum1)); // true

const floatNum2 = 1234.55;
console.log(floatReg.test(floatNum2)); // true

// 校验是否输入两位小数
let twoDigReg = /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/;
let twoDigReg = /^-?((0{1}\.\d{1,2})|-?([1-9]\d*\.\d{1,2})|-?([1-9]+\d*)|0)$/; //可为负数

const floatNum3 = 1234.555;
console.log(floatReg.test(floatNum3)); // false
```

## 邮政编号

```javascript
const postalNoReg = /^\d{6}$/;

const postalNoStr1 = '522000';
console.log(postalNoReg.test(postalNoStr1)); // true

const postalNoStr2 = '5220000';
console.log(postalNoReg.test(postalNoStr2)); // false
```

## QQ 号

说明：5-11 位数字

```javascript
const qqReg = /^[1-9][0-9]{4,10}$/;

const qqStr1 = '1915801633';
console.log(qqReg.test(qqStr1)); // true

const qqStr2 = '191580163333';
console.log(qqReg.test(qqStr2)); // false
```

## 微信号

说明：6 至 20 位，以字母开头，字母，数字，减号，下划线

```javascript
const wxReg = /^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/;

const wxStr1 = 'linsanxin885577';
console.log(wxReg.test(wxStr1)); // true

const wxStr2 = '厉害了我的vx';
console.log(wxReg.test(wxStr2)); // false
```

## 车牌号

```javascript
const carNoReg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/;

const carNoStr1 = '粤A12345';
console.log(carNoReg.test(carNoStr1)); // true

const carNoStr2 = '广东A12345';
console.log(carNoReg.test(carNoStr2)); // false
```

## 只含字母的字符串

```javascript
const letterReg = /^[a-zA-Z]+$/;

const letterStr1 = 'sunshineLin';
console.log(letterReg.test(letterStr1)); // true

const letterStr2 = 'sunshine_Lin';
console.log(letterReg.test(letterStr2)); // false
```

## 包含中文的字符串

```javascript
const cnReg = /[\u4E00-\u9FA5]/;

const cnStr1 = '我是sunshine_Lin，林三心';
console.log(cnReg.test(cnStr1)); // true

const cnStr2 = 'sunshine_Lin';
console.log(cnReg.test(cnStr2)); // false
```

## 用户名

```js
//6-16位的包含大小写字母、数字、特殊符号- _ 的用户名
const userNameReg = /^[a-zA-Z0-9_-]{6,16}$/;

//6-20位字母和数字组合
const userNameReg1 = /^(?![0-9]*$)(?![a-zA-Z]*$)[a-zA-Z0-9]{6,20}$/;
```

## 密码强度

```javascript
//密码中必须包含字母、数字、特称字符，至少8个字符，最多30个字符
const passwordReg = /(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{8,30}/;

const password1 = 'sunshine_Lin12345..';
console.log(passwordReg.test(password1)); // true

const password2 = 'sunshineLin12345';
console.log(passwordReg.test(password2)); // false

//密码强度正则，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
const passwordReg = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;
// 请输入6-20位英文字母、数字或者符号（除空格），且字母、数字和标点符号至少包含两种
const passwordReg = /^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$)([^\u4e00-\u9fa5\s]){6,20}$/;
```

## 长度为 n 的字符串

```js
function checkStrLength(n) {
  return new RegExp(`^.{${n}}$`);
}

// 校验长度为3的字符串
const lengthReg = checkStrLength(3);

const str1 = 'hhh';
console.log(lengthReg.test(str1)); // true

const str2 = 'hhhhh';
console.log(lengthReg.test(str2)); // false
```

## 文件拓展名

```js
function checkFileName(arr) {
  arr = arr.map((name) => `.${name}`).join('|');
  return new RegExp(`(${arr})$`);
}

const filenameReg = checkFileName(['jpg', 'png', 'txt']);

const filename1 = 'sunshine.jpg';
console.log(filenameReg.test(filename1)); // true
const filename2 = 'sunshine.png';
console.log(filenameReg.test(filename2)); // true
const filename3 = 'sunshine.txt';
console.log(filenameReg.test(filename3)); // true
const filename4 = 'sunshine.md';
console.log(filenameReg.test(filename4)); // false
```

## img 和 src

```js
const imgReg = /<img.*?src=[\"|\']?(.*?)[\"|\']?\s.*?>/gi;

const htmlStr = '<div></div><img src="sunshine.png" /><img src="sunshine111.png" />';

console.log(imgReg.exec(htmlStr));
// [
//   '<img src="sunshine.png" />',
//   'sunshine.png',
//   index: 11,
//   input: '<div></div><img src="sunshine.png" /><img src="sunshine111.png" />',
//   groups: undefined
// ]
console.log(imgReg.exec(htmlStr));
// [
//   '<img src="sunshine111.png" />',
//   'sunshine111.png',
//   index: 37,
//   input: '<div></div><img src="sunshine.png" /><img src="sunshine111.png" />',
//   groups: undefined
// ]
```

## html 中的注释

```js
const noteReg = /<!--(.*?)-->/g;

const htmlStr = '<!--一个div标签--> <div></div> <!--一个div标签--> <div></div>';

console.log(noteReg.exec(htmlStr));
// [
//   '<!--一个div标签-->',
//   '一个div标签',
//   index: 0,
//   input: '<!--一个div标签--> <div></div> <!--一个div标签--> <div></div>',
//   groups: undefined
// ]
console.log(noteReg.exec(htmlStr));
// [
//   '<!--一个div标签-->',
//   '一个div标签',
//   index: 27,
//   input: '<!--一个div标签--> <div></div> <!--一个div标签--> <div></div>',
//   groups: undefined
// ]
```

## html 中的 style

```js
const styleReg = /style="[^=>]*"([(\s+\w+=)|>])/g;

const htmlStr = '<div style="background:#000;"><span style="color:#fff"></span></div>';

console.log(styleReg.exec(htmlStr));
// [
//   'style="background:#000;">',
//   '>',
//   index: 5,
//   input: '<div style="background:#000;"><span style="color:#fff"></span></div>',
//   groups: undefined
// ]
console.log(styleReg.exec(htmlStr));
// [
//   'style="color:#fff">',
//   '>',
//   index: 36,
//   input: '<div style="background:#000;"><span style="color:#fff"></span></div>',
//   groups: undefined
// ]
```

## html 中的颜色

```js
const colorReg = /#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})/g;

const htmlStr = '<div style="background:#000;"><span style="color:#fff"></span></div>';

console.log(colorReg.exec(htmlStr));
// [
//   '#000',
//   '000',
//   index: 23,
//   input: '<div style="background:#000;"><span style="color:#fff"></span></div>',
//   groups: undefined
// ]
console.log(colorReg.exec(htmlStr));
// [
//   '#fff',
//   'fff',
//   index: 49,
//   input: '<div style="background:#000;"><span style="color:#fff"></span></div>',
//   groups: undefined
// ]
```

## htmlTag（html 标签）

```js
const endReg = /<("[^"]*"|'[^']*'|[^'">])*>/g;

const htmlStr = '<div style="background:#000;"><span style="color:#fff"></span></div><h1></h1>';

console.log(endReg.exec(htmlStr));
```
