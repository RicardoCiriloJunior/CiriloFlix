document.addEventListener('DOMContentLoaded', () => {

    
    // Seleciona o container do carrossel
    const carroselContainer = document.querySelectorAll('.carrosel-container');
    
    // Variáveis para controlar o touch
    let isDragging = false;
    let startX;
    let scrollLeft;

    carroselContainer.forEach((carrosel) => {
        
        // Evento quando o usuário toca na tela
        carrosel.addEventListener('touchstart', (e) => {
            isDragging = true;
            startX = e.touches[0].pageX - carrosel.offsetLeft;
            scrollLeft = carrosel.scrollLeft;

            console.log("CLICOU")
        });
        
        // Evento quando o usuário move o dedo
        carrosel.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            e.preventDefault();
            
            const x = e.touches[0].pageX - carrosel.offsetLeft;
            const walk = (x - startX) * 2; // Multiplica por 2 para aumentar a sensibilidade
            carrosel.scrollLeft = scrollLeft - walk;
        });
        
        // Evento quando o usuário tira o dedo da tela
        carrosel.addEventListener('touchend', () => {
            isDragging = false;
        });
        
        // Evento quando o toque é cancelado
        carrosel.addEventListener('touchcancel', () => {
            isDragging = false;
        });
    });
    
});