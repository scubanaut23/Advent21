import styled from 'styled-components';
import hatchBackdrop from './img/wall2.jpg';

export const StyledHatch = styled.div`
  padding-top: 100%;
  position: relative;
  cursor: pointer;

  .front {
    font-family: 'Roboto', sans-serif;
    background: center / cover url(${(props) => props.background});
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;

    p {
      font-family: 'Roboto', sans-serif;
      color: #ffffff;
      text-shadow: 3px 5px 2px #474747, -2px -2px 0 black, 2px -2px 0 black,
        -2px 2px 0 black, 2px 2px 0 black, -3px -3px 0 white, 3px -3px 0 white,
        -3px 3px 0 white, 3px 3px 0 white;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      padding: 2rem;
      font-weight: 700;
      font-size: 3rem;
    }

    &.open {
      transform: rotateY(180deg);
    }
  }

  .back {
    position: absolute;
    background: center / cover url(${hatchBackdrop});
    top: 0px;
    left: 0px;
    z-index: 1;
    transform: rotateY(180deg);

    &.open {
      z-index: 2;
      transform: rotateY(0deg);
    }

    p {
      font-family: 'Roboto', sans-serif;
      color: black;
      padding: 10px;
    }
  }

  .text {
    font-size: 1em;
    width: 100%;
    word-wrap: break-word;
  }

  .author {
    font-size: 0.8em;
  }

  > div {
    padding: 0 20px 0 20px;
    font-family: 'Roboto', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    width: 100%;
    transition: all 0.5s;
    transform-style: preserve-3d;
    border-radius: 10px;
    // border: 1px solid rgb(110, 123, 139);
    box-sizing: border-box;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }
`;
