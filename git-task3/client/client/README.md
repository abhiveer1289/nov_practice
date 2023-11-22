Task 3
Create your own webpage by using the React components below:

*Navbar

*Sidebar:

*Search bar

Cards with any kind of information related to your webpage, one image, and some content need to be on every card (a minimum of 4).

Piecharts, which represents any kind of information related to your webpage (a minimum of 4).

Table with a minimum of 5 columns and 4 rows

Form (Date and Day selection, Dropdown, Check boxes (min of 3), Radio buttons (min of 2), Text boxes (min of 2), Button)

Footer (content related to the webpage you chose)

You should be able to create app pages that show smooth, responsive behavior that adapts to screen size as well as device type. The webpage theme and design are your choice.

Based on my choice of universities in the USA, now a days most of the Indian students are to study in the USA when compared to the other counties. Based on this, I'm going to analyze the top most universities in the USA in which the Indians are doing their master's.

Frontend
  1.The frontend was developed by react.js.

  2. The project is divided into several components, each with its specific functionality and styling. Here, we provide.
 
     documentation for the main components and their associated CSS files.

             |-- src/
             |   |-- components/
             |   |   |-- Navbar
             |   |   |   |-- Navbar.js
             |   |   |   |-- Navbar.css
             |   |   |-- Sidebar
             |   |   |   |-- Sidebar.js
             |   |   |   |-- Sidebar.css
             |   |   |-- Cards
             |   |   |   |-- Cards.js
             |   |   |   |-- Cards.css
             |   |   |   |-- Card.js
             |   |   |   |-- Card.css
             |   |   |-- Footer
             |   |   |   |-- Footer.js
             |   |   |   |-- Footer.css
             |   |   |-- Table
             |   |   |   |-- Table.js
             |   |   |   |-- Table.css
             |   |   |-- Charts
             |   |   |   |-- Charts.js
             |   |   |   |-- Charts.css
             |   |   |-- Form
             |   |   |   |-- Form.js
             |   |   |   |-- Form.css
             |   |-- images/
             |   |   |   |-- university1.jpg
             |   |   |   |-- university2.jpg
             |   |   |   |-- university3.jpg
             |   |   |   |-- university4.jpg
             |   |   |   |-- usa.jpg
             |
             |   |-- App.js
components
Navbar Component (Navbar.js)

The Navbar component displays the application title, "Universities in the USA," and the search bar. Based on the above requirement, I add the search bar to the Navbar itself.
Navbar.css

The Navbar CSS file styles the Header component, specifying font size, background colors, display, padding, box-sizing, height, and text colors for its three sections. It also incorporates a responsive design for smaller screens.
I added a responsive design that adjusts its layout to fit various screen sizes.
Sidebar Component (Sidebar.js)

The Sidebar component displays the application cards, tables,Form and charts. When I click these in the Sidebar, it renders to the respective pages.
Sidebar.css

The sidebar. The CSS class defines styling for a fixed-position sidebar on the left side of the page.
I added responsive design, which adjusts its layout to fit various screen sizes.
Card components(Card.js)

The card components contain the three props (title, imageSrc, and content) and render a card with an image, title, and content. The styling is applied through an associated CSS file, Card.css.
Cards components(Cards.js)

The Cards component renders multiple Card components, each displaying university information from the cardData array. The map function iterates over the array, rendering a card component for each item.
 Cards.css

This CSS code is designed for styling a card-based layout.
Footer components(Footer.js)

Footer component displaying a copyright message and contact number.
Footer.css

CSS styles create a fixed footer at the page bottom with a #2c3e50 background, white text, centered content, 10px padding, full width. Paragraph has zero margin.
I added a responsive design that adjusts its layout to fit various screen sizes.
STARTING POINT PIC:

![Screenshot 2023-11-20 163314](https://github.com/RCTS-K-Hub/Nov_Team_09/assets/116912826/8a6cd60c-bc9e-4b1f-8940-b59cbd308238)


Charts components(Charts.js)

Charts React component displays four pie charts (MS programs, geographic distribution, employment sectors, gender distribution) using 'react-chartjs-2' library.
Charts.css

![Screenshot 2023-11-20 163341](https://github.com/RCTS-K-Hub/Nov_Team_09/assets/116912826/7a4165e0-47b3-4c65-8e97-6e229e1cf062)


The CSS code uses Flexbox to center a container vertically and horizontally. It styles pie charts with specific dimensions, margins, and horizontal centering.


Table components(Table.js)

The code defines a React component, UniversityTable, displaying a table of universities with columns for name, location, ranking, and popular MS programs.
Table.css

The CSS code styles a table container with top and left margin. The table has a specified width, collapsed borders, and styled cells (header and data) with padding, borders, and text alignment. The header has a blue background with white text.
PIE CHART PICTURE:


![Screenshot 2023-11-20 163357](https://github.com/RCTS-K-Hub/Nov_Team_09/assets/116912826/7bf32565-4910-4f84-8dc3-dbf7ea5ea72c)


Form components(Form.js)

The code is a React form component with stateful input fields, checkboxes, and dropdowns. It includes form validation and logs data on submission.
Form.css

![Screenshot 2023-11-20 163429](https://github.com/RCTS-K-Hub/Nov_Team_09/assets/116912826/c75cf0c1-cd9d-4ddf-866f-8a46b3c60f62)


The CSS code enhances form appearance with rounded borders, a blue color scheme, and improved spacing. It features adjusted label styles, increased input padding, and a prominent button with a hover effect.
FORM PICTURE:



conclusion:
This project uses React to create a user-friendly university data system. It includes forms for input and dynamic charts to show program distribution, locations, employment sectors, and gender ratios. The interface looks good with organized components like Form and PieCharts, and it works well on different devices for an accessible and user-friendly experience.
