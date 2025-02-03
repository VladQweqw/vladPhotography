import { Link } from "react-router-dom";

export default function ErrorPage() {

   return (
      <section className="erro h-space section center">
         <h2>An error occured, please try again later</h2>
         <br />
         <Link to={'/'}>
            <button className="primary-btn button">Go back</button>
         </Link>
      </section>
   )
}