# Style-Ease

A modern web application for clothing and fashion management built with React and Vite.

## 🚀 Features

- Modern and responsive UI using Bootstrap 5
- React Router for seamless navigation
- Supabase integration for backend services
- Lucide React icons for beautiful UI elements
- ESLint configuration for code quality

## 🛠️ Tech Stack

- React 19
- Vite 6
- Bootstrap 5
- Supabase
- React Router DOM
- Axios
- Lucide React

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
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

To start the development server:

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
