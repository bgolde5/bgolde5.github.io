---
layout: page
title: Portfolio
---

{% for project in site.data.projects %}
## {{ project.name }}
  * {{ project.description }}
  * {{ project.skills }}
  <img src="{{ site.url }}/assets/{{ project.image }}" align="center" width="300">
{% endfor %}
