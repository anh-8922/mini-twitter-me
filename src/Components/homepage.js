import AllMessages from "./allMessage";
import React from "react";
import "./css/pages.css";
import AddNewMessage from "./addNewPost";

export default function Home() {
    return(
        <section id="display-main">
            
            <div id="newpost"><AddNewMessage  /></div>
                
            
            <AllMessages />
        </section>
    )
}