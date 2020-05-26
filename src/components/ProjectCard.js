import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

export default class ProjectCard extends React.Component {
    render() {
        return (
            <div>
                <h2 style={{ paddingTop: '30px', paddingBottom: '30px', fontFamily: 'Courier' }}>Featured Projects</h2>
                <div class="row row-cols-1 row-cols-md-2">
                    <div class="col mb-4">
                        <div class="card h-100">
                            <img src="/findabeanpotty.png" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Find A Bean Potty</h5>
                                <p class="card-text">A React web application to locate free public restrooms around Boston.</p>
                                <a href="https://github.com/jessica-cheng/FindABeanPotty" class="btn btn-info">View On Github</a>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-4">
                        <div class="card h-100">
                            <img src="/mbtamap.png" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">MBTA</h5>
                                <p class="card-text">An application that utilizes the MBTA API and finds a subway route path given the start and destination subway stations.</p>
                                <a href="https://github.com/jessica-cheng/mbta" class="btn btn-info">View On Github</a>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-4">
                        <div class="card h-100">
                            <img src="/spotifydiscogsanalysis.png" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Spotify Discogs Data Analysis</h5>
                                <p class="card-text">R Shiny app that analyzes how has the format of albums changed over time from 1960s to now utilizing the Discogs and Spotify APIs and webscraping Billboard 200.</p>
                                <a href="https://github.com/lukenovak/Spotify-Discogs-Data-Analysis" class="btn btn-info">View On Github</a>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-4">
                        <div class="card h-100">
                            <img src="/animator.jpg" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Easy Animator</h5>
                                <p class="card-text">A Java project that converts text instructions and creates an animator UI that displays animations and exports the animation as an svg file.</p>
                                <a href="https://github.com/jessica-cheng/Easy-Animator" class="btn btn-info">View On Github</a>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-4">
                        <div class="card h-100">
                            <img src="/forbiddenislandrand.jpg" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Forbidden Island</h5>
                                <p class="card-text">A multiplayer Java desktop game where the goal is to escape an island before it is completely submerged.</p>
                                <a href="https://github.com/jessica-cheng/ForbiddenIsland" class="btn btn-info">View On Github</a>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-4">
                        <div class="card h-100">
                            <img src="/mazeunsolved.jpg" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Maze Game</h5>
                                <p class="card-text">A Java desktop game that uses Kruskal's Algorithm to generate mazes and uses depth first and breadth first search to solve them.</p>
                                <a href="https://github.com/jessica-cheng/Maze-Game" class="btn btn-info">View On Github</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}