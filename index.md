---
layout: page
title: Leveling Up!
tagline: From code noob to dev pro in 347 easy steps.
---
{% include JB/setup %}

#### My name is Tree Casiano. Welcome to my humble blog-abode.

In June 2014 I started the process of changing my career and exploring the world of web development. I was quickly addicted to code and happy to meet so many welcoming people and organizations in Portland, Oregon. Here I will write about my journey and share all the resources that have helped me along the way.

Thanks for reading!

~<a href = "http://treecasiano.github.io/pages/about.html">Tree</a>

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
  <li><a href="http://siliconflorist.com">The Silicon Florist</a></li>
  <li><a href="http://pdxcodeguild.com">PDX Code Guild</a></li>
</ul>

<br />

<div class="icons">
    <a href="http://twitter.com/TreeCasiano"><i class="fa fa-twitter fa-2x"></i></a>
    <a href="https://github.com/TreeCasiano"><i class="fa fa-github fa-2x"></i></a>
    <a href="https://www.linkedin.com/in/treecasiano"><i class="fa fa-linkedin fa-2x"></i></a>
    <a href="http://keyoftree.com"><i class="fa fa-music fa-2x"></i></a>
</div>

<br />

<p id="last_updated">Site last updated: {{ site.time | date_to_string }}</p>

