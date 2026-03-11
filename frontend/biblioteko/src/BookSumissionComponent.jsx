import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function BookSubmissionComponent() {
    const navigate = useNavigate();

    // Initialize 'Book' entity 
    const [book, setBook] = useState({
        title: '',
        author: '',
        genre: '',
        pages: '',
        publishedYear: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        // Update only the specific field being typed in
        setBook({ ...book, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:8080/books', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(book),
        })
            .then(response => {
                if (response.ok) {
                    alert("Book added successfully!");
                    navigate('/'); // Redirect back to the gallery
                }
            })
            .catch(error => console.error('Error submitting book:', error));
    };

    return (
        <div style={{ maxWidth: '400px', margin: '20px auto' }}>
            <h2>Add New Book</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }} className='form-container'>
                <input name="title" placeholder="Title" className='form-input' onChange={handleChange} required />
                <input name="author" placeholder="Author" className='form-input' onChange={handleChange} required />
                <input name="genre" placeholder="Genre" className='form-input' onChange={handleChange} />
                <input name="pages" placeholder="Pages" className='form-input' onChange={handleChange} type="number" />
                <input name="publishedYear" placeholder="Published Year" className='form-input' onChange={handleChange} type="number" />

                <button type="submit" style={{ padding: '10px', background: '#28a745', color: 'white', border: 'none' }} className='form-input'>
                    Submit Book
                </button>
                <button type="button" onClick={() => navigate('/')}>Cancel</button>
            </form>
        </div>
    );
}

export default BookSubmissionComponent;