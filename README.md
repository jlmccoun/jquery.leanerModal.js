
# leanerModal

> A super simple jQuery plugin for modal windows. works with your CSS.

Built for all the short dialogs, alerts, panels and such associated with an app, that you may want to handle in a modal window. Designed to handle hidden content, and doesn't apply any styles to the target element, other than for displaying and positioning.

**Example:**

**CSS:**

```css

#lean_overlay {
  position: fixed;
  z-index: 100;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  background: #000;
  display: none;
}

.modal {
  display: none;
}

```

**HTML:**

```html

<!-- leaner modal -->

<div class="modal">
  <div class="modal-header clearfix">
    <h3>Header</h3>
    <a class="modal_close close" href="#">x</a>
  </div>
  <div class="modal-body">
    <div class="flash error hide" id="invite-alert"></div>
    <form>
      <div class="clearfix">
        <label for="something"><span>Something:</span></label>
        <input type="text" class="right" placeholder="Something" name="something" id="something" />
      </div>
      <div class="clearfix">
        <input type="submit" class="primary right" value="Submit" />
      </div>
    </form>
  </div>
</div>

<!-- modal trigger -->

<div>
  <input type="button" class="primary" id="something-btn" value="Trigger Modal" />
</div>

```

**JS:**

```javascript

$('#landing-signup-btn').leanerModal({ 
  id : '#invite'
});

```
