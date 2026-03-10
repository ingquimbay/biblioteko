import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function BookDetailComponent() {

    const { id } = useParams(); // Get the book ID from the URL parameters
    const navigate = useNavigate(); // Hook for navigation
    const [book, setBook] = useState(null); // State to hold the book details
    const [loading, setLoading] = useState(true); // State to manage loading state

    useEffect(() => {
        // Fetch book details from the backend API
        fetch(`http://localhost:8080/books/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setBook(data); // Set the book details in state
                setLoading(false); // Set loading to false
            })
            .catch(error => {
                console.error('Error fetching book details:', error);
            })
    }, [id]);

    if (loading) {
        return <div>Loading...</div>; // Show loading state
    }
    if (!book) {
        return <div>Book not found</div>; // Show message if book is not found
    }

    return (
        <div>
            <button onClick={() => navigate(-1)}>Back to Gallery</button>
            <h1>{book.title}</h1>
            <p>Author: {book.author}</p>
            <p>Genre: {book.genre}</p>
            <p>Pages: {book.pages}</p>
            <p>Published: {book.publishedYear}</p>
        </div>
    );
}

export default BookDetailComponent;