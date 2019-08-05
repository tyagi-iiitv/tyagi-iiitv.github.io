---
layout: page
title: "Home"
class: home
---

# [Namaste!](https://www.merriam-webster.com/words-at-play/the-history-of-namaste) I'm Anjul Tyagi

<div class="columns" markdown="1">

<div class="intro" markdown="1">
I'm a PhD candidate in the [Visual Analytics and Imaging Lab](https://www3.cs.stonybrook.edu/~mueller/) at the [Stony Brook University](https://www.stonybrook.edu/). I work with [Prof. Klaus Mueller](https://www3.cs.stonybrook.edu/~mueller/).

I study HD Data Visualization techniques and their interdisciplinary applications in Storage Systems Performance Optimization and Eye Tracking. My work heavily relies on Statistics, Convex Optimization, Machine Learning and Dimension Reduction techniques. In programming languages, I prefer working with Python and Javascript.  

In June 2019, I was fortunate to be a part of the accepted [NSF](https://www.nsf.gov/) Grant on Storage Systems Performance Optimization along with [Prof. Klaus Mueller](https://www3.cs.stonybrook.edu/~mueller/) and [Prof. Erez Zadok](https://www3.cs.stonybrook.edu/~ezk/). I received my BS from [Indian Institute of Information Technology](http://iiitvadodara.ac.in/) in Computer Science. I was an [NNMCB](http://www.iiserpune.ac.in/~mbio/?q=nnmcb) fellow for the junior year of my undergrad. Details are in my [CV]({{ "/cv/" | relative_url }}).
</div>

<div class="me" markdown="1">
<picture>
  <source srcset='/images/miami_pic.JPG' type='image/JPG' />
  <img
    src='/images/miami_pic.JPG'
    alt='Anjul Tyagi'/>
</picture>

{:.no-list}
* <a href="mailto:{{ site.email }}">{{ site.email }}</a>
* [New Computer Science, Room 134](https://goo.gl/maps/wCPiq6gusGdSBvbW8)
</div>

</div>

## Featured Projects

<div class="featured-projects">
  {% assign sorted_projects = site.data.projects | sort: 'highlight' %}
  {% for project in sorted_projects %}
    {% if project.highlight %}
      {% include project.html project=project %}
    {% endif %}
  {% endfor %}
</div>
<a href="{{ "/projects/" | relative_url }}" class="button">
  <i class="fas fa-chevron-circle-right"></i>
  Show More Projects
</a>

## Featured Publications

<div class="featured-publications">
  {% for pub in site.data.publications %}
    {% if pub.highlight %}
      <a href="{{ pub.pdf }}" class="publication">
        <strong>{{ pub.title }}</strong>
        <span class="authors">{% for author in pub.authors %}{{ author }}{% unless forloop.last %}, {% endunless %}{% endfor %}</span>.
        <i>{{ pub.venue }}, {{ pub.year }}</i>.
        {% for award in pub.awards %}<br/><span class="award"><i class="fas fa-{% if award == "Best Paper Award" %}trophy{% else %}award{% endif %}" aria-hidden="true"></i> {{ award }}</span>{% endfor %}
      </a>
    {% endif %}
  {% endfor %}
</div>

<a href="{{ "/publications/" | relative_url }}" class="button">
  <i class="fas fa-chevron-circle-right"></i>
  Show All Publications
</a>

<div class="news-travel" markdown="1">

<div class="news" markdown="1">
## News

<ul>
{% for news in site.data.news %}
  {% include news.html news=news %}
{% endfor %}
</ul>

</div>

<div class="travel" markdown="1">
## Travel

<table>
<tbody>
{% assign future_travel = site.data.travel | where_exp:'item','item.start == null' %}
{% for travel in future_travel %}
  {% include travel.html travel=travel %}
{% endfor %}
{% assign sorted_travel = site.data.travel | where_exp:'item','item.start' | sort: 'start' | reverse %}
{% for travel in sorted_travel limit:14 %}
  {% include travel.html travel=travel %}
{% endfor %}
</tbody>
</table>

</div>

</div>
