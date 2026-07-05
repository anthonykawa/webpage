document.addEventListener('DOMContentLoaded', () => {
    // Initialize Particles.js
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 50,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: '#00f2fe'
            },
            shape: {
                type: 'circle',
            },
            opacity: {
                value: 0.5,
                random: true,
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: true,
                    speed: 2,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#4facfe',
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: true,
                straight: false,
                out_mode: 'out',
                bounce: false,
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'grab'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 140,
                    line_linked: {
                        opacity: 1
                    }
                },
                push: {
                    particles_nb: 4
                }
            }
        },
        retina_detect: true
    });

    // Tinkerer Button Logic
    const tinkerBtn = document.getElementById('tinker-btn');
    const btnText = tinkerBtn.querySelector('.btn-text');
    let isTinkering = false;

    tinkerBtn.addEventListener('click', () => {
        isTinkering = !isTinkering;
        
        if (isTinkering) {
            btnText.textContent = 'System Overclocked!';
            tinkerBtn.style.background = 'linear-gradient(45deg, #10b981, #34d399)';
            tinkerBtn.style.boxShadow = '0 8px 25px rgba(16, 185, 129, 0.5)';
            
            // Speed up particles
            if (window.pJSDom && window.pJSDom.length > 0) {
                window.pJSDom[0].pJS.particles.move.speed = 10;
                window.pJSDom[0].pJS.particles.color.value = '#10b981';
                window.pJSDom[0].pJS.particles.line_linked.color = '#34d399';
                window.pJSDom[0].pJS.fn.particlesRefresh();
            }
        } else {
            btnText.textContent = 'Initialize Tinkerer Mode';
            tinkerBtn.style.background = '';
            tinkerBtn.style.boxShadow = '';
            
            // Reset particles
            if (window.pJSDom && window.pJSDom.length > 0) {
                window.pJSDom[0].pJS.particles.move.speed = 2;
                window.pJSDom[0].pJS.particles.color.value = '#00f2fe';
                window.pJSDom[0].pJS.particles.line_linked.color = '#4facfe';
                window.pJSDom[0].pJS.fn.particlesRefresh();
            }
        }
    });
});
