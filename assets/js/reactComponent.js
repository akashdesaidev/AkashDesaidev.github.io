import React from 'react';
import GitHubCalendar from 'react-github-calendar';

function GitHubContributions() {
  // GitHubCalendar props: username, responsive (optional), blockSize (optional), blockMargin (optional)
  return (
    <div>
      <h2>GitHub Contributions</h2>
      <GitHubCalendar username="your-username" />
    </div>
  );
}

export default GitHubContributions;