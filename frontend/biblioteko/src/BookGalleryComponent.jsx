import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function BookGalleryComponent() {
    const [books, setBooks] = useState([]);

    useEffect(() => {

        fetch('http://localhost:8080/books')
            .then(response => response.json())
            .then(data => setBooks(data))
            .catch(error => console.error('Error fetching books:', error));
    }, []);

    return (
        <div className="container">
            <h2>Library Books</h2>
            <table className='book-table'>
                {books.map(book => (
                    <tr key={book.id} className="book-card">
                        <td>{book.title} </td>
                        <td> {book.author}</td>
                        <td><Link to={`/books/${book.id}`}> View Details</Link></td>
                    </tr>
                ))}
            </table>
            <div className='footer-actions'>
                <Link to="/add-book" className='add-btn'>
                    Add New Book
                </Link>
            </div>
        </div>
    );
}

export default BookGalleryComponent;