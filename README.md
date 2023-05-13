<div id="header">
  <h1> Antranna Recipes</h1>
  <p> Antranna Recipes is a responsive webpage that offers an extensive collection of dishes, and with just a search of the main ingredient, you can find new recipes, enjoying a unique culinary experience every time. </p>
  <span font-size="1.55rem"><strong>Live Site:</strong></span><span> https://antrannarecipes.netlify.app/</span>
</div>
<div align="center">&nbsp;
   <img src="https://github.com/gachanjaprince/antranna-recipes/assets/129261938/9881d31a-d517-4cf4-9fb0-b77e2344a019" alt="A gif capturing the screen as the user searches for 'Beef' on the website, before scrolling down, exploring the page." width="67.5%"/>
</div>
<div>
  <h2>How it's made:</h2>
  <div align="center">
    <img src="https://github.com/devicons/devicon/blob/master/icons/html5/html5-original.svg" title="HTML5" alt="HTML" width="40" height="40"/>&nbsp;
    <img src="https://github.com/devicons/devicon/blob/master/icons/css3/css3-plain-wordmark.svg"  title="CSS3" alt="CSS" width="40" height="40"/>&nbsp;
    <img src="https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-original.svg" title="JavaScript" alt="JavaScript" width="40" height="40"/>&nbsp;
  </div>
  <p>In developing and implementing this sleek and user-friendly website, I utilized HTML5, CSS3, and Javascript. To ensure site responsiveness using CSS3, I used media queries that allow for adjustment to various screen sizes, as well as transitions that encourage user engagement. The behaviour and interactivity, especially in communicating with the external Spoonacular API, is executed using Javascript.</p>
  <p>To begin with, an event listener placed on the search button, uses the search input as the query parameter, as it sends a request to the API in response to a click. After parsing the returned JSON file to a Javascript object, I retrieved the title, image, ingredients, and recipe steps of the main result, displaying them on the main section of the website. Titles and images of more related recipes, also obtained from the returned object, are displayed right below the main section. To further encourage user participation, these related recipes also contain listeners for clicks, that would display the target recipe on the main section upon request.</p>
</div>
<div>
  <h2>Lessons Learned:</h2>
  <p><strong>Analyzing API documentation</strong> - In my search for the most suitable API, I came across different interfaces and documentation that challenged me to improve my ability to review and understand their specific capabilities, limitations, and requirements.</p>&nbsp;
  <p><strong>Data parsing and manipulation</strong> - Conversion of the returned JSON file, in conjunction with the retrieval of specific data/information from the Javascript, provided an opportunity to continue sharpening my expertise in manipulating data.</p>&nbsp;
</div>
