---
layout: page
title: Portfolio
---

{% for project in site.data.projects %}
<hr>
## {{ project.name }}
<p align="center">
  <img src="{{ site.url }}/assets/{{ project.image }}" width="300" />
</p>
  {{ project.description }}
  {{ project.skills }}
  <p align="center">
  {% if project.url_image %}
      <a href="{{ project.url }}"><img src="{{ site.url }}/assets/{{ project.url_image }}" /></a>
  {% else %}
      <a href="{{ project.url }}">{{ project.url_title }}</a>
  {% endif %}
  </p>
{% endfor %}
