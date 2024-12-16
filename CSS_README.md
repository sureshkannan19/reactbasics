**To create a box:**

```
 #box {
    width: 100px;
    height: 100px;
    padding: 25px;
    display: flex;
    justify-content: center; /* Centers horizontally */
    align-items: center; /* Centers vertically */
    box-sizing: border-box; /* Ensures padding is included in total dimensions */
    border: 5px solid green;
  }
```

**CSS Ruleset:**

selector: pseudo-class::pseudo-element {
declaration block
}

Eg:

```
.container p:first-child::first-letter {
  font-size:42px;
  text-transform: uppercase;
}

```

**Image tag:**

```
1. "src" -> url and "alt" -> alternate text if image doesnt load
<img src="https://github.com/sureshkannan19/reactbasics/blob/main/src/assets/Ronaldo.webp" alt="freeCodeCamp logo">
```

<hr>
**Anchor tag:**

```
1. Link to external pages
<a href="https://medium.com/@sureshbabk19">My blog</a>

2. Link to external pages in new window tab: target="_blank"
<a href="https://medium.com/@sureshbabk19" target="_blank">My blog</a>

3. Link to internal section: Start with # and 'id' attribute of the element that you want internally link to.
<a href="#section-two">My blog</a>
<div id="section-one"></div>
<div id="section-two"></div>

4. Convert image as link : Wrap image tag with anchor tag as below.
<a href="#"><img src="https://github.com/sureshkannan19/reactbasics/blob/main/src/assets/Ronaldo.webp" alt="CR7"></a>
```

<hr>
**Style tag:**

```
1. Inline style: Inline style overrides both class and id property
<p style="color : red;"></p>
2. Using Selectors:
  p {
    color: red;
  }
3. Using Class Name:
  .blue-text {
    color: blue;
  }
4. Using Id: Preferred over class, if an element has both class and id property then preference given to id
#green-text {
  background-color: green;
}
5.Using type attribute
  Eg:
  [type='checkbox'] {
    margin: 10px 0px 15px 0px;
  }
6. Declaration order: Class2 overrides the former, because its declared last.
  <h2 class="class1 class2">I am SK</h2>
7. To override all approaches(inline, class, id) mark a property that you want to override as
  p {
    color: pink !important;
  }

```

<hr>

**Sizing properties:**

```
1. width : 500px;
2. border-color: green;
3. border-width: 10px;
4. border-style: solid;
5. border-radius: 10px;
6. border-radius: 50%; -- makes the element circle
7. padding - it will increase the distance (padding) between the text and the border around it.
  Eg:
    padding-top: 40px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-left: 40px;
  Eg: Clockwise notation: top right left bottom
    padding: 40px 20px 20px 40px;

8. margin - controls the amount of space between an element's border and surrounding elements.
   Eg:
   margin: -15px; -- when negative value given, element expands
   margin: 15px; -- when positive value given, element contracts
   Different margin properties:
   Eg:
    margin-top: 40px;
    margin-right: 20px;
    margin-bottom: 20px;
    margin-left: 40px;
9. border
10. height: 25px;
```

<hr>

**Coloring properties:**

```
1. rgb(0, 0, 0) to rgb(255, 255, 255)
2. #000000 to #FFFFFF
```

<hr>

**Variable:**

```
1. Create a CSS Variable by prefixing "--".
  Eg: --fixed-bg-color: green;
2. Use CSS Variable by prefixing "--".
  Eg:
  p {
    background: var(--fixed-bg-color);
  }
3. Fallback value
   Eg:
   p {
      background: var(--fixed-bg-color, black);
    }
4. Different/older browsers wont accept CSS property, so as a fallback mechanism, set value at root
   Eg:
   :root {
      --red-color: red;
    }
5. To override CSS Variable in specific cases, re-declare inside specific proprety (classname, id, tag):
     Eg:
     <style>
      :root {
        --fixed-bg-color: gray;
      }
      h2 {
        --fixed-bg-color: white; -- Only at h2 value is overrided
      }
      body {
        background: var(--fixed-bg-color); -- remains gray
      }
6. Media Query with break point: when the screen exceeds the media query break point, the default value comes   into picture.
  :root {
    --fixed-bg-color: white;
    --fixed-size: 400px;
  }
  @media (max-width: 350px) {
    :root {
      --fixed-bg-color: black;
      --fixed-size: 200px;
    }
  }

```

<hr>

**Format text properties:**

```
 1. font-size: 30px;
 2. font-family: sans-serif;
 3. font-family: Lobster, monospace ; -- 2nd value after comma is optional and acts as a fallback value
    Eg:
    <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
      h2 {
        font-family: Lobster, monospace ; -- Lobster is imported from google fonts api, if google font API is down then fallback font-family is given as monospace.
      }
 4. italicized properties:
    <em></em>
 5. Strikthrough text: <s>Text</s>
 6. Strong font: <strong>Text</strong>
 7. Text align: text-align: justify/center/right/left;
 8. Horizontal line: <hr>

```

**Positioning:**

```
 1. position: relative -- move the item away from where it is normally positioned
 2. top, bottom, left, right - offset properties to shift element
 3. position: absolute --  locks the element in place relative to its parent container,
    removes the element from the normal flow of the document and using offset properties element is shifted.
    Note: if parent container does have position: relative property then it goes up the chain locks itelf to body tag.
 4. position: fixed; -- on scroll elements stays fixed
```

**Transform visual content:**

```
1. a:hover
   Eg: a:hover {
        color: red;
      }
2. Opacity:
    A value of 1 is opaque, which isn't transparent at all.
    A value of 0.5 is half see-through.
    A value of 0 is completely transparent.
    Eg: opacity: 0.7;
3.  text-transform: lowercase/uppercase/initial/inherit/none;

```

<hr>

**Absolute Vs Relative Units:**

```

```

<hr>

**Unordered list:**

```
Displayed as bullet points:
<ul>
  <li>milk</li>
  <li>cheese</li>
  <li>rat</li>
</ul>
```

<hr>

**Ordered list:**

```
Displayed in numbers from value 1:
<ol>
  <li>milk</li>
  <li>cheese</li>
  <li>rat</li>
</ol>
```
