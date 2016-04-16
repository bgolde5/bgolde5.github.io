---
layout: page
title: Portfolio
---

{% for project in site.data.projects %}
## {{ project.name }}
  * {{ project.description }}
  * {{ project.skills }}
  ![screenshot]({{ site.url }}/assets/{{ project.image }} = 100x)
{% endfor %}
