document.addEventListener('DOMContentLoaded', function() {
  // Elements
  const formSteps = document.querySelectorAll('.form-step');
  const progressSteps = document.querySelectorAll('.progress-step');
  const progressBar = document.getElementById('progress');
  const nextBtns = document.querySelectorAll('.btn-next');
  const prevBtns = document.querySelectorAll('.btn-prev');
  const detectBtn = document.getElementById('detectBreed');
  const detectionLoading = document.getElementById('detectionLoading');
  const breedResult = document.getElementById('breedResult');
  const breedInput = document.getElementById('breed');
  const faceImageInput = document.getElementById('faceImage');
  const bodyImageInput = document.getElementById('bodyImage');
  const previewFaceImage = document.getElementById('previewFaceImage');
  const previewBodyImage = document.getElementById('previewBodyImage');
  const form = document.getElementById('animalForm');
  
  // Common animal breeds for simulation
  const animalBreeds = [
    "Sahiwal", "Gir", "Red Sindhi", "Tharparkar", "Kankrej", 
    "Ongole", "Hariana", "Deoni", "Kangayam", "Amritmahal"
  ];
  
  let currentStep = 0;
  
  function updateSteps() {
    formSteps.forEach((step, idx) => {
      step.classList.toggle('active', idx === currentStep);
    });
    progressSteps.forEach((step, idx) => {
      step.classList.toggle('active', idx === currentStep);
      step.classList.toggle('completed', idx < currentStep);
    });
    progressBar.style.width = `${(currentStep / (formSteps.length - 1)) * 100}%`;
  }
  
  nextBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      let isValid = true;
      const currentInputs = formSteps[currentStep].querySelectorAll('input[required], select[required]');
      currentInputs.forEach(input => {
        if (!input.value.trim()) {
          isValid = false;
          input.style.borderColor = 'red';
        } else {
          input.style.borderColor = '#e3e8ee';
        }
      });
      if (isValid) {
        currentStep++;
        updateSteps();
      }
    });
  });
  
  prevBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      currentStep--;
      updateSteps();
    });
  });
  
  // Face image preview
  faceImageInput.addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
      const reader = new FileReader();
      reader.addEventListener('load', function() {
        previewFaceImage.src = reader.result;
        previewFaceImage.style.display = 'block';
        document.querySelector('#faceImagePreview .image-preview-placeholder').style.display = 'none';
      });
      reader.readAsDataURL(file);
    }
  });
  
  // Body image preview
  bodyImageInput.addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
      const reader = new FileReader();
      reader.addEventListener('load', function() {
        previewBodyImage.src = reader.result;
        previewBodyImage.style.display = 'block';
        document.querySelector('#bodyImagePreview .image-preview-placeholder').style.display = 'none';
      });
      reader.readAsDataURL(file);
    }
  });
  
  detectBtn.addEventListener('click', function() {
    if (!faceImageInput.files.length) {
      alert('Please upload a face image first');
      return;
    }
    detectionLoading.style.display = 'block';
    breedResult.style.display = 'none';
    setTimeout(() => {
      detectionLoading.style.display = 'none';
      breedResult.style.display = 'block';
      const randomBreed = animalBreeds[Math.floor(Math.random() * animalBreeds.length)];
      breedInput.value = randomBreed;
    }, 2500);
  });
  
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Animal registered successfully!');
    form.reset();
    currentStep = 0;
    updateSteps();
    previewFaceImage.style.display = 'none';
    previewBodyImage.style.display = 'none';
    document.querySelector('#faceImagePreview .image-preview-placeholder').style.display = 'block';
    document.querySelector('#bodyImagePreview .image-preview-placeholder').style.display = 'block';
    breedResult.style.display = 'none';
  });
});
