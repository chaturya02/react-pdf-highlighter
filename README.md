# Maersk PDF Analyzer

A React.js web application that displays the Maersk Q2 2025 Interim Report PDF alongside an interactive analysis panel. Users can click on reference numbers in the analysis text to highlight corresponding sections in the PDF.

## Features

- **Split-screen layout**: PDF viewer on the left, analysis panel on the right
- **Interactive highlighting**: Click reference numbers like [3] to highlight text in the PDF
- **Responsive design**: Clean, professional interface matching Maersk's brand colors
- **Real-time highlighting**: Smooth animations when highlighting text sections

## Technology Stack

- **React.js** - Frontend framework
- **react-pdf** - PDF rendering and interaction
- **CSS3** - Styling and animations
- **HTML5** - Structure and semantics

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd maersk-pdf-analyzer
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:3000`

## Usage

1. The application loads with the Maersk Q2 2025 Interim Report displayed on the left side
2. Read the analysis text on the right side panel
3. Click on any reference number (e.g., [1], [2], [3]) to highlight the corresponding text in the PDF
4. The PDF will automatically scroll to and highlight the relevant section

## Project Structure

```
src/
├── components/
│   ├── PDFViewer.js       # PDF display and highlighting logic
│   └── AnalysisPanel.js   # Analysis text with clickable references
├── App.js                 # Main application component
├── App.css               # Global styles and layout
└── index.js              # Application entry point
```

## Key Features Implemented

- **PDF Text Simulation**: Displays key sections of the Maersk report
- **Reference Linking**: Maps analysis references to specific PDF content
- **Visual Feedback**: Yellow highlighting with smooth animations
- **Professional Styling**: Maersk brand colors and clean typography

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request
