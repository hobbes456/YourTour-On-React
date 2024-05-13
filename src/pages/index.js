import { useState, useEffect } from "react";
import Head from "next/head";
import s from "@/styles/HomePage.module.scss";

import AppLoader from "./components/AppLoader";
import Main from "./components/Main";


export default function HomePage() {
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
            {isLoading ? <AppLoader/> : <Main/>}
        </>
    );
}
