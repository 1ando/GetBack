import React from "react";
import HeaderBox from "../components/HeaderBox";
import NavBar from "../components/NavBar";

const Home = async () => {
    const loggedIn = {username: 'Landon'};

    return(
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox
                    type='greeting'
                    title='welcome'
                    user={loggedIn?.username || 'Guest'}
                    subtext = "Git back your money yayyyy"
                    />
                </header>
                <NavBar user={loggedIn}/>
            </div>
        </section>
    )
}

export default Home