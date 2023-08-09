

function Dashboard(props) {
    return (
        <main className="dashboard">
            <h1 className="text-center">Welcome, {props.state.user.username}!</h1>

            <h3>Here are your saved notes</h3>

            <div className="notes">
                {!props.state.user.notes.length && <p>No notes have been added.</p>}

                {props.state.user.notes.map(note => (
                <div key={note._id} className="note">
                    <h3>{note.text}</h3>
                    <div className="row">
                    <p>Added On: {note.createdAt}</p>
                    </div>
                </div>
                ))}
            </div>
        </main>
    )
}

export default Dashboard;