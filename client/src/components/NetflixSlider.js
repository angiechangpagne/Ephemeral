import React, {useState } from 'react';
// import Article form 'Article';
import SliderContext from './context'
import './NetFlixCarousel.css';



const NetflixSlider=({ children, activeSlide }) => {
    const [currentSlide,setCurrentSlide] = useState(activeSlide);
    const { width ,elementRef } = useSizeElement();
    const { 
        handlePrev,
        handleNext,
        slideProps,
        containerRef,
        hasNext,
        hasPrev
    } = useSliding(width, React.Children.count(children));

    const handleSelect = article => {
        setCurrentSlide(article);
    };

    const handleClose = () =>{
        setCurrentSlide(null);
    };

    const contextValue = {
        onSelectSlide: handleSelect,
        onCloseSLide: handleClose,
        elementRef,
        currentSlide,
    };

    return (
        <SliderContext.Provider value={contextValue}>
            <SliderWrapper>
                <div 
                    className={cx('slider',{ 'slider--open': currentSlide !=null })}
                >    
                    <div ref={containerRef} className="slider_container" {...slideProps}>{children}</div>
                    </div>
                    {hasPrev && <SlideButton onClick={handlePrev} type="prev" />}
                    {hasNext && <SlideButton onClick={handleNext} type="next" />}
            </SliderWrapper>
            {currentSlide && <Content movie={currentSlide} onClose={handleClose} />}
        </SliderContext.Provider>
    )
}


export default Slider;