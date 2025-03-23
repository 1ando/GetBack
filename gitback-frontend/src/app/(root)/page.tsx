import React from "react";
import HeaderBox from "../components/HeaderBox";
import NavBar from "../components/NavBar";
import GroupPre from "../components/GroupPre";

const Home = async () => {
    const loggedIn = {username: 'Landon'};
    let myGroups = [<GroupPre key={1}/>,<GroupPre key={2}/>] 

    return(
        <section className="home">
            <NavBar className ='navbar'/>
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox
                    type='greeting'
                    title='welcome'
                    user={loggedIn?.username || 'Guest'}
                    subtext = "Git back your money yayyyy"
                    />
                </header>
            
            <div className="groups-list">{myGroups}</div> 
            </div>
        </section>
    )
}

export default Home