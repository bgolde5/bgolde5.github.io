---
layout: page
title: Archive
---

## Blog Posts

{% for post in site.posts %}
  {% for category in post.categories %}
    {% if category != 'portfolio' %}
* {{ post.date | date_to_string }} &raquo; [ {{ post.title }} ]({{ post.url }})
    {% endif %}
  {% endfor %}
{% endfor %}
