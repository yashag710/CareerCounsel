import React from "react";
import Navbar from "./Navbar";
import Landing from "./Landing";
import HowWeHelp from "./HowWeHelp";

export function Home(){
    return(
        <>
            <Navbar />
            <Landing />
            <HowWeHelp />
        </>
    );
}