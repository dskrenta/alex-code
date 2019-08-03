(() => {
  'use strict';

  const NAME_ID = 'name';
  const AGE_ID = 'age';
  const IMG_ID = 'profileImage';
  const nameSelector = document.getElementById(NAME_ID);
  const ageSelector = document.getElementById(AGE_ID);
  const imageSelector = document.getElementById(IMG_ID);

  const personInput = {
    name: null,
    age: null,
    profileImage: null
  };

  nameSelector.addEventListener('keyup', function(e) {
    personInput.name = e.target.value;

    updateUI();
  });

  ageSelector.addEventListener('keyup', function(e) {
    personInput.age = e.target.value;

    updateUI();
  });

  imageSelector.addEventListener('change', function(e) {
    for (let i = 0; i < this.files.length; i++) {
      const file = this.files[i];

      if (!file.type.startsWith('image/')){ continue }

      const reader = new FileReader();
      reader.onload = (function() {
        return function(e) {
          personInput.profileImage = e.target.result;

          updateUI();
        }
      })();
      reader.readAsDataURL(file);
    }
  });

  function updateUI() {
    if (personInput.name) document.getElementById('nameDisplay').textContent = personInput.name;
    if (personInput.age) document.getElementById('ageDisplay').textContent = personInput.age;
    if (personInput.profileImage) document.getElementById('imageDisplay').src = personInput.profileImage;
  }
})();
