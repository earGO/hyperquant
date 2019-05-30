<<<<<<< HEAD
The test task for a job of a fronted developer fo HyperQuant

#### About

The goal was to create responsive layout for  iPhone 6S - 750x1334 pixels, and for Samsung Galaxy S8 Plus - 2960x1440 pixels.

So I didn't bother to write media-queries for other displays (and on desktop it WILL be displayed in a STRANGE way)

The app can be viewed live at the https://hyper-quant-test-job.herokuapp.com/ (I've deployed it to Heroku for testing)

####about repo
I left tests intentionaly, just to show that I'm using them :) Haven't covered by test all I could, 'cause took incredible timing upon myself.

Though customer provided png's with icons and graphs and stuff, I thought this is good one to actually make markup with no files other than HTML, CSS, and some minor JS for logic inside React components themselves. I liked to show-off some svg-magic to one of my friends - so here ve are. 

I used sparate .scss file for each of bottom-menu items, though they all are pretty the same. The difference sometimes is in scale and translate transforms of each SVG, so in Ver-1 I decided to keep things like that. It certainly needs refactoring, if development to be comntinued.

This and some other not so elegant solutions all are in favor of speed. 

#### Postmortem

Well, main trouble is a different screen ration on theese devices. So I did markup for the iPhone first (as the markup-image provided was for an iPhone).

Then I've made all data fetching and logic work on an iPhone. And only then I've done some correction for the Galaxy. 

Figma really helped me out in figuring 'vw' and 'vh' values for positioning and proportions. 
=======
# hyperquant
A repo for a test task for a HyperQuant
>>>>>>> 42badb6750dd52b43c72bdea3cd3c66472796b52
