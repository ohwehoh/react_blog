import React from 'react'
import "./posts.css";
import Post from "../posts/Post";

const content = [1, 2, 3, 4, 5, 6, 7, 8, 9]

export default function Posts() {
    return (
        <section id="section">
            {/* <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post /> */}
            {content.map(cont => <Post cont={cont} key={cont} />)}
        </section>
    )
}
