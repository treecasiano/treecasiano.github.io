---
layout: page
title: Leveling Up!
tagline: from code noob to dev pro in 347 easy steps
---
{% include JB/setup %}

#### My name is Tree Casiano, and I am a web developer.

I am addicted to code. And guitars. There is no cure.

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
<br />
<br />

#### Portland Tech Community Resources

<ul>
  <li><a href="http://www.meetup.com/PyLadies-PDX/">PyLadies PDX</a></li>
  <li><a href="http://www.meetup.com/Women-Who-Code-Portland/">Women Who Code Portland</a></li>
  <li><a href="http://chicktech.org">ChickTech</a></li>
  <li><a href="http://siliconflorist.com">The Silicon Florist</a></li>
  <li><a href="http://codefellows.org">Code Fellows</a></li>
  <li><a href="http://teamtreehouse.com">Treehouse</a></li>
</ul>

<br />

