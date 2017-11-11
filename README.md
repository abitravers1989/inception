# Inception - A Look Into Your Customers' Mind

Data for those fascinated in the human mind.

Tech Test for DataSine. Focus was on how to make the table visually pleasing so the data was more accessible. Idea was to then implement functionality which made the table dynamic. 


# Usage

Open your terminal and type in the following commands:

`````
$ git clone https://github.com/abitravers1989/inception.git
$ npm install
$ npm start
`````

# Test

If you want to be bitterly disappointed open your terminal and type in:

``````
npm test
``````

IM SORRY! I am a massive fan of TDD especially when working with larger data sets! At the moment I really can't trust it is accessing the customer file and displaying it correctly. However I only had one day to teach myself CSS, SCSS, Bootstrap and React. This means I didn't have time to look into how to test in React. We were told to prioritise how the table looked so I focused on this.


# Improvements:

- Haven't managed to test more yet. Parts of the test are failing because I haven't been able to convert bootstrap components to React for everything yet.

- Font weight of table content should be less. It should not be bold but this font does not have that option. It should be larger as at the moment it is not easy to read.

- When the curser is hovered over the level in the trait row it should change color dependant on the level value.

- Icon to appear next to customers name depending on gender and age.

- Header box background color should fade into the background picture.

- Text in header box made easier to read, a brighter color.

- Tried to add icons to header of table but hard to get them inline / not a seperate box. Need further exploration of SCSS.

- Fix the issue with the grey box which sometimes appears when you click on the table.

- Idea was to have more customer rows appear when the add more customers button is pressed (further rows would be added). Attempted to do this through React and Bootstrap. But this needs further work. I also need further understanding on event handlers for this.

- Remove toggle feature if the table can be expanded with bootstrap table. Idea was to integrate the functionality of toogle with the show more customers button to allow more rows of customers to be shown on click.

- Add more customers button at the moment has no functionality. It was taking me a while to figure out how to expand the table on a button press, so I have just added "overflow: scroll;" functionality in the element of SCSS which is responsible for the table.

-  When DataSine header was clicked on previously it took you to the DataSine website. However exploring React further told me to use the 'Link To' syntax and have the links within the app (instead of href out). For now I created my own about page. This page could be improved and externally link out to DS website.

- All colors in SCSS file should be extracted out into config file.

- There is repeating and unused code in SCSS file.


(American spelling of color thanks to all the SCSS time..)


# Additional Features I would Add



- Hover over Trait (agreeable etc) and a short explanation of what this means to appear in a box.

- When you click on a row in the table it expands with more information about the customer. After that feature was added then this data could be made into pie charts etc which come up when you click to expand the row. Resources I have tried to use to do this; (http://allenfang.github.io/react-bootstrap-table/example.html#expand, & https://www.npmjs.com/package/reactjs-bootstrap-table).


- When you click on the customer name it goes through to a chart of more information. This chart is an icon picture of a man/woman based on the age (different pictures for different age bands). It has colours correspond to the customer's personality traits and all together make the icon fully colored. It has images of products they usually spend money on and their high propensity products and why - eg because they have a house and mortage etc (displayed as images around the icon with their sizes responsible for denoting importance). It displays something to do with their hobbies or personality. (This means if speaking to them on the phone you can build rapport quickly).

I would need to understand more about event handlers and passing arguments through these:
https://reactjs.org/docs/handling-events.html
