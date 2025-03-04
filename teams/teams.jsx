import { useLocation } from "react-router-dom";

function Teams() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const team = params.get("team"); // Get the "team" query param

    return (
        <div>
            <h1>Teams Page</h1>
            {team ? <h2>Selected Team: {team}</h2> : <p>Select a team from the list.</p>}
        </div>
    );
}

export default Teams;
