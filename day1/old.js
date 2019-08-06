(() => {
  'use strict';

  // Comments
  /*
  sdfsdf
  dsfsdf
  */

  // variables
  var a = 1;
  let b = 2;
  const c = 3;

  // types
  const num = 41;
  const boolean = false;
  const str = 'cool stuff';
  const arr = [1, true, 'cool stuff', num, boolean];
  const person = {
    name: 'Alex'
  };

  /*
  const str2 = str + ' home';

  // console.log(str2);



  // console.log(!('alex' === 'david'));

  const age = 37;

  if (age > 3 && age > 5) {
    console.log('everything is ok');
  }

  if (true && false) {
    console.log(true);
  }

  // && ||





  // console.log(person.name);

  // document.getElementById('content').textContent = 'fuck off';
  */


  /*
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(nums[0] + nums[1] + nums[2] + nums[3] + nums[4] + nums[5] + nums[6] + nums[7] + nums[8] + nums[9]);

  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]; // sum = sum + nums[i]
  }
  console.log(sum);
  */

  function add(num1, num2) {
    return num1 + num2;
  }

  console.log(add(1, 2));
})();
