// @ eslint demo5   使用airbnb的验证规则
// @@@ 打开demo5文件夹下的.eslintrc.js文件
// @@@ 修改错误
// @


function makeIterator(array) {
  let nextIndex = 0;
  return {
    next() {
      const result = nextIndex < array.length ? {
        value: array[nextIndex += 1],
        done: false,
      } : {
        value: undefined,
        done: true,
      };

      return result;
    },
  };
}

const array = [1, 2, 3, 'a', 'b'];
for (const a in array) {
  if (array.hasOwnproperty(a)) {
    console.log(a);
  }
}

for (const a of array) {
  console.log(a);
}

makeIterator();
