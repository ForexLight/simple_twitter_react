import React from "react";

import './app-header.css'
import styled from 'styled-components'

const Header = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  h1 {
    font-size: 30px;
    color: ${props => props.colored ? 'red' : 'black'};
    :hover{
      color: blue;
    }
  }
  h2{
    font-size: 20px;
  }
`

const AppHeader = ({liked, allPost}) => {
    return (
        <Header colored>
            <h1>Vlad Bugaets</h1>
            <h2>{allPost} записей, {liked} лайков</h2>
        </Header>
    )
}

export default AppHeader