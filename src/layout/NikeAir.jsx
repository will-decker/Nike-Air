import styled from 'styled-components';
import LogoSrc from '/nike-air-logo.svg';

export const Logo = styled.div`
  background: rgba(255, 255, 255, 0.2);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0) rotate(0deg);
  width: 25%;
  // height: 25%;
  padding: 3em;
  backdrop-filter: blur(20px);
  border: solid 4px transparent;
  background-clip: padding-box;
  border-radius: 1.5em;
  box-shadow: 10px 10px 10px rgba(46, 54, 68, 0.03);
  // opacity: 0.6;
`;

export const LogoSVG = styled.svg`
  //position: absolute;
  //top: 50%;
  //left: 50%;
  //transform: translate3d(-50%, -50%, 0) rotate(0deg);
  //width: 25%;
  //height: 25%;
  // backdrop-filter: blur(30px);
  // opacity: 0.6;
  //cursor: pointer;
`;

export function NikeAir() {
  return (
    <Logo>
      <LogoSVG
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 180.53 96.02"
      >
        <path
          d="M346.6,224.67c-.92,2.58-1.81,5.17-2.8,7.73-.11.28-.75.51-1.14.51-2.76.05-5.52,0-8.27.05-.39,0-1,.25-1.13.54-1.25,3.18-2.42,6.39-3.67,9.77h10.2c-1,2.65-1.87,5.11-2.84,7.54-.1.26-.7.45-1.06.45-2.8,0-5.6,0-8.39.05a1.38,1.38,0,0,0-1.08.59c-1.39,3.56-2.7,7.14-4.09,10.86h12.32L333,267.22l56.45-15,.06.19L331.72,276.8A5.22,5.22,0,0,1,332,278q-.68,21-1.39,42a5.29,5.29,0,0,1-.07.56H321.8c.18-2.6.36-5.2.55-8h-2.9c-1.84,0-3.68,0-5.51,0a1.29,1.29,0,0,0-1.42.94c-.89,2.08-1.89,4.13-2.77,6.22a1.29,1.29,0,0,1-1.41.94c-2.46-.05-4.93,0-7.59,0l20.08-39.26c-3.5,1.47-6.73,2.82-9.94,4.18-19.19,8.1-38.33,16.3-57.58,24.25-7.66,3.16-15.68,5.3-24.08,5.16a30.51,30.51,0,0,1-8.23-1.26c-7.15-2.19-10.85-7.34-11.74-14.63-.06-.47-.16-.93-.24-1.4v-2.87a7,7,0,0,0,.19-.91,39.52,39.52,0,0,1,4.23-14.49c5-10.21,12.18-18.85,20.19-26.84.05-.05.16-.05.39-.12-.44.76-.81,1.36-1.15,2-3.46,6.31-5.7,12.92-4.92,20.24.52,4.79,2.52,8.78,6.66,11.5A18.94,18.94,0,0,0,245,289a49.62,49.62,0,0,0,13.7-2q27.38-7.23,54.72-14.54l1.53-.45,0-.26H297.94V251.71c-.3.34-.38.39-.4.46-2.3,6.2-4.61,12.39-6.87,18.6a1.36,1.36,0,0,1-1.52,1.1c-3-.06-6.07,0-9.1,0-.34,0-.68,0-1.1-.08.15-.48.26-.85.4-1.22q5.89-15.84,11.81-31.68c1.76-4.74,3.56-9.46,5.34-14.19h11.27q-2.38,6.45-4.76,12.91l.16.1,11.31-13Zm-38,43.7h.21C314.22,254,319.57,239.6,325,225.07a3.11,3.11,0,0,0-.44.24q-8.12,9.58-16.22,19.18a2.46,2.46,0,0,0-.48,1.49c.21,6.82.47,13.63.71,20.44C308.58,267.07,308.62,267.72,308.65,268.37Zm15.5,19.88-.23-.05q-4,9-8.08,18h7C323.28,300.14,323.72,294.2,324.15,288.25Z"
          transform="translate(-209.02 -224.67)"
          fill="#f8a140"
        />
        <path
          d="M279.49,224.67q-8.65,23.28-17.32,46.57a5.83,5.83,0,0,1-.28.56H251.41q.41-11.51.82-23l-.22,0-3.93,10.56c-1.44,3.89-2.87,7.77-4.35,11.64-.14.35-.6.81-.91.82-3.51.06-7,0-10.72,0,.19-.57.34-1,.51-1.5q8.31-22.34,16.63-44.66a9.06,9.06,0,0,0,.28-1H262l-1.65,21.26a.76.76,0,0,0,.44-.44q2.36-6.69,4.71-13.39c.86-2.47,1.66-4.95,2.49-7.43Z"
          transform="translate(-209.02 -224.67)"
          fill="#f8a140"
        />
        <path
          d="M293.63,224.67c-1,2.73-1.91,5.47-2.92,8.19-4.69,12.62-9.41,25.22-14.07,37.84a1.49,1.49,0,0,1-1.71,1.17c-3.31-.06-6.62,0-10.1,0l17.53-47.18Z"
          transform="translate(-209.02 -224.67)"
          fill="#f8a140"
        />
        <path
          d="M374.36,320.59h-8.45c-.61-6.71-1.23-13.44-1.84-20.14-1-.4-1.06.22-1.22.83l-4.5,16c-.31,1.11-.64,2.21-1,3.34h-8.14c4-14.51,8.05-29,12.1-43.5,3.78,0,7.53,0,11.28,0a17.13,17.13,0,0,1,3.79.32c4.39,1.05,6.65,4.7,5.79,9.42a18.53,18.53,0,0,1-8.83,12.92,1.48,1.48,0,0,0-.81,1.71q.93,9.17,1.8,18.34C374.38,320.07,374.36,320.3,374.36,320.59Zm-10-24.91a8.24,8.24,0,0,0,8.74-4.56c.93-1.83,1.53-3.81.29-5.68s-3.32-2-5.37-1.93a1.89,1.89,0,0,0-.33.09Q366.1,289.55,364.4,295.68Z"
          transform="translate(-209.02 -224.67)"
          fill="#f8a140"
        />
        <path
          d="M337.3,310.51c-.93,3.33-1.87,6.66-2.85,10.15,2.44,0,5.67-.07,7.9,0l8.26-28.48c1.39-5,2.74-10,4.15-15.1-2.33,0-5.56.08-7.77,0Z"
          transform="translate(-209.02 -224.67)"
          fill="#f8a140"
        />
      </LogoSVG>
    </Logo>
  );
}
