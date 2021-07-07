import React from 'react'

function Home() {
    return (
        <>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="./img/1.jpg" className="d-block w-100 " alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="./img/2.jpg" className="d-block w-100" alt="..." />
                    </div>
                </div>


                <footer className="page-footer font-small cyan darken-3">
                    <div className="container">

                        <div className="row">

                            <div className="col-md-12 py-5">
                                <div className="mb-5 flex-center ">

                                    <a className="fb-ic">
                                        <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                                    </a>
                                    <a className="tw-ic">
                                        <i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                                    </a>
                                    <a className="gplus-ic">
                                        <i className="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                                    </a>
                                    <a className="li-ic">
                                        <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                                    </a>
                                    <a className="ins-ic">
                                        <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                                        <i className="fab fa-google-plus-g"> </i>
                                    </a>
                                    <a className="pin-ic">
                                        <i className="fab fa-pinterest fa-lg white-text fa-2x"> </i>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="footer-copyright text-center py-3">© 2021 Copyright:
                        <a href="https://safe-courier-phillip.netlify.app">Safe Courier</a>
                    </div>

                </footer>

            </div>




        </>
    )
}

export default Home
