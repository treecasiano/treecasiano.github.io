---
layout: page
title: Leveling Up!
tagline: From code noob to dev pro in 347 easy steps.
---
{% include JB/setup %}

#### My name is Tree Casiano. Welcome to my humble blog-abode.

In June 2014 I started the process of changing my career and exploring the world of web development. I was quickly addicted to code and happy to meet so many welcoming people and organizations in Portland, Oregon. Here I will write about my journey and share all the resources that have helped me along the way.

<br />

#### About Me

* I love languages. I studied French for five years in my teens and am kicking myself for not majoring in Linguistics (and Computer Science) instead of Psychology. I am currently learning Turkish and Italian and know a little German and Dutch. I wish I didn't need sleep so I could study Welsh, Estonian, and Basque (and learn the cello!). If I were rich and could do wildly impractical things, I would get my PhD in historical linguistics. For fun.

* I used to teach piano for a living and miss it every day. I am learning classical guitar and bluegrass mandolin. I like to draw, but I'm not good at it. Yet.

* I'm passionate about all things geospatial. I love maps and cartography and GIS and could spend hours with Google Earth. I started a certificate in Geographic Information Systems. I wish I had time to finish it.

* I recently became obsessed with everything about Turkey, particularly Anatolian Rock (Barış Manço!), Cappadocia, and Istanbul. I usually have my keyboard set to Turkish because I need to type ı and ş and ç often.

* I like animals far better than people. I believe that if you don't have a heart for animals, you don't have a heart at all.

* In 2015, I finally had enough money and nerve to quit the admin work that made me miserable for far too many years. The joy I feel is like that of an animal who has been released from a painfully small cage.

* All cages are too small.

<div class="icons">
    <a href="http://twitter.com/TreeCasiano"><i class="fa fa-twitter fa-2x"></i></a>
    <a href="https://github.com/TreeCasiano"><i class="fa fa-github fa-2x"></i></a>
    <a href="https://www.linkedin.com/in/treecasiano"><i class="fa fa-linkedin fa-2x"></i></a>
    <a href="http://keyoftree.com"><i class="fa fa-music fa-2x"></i></a>
</div>

<br />

#### Blog Posts

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

<br />

#### Portland Tech Community Resources

<ul>
  <li><a href="http://www.meetup.com/PyLadies-PDX/">PyLadies PDX</a></li>
  <li><a href="http://www.meetup.com/Women-Who-Code-Portland/">Women Who Code Portland</a></li>
  <li><a href="http://chicktech.org">ChickTech</a></li>
  <li><a href="http://http://siliconflorist.com">The Silicon Florist</a></li>
</ul>

<br />

<p>Site last updated: {{ site.time | date_to_string }}</p>

