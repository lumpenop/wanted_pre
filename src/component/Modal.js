import React, {useState} from 'react';
import styled from 'styled-components';
import {Basic, Container} from './Style';


const Modal = () =>{

    const [display, setDisplay] = useState("none");
    const [containerBackColor, setContainerBackColor] = useState("white");
    const [containerOpacity, setContainerOpacity] = useState(1);

    const ModalModal = () =>{
        display === "none" ? setDisplay("block") : setDisplay("none");
        containerBackColor === "white" ? setContainerBackColor("gray") : setContainerBackColor("white");
        containerOpacity === 1 ? setContainerOpacity(0.7) : setContainerOpacity(1);
    }

    const PopupLayer = styled(Basic)`
        width: 200px;
        height: 200px;
        color: black;
        background-color: white;
        display: ${display};
        line-height: 200px;
        position: relative;
        top: -100px;

    `
    const ModalContainer = styled(Container)`
        background-color: ${containerBackColor};
        opacity: ${containerOpacity};

    `

    return(
        <div>
            <ModalContainer>
                <h2>Modal</h2>
                <ModalButton onClick={ModalModal}>
                    Open Modal
                </ModalButton>
                <PopupLayer>
                    <CloseButton onClick={ModalModal}>X</CloseButton>
                    Hello CodeStates
                </PopupLayer>
            </ModalContainer>
 
           
        </div>
    )
}

export default Modal;

const ModalButton = styled(Basic)`
    width: 150px;
    height: 70px;
    color: gray;
    font-size: 1rem;
    background-color: black; 
    line-height: 70px;
    border-radius: 50px;
    cursor: pointer;
`
const CloseButton = styled(Basic)`
    width: 30px;
    height: 30px;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    line-height: 30px;
    cursor: pointer; 
`

