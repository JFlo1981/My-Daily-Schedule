# My Daily Schedule

## Challenge 5:  Create a Daily Schedule to aid in managing time throughout the workday.  The webpage should store the user inputed data in the hour block it was typed in and recall the data after refreshing the webpage or revisiting the site at a later time.

## Built using: 
* HTML
* CSS
* Javascript
* Bootstrap
* Font Awesome
* Google API font selector
* JQuery
* Cloudflare
* Moment.js

### This project began with supplied HTML for the basic framework; CSS for a suggested style and links to Bootstrap, Font Awesome, the Google font API, JQuery and Cloudflare.  

My job on this project is to build a working daily schedule tracker using Javascript to make DOM requests and to allow user inputed data to persist on the page.  When a user enters a note fo a selected hour block, the note will be given a timestamp and saved under local storage.  if the user leaves the page and returns or refreshes the page the note will remain in place.

I began by using a psuedocode of the desired code structure.  A current date and time was added to the Hero section with code fopund at Moment.js.  A function was then written to both identify the current time to the hour and to identify which row was being selected by the user via their text entry and save click.  These data were compared with each other via if else statements which changes the row color based on past, present, and future hours.  

The user created data are then saved to local storage via setItem upon the user clicking a save icon which was pulled from Font Awesome.  The same data are then made to persist on the page via getItem.

## My Daily Schedule:
https://jflo1981.github.io/My-Daily-Schedule/

![Daily-Schedule-Screenshot](https://user-images.githubusercontent.com/88595179/151877392-0d0515e6-c745-4e1b-afd2-25437c151c41.png)

## GitHub link:
https://github.com/JFlo1981/My-Daily-Schedule

## Contributions:
* Framework by Xandromus
* Initial Psuedocode by Jayme (TA)
* Working code by Jarod Florence

### ©️2022 (jf.)
