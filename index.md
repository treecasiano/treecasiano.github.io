---
layout: page
title: Leveling Up!
tagline: 
---
{% include JB/setup %}

#### My name is Tree Casiano. I am a web applications developer.
I make the CSS obey and wrangle the Angular into submission. 
<hr>

#### Recent Blog Posts

<ul class="posts">
  {% for post in site.posts limit: 3 %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
    <div class="excerpt">{{ post.excerpt }}</div>
  {% endfor %}
</ul>
<i class="fa fa-book fa-1x"></i> [view archive](archive.html)
<br />

