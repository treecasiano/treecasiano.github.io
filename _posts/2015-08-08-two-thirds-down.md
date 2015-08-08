---
layout: post
title: "Two-thirds Down"
description: ""
category: code school
tags: [Node.js, Express.js, JavaScript]
excerpt: I have just finished Week 8 of 12 at PDX Code Guild's developer bootcamp...
---
{% include JB/setup %}

I just finished Week 8 of 12 at PDX Code Guild's developer bootcamp. The experience has been a bit different than expected, but I won't be in a good position to write about it till it is over and I've had time to reflect. I do know that I have been learning much more than if I had stayed home and worked independently all summer. 

I told myself I would keep up with my Node.js studies and all that I learned at Code Fellows while at Code Guild, but Django has been a jealous mistress. Nonetheless, I made time to crank out a little Express app (that probably should have just been a static site). It was good to have the Express practice again, and re-learning how to deploy something on Heroku was worthwhile. I don't want to lose the skills I gained while at Code Fellows.

Voilà!

[Hobby Generator](http://http://hobby-idea-generator.herokuapp.com/)

I need to make more of these small apps because project-based learning sticks with me far better than anything I learn through tutorials or reading. Case in point - if you attempt to make a copy of an array in JavaScript by simply assigning a new variable name to the array, every time you change the copy, you also change the original. I'm sure more experienced programmers have a name for this rookie mistake. 

In the Hobby Generator project, I made a temporary copy of my original hobbies list, randomly selected a hobby from it, then popped the hobby off the list until the list was depleted. At the end, I reassigned the variable to the original list, hoping to grab all the original value, but found that the original list was also empty. 

Essentially, setting the value of variable X to the value of an array called Y does not make two identical but separate arrays. Instead, it gives the list two new names. Changes made to X will result in changes made to Y. I worked around this by using the slice method to make a copy, but initially I was vexed.

I think I have used the words "vexed" or "vexing" at least twice a day since I started this coding journey. 

