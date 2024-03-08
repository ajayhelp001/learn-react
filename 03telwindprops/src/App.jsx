import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'
import Project from './component/ProjectBgcolor'

import img1 from './assets/img/img01.jpg'
import img2 from './assets/img/img02.jpg'
import img3 from './assets/img/img03.jpg'

function App() {
  return (
    <>
    {/* <div className="columns-3">
    <Card username="Ajay" userImg={img1} userText="Hello My Name Is Ajay" viewBtn="Check Now"/>
    <Card username="Rohini" userImg={img2} userText="Hello My Name Is Rohini" viewBtn="Read More"/>
    <Card username="Devil" userImg={img3} userText="Hello My Name Is Devil" viewBtn="Click Me"/>
    </div> */}
    <Project/>
    </>
  )
}

export default App
