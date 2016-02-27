---
layout: post
title: "I Numeri Italiani"
description: "The one in which I teach the world to count in Italian."
category: projects
tags: [Italian, Node.js, Express, JavaScript, Heroku]
excerpt: Last November, I started a new Node.js app...
---
{% include JB/setup %}

## The Project

Last November, I started a new single-page Node.js app with the intention of creating something useful and interesting that would also serve as a way to exercise best practices related to CSS and jQuery as I understood them at the time.

I Numeri is designed to quiz users on Italian numbers 1 through 9999. There's a little lesson and a simple quiz. You can narrow the range to anything you desire, so if you want to practice the dates of this and the last century, for example, you can do that. (That's actually a very useful thing to do since dates come up frequently in daily life.')

## The Tools

_Express_ - to handle the routing

_jQuery_ - for basic DOM manipulation

_Sass_ - my preferred CSS preprocessor

_Mocha_ - JS test framework

_Chai_ - JS assertion library

_Gulp_ - for the sake of trying out a new task runner


## The Results

I'm not sure how I feel about the style. It looks like I was channeling the fashion of the 80s. Nonetheless, I'm pleased with the quiz functionality. I learned a lot about optimizing both CSS and jQuery. (I read a few style guides as I was working on this and feel like I have a much better nose for code smells.)

I'm especially proud of my translation function, which I initially wrote in Python 2, then Python 3, and then finally in JavaScript. The Python code was written just for the sake of practicing my Python, and a terminal app is a quick way
to focus on the logic of the translation function, logic that I knew would be pretty much
the same
regardless of the scripting language.

Here's a link to the Python 3 repo:  [i-numeri-python-3](https://github.com/treecasiano/i-numeri-python-3)

And the Node app code: [inumeri](https://github.com/treecasiano/inumeri)

I used JSCS and SCSS-Lint for JavaScript and CSS linting, respectively. I also ran the code through the W3C HTML and CSS compliance checkers. I set up my IDE so that it yelled at me whenever I did something unintentionally sloppy. This behavior only strengthened my love for PyCharm.

I aimed to make the quiz as user-friendly as possible, with the button focus changing in a way that makes keyboard navigation easy. I especially love that I was able to level up my Italian skills while simultaneously leveling up my dev skills.

## Deployment
The app is deployed to Heroku here: [I Numeri](http://i-numeri-italiani.herokuapp.com). For those who don't know, you deploy your app to Heroku by way of committing and pushing code just like you would to a remote GitHub repository. The deployment was pretty straightforward because I was using Node and only needed to create  Procfile using the instructions found on Heroku. Because I wanted to keep the generated CSS and JS files out of the GitHub repository, per best practices, I created a local heroku branch just for Heroku deployment which I use to commit the generated files to the Heroku master branch, keeping them safely out of the rest of the version control.

Heroku has a free tier, but the server goes to sleep if the site hasn't been accessed after a length of time, a fact that could cause a user to come to your site and experience a delay. The easiest way keep your site active is to use the Node http library and the setInterval() method to hit the account with a GET request every 5-29 minutes. The problem is that the Heroku app must sleep at least 6 hours a day or it will enter a [recharging state](https://devcenter.heroku.com/articles/dyno-sleeping#quota). I found an easy solution in a service called [Kaffeine](http://kaffeine.herokuapp.com/). Kaffeine pings my app at regular intervals and only during the hours I designate.

Now I'm working on two larger team projects, both of which are requiring me to stretch my JS skills and work with new and interesting libraries. I'm going to focus on those projects for awhile before tackling a new side project, but I'm itching to do something with the Icelandic language, or perhaps another Italian-focused app. I also need to fix the user interface of my Make Perfect app, and I'd really love to make my karaoke-locator.

I need more hours in the day.


