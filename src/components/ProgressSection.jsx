import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './ProgressSection.css';

function ProgressSection() {
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

    tl.fromTo('.progress-content h2, .progress-content p, .progress-content .read-more', 
      { y: 50, opacity: 0, clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)' },
      { y: 0, opacity: 1, clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0 100%)', duration: 1, stagger: 0.15, ease: 'power3.out' }
    );

    tl.from('.image-circle-wrapper-progress', {
      scale: 0.8,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out'
    }, '-=0.8');

    tl.from('.red-triangle-top-left, .red-triangle-bottom-right', {
      scale: 0,
      rotation: 180,
      duration: 0.8,
      stagger: 0.2,
      ease: 'back.out(1.7)'
    }, '-=0.5');

    gsap.to('.image-circle-wrapper-progress img', {
      y: 40,
      ease: 'none',
      scrollTrigger: {
        trigger: '.progress-image-container',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
      }
    });

  }, { scope: container });

  return (
    <section className="progress-section container grid-2 reverse-on-mobile" ref={container}>
      <div className="progress-image-container">
        <div className="image-circle-wrapper-progress">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Team coding" 
          />
        </div>
        <div className="red-triangle-top-left" aria-hidden="true"></div>
        <div className="red-triangle-bottom-right" aria-hidden="true"></div>
      </div>
      
      <div className="progress-content">
        <h2>
          <span className="highlight-green">See</span> how we can<br />
          help you <span className="highlight-orange">progress</span>
        </h2>
        <p>
          We add a layer of fearless insights and action that allows change<br />
          makers to accelerate their progress in areas such as brand, design<br />
          digital, comms and social research.
        </p>
        <a href="#" className="read-more">Read more <span className="long-arrow"></span></a>
      </div>
    </section>
  );
}

export default ProgressSection;
