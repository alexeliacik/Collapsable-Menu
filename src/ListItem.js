import React from "react"
import styled from "styled-components"

const ListElement = styled.div`
  & > ul {
    list-style-type: none;
    & > li {
      padding: ${props => (props.show ? "0.75rem 1.25rem" : "0 1.25rem")};
      max-height: ${props => (props.show ? "35px" : "0")};
      overflow: hidden;
      transition: all 0.5s linear;
      &:hover {
        color: #b9ddff;
        cursor: pointer;
      }
      & > i {
        margin-right: 0.6rem;
      }
    }
  }
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #eee;
  padding: 0.25rem 0;
  border-bottom: ${props => (props.show ? ".5px solid rgba(255,255,255, 0.5)" : "none")};
  cursor: pointer;

  & > h1 {
    font-size: 1.4rem;
    font-weight: 300;
    letter-spacing: 3px;
  }
  & > i::before {
    display: inline-block;
    font-size: 1.4rem;
    transform: ${props => (props.show ? "rotateX(180deg)" : "rotateX(0)")};
    transition: all 0.3s linear;
  }
`

const ListItem = props => {
  return (
    <ListElement show={props.sct.show}>
      <Header onClick={props.clicked} show={props.sct.show}>
        <h1>{props.sct.section}</h1>
        <i className='fas fa-chevron-up'></i>
      </Header>
      <ul>
        {props.sct.titles.map(title => (
          <React.Fragment key={title.id}>
            <li>
              <i className='fas fa-chevron-right'></i>
              {title.value}
            </li>
          </React.Fragment>
        ))}
      </ul>
    </ListElement>
  )
}

export default ListItem
