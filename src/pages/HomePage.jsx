import { useState, useEffect } from "react";
import Head from "next/head";

import AppLoader from "@/components/common/AppLoader";
import Header from "@/components/pages/Header";
import Tours from "@/components/pages/Tours";
import TourCreate from "@/components/pages/TourCreate";
import Reviews from "@/components/pages/Reviews";
import Gallery from "@/components/pages/Gallery";
import Stories from "@/components/pages/Stories";

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
                    <Tours/>
                    <TourCreate/>
                    <Reviews/>
                    <Gallery />
                    <Stories/>
                </div>}
        </>
    );
}

export default HomePage;