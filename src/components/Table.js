import React from "react";

export default function Table(props) {
    return (
        <div className="container">
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Autor</th>
                    </tr>
                </thead>
                <tbody>
                    {props.books.map((book) => ( 
                        <tr>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}