---
layout: page
title: Leveling Up!
tagline: from code noob to dev pro in 347 easy steps
---
{% include JB/setup %}

#### My name is Tree Casiano, and I am a web developer.

I am addicted to code. And guitars. There is no cure.

<hr>

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

