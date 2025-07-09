# Vibe Atlas 🎵 🗺️

A modern, interactive map-based music discovery platform for exploring independent artists on Bandcamp. This project is a complete rebuild and enhancement of [Bandmap](https://github.com/xxristoskk/bandmap), now featuring a React frontend and Django REST API backend.

**[Live Demo](https://vibe-atlas-57un.onrender.com/)**

## Features

- 🌍 Interactive map-based music discovery
- 🎵 Integration with Last.fm and Spotify APIs
- 🎨 Modern UI with Shadcn components and Tailwind CSS
- 🔍 Geospatial search with dynamic radius expansion
- 🏷️ Multi-genre filtering
- 📱 Responsive design for all devices
- 🌓 Dark mode support

## Tech Stack

### Frontend
- React 19 with Vite
- Mapbox GL for interactive maps
- Shadcn UI components
- Tailwind CSS for styling
- React Router for navigation

### Backend
- Django REST Framework
- MongoDB for geospatial data
- JWT authentication
- Gunicorn + Whitenoise for serving

### APIs
- Last.fm (artist info & images)
- Spotify (music previews)
- Bandcamp (artist data)
- Mapbox (mapping)

## Local Development Setup

### Prerequisites
- Node.js (v18+)
- Python (v3.9+)
- MongoDB
- Git

### Backend Setup
```bash
# Clone the repository
git clone <your-repo-url>
cd vibe-atlas

# Create and activate virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: .\venv\Scripts\activate

# Install dependencies
cd backend
pip install -r requirements.txt

# Set up environment variables
cp .env.example .env
# Edit .env with your API keys and settings

# Run migrations
python manage.py migrate

# Start the development server
python manage.py runserver
```

### Frontend Setup
```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your API keys

# Start the development server
npm run dev
```

## Environment Variables

### Backend (.env)
- `DJANGO_SECRET`: Django secret key
- `DEBUG`: Set to 'true' for development
- `MONGO_PW`: MongoDB password
- `MONGO_USERS`: MongoDB username
- `SPOTIFY_CLIENT_ID`: Spotify API client ID
- `SPOTIFY_CLIENT_SECRET`: Spotify API client secret
- `LASTFM_TOKEN`: Last.fm API token

### Frontend (.env)
- `VITE_MAPBOX_TOKEN`: Mapbox API token
- `VITE_LASTFM_TOKEN`: Last.fm API token

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Original [Bandmap](https://github.com/xxristoskk/bandmap) project for inspiration
- Bandcamp for supporting independent artists
- Last.fm and Spotify for their comprehensive APIs