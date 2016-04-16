---
layout: page
title: Portfolio
---

{% for project in site.data.projects %}
## {{ project.name }}
<p align="center">
  <img src="{{ site.url }}/assets/{{ project.image }}" width="300" />
</p>
  * {{ project.description }}
  * {{ project.skills }}
  * [See more here]({{ project.url }})
{% endfor %}
