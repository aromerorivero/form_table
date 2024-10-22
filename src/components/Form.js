import React, { useState } from "react";

export default function BookForm(props) {
    const [book, setBook] = useState({ title: "", author: "" });

    const handleChange = (e) => {
        setBook({ ...book, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addBook(book);
        setBook({ title: "", author: "" });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="title"
                value={book.title}
                onChange={handleChange}
                placeholder="Título"
            />
            <input
                type="text"
                name="author"
                value={book.author}
                onChange={handleChange}
                placeholder="Autor"
            />
            <button type="submit">Añadir Libro</button>
        </form>
    );
}

