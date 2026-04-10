import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './SectionTomorrow.css';

function SectionTomorrow() {
  const container = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: 'top 75%',
        end: 'bottom 25%',
        toggleActions: 'play none none reverse'
      }
    });

    tl.fromTo('.tomorrow-content h2, .tomorrow-content p, .tomorrow-content .read-more', 
      { y: 50, opacity: 0, clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)' },
      { y: 0, opacity: 1, clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0 100%)', duration: 1, stagger: 0.15, ease: 'power3.out' }
    );

    tl.from('.image-circle-wrapper', {
      scale: 0.8,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out'
    }, '-=0.8');

    tl.from('.red-square', {
      scale: 0,
      rotation: 45,
      duration: 0.8,
      ease: 'back.out(1.7)'
    }, '-=0.5');

    gsap.to('.image-circle-wrapper img', {
      y: 40,
      ease: 'none',
      scrollTrigger: {
        trigger: '.tomorrow-image-container',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
      }
    });

  }, { scope: container });

  return (
    <section className="tomorrow-section container grid-2" ref={container}>
      <div className="tomorrow-content">
        <h2>
          <span className="highlight-orange">Tomorrow</span> should<br />
          be better than <span className="highlight-green">today</span>
        </h2>
        <p>
          We are a team of strategists, designers communicators, researchers.<br/>
          Togeather, we belive that progress only happens when you refuse<br/>
          to play things safe.
        </p>
        <a href="#" className="read-more">Read more <span className="long-arrow"></span></a>
        <div className="pink-gradient-blob" aria-hidden="true"></div>
      </div>
      
      <div className="tomorrow-image-container">
        <div className="image-circle-wrapper">
          <img 
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Team meeting" 
          />
        </div>
        <div className="red-square" aria-hidden="true"></div>
      </div>
      
      <div className="red-connecting-string" aria-hidden="true">
        <svg width="600" height="400" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M500 0C500 100 600 100 600 200C600 300 400 300 300 200C200 100 100 250 0 250" stroke="var(--coral-red)" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      </div>
    </section>
  );
}

export default SectionTomorrow;
