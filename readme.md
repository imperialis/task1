# Express Weather App

This is a Node.js application that uses Express.js to create an API endpoint. The endpoint greets the user, provides their IP address and location, and includes the current temperature in their city. The app fetches location data using the IPGeolocation API and weather data using the WeatherAPI.

## Features

- Retrieves the user's IP address and location.
- Fetches current weather data for the user's location.
- Returns a personalized greeting with the temperature in the user's city.

## Technologies Used

- Node.js
- Express.js
- Axios
- dotenv

## Getting Started

These instructions will help you set up and deploy the project on your local machine and Vercel.

### Prerequisites

- Node.js (v12 or higher)
- npm (v6 or higher)
- Vercel account

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/express-weather-app.git
    cd express-weather-app
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add your API keys:
    ```env
    WEATHER_API_KEY=your_weather_api_key_here
    IP_GEOLOCATION_API_KEY=your_ipgeolocation_api_key_here
    ```

### Running the Application

1. Start the server:
    ```bash
    npm start
    ```

2. Open your browser or use a tool like `curl` or Postman to test the endpoint:
    ```bash
    curl "http://localhost:3000/api/hello?visitor_name=Mark"
    ```

### Deployment

To deploy the application on Vercel, follow these steps:

1. Install Vercel CLI:
    ```bash
    npm install -g vercel
    ```

2. Log in to Vercel:
    ```bash
    vercel login
    ```

3. Initialize your project:
    ```bash
    vercel init
    ```

4. Add environment variables on Vercel:

    - Go to your project dashboard on Vercel.
    - Navigate to the "Settings" tab.
    - Scroll down to the "Environment Variables" section.
    - Add `WEATHER_API_KEY` and `IP_GEOLOCATION_API_KEY` with their respective values.

5. Deploy the project:
    ```bash
    vercel
    ```

6. After deployment, test the endpoint using the URL provided by Vercel:
    ```bash
    curl "https://<your-vercel-deployment-url>/api/hello?visitor_name=Mark"
    ```

## Example Response

Here is an example response from the API endpoint:

```json
{
  "client_ip": "192.168.1.1",
  "location": "New York",
  "greeting": "Hello, Mark!, the temperature is 11 degrees Celsius in New York"
}
