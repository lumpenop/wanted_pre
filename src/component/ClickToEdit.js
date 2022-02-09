import React, {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';
import {Basic, Container} from './Style';

const ClickToEdit=()=>{

    const [name, setName] = useState('dd');
    const [age, setAge] = useState('dd');
    const [prevName, setPrevName] = useState('');
    const [prevAge, setPrevAge] = useState('');
    
    let prevInput = useRef();
    let nowInput = useRef();

    useEffect(()=>{
        window.addEventListener("click", ()=>{
            if(prevInput !== nowInput){

                setPrevAge(age);
                setPrevName(name);
        
            }
        });
    })

    const selectedInput = (e) =>{

        prevInput = e.target;
    }
    
  

    return(
        <>
            <Container>
                <h2>Click To Edit</h2>
                <CTEBasic>
                   이름 <InputBox value={name} onClick={selectedInput} onChange={(e) => {setName(e.target.value)}} /> 
                </CTEBasic>
                <CTEBasic>
                   나이 <InputBox value={age} onClick={selectedInput} onChange={(e) => {setAge(e.target.value)}}/>
                </CTEBasic>
                <CTEBasic>
                    이름 {prevName} 나이 {prevAge}
                </CTEBasic>
            </Container>
        </>
    )
}

const CTEBasic = styled(Basic)`
    margin: 20px 0;
`

const InputBox = styled.input`
    width: 150px;
    height: 30px;
`


export default ClickToEdit;
