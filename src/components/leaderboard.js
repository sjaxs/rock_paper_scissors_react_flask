import React, {useState,setState} from 'react';
import {Link} from "react-router-dom";
import './style.css'

function Leaderboard() {

    const data = [
        { player: "Anom", points: 19, games_played: 15 },
        { player: "Megha", points: 19, games_played: 18 },
        { player: "Subham", points: 25, games_played: 10 },
      ]

    const handlePlayAgain  = () => {
        console.log("Play Again");  
    }

    const handleLogout  = () => {
        console.log("Logout");  
    }

    return(
        <div className="leaderboard">
            <nav class="bg-dark navbar-dark navbar">
                <div className="row col-12 d-flex justify-content-center text-white">
                    <h3>Leaderboard</h3>
                </div>
            </nav>
            <p>Only players with minimum of 10 games played are listed here.</p>
            <table className="table">
                <thead>
                    <tr>
                        <th>Player</th>
                        <th>Points</th>
                        <th>Games Played</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((val, key) => {
                    return (
                        <tr key={key}>
                        <td>{val.player}</td>
                        <td>{val.points}</td>
                        <td>{val.games_played}</td>
                        </tr>
                    )
                    })}
                </tbody>
            </table>
            <div class="footer">
                <button onClick={()=>handlePlayAgain()} type="submit" class="btn">Play again</button>
                <Link to="/sign_up">
                    <button class="btn">Logout</button>
                </Link>
            </div>
        </div>
    )
    
}

export default Leaderboard