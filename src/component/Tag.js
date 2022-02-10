import React, {useState, useRef, useEffect} from 'react';
import styled from 'styled-components';
import {Basic, Container} from './Style';

const Tag = () =>{

    

    const [tags, setTags] = useState([
        {text:'tag'},
        {text:'tag2'}
    ]);

    const [boxBorder, setBoxBorder] = useState({
        color: 'lightgray',
        bold: '1px'
    });

    const inputBox = useRef();



    const TagWrap = styled(Basic)`
        width: 650px;
        height: 50px;
        border: ${boxBorder.bold} solid ${boxBorder.color};
        border-radius: 15px;
        display: flex;
        align-items: center;
        box-sizing: border-box; 
    `


    const checkEnter = (e) =>{
        if(e.key === 'Enter' && e.target.value !== ''){
          
            addTag(e);
            
        }
    }

    const addTag =(e)=>{
        let idNum = tags.length; 

        setTags([
            ...tags,
           {id: idNum, text: e.target.value}
        ]);
        e.target.value='';
        
    }

    const deleteTag =(num)=>{

        setTags(tags.filter((v, i) => i !== num ));

    }

    useEffect(()=>{
        inputBox.current.focus();
    },[tags])
    



    return(
        <>
            <TagContainer>
                <h2>Tag</h2>
                <TagWrap>
                   <ul style={{display:'flex', justifyContent: 'flex-start', padding: '0 10px'}}>
                        {tags.map((tag, i)=>{
                            return(
                            <TagLi key={i}>{tag.text} <XButton onClick={()=>{deleteTag(i)}} >x</XButton></TagLi>
                            )
                        })}
                    </ul> 
                    <TagInput 
                        placeholder='press enter to add tags'
                        onKeyPress={checkEnter} 
                        ref={inputBox}

                      
                    />
                </TagWrap>
            </TagContainer>
        </>
    )
}

const TagLi = styled.li`
    list-style: none;
    padding: 7px;
    margin-right: 6px;
    background-color: #b266ff;
    color: white;
    text-align: center;
    border-radius: 6px;
    display: flex;
`

const XButton = styled.div`
    width: 18px;
    height: 18px;
    line-height: 14px;
    text-align: center;
    background-color: white;
    color: black;
    border-radius: 15px;
    margin-left: 5px;
    margin-top: 2px;
    cursor: pointer;
`

const TagContainer = styled(Container)`
    margin: 0 auto;
`


const TagInput = styled.input`
    margin: 0 5px;
    height: 40px;
    border: none;
    &:focus{
        outline: none;
    }
`


export default Tag;
