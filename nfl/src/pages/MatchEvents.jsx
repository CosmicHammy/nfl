import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const MatchEvents = () => {
    const [searchParams] = useSearchParams();
    const matchId = searchParams.get("match");  // Get match ID from URL
    const [matchData, setMatchData] = useState(null);

    useEffect(() => {
        if (matchId) {
            fetch(`https://your-backend-url.com/api/match-events?match=${matchId}`)
                .then(res => res.json())
                .then(data => setMatchData(data))
                .catch(err => console.error("Error fetching match events:", err));
        }
    }, [matchId]);

    if (!matchId) return <h2>No match selected.</h2>;
    if (!matchData) return <h2>Loading match events...</h2>;

    return (
        <div className="container">
            <h1>Match Events</h1>
            <h2>{matchData.home} vs {matchData.away}</h2>
            <p>Score: {matchData.homeScore} - {matchData.awayScore}</p>
            
            <h3>Events</h3>
            <table>
                <thead>
                    <tr>
                        <th>Minute</th>
                        <th>Event</th>
                        <th>Player</th>
                        <th>Team</th>
                    </tr>
                </thead>
                <tbody>
                    {matchData.events.map((event, index) => (
                        <tr key={index}>
                            <td>{event.minute}'</td>
                            <td>{event.type}</td>
                            <td>{event.player}</td>
                            <td>{event.team}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MatchEvents;
