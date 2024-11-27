# Web Page Saver Chrome Extension

A simple Chrome extension that allows users to save a full webpage as a single `.html` file or as a PDF, while maintaining its layout and responsiveness.

## Features
- **Save Web Page as HTML**: Saves the entire webpage as a single `.html` file, including all resources (images, styles, scripts).
- **Save Web Page as PDF**: Generates a PDF of the entire webpage, keeping its layout and responsiveness intact.
- **Easy-to-use Interface**: A clean and modern interface for easy interaction with a couple of buttons.

## Installation

### Step 1: Download the Extension
1. Clone or download this repository to your computer.

### Step 2: Load the Extension in Chrome
1. Open Chrome and go to `chrome://extensions/`.
2. Enable **Developer Mode** by toggling the switch in the top right corner.
3. Click on **Load unpacked**.
4. Select the folder where you saved the extension files.

### Step 3: Use the Extension
1. After installation, the extension icon will appear in the Chrome toolbar.
2. To save a webpage:
   - Click the extension icon in the toolbar.
   - Choose whether you want to save the page as an HTML file or as a PDF.
   - The file will be saved to your default download location.

## Files Included
- `manifest.json`: Contains the extension's metadata and permissions.
- `popup.html`: The HTML file for the extension's popup interface.
- `popup.js`: The JavaScript file that handles saving the webpage as HTML or PDF.
- `style.css`: Styles for the popup interface.
- `icon.png`: The extension icon (you can customize this as per your design preferences).

## How It Works
- When the user clicks on the "Save as HTML" button, the extension grabs the entire HTML content of the page (including embedded resources) and saves it as a `.html` file.
- The "Save as PDF" button uses the browser's built-in print functionality to convert the page into a PDF.

## Contributing

Feel free to fork the repository and submit issues or pull requests. Contributions are always welcome!

## License

This project is open source and available under the [MIT License](LICENSE).
