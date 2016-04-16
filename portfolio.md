---
layout: page
title: Portfolio
---

{% for project in site.data.projects %}
## {{ project.name }}
  * {{ project.description }}
  * {{ project.skills }}
  <img src="{{ site.url }}/assets/{{ project.image }}" width="100">

  ![screenshot]({{ site.url }}/assets/{{ project.image }} =50x)
{% endfor %}
