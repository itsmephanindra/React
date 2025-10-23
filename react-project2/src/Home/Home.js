import Footer from "../Shared/Footer";
import Header from "../Shared/Header";
import Talktous from "./Talktous";

function Home() {

        var message="From Home Component";
    return(
        <>
            <div className="container">
                    <div className="row align-items-center">
                            <div className="col-12">
                                <Header/>                                                          
                             </div>

                             <div className="col-6">
                                <h1> Welcome to Learning Portal </h1>
                                <p>Learn the demand courses</p>
                                </div>

                                <div className="col-6">
                                    <Talktous message={message}/>
                                    </div>
                                <div className="col-12 mt-5 bg-light text-center p-2">
                                    <h2>This is Jumbotron</h2>
                                    <p>Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking. </p>
                                    
                                    <div>
                                    <button className="btn btn-primary me-3">watch here</button>
                                    <button className="btn btn-primary">watch here</button>
                                        </div>
                                    </div>
                                  

                                <div className="col-12 mt-3">
                                    <Footer/>
                                </div>
                    </div>
            </div>
        </>
    )
}

export default Home;