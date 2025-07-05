'use client';

import { useEffect, useState, MouseEvent } from 'react';
import { Config } from '@/types/types'; // Adjust the path as needed

const configObj: Config = {
  buttonD: 'M11.384 13.333h9.232c.638 0 .958.68.505 1.079l-4.613 4.07c-.28.246-.736.246-1.016 0l-4.613-4.07c-.453-.399-.133-1.079.505-1.079z',
  buttonT: 'translate(-1028 -172) translate(832 140) translate(32 32) translate(164) matrix(1 0 0 -1 0 32)',
  shadowSize: 'none',
  roundnessSize: '999px',
  buttonDToBottom: '30px',
  buttonDToRight: '15px',
  selectedBackgroundColor: '#000',
  selectedIconColor: '#ffffff',
  buttonWidth: '56px',
  buttonHeight: '56px',
  svgWidth: '50px',
  svgHeight: '100px',
};

export default function BackToTopButton() {
  const [showButton, setShowButton] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <span
      id="softr-back-to-top-button"
      onClick={handleClick}
      style={{
        display: showButton ? 'flex' : 'none',
        position: 'fixed',
        bottom: configObj.buttonDToBottom,
        right: configObj.buttonDToRight,
        width: configObj.buttonWidth,
        height: configObj.buttonHeight,
        borderRadius: configObj.roundnessSize,
        backgroundColor: configObj.selectedBackgroundColor,
        border: '2px solid currentColor',
        color: configObj.selectedBackgroundColor,
        boxShadow: configObj.shadowSize,
        outline: 'none',
        cursor: 'pointer',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        zIndex: 9999,
      }}
    >
      <svg
        width={configObj.svgWidth}
        height={configObj.svgHeight}
        viewBox="0 0 32 32"
        style={{
          fill: configObj.selectedIconColor,
        }}
      >
        <g fill="none" fillRule="evenodd">
          <path d="M0 0H32V32H0z" transform={configObj.buttonT} />
          <path
            d={configObj.buttonD}
            transform={configObj.buttonT}
            fill={configObj.selectedIconColor}
            fillRule="nonzero"
          />
        </g>
      </svg>
    </span>
  );
}
