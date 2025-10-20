const photosInput = document.getElementById('photos');
const photoPreview = document.getElementById('photoPreview');

photosInput.addEventListener('change', () => {
  photoPreview.innerHTML = '';
  const files = photosInput.files;
  for(let i=0; i<files.length; i++){
    const file = files[i];
    const img = document.createElement('img');
    img.className = 'preview-img';
    img.file = file;
    photoPreview.appendChild(img);

    const reader = new FileReader();
    reader.onload = (function(aImg){
      return function(e) {
        aImg.src = e.target.result;
      };
    })(img);
    reader.readAsDataURL(file);
  }
});

const form = document.getElementById('propertyForm');
form.addEventListener('submit', event => {
  event.preventDefault();
  alert('Cadastro enviado com sucesso! Em breve entraremos em contato.');
  form.reset();
  photoPreview.innerHTML = '';
});
