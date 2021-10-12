# D3 Event Handling

This repository is your starting point for hw-05. Assignment details and instructions are below. 

Link to your GitHub pages website: `[insert your *clickable* hyperlink here]`

# Aim of the assignment

The purpose of this assignment is to practice event handling with D3. This is important for managing interactions in your visualizations, and will prepare you for your upcoming brushing and linking assignment.


# Background
Please look through **all** the materials below before starting. This will ensure you understand the setup instructions; how to run, organize, and submit your code; and where to look for additional resources.

## Setup

You should do all your edits locally after cloning this repository. Commit major versions to your git repository.

1. Clone this repository to your local machine.
   - In your terminal / command prompt `CD` to where you want this the folder for this activity to be. Then run `git clone <YOUR_REPO_URL>`

1. In order to read data from csv files, you will need to use a python simple server. To do that follow these steps:
   - `CD` or open a terminal / command prompt window into the folder you cloned above.
   - Start a python simple server from that folder with one of these commands (depending on how you set python up on your machine): `python -m http.server`, `python3 -m http.server`, or `py -m http.server`. 
   - If you are using python 2 you will need to use `python -m SimpleHTTPServer` instead, but please switch to python 3 as [Python 2 was sunset on 2020-01-01](https://www.python.org/doc/sunset-python-2/).
   - After running the command, wait for the output: `Serving HTTP on 0.0.0.0 port 8000 (http://0.0.0.0:8000/)`.
   - Open your web browser (Firefox or Chrome) and navigate to the URL: http://localhost:8000. This is where you will see your code rendered. 

## Update hyperlinks

1. Edit near the top of this `README.md` file to include a clickable hyperlink to the GitHub pages website for your repo. Replace `` `[insert your *clickable* hyperlink here]` `` with your clickable URL. 

1. In `index.html` update the GitHub repo URL with the URL of your repository. It is in the span with `id='forkongithub'`.

## Organization

Here is an overview of the files and folders provided in your repo.

### Root Files
* `README.md` is this explanatory file.

* `index.html` contains the main website content.

* `style.css` contains the CSS.

* `LICENCE` is the source code license for the template. You can add your name or leave it as is.

### Folders

* `favicons` contains the favicons for the web page. You shouldn't change anything here.

* `.github` contains [GitHub Actions](https://github.com/features/actions) ([docs](https://docs.github.com/en/actions)) which will automatically validate your HTML, CSS, and hyperlinks when you push (see the [**validation last step** below](#validated)). **Do not edit files here** except to create new `.yml` files for any additional actions you choose to add (you are not required to make any).

* `img` contains a descriptive image for the `README.md`.

* `js` will contain all JavaScript files you write. For example, `main.js`, where you will fill in your code. 

* `lib` will contain any JavaScript library you use. It currently includes D3. To ensure long-term survivability, **use the included D3 here rather than linking to [d3js.org](https://d3js.org) or some other CDN.** Likewise, put your other libraries here rather than loading them from elsewhere.

## Resources

These are a few places to start learning about event handling. You are not limited to these resources, please do additional research on your own if nescessary.

* What is a JavaScript Event?: [https://www.w3schools.com/js/js_events.asp](https://www.w3schools.com/js/js_events.asp) 

* Defining DOM: [https://www.w3schools.com/js/js_htmldom.asp](https://www.w3schools.com/js/js_htmldom.asp)

* What are HTML DOM Events?: [https://www.w3schools.com/js/js_htmldom_events.asp](https://www.w3schools.com/js/js_htmldom_events.asp) 

* What is an Event Listenter?: [https://www.w3schools.com/js/js_htmldom_eventlistener.asp](https://www.w3schools.com/js/js_htmldom_eventlistener.asp)

* Event Listeners via D3: Interactive Data Visualization for the Web, Scott Murray, Chapter 9 - Interaction via Event Listeners (book available for free through Northeastern Library)

* Event Listeners via D3: Interactive Data Visualization for the Web, Scott Murray, Chapter 10 (book available for free through Northeastern Library)

* Brushing with D3: [https://www.d3-graph-gallery.com/graph/interactivity_brush.html](https://www.d3-graph-gallery.com/graph/interactivity_brush.html)

* D3 Drag Example: [https://www.d3-graph-gallery.com/graph/circularpacking_drag.html](https://www.d3-graph-gallery.com/graph/circularpacking_drag.html)

# Instructions 
The starter code you received creates a yellow square and blue circle. Using that as a starting point, please implement the following custom events. 

## Click Event
Add functionality such that when the square is clicked, the circle changes color. You many set this up such that your circle alternates between 2 colors (Ex. 1st click on square --> circle changes to green, 2nd click on square --> circle changes to blue, 3rd click on square --> circle changes to green, etc.), or such that the circle is set to a new random color each time the suqare is clicked (Ex. 1st click on square --> circle changes to green, 2nd click on square --> circle changes to pink, 3rd click on square --> circle changes to red, etc.).    

## Double-Click Event
Add functionality such that when the circle is double clicked, the square and circle change color. Similar to above, you may set this up such that the circle and square alternated between two colors with every double click, or such that each double click changes both to new random colors. 

## Hover Event
Add functionality such that when the mouse hovers over either shape a thick border is added. When the mouse leaves the shape the thick border should disappear.    

## Drag 
Make both shapes draggable to any spot within the svg defined on line 14 of the starter code (if the user drags a shape outside of the bounding svg, it's okay for it to disappear). If one shape is dragged and dropped to the same area as the other it should appear on top of the shape that was not dragged. (Ex. If I drag the circle to the square and drop it, the circle should be layered on top of the square. If I drag the square to the circle and drop it, the square should be layered on top of the circle.) 

# Academic integrity
You are welcome to use D3 tutorials or resources as a starting point for your code.
However, **you must cite and reference the resources or sample code you use and explain how you use them**.
***This includes anything from [bl.ocks.org](https://bl.ocks.org/), [Observable](https://observablehq.com/@d3/gallery), or [Stack Overflow](https://stackoverflow.com/)!***
Failure to properly cite and attribute code is a breach of academic integrity.

Additionally, you should under no circumstances copy a classmate's code. You are welcome to ask fellow classmates and students for help and discuss the assignment, but **your submission should be your own work**.
See Canvas for more detail on our academic integrity policy and expectations.

# Submission

1. Ensure you updated (1) the GitHub Pages URL at the top of this `README.md` file and (2) the GitHub repository URL in `index.html` in the span with `id='forkongithub'`.

1. Commit all your local files and push them to the remote repository on GitHub which was generated by GitHub Classroom. We will grade based on what is visible on the GitHub Page.

1. Ensure all functionality required above is present in your GitHub page.

1. Create a PDF that contains the URL of your **GitHub Classroom-generated repository** and **submit it on gradescope via hw-05**. Do not submit a link to a personal repository; your repo must be within our class GitHub organization.