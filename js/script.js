// Smooth scroll para links internos
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Botão WhatsApp flutuante (se não existir)
    if (!document.querySelector('.whatsapp-float')) {
        const whatsappBtn = document.createElement('a');
        whatsappBtn.href = 'https://wa.me/5511999999999'; // Substitua pelo número correto
        whatsappBtn.target = '_blank';
        whatsappBtn.className = 'whatsapp-float';
        whatsappBtn.innerHTML = '💬';
        whatsappBtn.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: #25D366;
            color: white;
            border-radius: 50%;
            width: 60px;
            height: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            text-decoration: none;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            z-index: 1000;
            transition: transform 0.3s ease;
        `;
        
        whatsappBtn.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
        });
        
        whatsappBtn.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
        
        document.body.appendChild(whatsappBtn);
    }

    // Adicionar estilos para cores azul marinho se não existirem
    const style = document.createElement('style');
    style.textContent = `
        /* Cores azul marinho personalizadas */
        .bg-navy { background-color: #1e3a8a !important; }
        .text-navy { color: #1e3a8a !important; }
        .border-navy { border-color: #1e3a8a !important; }
        
        /* Responsividade adicional */
        @media (max-width: 768px) {
            .whatsapp-float {
                width: 50px !important;
                height: 50px !important;
                font-size: 20px !important;
                bottom: 15px !important;
                right: 15px !important;
            }
        }
    `;
    document.head.appendChild(style);
});
