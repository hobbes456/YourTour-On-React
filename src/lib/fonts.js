import localFont from "next/font/local";

const roboto = localFont({
    src: [
        {
            path: "../public/fonts/Roboto-Regular.ttf",
            weight: "400",
            style: "normal",
            variable: "--font-roboto-regular",
        },
        {
            path: "../public/fonts/Roboto-Medium.ttf",
            weight: "500",
            style: "normal",
            variable: "--font-roboto-medium",

        },
    ]
})