---
layout: page
title: Level Up!
tagline: From code noob to dev pro in 347 easy steps.
---
{% include JB/setup %}

#### My name is Tree Casiano. Welcome to my humble blog-abode.

In June 2014 I started the process of changing my career and exploring the world of web development. I was quickly addicted to code and happy to meet so many welcoming people and organizations in Portland, Oregon. Here I will write about my journey and share all the resources that helped me along the way.


##### Blog Posts

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>


##### Portland Tech Community Resources

<ul>
  <li><a href="http://www.meetup.com/PyLadies-PDX/">PyLadies PDX</a></li>
</ul>



<a href="http://twitter.com/TreeCasiano"><i class="fa fa-twitter fa-3x"></i></a>

<a href="https://github.com/TreeCasiano"><i class="fa fa-github fa-3x"></i></a>
