# Potential steps
**Scenario:** Taking 1 html and 1 css file written in standard css and modify them so they use utility classes

## Overview
1. Take css file and map values to utility classes
2. Create new css file
3. Map values onto a change_map to understand what elements need to have which utility classes added to them
4. Create new html file


## Detailed steps

### Creating css_map.json file
1. Look at a css file `./src/styles.scc`
2. look at a css attribute within a class
3. Generate class name
3. Check class name exists in map.json

    **If does not exist**

    Create an object with generated name
    add attribute to value
    add selector to src selector

    **If exists**

    Find the right object 
    Append class to the end of srcSelectors array

### Creating `./build/styles.css` file (utility css file)
1. Use css_map to generate utility classes in css file. There is probably a package that could help with this.
2. Make each class have an "!important"


### Creating change_map.json
1. Loop through each object in css_map
2. Loop through the array of css selector
3. Check if selector exists in change_map.json

    **If selector does not exist in change map**
        Make new object with the selector name
        Add utility class name to newClasses

    **If selector does exist in change map**
        Find objector with selector name
        Append utility class to the end of newClasses



### Creating `build/index.html` (building html page)
1. Loop through each object in change_map.json
2. Search HTML file for that selector
3. Check if it's a element selector or class name

    **if it's an element selector**
    add the classes in "newClasses" array

    **if it's a class**
    remove existing class or classes
    add the classes in "newClasses" array

4. Create new html file

