const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'gmail';
   const templateID = 'form-contacto';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar mail';
      alert('Tu compra se ha realizado con exito!');
      setTimeout(function(){window.location.href = "index.html";});
    }, (err) => {
      btn.value = 'Enviar mail';
      alert(JSON.stringify(err));
    });
});