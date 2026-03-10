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
                    <div key={book.id} className="book-card">
                        <li>{book.title} - {book.author} | 
                            <a href={`/books/${book.id}`}> View Details</a>
                        </li>
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default BookGalleryComponent;