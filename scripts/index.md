---
layout: layout.njk
title: "SriPedia: Home"
permalink: index.html
templateEngineOverride: njk
---
<table>
<tr><td valign=top width=380px>
    {% set blocks = [para_about, links_microsites] %}
    {% for block in blocks %}
    <H3>{{ block.label }}</H3>
    {% if block.type == 'links' %}
    <table border="0" cellpadding="5" cellspacing="0" width="100%">
        <tbody><tr>
        {% set numColumns = 4 %}
        {% set itemsPerColumn = (block.links | length / numColumns) | round %}
        {% if itemsPerColumn == 0 %}{% set itemsPerColumn = 1 %}{% endif %}
        {% for column in block.links | batch(itemsPerColumn) %}
        <td valign="top" style="line-height:1.25;">
        {% for link in column %}
        <a href="{{ link.url }}"{% if link.class %} class="{{ link.class }}"{% endif %}>{{ link.text }}</a><br>
        {% endfor %}
        </td>
        {% endfor %}
    </tr></tbody></table>
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