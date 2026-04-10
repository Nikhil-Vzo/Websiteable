import { useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import stickerImg from '../assets/sticker.png';
import './OfferSection.css';

gsap.registerPlugin(ScrollTrigger);

const offers = [
  {
    id: 1,
    category: "Creative thought process oriented",
    title: "Collaborative & partnership",
  },
  {
    id: 2,
    category: "Strategy and technical analysis",
    title: "We talk about our insights",
  },
  {
    id: 3,
    category: "Delta faucet content, social, digital",
    title: "Piloting digital confidence",
    badge: true,
  }
];

function OfferSection() {
  const [activeId, setActiveId] = useState(null);
  const container = useRef();

  const toggleAccordion = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    });

    tl.fromTo('.offer-header h2', 
      { y: 30, opacity: 0, clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)' },
      { y: 0, opacity: 1, clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0 100%)', duration: 1, ease: 'power3.out' }
    )
    .fromTo('.accordion-item', 
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
      }, '-=0.5');

    // Spin badge sticker magnetically on scroll
    gsap.to('.sticker-img', {
      rotation: 180,
      ease: 'none',
      scrollTrigger: {
        trigger: '.offer-section',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
      }
    });

  }, { scope: container });

  return (
    <section className="offer-section container" ref={container}>
      <div className="offer-header">
        <h2>
          What we <span className="highlight-green">can</span><br />
          <span className="highlight-orange">offer</span> you!
        </h2>
      </div>

      <div className="accordion">
        {offers.map((offer) => (
          <div 
            key={offer.id} 
            className={`accordion-item ${activeId === offer.id ? 'active' : ''}`}
            onClick={() => toggleAccordion(offer.id)}
          >
            <div className="accordion-left">
              {activeId === offer.id && <p className="offer-category">{offer.category}</p>}
            </div>
            
            <div className="accordion-right">
              <div className="title-wrapper">
                <h3>{offer.title}</h3>
                {offer.badge && (
                  <div className="piloting-badge" aria-hidden="true">
                    <img src={stickerImg} alt="Sticker badge" className="sticker-img" />
                  </div>
                )}
              </div>
              <span className="long-arrow accordion-arrow"></span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OfferSection;
