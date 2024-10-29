# Warehouse Management Admin Panel

This project is a Warehouse Management Admin Panel, built to simulate an admin interface for managing goods. It allows for user authentication, efficient data handling, and provides customized notification messages. The project is developed with React, Vite, and React Query, and is connected to a backend server running on a live domain.

## Features

- **User Authentication**: Includes secure login and registration using JWTs stored as cookies.
- **Item Management**: Create, update, delete, and manage items in the warehouse.
- **Search Functionality**: Search for items by name within the warehouse inventory.
- **Pagination**: Seamless pagination for browsing through large lists of items.
- **Error Handling**: Specific error messages for cases like duplicate usernames, invalid credentials, and form validation errors.
- **Optimized API Requests**: Configured with React Query for efficient data management, retries set to zero for API calls to ensure stability.
- **Notifications**: Real-time feedback for actions such as successful login, registration, and form validation using React-Hot-Toast.
- **Protected Routes**: Smart route management to ensure authenticated access to protected pages.

## Technologies Used

- **React 18**: Frontend framework
- **Vite 5**: Fast build tool
- **React Query**: Data fetching and caching
- **Axios**: HTTP client for API requests
- **react-hot-toast**: User notification system
- **CSS Modules**: Scoped and modular CSS styling
- **Persian Locale Support**: Handling Persian dates and numbers
- **FormData**: For handling file uploads in forms
- **Backend**: API hosted on a live server

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/matador7495/WareHouse-App.git
   cd warehouse-admin-panel
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your environment variables:

   ```env
   VITE_BASE_URL=https://your-api-base-url.com/
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Usage

The admin panel requires user authentication. Upon successful login, users are redirected to the Admin panel. Access to pages is controlled by SmartRoute components, which check the authentication status via cookies and allow or redirect as necessary.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
