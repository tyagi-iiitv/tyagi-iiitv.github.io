---
layout: page
title: "Home"
class: home
---

# Hello, I am Anjul Tyagi

<div class="columns" markdown="1">

<div class="intro" markdown="1">
PhD candidate in the [Visual Analytics and Imaging Lab](https://www3.cs.stonybrook.edu/~mueller/) at [Stony Brook University](https://www.stonybrook.edu/) advised by [Prof. Klaus Mueller](https://www3.cs.stonybrook.edu/~mueller/). Get in touch, connect me on [LinkedIn](https://www.linkedin.com/in/anjul-tyagi/)!

My research interest includes:
<ul>
  <li><b>3D Object Detection on Point Clouds</b> <i>(#Self Driving Cars, #Computer Vision, #Deep Learning)</i></li>
  <li><b>Automated Infographics Generation</b> <i>(#Data Visualization, #Computer Vision, #Deep Learing)</i></li>
  <li><b>Deep Neural Network Architecture Search</b> <i>(#Deep Learning, #Optimization)</i></li>
  <li><b>High Dimensional Data Visualization</b> <i>(#Data Visualization)</i></li>
</ul>

Besides research, I like contributing to interesting Open Source Projects on Github, and writing about latest research trends on Medium. 
I have been fortunate to collaborate with professors and researchers in -- Computer Vision at Seagate, Data Visualization ([Klaus Mueller-SBU](https://www3.cs.stonybrook.edu/~mueller/), [Jian Zhao-UWAT](https://www.jeffjianzhao.com/)), Storage Systems ([Erez Zadok-SBU](https://www3.cs.stonybrook.edu/~ezk/)) and Eye Tracking ([Ayush Kumar-SBU](https://www3.cs.stonybrook.edu/~aykumar/), [Michael Burch-TU/e](http://www.profitippliga.de/index2.php)). 

Socially, I love meeting new people and enjoy part time Fitness, Athletics and Music. Connect me on [Instagram](https://www.instagram.com/tyagi_anjul/)!

<span style="color:red">**Fun Fact!**</span> **My academic lineage traces back to Isaac Newton and Galileo Galilei. [Here's how.]({% post_url _posts/2019-08-29-academic-lineage %})**

</div>


<div class="me" markdown="1">
<picture>
  <source srcset='/images/victoria_zoom.jpg' type='image/JPG' />
  <img
    src='/images/website_pic.jpg'
    alt='Anjul Tyagi'/>
</picture>

{:.no-list}
* <a href="mailto:{{ site.email }}">{{ site.email }}</a>
* [New Computer Science, Room 134](https://goo.gl/maps/wCPiq6gusGdSBvbW8)
* _______________________________________________________________________________________________


<a href="https://www.linkedin.com/in/anjul-tyagi/"><i class="fab fa-linkedin"></i></a>
<a href="https://github.com/tyagi-iiitv"><i class="fab fa-github"></i></a>
<a href="https://www.instagram.com/tyagi_anjul/"><i class="fab fa-instagram"></i></a>
<a href="https://medium.com/@a_tyagi"><i class="fab fa-medium"></i></a>
<a href="https://twitter.com/anjul_ty"><i class="fab fa-twitter"></i></a>
<a href="https://www.facebook.com/anjul.tyagi.56884/"><i class="fab fa-facebook"></i></a>
<a href="https://scholar.google.com/citations?user=Ra9BXlkAAAAJ&hl=en"><i class="ai ai-google-scholar-square ai"></i></a>
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
<div class="news-2" markdown="1">
<ul>
{% for news in site.data.news %}
  {% include news.html news=news %}
{% endfor %}
</ul>
</div>
</div>

<!-- <div class="travel" markdown="1">
## Travel
<div class="travel-2" markdown="1">
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
</table> -->

</div>
