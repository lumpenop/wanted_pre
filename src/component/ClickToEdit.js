import React, {useState} from 'react';
import styled from 'styled-components';
import {Basic, Container} from './Style';

const ClickToEdit=()=>{

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [prevName, setPrevName] = useState('');
    const [prevAge, setPrevAge] = useState('');
    

    return(
        <>
            <Container>
                <h2>Click To Edit</h2>
                <CTEBasic>
                   이름 <InputBox value={name} onBlur={()=>{
                       setPrevName(name);
                   }} onChange={(e) => {setName(e.target.value)}} /> 
                </CTEBasic>
                <CTEBasic>
                   나이 <InputBox value={age} onBlur={()=>{
                       setPrevAge(age);
                   }} onChange={(e) => {setAge(e.target.value)}}/>
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
    &:focus{
        outline:3px solid skyblue;
        border:none;
        width: 153px;
        height: 33px;

    }
`


export default ClickToEdit;
