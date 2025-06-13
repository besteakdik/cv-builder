import React from 'react'
import './App.css';
import { Routes, Route, Link, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import Templates from './pages/Templates'
import Editor from './pages/Editor'
import Navbar from './components/Navbar'

function Beste() {
  return <h2>cok güzelsin ask</h2>
}

function App() {
  return (
    <div>
      {/* <nav>
        <Link to="/">Home</Link> |{' '}
        <Link to="/templates">Templates</Link> |{' '}
        <Link to="/editor">Editor</Link> |{' '}
        <Link to="/beste">Beste</Link>
      </nav> */}

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/editor" element={<Editor />} />
        <Route path="/beste" element={<Beste />} />
      </Routes>
    </div>
  )
}

export default App;
