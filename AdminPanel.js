import React, { useState, useEffect } from "react";

const API_URL = "https://your-render-backend.com/api"; // Replace with your backend URL

const AdminPanel = () => {
    const [adminToken, setAdminToken] = useState("");
    const [teams, setTeams] = useState([]);
    const [matches, setMatches] = useState([]);
    const [standings, setStandings] = useState([]);

    const [editTeam, setEditTeam] = useState({});
    const [editMatch, setEditMatch] = useState({});
    const [editStanding, setEditStanding] = useState({});

    // ✅ Fetch data
    useEffect(() => {
        fetch(`${API_URL}/teams`).then(res => res.json()).then(setTeams);
        fetch(`${API_URL}/matches`).then(res => res.json()).then(setMatches);
        fetch(`${API_URL}/standings`).then(res => res.json()).then(setStandings);
    }, []);

    // ✅ Handle updates
    const handleUpdate = async (endpoint, id, data) => {
        const response = await fetch(`${API_URL}/${endpoint}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "admin-token": adminToken
            },
            body: JSON.stringify(data)
        });
        const result = await response.json();
        alert(result.message || "Update successful");
    };

    return (
        <div style={{ maxWidth: "600px", margin: "20px auto", fontFamily: "Arial, sans-serif" }}>
            <h2>Admin Panel</h2>
            <input 
                type="password"
                placeholder="Enter Admin Token"
                value={adminToken}
                onChange={(e) => setAdminToken(e.target.value)}
                style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
            />

            <h3>Edit Teams</h3>
            {teams.map(team => (
                <div key={team.team_id} style={{ border: "1px solid gray", padding: "10px", marginBottom: "10px" }}>
                    <input 
                        type="text"
                        defaultValue={team.team_name}
                        onChange={(e) => setEditTeam({ ...editTeam, team_name: e.target.value })}
                    />
                    <button onClick={() => handleUpdate("teams", team.team_id, editTeam)}>Update</button>
                </div>
            ))}

            <h3>Edit Matches</h3>
            {matches.map(match => (
                <div key={match.match_id} style={{ border: "1px solid gray", padding: "10px", marginBottom: "10px" }}>
                    <input 
                        type="text"
                        defaultValue={match.status}
                        onChange={(e) => setEditMatch({ ...editMatch, status: e.target.value })}
                    />
                    <button onClick={() => handleUpdate("matches", match.match_id, editMatch)}>Update</button>
                </div>
            ))}

            <h3>Edit Standings</h3>
            {standings.map(team => (
                <div key={team.id} style={{ border: "1px solid gray", padding: "10px", marginBottom: "10px" }}>
                    <input 
                        type="number"
                        defaultValue={team.points}
                        onChange={(e) => setEditStanding({ ...editStanding, points: e.target.value })}
                    />
                    <button onClick={() => handleUpdate("standings", team.id, editStanding)}>Update</button>
                </div>
            ))}
        </div>
    );
};

export default AdminPanel;
