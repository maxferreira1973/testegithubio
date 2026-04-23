// 1. Defina o seu ID de Medição
const GA_MEASUREMENT_ID = 'G-RNW68HFLW1';

// 2. Crie e injete o script da biblioteca do Google Tag Manager
const script = document.createElement('script');
script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
script.async = true;
document.head.appendChild(script);

// 3. Inicialize o dataLayer e a função gtag
window.dataLayer = window.dataLayer || [];
function gtag() {
  window.dataLayer.push(arguments);
}

// 4. Configure os comandos iniciais
gtag('js', new Date());
gtag('config', GA_MEASUREMENT_ID, { 
  'debug_mode': true 
});
document.addEventListener('DOMContentLoaded', () => {
    const pageLoc = window.location.href;

    // --- EVENTS MENU ---
    const menuContato = document.getElementById('contato');
    if (menuContato) {
        menuContato.addEventListener('click', () => {
            gtag('event', 'click_contato', { 
                'page_location': pageLoc, 
                'element_name': 'entre_em_contato', 
                'element_group': 'menu' 
            });
        });
    }
        const menuHome = document.getElementById('home');
    if (menuHome) {
        menuHome.addEventListener('click', () => {
            gtag('event', 'click_home', { 
                'page_location': pageLoc, 
                'element_name': 'home', 
                'element_group': 'menu' 
            });
        });
    }
});