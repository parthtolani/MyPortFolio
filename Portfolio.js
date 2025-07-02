function openModal() {
    document.getElementById("contactModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("contactModal").style.display = "none";
}


window.onload = function () {
  const textElement = document.getElementById("typewriter");
  const texts = ["Parth Tolani", "A Software Developer"];
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentText = texts[textIndex];
    const currentDisplay = currentText.substring(0, charIndex);
    textElement.textContent = currentDisplay;

    if (!isDeleting) {
      if (charIndex < currentText.length) {
        charIndex++;
        setTimeout(type, 100);
      } else {
        isDeleting = true;
        setTimeout(type, 1500);
      }
    } else {
      if (charIndex > 0) {
        charIndex--;
        setTimeout(type, 50);
      } else {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(type, 500);
      }
    }
  }
  type();
  emailjs.init('uVmrN-pkyrKsU3aUo');

  document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    emailjs.sendForm('service_ss1w9aj', 'template_e3kewzr', this)
      .then(() => {
        alert('Message sent successfully!');
        this.reset();
      }, (error) => {
        console.error('FAILED...', error);
        alert('Failed to send message:\n' + JSON.stringify(error));
      });
    emailjs.sendForm('service_ss1w9aj', 'template_la97wfl', this)
      .then(() => {
        alert('Message sent successfully!');
        this.reset();
      }, (error) => {
        console.error('FAILED...', error);
        alert('Failed to send message:\n' + JSON.stringify(error));
      });
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('fade-in-visible');
        }, index * 100);
      }
    });
  });
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

};





