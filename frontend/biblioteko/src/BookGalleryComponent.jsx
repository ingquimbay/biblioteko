import { useState, useEffect } from 'react';

function BookGalleryComponent() {
    const [books, setBooks] = useState([]);

    useEffect(() => {

        fetch('http://localhost:8080/books')
            .then(response => response.json())
            .then(data => setBooks(data))
            .catch(error => console.error('Error fetching books:', error));
    }, []);

    return (
        <div>
            <h2>Library Books</h2>
            <ul>
                {books.map(book => (
                    <li key={book.id}>{book.title} - {book.author}</li>
                ))}
            </ul>
        </div>
    );
}

export default BookGalleryComponent;