import React from 'react'

export default function Footer() {
    return (
        <>
            <footer className="text-center text-white" style={{ backgroundColor: "#f1f1f1" }}>
                <div className="container pt-1">
                    <section className="mb-2">
                        {/* Facebook */}
                        <a
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="https://www.facebook.com"
                            role="button"
                            rel="noopener noreferrer"
                            target="_blank"
                            title="Facebook"
                            data-mdb-ripple-color="dark"
                        ><i className="fab fa-facebook-f"></i
                        ></a>
                        {/* Google */}
                        <a
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="mailto:mubassimkhan@gmail.com"
                            role="button"
                            rel="noopener noreferrer"
                            target="_blank"
                            title="Google Mail"
                            data-mdb-ripple-color="dark"
                        ><i className="fab fa-google"></i
                        ></a>
                        {/* Instagram */}
                        <a
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="https://www.instagram.com/mubassimkhan_08/?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
                            role="button"
                            rel="noopener noreferrer"
                            target="_blank"
                            title="Instagram"
                            data-mdb-ripple-color="dark"
                        ><i className="fab fa-instagram"></i
                        ></a>
                        {/* LinkedIn */}
                        <a
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="https://www.linkedin.com/in/mubassim-ahmed-khan-8b835025a/"
                            role="button"
                            rel="noopener noreferrer"
                            target="_blank"
                            title="LinkedIn"
                            data-mdb-ripple-color="dark"
                        ><i className="fab fa-linkedin"></i
                        ></a>
                        {/* Github */}
                        <a
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="https://www.github.com/Mubassim-Khan"
                            rel="noopener noreferrer"
                            target="_blank"
                            title="Github"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><i className="fab fa-github"></i
                        ></a>
                    </section>
                </div>

                <div className="text-center text-dark p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                    © 2023 Copyright:
                    <a className="text-dark" href="/"> Airbnb Experiences Clone</a>
                </div>
            </footer>
        </>
    )
}
