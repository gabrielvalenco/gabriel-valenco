function toggleContent(element) {
    // Obter todas as caixas de experiência
    const boxes = document.querySelectorAll('.experience-box');

    // Iterar sobre cada caixa para remover a classe 'active'
    boxes.forEach(box => {
        if (box !== element) {
            box.classList.remove('active'); // Remove a classe 'active' das outras caixas
        }
    });

    // Alternar a classe 'active' na caixa clicada
    element.classList.toggle('active');
}
