document.addEventListener('DOMContentLoaded', () => {
    const pageLoc = window.location.href;

    // --- EVENTS MENU ---
    const menuContato = document.querySelector('.menu-lista-item.entre_em_contato');
    if (menuContato) {
        menuContato.addEventListener('click', () => {
            gtag('event', 'click', { 
                'page_location': pageLoc, 
                'element_name': 'entre_em_contato', 
                'element_group': 'menu' 
            });
        });
    }
});