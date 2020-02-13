import React, { useState } from "react"
import styled, { createGlobalStyle } from "styled-components"
import ListItem from "./ListItem"

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const StyledApp = styled.div`
  display: flex;
  height: 100vh;
`
const MarginTopAuto = styled.div`
  margin-top: auto;
  padding: 1.25rem;
  width: 100%;
  background-color: #1890ff;
  color: #eee;
`

function App() {
  const [data, setData] = useState({
    DISCOVER: {
      titles: [
        { id: 1, value: "Frequently Asked Questions" },
        { id: 2, value: "Hire with Us" } 
      ],
      show: false
    },
    ABOUT: {
      titles: [
        { id: 1, value: "Frequently Asked Questions" },
        { id: 2, value: "Digital Library" },
        { id: 3, value: "Company Directory" },
        { id: 4, value: "Candidate Features" },
        { id: 5, value: "Work With Us" },
        { id: 6, value: "Privacy Policy" },
        { id: 7, value: "Terms of Use" },
        { id: 8, value: "Contact" }
      ],
      show: false
    },
    CONNECT: {
      titles: [
        { id: 1, value: "Linkedin" },
        { id: 2, value: "Instagram" },
        { id: 3, value: "Facebook" },
        { id: 4, value: "Twitter" }
      ],
      show: false
    },
    NEWSLETTER: {
      titles: [{ id: 1, value: "Subscribe to stay up to date!" }],
      show: false
    }
  })

  const dataElementArray = []
  for (let key in data) {
    dataElementArray.push({
      section: key,
      titles: data[key].titles,
      show: data[key].show
    })
  }

  const toggleListItem = section => {
    const updatedData = { ...data }
    for (let key in updatedData) {
      const updatedSection = { ...updatedData[key] }
      if (key === section) {
        updatedSection.show = !updatedSection.show
        updatedData[key] = updatedSection
      } else {
        updatedSection.show = false
        updatedData[key] = updatedSection
      }
    }
    setData(updatedData)
  }

  return (
    <StyledApp>
      <GlobalStyle />
      <MarginTopAuto>
        {dataElementArray.map(sct => (
          <ListItem key={sct.section} clicked={() => toggleListItem(sct.section)} sct={sct} />
        ))}
      </MarginTopAuto>
    </StyledApp>
  )
}

export default App
