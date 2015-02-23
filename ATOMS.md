# Atomic elements

## Global definitions
These definitions may be defined globally and assigned to various elements.
* `align-block`       // Makes the element display: block, taking its own line
* `is-focused`        // Simple definition of borders, backgrounds, etc.
* `is-active`         // Defines the pressed state for buttons, selected state for various
* `is-disabled`       // Simple definition of borders, backgrounds, etc.

Additionally, we are using certain prefixes for certain things. For example:
* `has-` and `is-` are used to denote a state, for example "this has something" or "this is insome state".
* `[element]-` is used for visual appearance only, for example, "a horizontal form".

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

### Input `<input>`

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

## Content and Text

### Ordered Lists `<ol>`

Types:
* `list-bulleted`     // When used on ordered lists, displays numbers
* `list-plain`

### Unordered Lists `<ul>`

Types:
* `list-bulleted`     // When used on unordered lists, displays filled disc / hollow disc (nested)
* `list-plain`

### Data Lists `<dl>`

Types:
* `list-stacked`     // Overrides the default tiered styling

### Blockquote `<blockquote>`

States:
* `blockquote-visual` // If present, would use :before and :after to insert "'s for visual

- - -

## Tables

### Table `<table>`

Types:
* `table-comfortable` // Lots o' padding; more than normal
* `table-compact`     // Minimal padding; less than normal
