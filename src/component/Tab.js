import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {Basic, Container} from './Style';

const Tab = () =>{


    const [menu0, setMenu0] = useState('blue');
    const [menu1, setMenu1] = useState('black');
    const [menu2, setMenu2] = useState('black');
    
    const me = {
        0: setMenu0,
        1: setMenu1,
        2: setMenu2
    }
    const click = (num) =>{

        for(var i=0; i<3; i++){
            me[i]('black');
        }
        me[num]('blue');
    }
    

    const NavMenuBar = styled.ul`
        width: 100%;
        height: 50px;
        display: flex;
        margin: 0;
        padding: 0;
    `

    const NavMenu = styled.li`
        width: 33.33%;
        height: 50px;
        list-style: none;
        background-color: ${(props)=>props.menuState === 'black' ? `black` : `blue`};
        text-align: left;
        line-height: 50px;
        padding: 0 10px;
        box-sizing: border-box;
        color: white;
        cursor: pointer;
    `


    return(
        <>
            <TabContainer>
            <h2>Tab</h2>
                <NavWrap>
                    <Navigation>
                        <NavMenuBar>
                            <NavMenu onClick={()=>{click(0)}} menuState={menu0}>
                                Tab1
                            </NavMenu>
                            <NavMenu onClick={()=>{click(1)}} menuState={menu1}>
                                Tab2
                            </NavMenu>
                            <NavMenu onClick={()=>{click(2)}} menuState={menu2}>
                                Tab3                                
                            </NavMenu>
                        </NavMenuBar>
                    </Navigation>
                </NavWrap>
            </TabContainer>
        </>
    )
}

export default Tab;


const TabContainer = styled(Container)`

`

const NavWrap = styled(Basic)`
    width: 80%;
    height: 50px;
    background-color: lightgray;
    
`

const Navigation = styled(Basic)`
    width: 90%;
    height: 50px;
    background-color: gray;
    margin: 0 0 0 10%;
`


const NavMenu = styled.li`
    width: 33.33%;
    height: 50px;
    list-style: none;
    background-color: skyblue;
    text-align: left;
    line-height: 50px;
    padding: 0 10px;
    box-sizing: border-box;
    color: white;
    cursor: pointer;
`

