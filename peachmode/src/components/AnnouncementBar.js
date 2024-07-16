import React, { useRef, useState, useEffect, useCallback } from 'react'

export const AnnouncementBar = () => {
  const [BarText, setBarText] = useState();
  const getBarText = async () => {
    try {
      const res = await fetch('https://peachmode-server.onrender.com/getContent', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      })
      const data = await res.json();
      setBarText(data.allContent[0].BarText);
    } catch (error) {
      alert('there is an error loding the content please try again in a moment')
    }
  }

  useEffect(() => {
    getBarText()
  }, [])

  const [AnnouncementTexts, setAnnouncementTexts] = useState([]);
  useEffect(() => {
    if (BarText) {
      const updatedText = BarText.map(brtxt => ({ text: brtxt }));
      setAnnouncementTexts(updatedText);
    }
  }, [BarText]);

  const textHeight = 16.5;
  const timerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? AnnouncementTexts.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }
  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === AnnouncementTexts.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, AnnouncementTexts]);

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      goToNext()
    }, 3000);
    return () => clearTimeout(timerRef.current);
  }, [goToNext]);

  return (
    <div className='AnnouncementBar'>
      <button className="LeftArrow" onClick={() => { goToPrevious() }}>
        <svg className="svg-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M725.333333 469.333333H401.493333l140.8-140.373333a42.666667 42.666667 0 1 0-60.586666-60.586667l-213.333334 213.333334a42.666667 42.666667 0 0 0-8.96 14.08 42.666667 42.666667 0 0 0 0 32.426666 42.666667 42.666667 0 0 0 8.96 14.08l213.333334 213.333334a42.666667 42.666667 0 0 0 60.586666 0 42.666667 42.666667 0 0 0 0-60.586667L401.493333 554.666667H725.333333a42.666667 42.666667 0 0 0 0-85.333334z" /></svg>
      </button>
      <div className="AnnouncementBarContent">
        {AnnouncementTexts.map((text, i) => {
          return (<p key={i} style={{ transform: `translateY(${-currentIndex * textHeight}px)` }}>{AnnouncementTexts[i].text}</p>)
        })}
      </div>
      <button className="RightArrow" onClick={() => { goToNext() }}>
        <svg className="svg-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M764.586667 495.786667a42.666667 42.666667 0 0 0-8.96-14.08l-213.333334-213.333334a42.666667 42.666667 0 0 0-60.586666 60.586667l140.8 140.373333H298.666667a42.666667 42.666667 0 0 0 0 85.333334h323.84l-140.8 140.373333a42.666667 42.666667 0 0 0 0 60.586667 42.666667 42.666667 0 0 0 60.586666 0l213.333334-213.333334a42.666667 42.666667 0 0 0 8.96-14.08 42.666667 42.666667 0 0 0 0-32.426666z" /></svg>
      </button>
    </div>
  )
}
