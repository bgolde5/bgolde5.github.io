---
layout: page
title: Portfolio
---

{% for project in site.data.projects %}
## {{ project.name }}
  * {{ project.description }}
  * {{ project.skills }}
  <p align="center">
    <img src="{{ site.url }}/assets/{{ project.image }}" width="300" />
  </p>

{% endfor %}
