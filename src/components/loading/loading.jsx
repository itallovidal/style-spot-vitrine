import React from 'react';
import './loading.css'

function Loading() {
    return (
        <main>
            <article id={'container_loading'}>
                <h1>Loading</h1>

                <section id={'container_dots'}>
                    <span></span>
                    <span></span>
                    <span></span>
                </section>
            </article>
        </main>
    );
}

export default Loading;