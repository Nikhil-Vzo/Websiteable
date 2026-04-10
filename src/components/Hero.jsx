import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './Hero.css';
import vector2510 from '../assets/vector2510.svg';
import vector2511 from '../assets/vector2511.png';

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const container = useRef();

  useGSAP(() => {
    // Timeline to chain animations flawlessly
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // 1. Text mask reveals & floats up 
    tl.fromTo('.hero-content h1', 
      { y: 80, opacity: 0, clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)' },
      { y: 0, opacity: 1, clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0 100%)', duration: 1.2 }
    )
    .fromTo('.hero-subtitle', 
      { y: 30, opacity: 0, clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)' },
      { y: 0, opacity: 1, clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0 100%)', duration: 1 }, 
      '-=0.8'
    )
    
    // 2. Deco elements slide in
    .from('.deco-purple-shape, .deco-wavy-lines, .deco-circle', {
      scale: 0.5,
      opacity: 0,
      rotation: 15,
      duration: 1,
      stagger: 0.2
    }, '-=0.5')

    // 3. Avatars bubble up with a staggered bounce
    .fromTo('.avatar', 
      { y: 100, scale: 0, opacity: 0 },
      { y: 0, scale: 1, opacity: 1, duration: 1, stagger: 0.1, ease: 'back.out(1.5)' },
      '-=0.8'
    );

    // Add parallax to parent container to prevent matrix transform conflicts
    gsap.to('.avatars-container', {
      y: -100,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
      }
    });

    // Add continuous SVG animations
    gsap.to('.deco-wavy-lines', {
      y: 15,
      rotation: 3,
      duration: 2.5,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut'
    });

    gsap.to('.deco-circle', {
      y: -20,
      x: 10,
      duration: 3,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut'
    });

  }, { scope: container });

  return (
    <section className="hero-section container" ref={container}>
      <div className="hero-content">
        <h1>
          The <span className="highlight-orange">thinkers</span> and<br />
          doers were <span className="highlight-pink">changing</span><br />
          the <span className="highlight-green">status</span> Quo with
        </h1>
        <p className="hero-subtitle">
          We are a team of strategists, designers communicators, researchers. Togeather,
          we belive that progress only hghappens when you refuse to play things safe.
        </p>
      </div>

      {/* that semi-circle */}
      <div className="deco-purple-shape" aria-hidden="true"></div>
      
      {/* Wavy Vector Graphics */}
      <div className="deco-wavy-lines" aria-hidden="true">
        <img src={vector2510} alt="Decorative Coral Wavy Line" className="vector-2510-img" />
        <img src={vector2511} alt="Decorative Black Wavy Line" className="vector-2511-img" />
      </div>

      {/* Additional Animated SVG Elements */}
      <svg className="deco-circle" width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="12" cy="12" r="10" stroke="var(--highlight-green)" strokeWidth="4" strokeDasharray="4 4" />
      </svg>

      {/* Avatars */}
      <div className="avatars-container" aria-hidden="true">
        <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Avatar" className="avatar a1" />
        <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Avatar" className="avatar a2" />
        <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Avatar" className="avatar a3" />
        <img src="https://randomuser.me/api/portraits/men/65.jpg" alt="Avatar" className="avatar a4" />
        <img src="https://randomuser.me/api/portraits/women/90.jpg" alt="Avatar" className="avatar a5" />
        <img src="https://randomuser.me/api/portraits/men/22.jpg" alt="Avatar" className="avatar a6" />
        <img src="https://randomuser.me/api/portraits/women/24.jpg" alt="Avatar" className="avatar a7" />
      </div>
    </section>
  );
}

export default Hero;
