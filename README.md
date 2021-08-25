# Cookie Stand
 By Skye McCullough

 ## About

 For this project, I create a mock website for Pat's Salmon Cookies. In the project, I utilize the skills I have learned in my Code Collective curriculum this far using HTML for the structure, CSS for the styling, and JavaScript for interactive features. The requirements I am expected to meet are listed below.

 ## Requirements 
<!-- Lab 6: Get Started On Salmon Cookies Project -->
### Sales Data
Within your javascript file (example: app.js), create separate JS object literals for each shop location that outputs the following to the sales.html file:

1. Stores the min/max hourly customers, and the average cookies per customer, in object properties
2. Uses a method of that object to generate a random number of customers per hour. Objects/Math/random
3. Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
4. Store the results for each location in a separate array… perhaps as a property of the object representing that location
5. Display the values of each array as unordered lists in the browser
6. Calculating the sum of these hourly totals; your output for each location should look like this:

Seattle

6am: 16 cookies
7am: 20 cookies
8am: 35 cookies
9am: 48 cookies
10am: 56 cookies
11am: 77 cookies
12pm: 93 cookies
1pm: 144 cookies
2pm: 119 cookies
3pm: 84 cookies
4pm: 61 cookies
5pm: 23 cookies
6pm: 42 cookies
7pm: 57 cookies
Total: 875 cookies
Display the lists on sales.html. We will be adding features to this application and working with its layout in the upcoming labs.

Here are the starting numbers that you’ll need to build these objects:

Location	Min / Cust	Max / Cust	Avg Cookie / Sale
Seattle	23	65	6.3
Tokyo	3	24	1.2
Dubai	11	38	3.7
Paris	20	38	2.3
Lima	2	16	4.6
These numbers are simply Pat’s estimates for now, but eventually, once there has been some history collected that provides more accurate numbers, we’ll want the ability to update these numbers for each location, and to add/remove locations. But we’ll not build all of that today. Make sure to make each location is its own JavaScript object.

### Home Page
Read below for the requirements of your index.html page.

Note: Everything listed below is a stretch goal for lab 06. All of these requirements will be required for the final submission of the project, so start implementing these early.

In addition to the provided picture of the fish, your index.html file should contain:

1. A custom Google font for highlights
2. A specified standard sans-serif web font for data (such as Arial, Verdana, or Helvetica)
3. A specified standard serif web font for text (such as Georgia, Times, etc.)
4. Specified different font colors for all three font usages
5. A background color for the default page background (make sure font colors have good contrast and are readable on this background)
6. A different background color for elements such boxes and tables (so make sure the font colors contrast against this well, too!)
7. Anything else you’d like to add related to style. But remember: simplicity, clarity, and consistency are good things in design.
8. Be thoughtful about layout and overall organization of the page.
9. Include all of the typical stuff that you’ll find on the home page of a business: locations, hours, contact information, some text about how awesome the business is, etc. Be creative, and again, think about what is meaningful to a typical end user.
### Developer Style Guide
In addition to the requirements listed above, please ensure that your project also contains the following according to our style guide:


1. Within your local version of your repo, add your .gitignore and .eslintrc.json.

2. While working within your non-main branch, conduct regular commits within git.

3. All properties/values and methods should be correctly constructed and given meaningful names.

4. Functions and methods should follow the single-responsibility principle.

5. Use template literals in your JS logic to render the stores as lists on the sales page
<!-- Lab 7: Add a constructor function to the Cookie Stand project -->
### Instructions
1. Replace all of your object literals for the salmon cookie stand with a single constructor function that, when called with the ‘new’ keyword, it creates a new instance.

2. Replace the lists of your data for each store and build a single table of data instead. It should look similar to the following:

3. Display each stores data in a table format similar to what is below. Break each column by the hour and complete each row with a “Daily Location Total”.

4. Each cookie stand location should have a separate render() method that creates and appends its row to the table
5. The header row and footer row are each created in their own stand-alone function
NOTE: Please use a header cell for both the header row ( containing store hours ), and the footer row ( hourly and grand totals across all stores ).

## Developer Style Guide
In addition to the requirements listed above, please ensure that your project also contains the following according to our style guide:

1. Good use of a constructor function; style and syntax are correctly implemented
2. Duplicate code has been removed and DRY principles are evident
3. Regular commit history. Basically, every time you get something to work, you should do a commit. But you only need to push every couple of hours or so, tops.
<!-- Lab 8b: Work on styling the Cookie Stand project -->
Instructions
Continue working on the functionality of your sales.html page if you do not have it working 100% yet, including the row of totals across the bottom.

Pat has provided you 7 additional images that they would like to see on the home page of the site. These images are located in your daily class GitHub repo: class-08/lab-b/assets/.

Your public-facing index.html page should include the following:

1. locations with addresses,
2. hours open
3. contact information
4. Anything else you feel necessary.
5. A link to your sales.html page
6. Be sure to also include a link to your index.html page on your sales.html pages as well.
Feel free to make this information up. Get creative, have fun, but remember to be professional.

<!-- Lab 9: Add a form the Cookie Stand project -->

### Instructions
Today you will be adding a form to your existing cookie stand project so that you can add new locations to the table by simply inputting their information with the form.

1. Create a new HTML form to accept the information for a new cookie stand. Be sure to utulize the <fieldset> tag to help you style it.

2. Upon submission of the HTML form, create an event handler that creates a new instance of a cookie stand that appends to the table upon form submission.

3. Use the constructor function as your guide to determine what input fields your form needs (hint: also consider what is passed in when creating instances!).

4. If not complete from lab 7, write a stand-alone function to generate a footer row which will display the total number of cookies sold per hour for all locations. When a new store is added using your form, the totals in the footer row should update to include these new sales numbers.

5. Anywhere you have repeated chunks of code, apply some DRY principles. Generally, once some chunk of code is appearing for a 3rd time or so, that’s when you want to consider refactoring.

6. Validate your html through HTML5 validation.

7. Confirm that your code is following the single responsibility rule. Each function should only do one thing, with the capability to break it out further as needed.
<!-- Lab 10b: Finish the Cookie Stand project -->

### Instructions
Finish up your Salmon Cookies project. Ensure that you meet all minimum functionality described in prior labs as well as successfully implemented all of the requirements for the index.html file listed in Lab 06. 