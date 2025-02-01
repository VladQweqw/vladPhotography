
export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-top">
                <h3 className="greet">Tranks for visit!</h3>
                <div className="socials">
                    <div

                        className="social"
                        title="Poienariu Vlad"
                    >
                        <a href="https://www.linkedin.com/in/poienariu-vlad/" target="_blank">
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                    </div>

                    <div
                        title="Vlad dji"
                        className="social">
                        <a href="https://www.instagram.com/vlad.dji" target="_blank">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                    </div>

                    <div
                        className="social">
                        <a href="mailto:vladpoienariu@gmail.com"><i className="fa-solid fa-at"></i></a>
                    </div>
                </div>
            </div>
            <div className="footer-tradermark">Website made by <a className="accent" target="_blank" href="https://www.linkedin.com/in/poienariu-vlad/">Poienariu Vlad</a></div>
        </footer>
    )
}