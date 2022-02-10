import React, {useState} from 'react';
import styled from 'styled-components';
import {Basic, Container} from './Style';

const Tag = () =>{

    const [tags, setTags] = useState([
        {id:0, text:'tag'},
        {id:1, text:'tag'}
    ]);

    const checkEnter = (e) =>{
        if(e.key === 'Enter'){
            console.log('hi');
            addTag(e);
        }
    }

    const {id, text} = tags;

    const addTag = (e) =>{
        console.log(tags.length);
        setTags([
            ...tags,
           {id:tags.length, text: e.target.value}
        ]);
       
    }
    return(
        <>
            <TagContainer>
                <h2>Tag</h2>
                <TagWrap>
                   <ul style={{display:'flex'}}>
                        {tags.map((tag, i)=>{
                            return(
                            <TagLi key={tag.id}>{tag.text}</TagLi>
                            )
                        })}
                    </ul> 
                    <TagInput 
                        placeholder='press enter to add tags'
                        onKeyPress={checkEnter} 
                    />
                </TagWrap>
            </TagContainer>
        </>
    )
}

const TagLi = styled.li`
    list-style: none;
    padding: 3px;
    background-color: #b266ff;
    color: white;
    text-align: center;
    border-radius: 6px;
`

const TagContainer = styled(Container)`
    margin: 0 auto;
`

const TagWrap = styled(Basic)`
    width: 600px;
    height: 50px;
    border: 1px solid lightgray;
    border-radius: 15px;
    display: flex;
    align-items: center;
    padding: 8px;
    box-sizing: border-box;
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
