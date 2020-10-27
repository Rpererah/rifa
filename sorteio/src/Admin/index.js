import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Admin() {
    return (
        <div className="jumbotron">
            <h1 className="display-5">Administrador</h1>
            <p className="lead">Jumbo helper text</p>
            <hr className="my-2"/>
            <p>More info</p>
            <p className="lead">
                <a className="btn btn-primary btn-lg" href="Jumbo action link" role="button">Jumbo action name</a>
            </p>
        </div>
    )
}
