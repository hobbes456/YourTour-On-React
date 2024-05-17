import { useState, useEffect } from "react";
import Head from "next/head";

import AppLoader from "@/components/pages/AppLoader";
import Header from "@/components/pages/Header";

import s from "@/styles/HomePage.module.scss";

const HomePage = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setIsLoading(!isLoading), 300);
    }, []);
    
    return (
        <>
            <Head>
                <meta charset="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="keywords" content="travel, traveling, journey, tours, flights, last minute deals"/>
                <meta name="description" content="The most exciting and dizzying tours from around the globe. Travel with us and you will understand what a real adventure is."/>
                <meta http-equiv="Permissions-Policy" content="interest-cohort=()"/>
                <title>YourTour</title>
                <link rel="icon" href="/favicon.png"/>
            </Head>
            {isLoading ? 
                <AppLoader/> :
                <div className={s.main}>
                    <Header/>
                </div>}
        </>
    );
}

export default HomePage;