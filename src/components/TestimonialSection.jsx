import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './TestimonialSection.css';

function TestimonialSection() {
  const container = useRef();

  useGSAP(() => {
    // Reveal text in header
    gsap.fromTo('.testimonial-header h2',
      { y: 40, opacity: 0, clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)' },
      {
        y: 0,
        opacity: 1,
        clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0 100%)',
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Reveal Quote Box
    gsap.from('.quote-box', {
      scale: 0.9,
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: container.current,
        start: 'top 75%',
        toggleActions: 'play none none reverse'
      }
    });

    // Avatars pop in like bubbles
    gsap.from('.t-avatar', {
      scale: 0,
      opacity: 0,
      duration: 1.5,
      stagger: {
        each: 0.1,
        from: 'random'
      },
      ease: 'elastic.out(1, 0.5)',
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    });

    // Make them parallax slowly as you scroll
    const avatars = gsap.utils.toArray('.t-avatar');
    avatars.forEach((avatar, i) => {
      // Create random speeds & directions
      const speed = (i % 2 === 0 ? 1 : -1) * (Math.random() * 40 + 20);
      
      gsap.to(avatar, {
        y: speed,
        ease: 'none',
        scrollTrigger: {
          trigger: '.testimonial-content',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5
        }
      });
    });

  }, { scope: container });

  return (
    <section className="testimonial-section container" ref={container}>
      <div className="testimonial-header">
        <h2>
          <span className="highlight-green">What</span> our customer<br />
          says <span className="highlight-orange-double">About Us</span>
        </h2>
      </div>

      <div className="testimonial-content">
        <div className="quote-box">
          <span className="quote-mark left">“</span>
          <p>
            Elementum delivered the site with inthe timeline<br/>
            as they requested. Inthe end, the client found a 50%<br/>
            increase in traffic with in days since its launch. They<br/>
            also had an impressive ability to use technologies that<br/>
            the company hasn't used, which have also proved to<br/>
            be easy to use and reliable
          </p>
          <span className="quote-mark right">”</span>
        </div>
        
        {/* Floating Avatars */}
        <div className="test-avatars" aria-hidden="true">
          <img src="https://i.pravatar.cc/150?img=33" alt="Customer" className="t-avatar t1" />
          <img src="https://i.pravatar.cc/150?img=32" alt="Customer" className="t-avatar t2" />
          <img src="https://i.pravatar.cc/150?img=12" alt="Customer" className="t-avatar t3" />
          <img src="https://i.pravatar.cc/150?img=54" alt="Customer" className="t-avatar t4" />
          <img src="https://i.pravatar.cc/150?img=65" alt="Customer" className="t-avatar t5" />
          <img src="https://i.pravatar.cc/150?img=68" alt="Customer" className="t-avatar t6" />
          <img src="https://i.pravatar.cc/150?img=69" alt="Customer" className="t-avatar t7" />
          <img src="https://i.pravatar.cc/150?img=70" alt="Customer" className="t-avatar t8" />
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
