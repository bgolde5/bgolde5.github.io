---
layout: page
title: Portfolio
---

{% for project in site.data.projects %}
## {{ project.name }}
<p align="center">
  <img src="{{ site.url }}/assets/{{ project.image }}" width="300" />
</p>
  * **Description:** {{ project.description }}
  * **Skills Required:** {{ project.skills }}


{% endfor %}
