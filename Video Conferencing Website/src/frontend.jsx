import React, { useState } from 'react';

function App() {
  const [meetingId, setMeetingId] = useState('');
  
  const handleJoinMeeting = () => {
    // Add logic to join the meeting with the provided ID
    alert(`Joining meeting ${meetingId}`);
  };

  return (
    <div className="App">
      <h1>Video Conferencing Website</h1>
      <input
        type="text"
        placeholder="Meeting ID"
        value={meetingId}
        onChange={(e) => setMeetingId(e.target.value)}
      />
      <button onClick={handleJoinMeeting}>Join Meeting</button>
    </div>
  );
}

export default App;
