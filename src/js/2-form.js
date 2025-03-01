const key = 'feedback-form-state';

const formData = { email: '', message: '' };

const form = document.querySelector('.feedback-form');

const savedData = JSON.parse(localStorage.getItem(key));
if (savedData) {
  Object.assign(formData, savedData);
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(key, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log('Send Data:', formData);

  localStorage.removeItem(key);
  form.reset();
  formData.email = '';
  formData.message = '';
});
