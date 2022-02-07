import React, {useState, useEffect} from 'react';
import styled, {keyframes} from 'styled-components';
import {Basic, Container}  from './Style';

const buttonMove = keyframes`
        0%{
            left: 8%;
        }

        100%{
            left:15% 
        }
    `


const Toggle = (props) => {

    const [colorWidth, setColorWidth] = useState(0);
    const [colorLeft, setColorLeft] = useState(-50);
    const [flag, setFlag] = useState(false);

    

    const ToggleColor = styled(ToggleLayout)`
        width: ${colorWidth}px;
        background-color: purple;
        border-radius: 0;
        position: relative;
        left: ${colorLeft}%;
        z-index: 1;

    `

    const ToggleButton = styled(Basic)`
        width: 30px;
        height: 30px;
        background-color: white;
        border: none;
        border-radius: 100px;
        position: absolute;
        left: 8%;
        z-index: 2;
        cursor: pointer;
       
    `

    const click = () =>{
        colorWidth === 0 ?  setColorWidth(90) : setColorWidth(0);
        colorLeft === -50 ?  setColorLeft(0) : setColorLeft(-50);
        flag === false ?  setFlag(true) : setFlag(false);
    }

    return(
        <div>
            <h2>Toggle</h2>
            <Container>
                <ToggleLayout>
                    <ToggleButton onClick={click} check={flag}/>
                    <ToggleColor>
            
                    </ToggleColor>
                </ToggleLayout>
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



