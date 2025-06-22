---
layout: layout.njk
title: "SriPedia: Home"
permalink: index.html
templateEngineOverride: njk
---
<style>
.masonry-grid {
    column-count: 3;
    column-gap: 1.5rem;
}
.masonry-item {
    break-inside: avoid;
    page-break-inside: avoid;
}
.masonry-item ul {
    margin: 0;
    padding: 0;
}
.masonry-item li {
    list-style: none;
}
</style>
<table>
<tr><td valign=top width=380px>
    {% set blocks = [para_about, links_microsites] %}
    {% for block in blocks %}
    <H3>{{ block.label }}</H3>
    {% if block.type == 'links' %}

    <div class="masonry-grid">
            {# Group the links from our data file by the 'section' attribute #}
            {% for group in block.links | groupby('section') %}
            <div class="masonry-item">
                {% if loop.index == 1 %}
                <h4 style="margin-top:0px;margin-bottom:5px;">{{ group.key }}</h4>
                {% else %}
                <h4 style="margin-bottom:5px;">{{ group.key }}</h4>
                {% endif %}
                <ul>
                    {% for item in group.list %}
                    <li><a href="{{ item.url }}">{{ item.text }}</a></li>
                    {% endfor %}
                </ul>
            </div>
            {% endfor %}
        </div>


    {% endif %}

    {% if block.type == 'text' %}
        <div style="word-wrap: break-word;white-space: pre-line;">{{ block.text }}</div>
    {% endif %}

    {% endfor %}
    <hr class="wikilinefooter">
    </p><div class="wikifooter">
    <a href="/sripedia/index.html" class="wikipagelink">Home</a> | <a href="/sripedia/about.html">About</a>
    </div>
    </td>
    <td valign="top" style="border-left:1px solid #cccccc;padding-left:5px">
    <H3>The VisishtAdvaitha Philosophy (English)</H3>
    <iframe width="420" height="315" src="//www.youtube.com/embed/hmyM9DesknI" frameborder="0" allowfullscreen=""></iframe>
    <H3>The Glory of the Alwars (English)</H3>
    <iframe width="420" height="315" src="//www.youtube.com/embed/r6OS4zpp68M" frameborder="0" allowfullscreen=""></iframe>
    </td></tr>
    </table>
</table>