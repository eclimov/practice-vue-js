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
- Section 4. Add button \[Name] (should output your first name in console).
Add 2 input fields with placeholders ‘a’ and ‘b’ accordingly.
Add button [Hypotenuse](should calculate hypotenuse from values, provided in the inputs and output result in an  ‘alert’ window). 
- Section 5. Pick a palette, make picture of it, put it in the same directory as the HTML file and display it in this section of the page. Add ‘Palette’ title to the image
Style your page (including background color and text color) with colors of palette you’ve picked

## Practice2  
1. Clone project  
\<link to some repository in Github>  
2. Create branch ‘\<username>-pr2’. Make the following changes:  
a. Update 'README.md' with task of homework 1  
b. Create folder \<username> in ‘/public’ directory  
c. Create some test HTML page  
3. Create pull request, where source branch is ‘\<username>-pr2’, and target branch is ‘master’ 


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

## Practice3
1. Create a branch ‘\<username>-pr3’  
2. Merge previous homework into a single ‘index.html’ file (split the screen into 2 parts, using CSS Flexbox or Grid system)  
3. Create pull request to ‘master’ branch  

## Homework 4  
1. Create branch ‘\<username>-hw4’. Create ‘public/\<username>/homework4.html’ and make the following changes:  
    a. Update 'README.md' with task of this homework  
    b. Represent data of all flowers from previous homework as combination of data types (array, object, etc), assign it to a variable and print in console (no need to format output, - just print the value as it is)  
    c. Create a function ‘negate’ that receives a boolean argument, negates it and returns the result  
    d. Create a function ‘printTitle(adjective, characterName)’, which prints the following text in console: ‘<adjective> adventures of <name of character>.’  
    e. Create a function ‘buildUserModel(name, age, gender, eyeColor, hobbies)’, that returns an object that contains all of data passed as arguments  
    f. Create a function ‘compare(a, b)’ that receives 2 numeric values and prints the following (replace the placeholders with actual values, accordingly):  
        - ‘\<a> > \<b>’ in case when the 1st argument is bigger than the 2nd one  
        - ‘\<b> < \<a>’ in case when the 2nd argument is bigger than the 1st one  
        - ‘\<a> = \<b>’ in case when the numbers are equal  
2. Create pull request and follow the reviewer's suggestions (if any) until the branch is merged  

## Practice4-1
1. Create a function 'getDatetime' that receives 0 arguments and prints current date and time in console (try to find, how to get datetime in Javascript, in Google)  
2. Create a function 'getPowFive' that receives 1 argument (a numeric value), calculates the number to the power (степень) of 5 and prints the result in console (find in Google how to get power of number in Javascript).  
3. Create a function 'getSumAndDivide' that receives 2 arguments, divides their sum by the 2nd argument and prints the result in console.  
4. Create a function 'finalCalculations' that receives 4 arguments, calls 'getPowFive' function with the 1st argument passed, calls 'getSumAndDivide' with the 2nd and the 3rd arguments passed and prints square root of the 4th argument in console.  
5. Remove all other functions from the file, except the ones required by this task.  
6. Create a pull request with your implementation.  

## Practice4-2
1. In branch 'pr4-4-\<username>', in file 'public/\<username>/practice/\<username>4.html' remove all JS instructions except functions' definitions.  
2. Using known data types (numeric, string, boolean, object, array), represent in Javascript:  
     1.1. List of  
       a. your 4 favorite genres of stories  
       b. your 4 favorite subjects in school  
     1.2. Object (at least 10 properties: at least one Boolean, at least one Number, at least one String, at least one Array):  
       a. the best living room's design in your opinion  
       b. the most interesting fiction character in your opinion  
     1.3. Add one more  
       1.3.1. item to array from point 1.1. Output all items as a comma-separated list in console  
       1.3.2. attribute to object from point 1.2 in a separate instruction. Output result in console.  
3. Create a pull request with your implementation  
   
## Practice4-3
1. Create a new branch 'pr4-5-<username>' from 'master'  
2. Create a new HTML file: 'public/<username>/practice/<username>4-5.html', - it should be a copy of 'public/<username>/practice/<username>4.html' but without any JS instructions. Use this new file when implementing the next points.  
3. Create a function 'sayHello', that receives a 'name' parameter and prints a hello message to this user in console  
4. Create a function 'generateRandomInt' which generates random integer, prints 'Random integer: <your_generated_number>' in console and returns the number. Find in the Internet, how to generate a random integer in Javascript  
5. Create a function 'generateRandomIntInRange' that receives 'min' and 'max' arguments, generates a whole number in provided range (min - inclusve), prints 'Random integer in range <min> and <max>: <your_generated_number>' and returns the number. Find in the Internet, how to generate a random integer in range in Javascript  
6. Create a function 'isEven', which receives an argument and returns 'true' if received number is even (find in the Internet, how to check whether number is even in Javascript) and 'false' otherwise.  
Generate a random integer, using your 'generateRandomInt' function and, using your 'isEven' function, check whether generated number is even. If it is even, print '<your_generated_number> is even' in the console, and, if it is odd, print '<your_generated_number> is odd' in the console. Use template literals, when printing the message.  
7. Create a function 'getTheBestDistrict'. Within this function define a list of districts from Chisinau ('Ciocana', 'Rascani', 'Botanica', etc.). Make the function return a random element from the list.  
You may figure out yourself, how to pick random element in an array and reuse 'generateRandomIntInRange' function. Hint: when accessing an element by index(myArray[0], myArray[1], myArray[2], myArray[3], ...), you may put a variable in place of index.  
8. Get a value from 'getTheBestDistrict' function and assign it to a variable.  
Print hello to Sanda in the console, if it is 'Ciocana'.  
Print hello to Tanya in the console, if it is 'Rascani'.  
Print 'Who are you?' otherwise.  
Reuse 'sayHello' function when implementing this point. Use switch/case approach  

## Homework 5
1. Create branch ‘{username}-hw5’
2. Implement homeworks and practice tasks from previous lessons (everything described in README.md) in a “Vue.js” application. Acceptance criteria:
    - Every task’s implementation is accessible via separate route: 
‘/{username}/{taskName}’ - for homeworks and practical tasks 
    - List of links to all of your implementations is placed on a separate view (‘/{username}’), which can be accessed via navigation bar at the top of the page:
    - ‘Home’ view is not changed
3. Update “README.md” with this homework
4. Clean up ‘public’ directory (only ‘favicon.ico’ and ‘index.html’ files should remain)
5. Create a pull request to ‘master’
#####Deadline: 17.05.20 (inclusively)

## Homework 6
1. Create branch ‘<_username_>-_hw6_’. 
2. Using ‘_axios_’ and the public APIs, implement one of the following points:
- a. API: https://dog.ceo/dog-api/documentation/
- Section 1: show a random dog image when the page is loaded.
- Section 2: ‘_Breed’_ input field and [_Search_] button. The button is enabled only when the input is not empty. After the button is clicked, result images should be shown on the page.
- b. API: http://www.recipepuppy.com/about/api/
‘_Ingredients_’ and ‘_Query_’ input fields, [_Search_] button. The button is enabled only if at least one of the fields is not empty. After the button is clicked, all found recipes’ details (name, ingredients, thumbnail image if exists, etc.) should be shown on the page in a table.
Note: for simplicity purposes, ignore ‘pagination’ parameter. 
3.There should be loader that appears when API’s endpoint is called
4. The [_Search_] button should be disabled during loading
5. The implementation should be placed on route ‘/<username>/hw6’
6. Update ‘_README.md_’ with the task of this homework
7. Create pull request and follow the reviewer's suggestions (if any) until the branch is merged

