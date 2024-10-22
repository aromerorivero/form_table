import React, { useState } from "react";
import "./index.css";
import BookForm from "./components/Form";
import Table from "./components/Table";

function App() {
    const [books, setBooks] = useState([]);

    const addBook = (book) => {
        setBooks([...books, book]);
    };

    return (
        <div className="App">
            <BookForm addBook={addBook} />
            <Table books={books} /> 
        </div>
    );
}

export default App;