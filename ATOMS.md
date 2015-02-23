# Atomic elements

## Global definitions
These definitions may be defined globally and assigned to various elements.
* `align-block`       // Makes the element display: block, taking its own line
* `is-focused`        // Simple definition of borders, backgrounds, etc.
* `is-active`         // Defines the pressed state for buttons, selected state for various
* `is-disabled`       // Simple definition of borders, backgrounds, etc.

## Forms

### Buttons `<button>`

Types:
* `button-primary`    // Uses primary palette color
* `button-secondary`  // Uses secondary palette color
* `button-tertiary`   // Uses a tertiary palette color, or white

States:
* `is-focused`
* `is-active`
* `is-disabled`

### Input `<input type="">`

Types:
* `text`
* `email`
* `tel`
* `search`
* `num`
* `date`
* `submit`

Options:
* `has-error`        // Can receive focus programmatically; alert color styling
* `has-hint`         // Denotes if this field has hint text

States
* `is-focused`
* `is-disabled`

### Select `<select>`

Options:
* `has-error`
* `has-hint`

States:
* `is-focused`
* `is-disabled`

### Textarea `<textarea>`

Options:
* `has-error`
* `has-hint`

States:
* `is-focused`
* `is-disabled`

### Label `<label>`

States:
* `is-required`

### Progress bars `<progress>`

States:
* `is-working`
* `is-complete`
* `has-error`

### Form `<form>`

Types:
* `form-horizontal`  // Defaults items to display: inline-block; can be overridden w align-block
* `form-vertical`    // Defaults items to display: block

- - -

## Text content

### Headings `<h1>`, `<h2>`, `<h3>`, etc.

### Paragraphs `<p>`

### Ordered Lists `<ol>`

Types:
* is-bulleted       // When used on ordered lists, displays numbers
* is-plain

### Unordered Lists `<ul>`

Types:
* is-bulleted       // When used on unordered lists, displays filled disc / hollow disc (nested)
* is-plain

### Data Lists `<dl>`

Types:
* is-stacked        // Overrides the default tiered styling

### Blockquote `<blockquote>

States:
* has-visual-quotes // If present, would use :before and :after to insert "'s for visual

- - -

## Image and multimedia
* audio
* figure
* figcaption
* img
* track
* video

- - -

## Tables
* table
* tbody
* thead
* tfoot
* th
* tr
* td
* colgroup
* caption

- - -

## Content sectioning
* main
* section
* article
* aside
* header
* footer
* div
* nav
