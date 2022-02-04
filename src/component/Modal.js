import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Modal = () =>{

    const [display, setDisplay] = useState("none");

    const ModalModal = () =>{
        console.log('hi');
        display === "none" ? setDisplay("block") : setDisplay("none");
    }

    const PopupLayer = styled(basic)`
        width: 20%;
        height: 200px;
        color: black;
        background-color: gray;
        display: ${display};
        line-height: 200px;
        position: relative;
        top: -100px;
    `
    return(
        <div>
            <h1>Modal</h1>
            <div>
                <ModalContainer>
                    <ModalButton onClick={ModalModal}>
                        Open Modal
                    </ModalButton>
                    <PopupLayer>
                        <CloseButton onClick={ModalModal}>X</CloseButton>
                        popup
                    </PopupLayer>
                </ModalContainer>
            </div>
           
        </div>
    )
}

export default Modal;

const basic = styled.div`
    display: block;
    margin: 0 auto;
    text-align: center;
`

const ModalButton = styled(basic)`
    width: 150px;
    height: 70px;
    color: gray;
    font-size: 1rem;
    background-color: black; 
    line-height: 70px;
    border-radius: 50px;
    cursor: pointer;
`
const CloseButton = styled(basic)`
    width: 30px;
    height: 30px;
    position: absolute;
    top: 0;
    right: 100px;
    line-height: 30px;
    cursor: pointer; 
`


const ModalContainer = styled.div`
    width: 100%;
    display: block;
`