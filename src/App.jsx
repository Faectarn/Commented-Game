import React from 'react'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import ReviewsContent from './components/ReviewsContent'

function App() {
  return (
    <div className="App">
      <Header />
      {/* <MainContent /> */}
      <ReviewsContent />
      <Footer />
    </div>
  )
}

export default App
