# Amdocs Talent Intelligence Hub

An enterprise-grade AI-powered skills and role matching platform designed to help HR, Workforce Planning, Talent Management, and Business Leaders identify the most suitable employees for newly created roles.

## Features

- 🚀 AI-powered semantic skill matching
- 📊 Skill recency scoring and timeline analysis
- 💼 Intelligent experience parsing and relevance calculation
- 📈 Executive-grade dashboard and analytics
- 📤 Multi-format export (Excel, CSV, PDF)
- 🔍 Explainable AI recommendations with evidence
- 🎯 User-controlled semantic expansion
- 📁 Employee data management (upload, append, replace, delete)

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite, Tailwind CSS
- **Backend**: Node.js, Express, TypeScript
- **AI**: Google Gemini API
- **Data Processing**: XLSX, CSV parsing

## Quick Start

### Prerequisites

- Node.js 18+
- Google Gemini API key

### Installation

1. Clone the repository
2. Install dependencies: `npm install`
3. Create `.env` file from `.env.example`
4. Start development: `npm run dev`

The application will run on `http://localhost:5173`

## Scoring Model

- **40%** Semantic Skill Match
- **25%** Skill Recency
- **20%** Relevant Experience
- **10%** Role/Career Relevance
- **5%** Preferred and Ideal Skills

## Project Structure

- `/server` - Backend API
- `/src` - Frontend React application
- `/public` - Static assets
