import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollMagic from 'scrollmagic';
import '../styles/ScrollTextAnimation.css';

function ScrollTextAnimation({ message, darkMode = false }) {
  const sectionRef = useRef(null);
  const quoteRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const quoteEl = quoteRef.current;

    if (!section || !quoteEl) return;

    const controller = new ScrollMagic.Controller();
    const timeline = gsap.timeline({ paused: true });

    // Split message into spans
    const words = message.split(' ');
    quoteEl.innerHTML = words
      .map((word, index) => `<span id="word-${index + 1}">${word}</span>`)
      .join(' ');

    const wordSpans = quoteEl.querySelectorAll('span');
    const color = darkMode ? '#ffffff' : '#202020';
    const scrollDuration = window.innerHeight * (wordSpans.length + 1) * 0.0625;
    const durationPerWord = 1 / (wordSpans.length + 1);

    // Animate each word
    wordSpans.forEach((_, index) => {
      timeline.to(
        `#word-${index + 1}`,
        { color, duration: durationPerWord, ease: 'elastic' },
        index / (wordSpans.length + 1)
      );
    });

    // ScrollMagic Scene
    const scrollTextScene = new ScrollMagic.Scene({
      triggerElement: section,
      triggerHook: 1/ window.innerHeight , //0
      duration: wordSpans.length * window.innerHeight * 0.02//scrollDuration,
    })
      .setPin(section)
      .on('progress', (event) => {
        timeline.progress(event.progress);
      })
      .addTo(controller);

    let isSectionPinned = true;
    scrollTextScene.on('enter', () => (isSectionPinned = true));
    scrollTextScene.on('leave', () => (isSectionPinned = false));

    const handleKeyDown = (event) => {
      if (!isSectionPinned) return;
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        const currentScroll = window.scrollY;
        const step = scrollDuration;
        window.scrollTo({
          top: currentScroll + (event.key === 'ArrowDown' ? step : -step),
          behavior: 'smooth',
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      controller.destroy();
    };
  }, [message, darkMode]);

  return (
    <section className="scroll-text-section mt-5" ref={sectionRef} data-dark={darkMode}>
      <div className="container mt-5">
        <div className="row m-md-5">
          <div className="col-md-8 col-12 offset-md-2">
            <p className="scroll-text-message text-center" ref={quoteRef}></p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScrollTextAnimation;
