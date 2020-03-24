# practice-vue-js

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# Homework
## Homework0
Install WebStorm IDE with license
Initialize an empty project and perform the next points via IDE
Create a file ‘tf1.html’ in root directory
Create a folder ‘td1’ in root directory
Create a file ‘tf2.html’ in ‘td1’ directory and fill it with ‘Hello, world!’ text
Perform global search by string ‘hello’ in project via hotkey (ctrl + shift + f)
Perform global search by file name ‘tf’ in project (ctrl + shift + n)

## Homework1
Implement a HTML page. Choose one of the following topics:
- TOP 5 programming languages I would like to learn
- TOP 5 countries I would like to visit

Requirements:
- ‘Homework 1’ is title of the page
- A page contains different ‘div’ sections. Each one starts with corresponding heading and ends with ‘hr’
- Section 1. Copy this homework’s task and represent it as italic text. Preserve structure (lists) and line breaks
- Section 2. Enumerate your items in a list. Name of each item should be a link to an article in the internet. A link should open in a new tab
- Section 3. Pick one of items and provide some information for it, in 2-3 sentences in a paragraph. Highlight 3 important words/phrases with special color, ‘underline’ and ‘bold’ styles, accordingly. Put the paragraph in a new ‘div’ with maximum width 300px (set this style via CSS)
- Section 4. Add button [Name](should output your first name in console).
Add 2 input fields with placeholders ‘a’ and ‘b’ accordingly.
Add button [Hypotenuse](should calculate hypotenuse from values, provided in the inputs and output result in an  ‘alert’ window). 
- Section 5. Pick a palette, make picture of it, put it in the same directory as the HTML file and display it in this section of the page. Add ‘Palette’ title to the image
Style your page (including background color and text color) with colors of palette you’ve picked

## Homework3
1. Create branch ‘<username>-hw3’. Make the following changes:
    1. Update 'README.md' with task of this homework
    2. Implement a HTML page with table of TOP 5 favorite flowers. Columns: 
        - № (just an index number from 1 to 5)
        - Name
        - Picture (store pictures locally, - create a folder called ‘assets’)
        - Description (a short description of the flower)
    3. Make a ‘zebra’ view of the table
    4. Add a CSS style that changes background color of a table row’s on hover
    5. Use palette when picking colors
2. Create pull request, where source branch is ‘<username>-hw3’, and target branch is ‘master’ 
3. Follow the reviewer's suggestions (if any) until the branch is merged

## Homework4
Create branch ‘<username>-hw4’. Create ‘public/<username>/homework4.html’ and make the following changes:
Update 'README.md' with task of this homework
Represent data of all flowers from previous homework as combination of data types (array, object, etc), assign it to a variable and print in console (no need to format output, - just print the value as it is)
Create a function ‘negate’ that receives a boolean argument, negates it and returns the result
Create a function ‘printTitle(adjective, characterName)’, which prints the following text in console: ‘<adjective> adventures of <name of character>.’
Create a function ‘buildUserModel(name, age, gender, eyeColor, hobbies)’, that returns an object that contains all of data passed as arguments
Create a function ‘compare(a, b)’ that receives 2 numeric values and prints the following (replace the placeholders with actual values, accordingly):
‘<a> > <b>’ in case when the 1st argument is bigger than the 2nd one
‘<b> < <a>’ in case when the 2nd argument is bigger than the 1st one
‘<a> = <b>’ in case when the numbers are equal
Create pull request and follow the reviewer's suggestions (if any) until the branch is merged
