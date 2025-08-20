  
      window.addEventListener("load", function () {
        const preloader = document.getElementById("preloader");
        setTimeout(function () {
          preloader.style.opacity = "0";
          setTimeout(function () {
            preloader.style.display = "none";
          }, 500);
        }, 1500);
      });
      document.addEventListener("DOMContentLoaded", function () {
        const hamburger = document.getElementById("hamburger-menu");
        const mobileMenu = document.getElementById("mobile-menu");

        hamburger.addEventListener("click", function () {
          mobileMenu.classList.toggle("active");
          hamburger.classList.toggle("active");
        });

     
        const mobileLinks = mobileMenu.querySelectorAll("a");
        mobileLinks.forEach((link) => {
          link.addEventListener("click", function () {
            mobileMenu.classList.remove("active");
            hamburger.classList.remove("active");
          });
        });
        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
          anchor.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href");
            if (targetId === "#") return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
              targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }
          });
        });
      });

    
      document.addEventListener("DOMContentLoaded", function () {
        const script = document.createElement("script");
        script.src =
          "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
        script.onload = function () {
          particlesJS("particles-js", {
            particles: {
              number: {
                value: 80,
                density: {
                  enable: true,
                  value_area: 800,
                },
              },
              color: {
                value: "#a855f7",
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 0,
                  color: "#000000",
                },
              },
              opacity: {
                value: 0.5,
                random: true,
                anim: {
                  enable: true,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false,
                },
              },
              size: {
                value: 3,
                random: true,
                anim: {
                  enable: true,
                  speed: 3,
                  size_min: 0.1,
                  sync: false,
                },
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: "#7e22ce",
                opacity: 0.4,
                width: 1,
              },
              move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: {
                  enable: true,
                  mode: "grab",
                },
                onclick: {
                  enable: true,
                  mode: "push",
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 140,
                  line_linked: {
                    opacity: 1,
                  },
                },
                push: {
                  particles_nb: 4,
                },
              },
            },
            retina_detect: true,
          });
        };
        document.head.append(script);
      });
   function playVideo(element) {

    const videoContainer = element.closest('.video-container');
    const video = videoContainer.querySelector('video');
    const overlay = videoContainer.querySelector('.video-overlay');
    
    if (video.paused) {
        video.play();
        videoContainer.classList.add('playing');
        
        element.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        video.pause();
        videoContainer.classList.remove('playing');
        
        element.innerHTML = '<i class="fas fa-play"></i>';
    }
}


document.querySelectorAll('.video-container video').forEach(video => {
    video.addEventListener('ended', function() {
        const videoContainer = this.closest('.video-container');
        const playBtn = videoContainer.querySelector('.play-btn-large');
        videoContainer.classList.remove('playing');
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
    });
});


document.addEventListener('click', function(e) {
    if (!e.target.closest('.video-container')) {
        document.querySelectorAll('.video-container.playing video').forEach(video => {
            video.pause();
            const videoContainer = video.closest('.video-container');
            const playBtn = videoContainer.querySelector('.play-btn-large');
            videoContainer.classList.remove('playing');
            playBtn.innerHTML = '<i class="fas fa-play"></i>';
        });
    }
});