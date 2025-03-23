"use client";

import React, {useEffect, useState} from "react";
import HeaderBox from "../components/HeaderBox";
import NavBar from "../components/NavBar";
import {getCookie} from "../actions";
import CircularProgress from '@mui/material/CircularProgress';

const Home = () => {
    const [displayName, setDisplayName] = useState("Guest");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getDisplayName() {
            const user = await getCookie("email")
            const params = new URLSearchParams();
            if (user) {
                console.log(user.value);
                params.append("email", user.value);
                console.log(params.toString());
                const firestore_response = await fetch(`http://localhost:5000/api/get-user?${params.toString()}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                const json = await firestore_response.json();
                console.log(json);
                setLoading(false);
                setDisplayName(json.displayName);
            }
        }
        getDisplayName()
    })

    return(
        <section className="home">
            {loading ?
                <CircularProgress /> :
                <div className="home-content">
                    <header className="home-header">
                        <HeaderBox
                        type='greeting'
                        title='welcome'
                        user={displayName}
                        subtext = "Git back your money yayyyy"
                        />
                    </header>
                    <NavBar/>
                </div>
            }
        </section>
    )
}

export default Home