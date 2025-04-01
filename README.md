# Style-Ease

A modern web application for clothing and fashion management built with React and Vite.

## 🛠️ Tech Stack

- React 1
- Vite 6
- Bootstrap 5
- Supabase

## 📋 Prerequisites

Ensure you have the following installed:
- Node.js (v14 or higher)
- npm (v6 or higher)

## 🔧 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/Style-Ease.git
cd Style-Ease
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your environment variables:
```bash
cp .env.example .env
```

4. Update the `.env` file with your Supabase credentials and other required environment variables.

## 🚀 Running the Application

### Development Mode


```bash
npm run dev
```

The application will be available at `http://localhost:5173`




## 🗂️ Project Structure

```
Style-Ease/
├── src/
│   ├── assets/         # Static assets
│   ├── components/     # React components
│   ├── App.jsx         # Main application component
│   ├── main.jsx        # Application entry point
│   ├── supabase.js     # Supabase configuration
│   └── index.css       # Global styles
├── public/             # Public assets
├── index.html          # HTML template
├── vite.config.js      # Vite configuration
├── package.json        # Project dependencies
└── README.md          # Project documentation
