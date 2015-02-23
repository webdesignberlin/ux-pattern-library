# Atoms
This page lists all the HTML elements. They are grouped by function to help you find what you need to achieve what you have in mind. Although this guide is written for those who are new or newer to coding, we intend it to be a useful reference for anyone.

## Basic
Element | Description
------- | -----------
`<html>` | The HTML root element represents the root of an HTML document. All other elements must be descendents of this element.

## Document metadata
Element | Description
------- | -----------
`<base>` | Specifies the base URL to use for all relative URLs contained within a document. There can be only one `<base>` element in a document.
`<head>` | Provides general information (metadata) about the document, including its title and links to or definitions of scripts and style sheets.
`<link>` | Specifies relationships between the current document and an external resource. Possible uses for this element include defining a relational framework for navigation. This Element is most used to link to style sheets.
`<meta>` | Represents any metadata information that cannot be represented by one of the other HTML meta-related elements (`<base>`, `<link>`, `<script>`, `<style>` or `<title>`).
`<style>` | Contains style information for a document, or a part of document. The specific style information is contained inside of this element, usually in the CSS.
`<title>` | Defines the title of the document, shown in a browser's title bar or on the page's tab. It can only contain text and any contained tags are not interpreted.

## Content sectioning
Element | Description
------- | -----------
`<address>` | May be used by authors to supply contact information for its nearest `<article>` or `<body>` ancestor; in the latter case, it applies to the whole document.
`<article>` | Represents a self-contained composition in a document, page, application, or site, which is intended to be independently distributable or reusable, e.g., in syndication. This could be a forum post, a magazine or newspaper article, a blog entry, a user-submitted comment, an interactive widget or gadget, or any other independent item of content. Each `<article>` should be identified, typically by including a heading (h1-h6 element) as a child of the `<article>` element.
`<body>` | Represents the content of an HTML document. There is only one `<body>` element in a document.
`<footer>` | Represents a footer for its nearest sectioning content or sectioning root element (i.e, its nearest parent `<article>`, `<aside>`, `<nav>`, `<section>`, `<blockquote>`, `<body>`, `<details>`, `<fieldset>`, `<figure>`, `<td>`). A footer typically contains information about the author of the section, copyright data or links to related documents.
`<header>` | Represents a group of introductory or navigational aids. It may contain some heading elements but also other elements like a logo, wrapped section's header, a search form, and so on.
`<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>` | Implement six levels of document headings, `<h1>` is the most important and `<h6>` is the least. A heading element briefly describes the topic of the section it introduces. Heading information may be used by user agents, for example, to construct a table of contents for a document automatically.
`<hgroup>` | Represents the heading of a section. It defines a single title that participates in the outline of the document as the heading of the implicit or explicit section that it belongs to.
`<nav>` | Represents a section of a page that links to other pages or to parts within the page: a section with navigation links.
`<section>` | ...

## Text content
Element | Description
------- | -----------
`<blockquote>` | Indicates that the enclosed text is an extended quotation.
`<dd>` | Indicates the description of a term in a description list (`<dl>`) element. This element can occur only as a child element of a definition list and it must follow a `<dt>` element.
`<div>` | The generic container for flow content, which does not inherently represent anything. It can be used to group elements for styling purposes (using the class or id attributes), or because they share attribute values, such as lang. It should be used only when no other semantic element (such as `<article>` or `<nav>`) is appropriate.
`<dl>` | Encloses a list of pairs of terms and descriptions. Common uses for this element are to implement a glossary or to display metadata (a list of key-value pairs).
`<dt>` | Identifies a term in a definition list. This element can occur only as a child element of a `<dl>`. It is usually followed by a `<dd>` element; however, multiple `<dt>` elements in a row indicate several terms that are all defined by the immediate next `<dd>` element.
`<figcaption>` | Represents a caption or a legend associated with a figure or an illustration described by the rest of the data of the `<figure>` element which is its immediate ancestor which means `<figcaption>` can be the first or last element inside a `<figure>` block. Also, the HTML Figcaption Element is optional; if not provided, then the parent figure element will have no caption.
`<figcaption>` | Represents self-contained content, frequently with a caption (`<figcaption>`), and is typically referenced as a single unit. While it is related to the main flow, its position is independent of the main flow. Usually this is an image, an illustration, a diagram, a code snippet, or a schema that is referenced in the main text, but that can be moved to another page or to an appendix without affecting the main flow.
`<hr>` | Represents a thematic break between paragraph-level elements (for example, a change of scene in a story, or a shift of topic with a section). In previous versions of HTML, it represented a horizontal rule. It may still be displayed as a horizontal rule in visual browsers, but is now defined in semantic terms, rather than presentational terms.
`<li>` | Used to represent a list item. It should be contained in an ordered list (`<ol>`), an unordered list (`<ul>`) or a menu (`<menu>`), where it represents a single entity in that list. In menus and unordered lists, list items are ordinarily displayed using bullet points. In ordered lists, they are usually displayed with some ascending counter on the left such as a number or letter.
`<main>` | Represents the main content of  the `<body>` of a document or application. The main content area consists of content that is directly related to, or expands upon the central topic of a document or the central functionality of an application. This content should be unique to the document, excluding any content that is repeated across a set of documents such as sidebars, navigation links, copyright information, site logos, and search forms (unless, of course, the document's main function is as a search form).
`<ol>` | Represents an ordered list of items. Typically, ordered-list items are displayed with a preceding numbering, which can be of any form, like numerals, letters or Romans numerals or even simple bullets. This numbered style is not defined in the HTML description of the page, but in its associated CSS, using the list-style-type property.
`<p>` | Represents a paragraph of text.
`<pre>` | Represents preformatted text. Text within this element is typically displayed in a non-proportional font exactly as it is laid out in the file. Whitespaces inside this element are displayed as typed.
`<ul>` | Represents an unordered list of items, namely a collection of items that do not have a numerical ordering, and their order in the list is meaningless. Typically, unordered-list items are displayed with a bullet, which can be of several forms, like a dot, a circle or a squared. The bullet style is not defined in the HTML description of the page, but in its associated CSS, using the list-style-type property.

## Image and multimedia
Element | Description
------- | -----------
`<audio>` | Used to embed sound content in documents. It may contain several audio sources, represented using the src attribute or the `<source>` element; the browser will choose the most suitable one.
`<img>` | Represents an image of the document.
`<track>` | Used as a child of the media elements —`<audio>` and `<video>`. It lets you specify timed text tracks (or time-based data), for example to automaticaly handle subtitles.
`<video>` | Used to embed video content. It may contain several video sources, represented using the src attribute or the `<source>` element; the browser will choose the most suitable one.

## Tables
Element | Description
------- | -----------
`<caption>` | Represents the title of a table. Though it is always the first descendant of a `<table>`, its styling, using CSS, may place it elsewhere, relative to the table.
`<col>` | Defines a column within a table and is used for defining common semantics on all common cells. It is generally found within a `<colgroup>` element.
`<colgroup>` | Defines a group of columns within a table.
`<table>` | Represents data in two dimensions or more.
`<tbody>` | Defines one or more rows as the body of its parent `<table>` element when no `<tr>` elements are children of the parent.  In conjunction with a preceding `<tfoot>` and `<thead>` element, (`<tbody>`) provides additional semantic information for devices such as printers and displays. Of the parent table's child elements, (`<tbody>`) will represent the content, if longer than a page, that will most likely differ for each page printed. The `<tfoot>` and `<thead>` elements' content will be consistent for each page printed. For displays, (`<tbody>`) will enable separate scrolling from the `<tfoot>`, `<thead>` and `<caption>` elements of the same parent `<table>` element.
`<td>` | Defines a cell of a table that contains data. It participates in the table model.
`<tfoot>` | Defines a set of rows summarizing the columns of the table.
`<th>` | Defines a cell that is a header for a group of cells of a table. The group of cells that the header refers to is defined by the scope and headers attribute.
`<thead>` | Defines a set of rows defining the head of the columns of the table.
`<tr>` | Defines a row of cells in a table. Those can be a mix of `<td>` and `<th>` elements.

## Forms
Element | Description
------- | -----------
[`<button>`](atoms/forms/buttons.md) | Represents a clickable button.
`<datalist>` | Contains a set of `<option>` elements that represent the values available for other controls.
`<fieldset>` | Used to group several controls as well as labels (`<label>`) within a web form.
`<form>` | Represents a document section that contains interactive controls to submit information to a web server.
`<input>` | Used to create interactive controls for web-based forms in order to accept data from the user. The semantics of an `<input>` varies considerably depending on the value of its type attribute.
`<label>` | Represents a caption for an item in a user interface. It can be associated with a control either by placing the control element inside the label element, or by using the for attribute. Such a control is called the labeled control of the label element.
`<legend>` | Represents a caption for the content of its parent `<fieldset>`.
`<optgroup>` | Creates a grouping of options within a `<select>` element.
`<option>` | Used to create a control representing an item within a `<select>`, an `<optgroup>` or a `<datalist>` HTML5 element.
`<progress>` | Used to view the completion progress of a task. While the specifics of how it's displayed is left up to the browser developer, it's typically displayed as a progress bar. Javascript can be used to manipulate the value of progress bar.
`<select>` | A control that presents a menu of options. The options within the menu are represented by `<option>` elements, which can be grouped by `<optgroup>` elements. Options can be pre-selected for the user.
`<textarea>` | A multi-line plain-text editing control.
