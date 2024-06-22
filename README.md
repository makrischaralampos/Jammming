# Jammming

## Purpose

Jammming is a web application that allows users to search the Spotify library, create custom playlists, and save them to their Spotify accounts. It provides a seamless interface for music enthusiasts to discover tracks, compile them into personalized playlists, and manage their music collections directly through Spotify.

## Technologies Used

- **React**: Used for building the frontend interface and managing component-based architecture.
- **Spotify Web API**: Integrated to fetch music data, manage playlists, and interact with user accounts.
- **OAuth**: Implemented OAuth authentication to securely connect users' Spotify accounts.

## Features

- **Search**: Users can search for tracks by song, artist, or album name using the Spotify API.
- **Playlist Customization**: Create and customize playlists by adding or removing tracks.
- **Playlist Management**: Rename playlists and save them to a user's Spotify account.
- **User Authentication**: OAuth login flow to authenticate users and obtain access tokens for API requests.
- **Responsive Design**: Ensures the application is usable and looks good on various screen sizes.

## Future Work

- **Improving UI/UX**: Enhance visual design and user experience with more polished animations and transitions.
- **Additional Features**: Implement features like drag-and-drop for playlist management and sorting options for search results.
- **Error Handling**: Enhance error handling to provide better feedback to users during API interactions.
- **Performance Optimization**: Optimize network requests and application performance for smoother user interactions.

## Setup Instructions

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Create a `.env` file in the root directory and add your Spotify API client ID:
   ```bash
   REACT_APP_SPOTIFY_CLIENT_ID=your-client-id
   ```
4. Start the application using `npm start`.
5. Open `http://localhost:3000` in your browser.

## Acknowledgements

This project was created as part of learning React and interacting with APIs. Special thanks to Spotify for providing access to their API.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
