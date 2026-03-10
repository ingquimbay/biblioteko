import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import BookGalleryComponent from './BookGalleryComponent';
import BookDetailComponent from './BookDetailComponent';

function App() {

  return (
    <>
      <BrowserRouter>
        <div className="App">
          <nav>
            <header>
              <h1>Welcome to Biblioteko</h1>
            </header>
          </nav>
          <Routes>

            <Route path="/" element={<BookGalleryComponent />} />

            <Route path="/books/:id" element={<BookDetailComponent />} />

          </Routes>
        </div>
      </BrowserRouter>

    </>
  )
}

export default App
