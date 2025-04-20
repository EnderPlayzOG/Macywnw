document.addEventListener("DOMContentLoaded", function () {
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 30, 
                "density": {
                    "enable": true,
                    "value_area": 1000
                }
            },
            "color": {
                "value": "#007bff" 
            },
            "shape": {
                "type": "circle"
            },
            "opacity": {
                "value": 0.40, 
                "random": false
            },
            "size": {
                "value": 2,
                "random": true
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#007bff", 
                "opacity": 0.05,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 0.8,  
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out"
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                }
            },
            "modes": {
                "repulse": {
                    "distance": 80,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 2
                }
            }
        }
    });
});
