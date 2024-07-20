import React from 'react'

const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, subHeading, heading, children }) => {
  return (
    <>
    <div>
        <div className='relative h-[150vh]'>
            <StickyImage imgUrl={imgUrl} />
        </div>
        {children}
    </div>
    </>
  )
};

const StickyImage = ({ imgUrl }) => {
    return (
        <div style={{
            backgroundImage: `url(${imgUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: `calc(100vh - $(IMG_PADDING *2)px)`,
            top: IMG_PADDING,
        }}
        className='sticky z-0 overflow-hidden rounded-3xl'
        >

        </div>
    );
};

export default TextParallaxContent