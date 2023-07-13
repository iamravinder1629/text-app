import React from 'react'

function About(props) {
    if (props.mode === "dark") {
        document.body.style.backgroundColor = "#2e323d";
        document.body.style.color = "white";
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "#2e323d";
    }
    return (
        <>
            <div className="container-fluid p-5 text-center " >
                <h1>About us</h1>
            </div>
            <div className="row container-fluid  p-3 justify-content-evenly m-0">
                <div className="col-lg-3 col-sm-10 p-3 text-center">
                    <h3>box 1</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae nam atque, commodi autem quam enim sunt labore excepturi molestias reprehenderit.</p>
                </div>
                <div className="col-lg-3 col-sm-10 p-3 text-center">
                    <h3>box 2</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae nam atque, commodi autem quam enim sunt labore excepturi molestias reprehenderit.</p>
                </div>
                <div className="col-lg-3 col-sm-10 p-3 text-center">
                    <h3>box 3</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae nam atque, commodi autem quam enim sunt labore excepturi molestias reprehenderit.</p>
                </div>
            </div>
        </>
    )
}

export default About
