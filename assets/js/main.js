var elementosDuvida = document.querySelectorAll('.duvida');

elementosDuvida.forEach(function (duvida) {
    duvida.addEventListener('click', function () {
        duvida.classList.toggle('active');
        
        // Seleciona a seta dentro da div de dúvida
        var arrow = duvida.querySelector('.arrow');
        if (arrow) {
            arrow.classList.toggle('active');
            
            // Verifica se a seta tem a classe 'active' para alternar a imagem
            if (arrow.classList.contains('active')) {
                // Se a seta está ativa, troca a imagem para arrow-down
                arrow.querySelector('img').src = 'assets/img/arrow-down.svg';
            } else {
                // Se não, troca a imagem para arrow-up
                arrow.querySelector('img').src = 'assets/img/arrow-up.svg';
            }
        }
    });
});
