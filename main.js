document.addEventListener('DOMContentLoaded', function() {  
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwG79-Je3mjIWYeDvCU5TsCp6Ha8X3O27Yk8vQaFjuzeY4ldrwWJUiTODuojzo6_8SKeg/exec';  
  const form = document.querySelector('form[name="contact-form"]');  
    
  form.addEventListener('submit', e => {  
    if (!form['your-email'].value) {  
      alert('Please enter your email address.');  
      return;  
    }  
    e.preventDefault();  
    fetch(scriptURL, {  
        method: 'post',  
        body: new FormData(form)  
      })  
      .then(response => alert("Thank you! Your form is submitted successfully."))  
      .then(() => {  
        window.location.reload();  
      })  
      .catch(error => console.error('Error!', error.message));  
  });  
}); 
