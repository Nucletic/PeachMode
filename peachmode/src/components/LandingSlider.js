import React, { useRef, useState, useEffect, useCallback } from 'react'

export const LandingSlider = () => {

  const [Images, setImages] = useState();
  const getSliderImages = async () => {
    try {
      const res = await fetch('https://peachmode-server.onrender.com/getContent', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      })
      const data = await res.json();
      if (window.innerWidth <= 900) {
        setImages(data.allContent[0].MobileSliderImages);
      } else if (window.innerWidth > 900) {
        setImages(data.allContent[0].SliderImages);
      }
    } catch (error) {
      alert('there is an error loding the content please try again in a moment')
    }
  }

  useEffect(() => {
    document.title = 'Women Clothing-Buy Designer Ethnic Wear, Ethnic Suits, Bottoms Online';
  }, [])
  

  useEffect(() => {
    getSliderImages()
  }, [])

  const [slides, setSlides] = useState([]);
  useEffect(() => {
    if (Images) {
      const updatedSlides = Images.map(image => ({ url: image }));
      setSlides(updatedSlides);
    }
  }, [Images]);


  const parentWidth = window.innerWidth - 2;
  const timerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }
  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides]);


  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      goToNext()
    }, 10000);
    return () => clearTimeout(timerRef.current);
  }, [goToNext]);


  return (
    <div className='LandingSlider'>
      <div className='LandingSliderMain' style={{ display: 'flex', height: '100%', transition: 'transform ease-out 0.3s', width: parentWidth * slides.length, transform: `translateX(${-(currentIndex * parentWidth)}px)`, }}>
        {slides.map((slide, i) => {
          return (<div key={i} style={{ backgroundImage: `url(${slides[i].url})`, width: `${parentWidth}px` }}></div>)
        })}
      </div>
      <div className="LandingSliderDots">
        {slides.map((slide, i) => {
          return <button onClick={() => { setCurrentIndex(i) }} key={i}></button>
        })}
      </div>
    </div>
  )
}