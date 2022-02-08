import React, {useState, useEffect} from 'react';
import styled, {css, keyframes} from 'styled-components';
import {Basic, Container}  from './Style';


    const buttonMoveRight = keyframes`
        0%{
            left: 8%;
        }

        100%{
            left:58% 
        }
    `

    const buttonMoveLeft = keyframes`
        0%{
            left: 58%;
        }

        100%{
            left:8% 
        }
    `

    const colorWidthPlus = keyframes`
        0%{
            width: 0px;
        }

        100%{
            width: 100px;
        }
    `

    const colorWidthMinus = keyframes`
    0%{
        width: 100px;
    }

    100%{
        width: 0px;
    }
    `

const Toggle = () => {
    
    const [flag, setFlag] = useState(false);
    const [animaPlay, setAnimaPlay] = useState('running');
    const [animaFillMode, setAnimaFillMode] = useState('reverse');

    useEffect(() => {
        setAnimaPlay('paused');
      },[]);

    

    const ToggleColor = styled(ToggleLayout)`
        width: 0px;
        ${(props) => props.check ? css`animation: ${colorWidthPlus} .7s` : css`animation: ${colorWidthMinus} .7s`};
        animation-fill-mode: forwards;
        background-color: purple;
        border-radius: 0;
        position: relative;
        left: -50%;
        transform: translateX(calc(50%));
        z-index: 1;
        animation-play-state: ${animaPlay};
        animation-direction: ${animaFillMode};
    `

    const ToggleButton = styled(Basic)`
        width: 30px;
        height: 30px;
        background-color: white;
        border: none;
        border-radius: 100px;
        position: absolute;
        left: 8%;
        ${(props) => props.check ? css`animation: ${buttonMoveRight} .7s` : css`animation: ${buttonMoveLeft} .7s`};
        animation-fill-mode: forwards;
        z-index: 2;
        cursor: pointer;
        animation-play-state: ${animaPlay};  
        animation-direction: ${animaFillMode};
    `

    const click = () =>{
        setAnimaPlay('running');
        setAnimaFillMode('normal');
        flag === false ?  setFlag(true) : setFlag(false);
    }

    return(
        <div>
            <h2>Toggle</h2>
            <Container>
                <ToggleLayout>
                    <ToggleButton onClick={click} check={flag}/>
                    <ToggleColor check={flag} />
                </ToggleLayout>
                <Basic>{flag ? 'on' : 'off'}</Basic>
            
            </Container>
        </div>
    )
}

export default Toggle;

const ToggleLayout = styled(Basic)`
    width: 90px;
    height: 40px;
    background-color: lightgray; 
    border-radius: 50px;
    overflow: hidden;
    display: flex;
    align-items: center;
    position: relative;
`



