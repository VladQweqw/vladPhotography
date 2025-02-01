import { Link } from "react-router-dom";

export default function NotFound404() {

    return (
        <section className=" not-found max-h">
            <div className="wrapper">
                <h1>Page not found</h1>
                <p>status code 404</p>
            </div>

            <div className="buttons">
                <Link to={'/'}>
                    <button className="primary-btn button">Go back</button>
                </Link>
            </div>
        </section>
    )
}