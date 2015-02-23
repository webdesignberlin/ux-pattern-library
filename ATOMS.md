# Atomic elements

## Global definitions
These definitions may be defined globally and assigned to various elements.
* `is-focused`        // Simple definition of borders, backgrounds, etc.
* `is-active`         // Defines the pressed state for buttons, selected state for various
* `is-disabled`       // Simple definition of borders, backgrounds, etc.

Additionally, we are using certain prefixes for certain things. For example:
* `has-` and `is-` are used to denote a state, for example "this has something" or "this is insome state".
* `[element]-` is used for visual appearance only, for example, "a horizontal form".

## Forms

### Buttons `<button>`

Required class:
* `button`

Additional classes:
* `button-primary`    // Uses primary palette color
* `button-secondary`  // Uses secondary palette color
* `button-tertiary`   // Uses a tertiary palette color, or white

States:
* `is-focused`
* `is-active`
* `is-disabled`

### Input `<input>`

Required class:
* `input`

Types:
* `input-text`
* `input-checkbox`
* `input-radio`
* `input-submit`

Options:
* `has-error`        // Can receive focus programmatically; alert color styling
* `has-hint`         // Denotes if this field has hint text

States
* `is-focused`
* `is-disabled`

### Select `<select>`

Required class:
* `select`

Options:
* `has-error`
* `has-hint`

States:
* `is-focused`
* `is-disabled`

### Textarea `<textarea>`

Required class:
* `textarea`

Options:
* `has-error`
* `has-hint`

States:
* `is-focused`
* `is-disabled`

### Label `<label>`

Required class:
* `label`

States:
* `is-required`

### Progress bars `<progress>`

Required class:
* `progress`

States:
* `is-working`
* `is-complete`
* `has-error`

### Form `<form>`

Required class:
* `form`

Types:
* `form-horizontal`  // Defaults items to display: inline-block
* `form-vertical`    // Defaults items to display: block

- - -

## Content and Text

### Ordered Lists `<ol>`

Required class:
* `list`

Types:
* `list-bulleted`     // When used on ordered lists, displays numbers
* `list-plain`

### Unordered Lists `<ul>`

Required class:
* `list`

Types:
* `list-bulleted`     // When used on unordered lists, displays filled disc / hollow disc (nested)
* `list-plain`

### Data Lists `<dl>`

Required class:
* `list`

Types:
* `list-stacked`     // Overrides the default tiered styling

### Blockquote `<blockquote>`

Required class:
* `blockquote`

States:
* `blockquote-visual` // If present, would use :before and :after to insert "'s for visual

- - -

## Tables

### Table `<table>`

Required class:
* `table`

Types:
* `table-comfortable` // Lots o' padding; more than normal
* `table-compact`     // Minimal padding; less than normal
