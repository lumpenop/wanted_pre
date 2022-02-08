import React, {useState} from 'react';
import styled from 'styled-components';
import {Basic, Container} from './Style';

const Tab = () =>{

    

    return(
        <>
            <h2>Tab</h2>
            <TabContainer>
                <NavWrap>
                    <Navigation>
                        <NavMenuBar>
                            <NavMenu>
                                Tab1
                            </NavMenu>
                            <NavMenu>
                                Tab2
                            </NavMenu>
                            <NavMenu>
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
    background-color: skyblue;
    text-align: left;
    line-height: 50px;
    padding: 0 10px;
    box-sizing: border-box;
    color: white;
    cursor: pointer;

`
