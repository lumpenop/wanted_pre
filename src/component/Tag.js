import React, {useState, useRef, useEffect, memo} from 'react';
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
        setBoxBorder({color: 'lightgray', bold: '1px'});
    }

    useEffect(()=>{
        // inputBox.current.focus();
    },[tags])

    const onFocus =()=>{
        setBoxBorder({color: 'purple', bold: '3px'});
    }

    const onBlur = () => {
        setBoxBorder({color: 'lightgray', bold: '1px'});
    }



    return(
        <>
            <TagContainer>
                <h2>Tag</h2>
                <TagWrap>
                        
                </TagWrap>
                <TagLayer>
                    <ul style={{display:'flex', justifyContent: 'flex-start', padding: '0 10px', margin: '0', alignItems:'center',flexShrink: '0'}}>
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
                            onFocus={onFocus}
                            onBlur={onBlur}
                        
                        />
                </TagLayer>
            </TagContainer>
        </>
    )
}

const TagLi = styled.li`
    list-style: none;
    padding: 7px;
    margin-right: 6px;
    height: 20px;
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
const TagLayer = styled(TagContainer)`
    display: flex;
    height: 50px;
    width: 650px;
    box-sizing: border-box;
    position: relative;
    top: -50px;
    align-items:center;
    overflow: hidden;
    flex-shrink: 0;
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
