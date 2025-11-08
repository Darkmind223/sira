document.addEventListener('DOMContentLoaded', function() {
    const typedTextElement = document.getElementById('animated-name'); // Changed ID
    const phrases = [
        "Sira Diarra",
        "Étudiante en Informatique",
        "Aspirante Data Analyst",
        "Passionnée de technologie",
        "et d'innovation",
        "Toujours motivée à apprendre"
       
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeWriter() {
        const currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
            typedTextElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typedTextElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = 100; // Vitesse de frappe
        if (isDeleting) typeSpeed /= 2; // Vitesse d'effacement plus rapide

        if (!isDeleting && charIndex === currentPhrase.length) {
            typeSpeed = 1500; // Pause à la fin de la frappe
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typeSpeed = 500; // Pause avant de taper la phrase suivante
        }

        setTimeout(typeWriter, typeSpeed);
    }

    typeWriter();
});
