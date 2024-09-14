**Radio type:**

```
If indoor is selected first, on selecting outdoor HTML automatically deselects the first. But to make HTML work in that way, the input should come under same property 'name'.

<label for="indoor">
  <input id="indoor" type="radio" name="indoor-outdoor"/>Indoor
</label>
<label for="outdoor">
  <input id="outdoor"  type="radio" name="indoor-outdoor"/>Outdoor
</label>
```

**Form :**

```
On pressing Enter or Submit button, both executes the action command.
<form action="url">
  <button type="submit">Submit</button>
</form>
```

**Value attribute :**

```
On submiting the form, to retrieve the values user gave, 'name' and 'value' attribute is used. If 'value' attribute is not given, by default the form sets 'on' as the value.

Eg: Outcome for below cases:
1. If user selects Indoor, then result is indoor-outdoor=on since 'value' attribute is not given.
2. If user selects Outdoor, then result is indoor-outdoor=outdoor since 'value' attribute is given.
<form action="url">
  <label for="indoor">
    <input id="indoor" type="radio" name="indoor-outdoor"/>Indoor
  </label>
  <label for="outdoor">
    <input id="outdoor"  value ="outdoor" type="radio" name="indoor-outdoor"/>Outdoor
  </label>
  <button type="submit">Submit</button>
</form>
```

**Checked :**

```
To select value by default in radio / checkbox, "checked" property is used.

Note:
1. If "checked" is provided in more than radio inputs then latest radio is selected.
2. If "checked is provided in more than checkbox inputs then all checked inputs are selected.

Eg:
    <input checked id="indoor" type="radio" name="indoor-outdoor"/>Indoor
```
