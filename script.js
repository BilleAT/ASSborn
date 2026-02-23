document.addEventListener('DOMContentLoaded', () => {
    const title = document.getElementById('main-title');
    
    // En lille hilsen i konsollen
    console.log("Fødselsdagssiden er klar!");

    // Gør overskriften lidt sjovere med en simpel animation
    title.style.opacity = 0;
    title.style.transition = "opacity 2s ease-in-out";
    
    setTimeout(() => {
        title.style.opacity = 1;
    }, 500);
});