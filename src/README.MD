# Frontend Mentor Challenge - Space Tourism

I followed the [scrimba free couse] (https://scrimba.com/learn/spacetravel) taught by Kevin Powell. It's a very good tutorial for beginner and I have learned a lot of CSS tricks.
As I implemented the solution by React, many modifications are required when following along the tutorial.

## What I learned from this project

### Methodology: design system
Spending some time to set up design system will make the work afterwards much smoother. design-system.html is reference for typography, color and key components.

  - variables for color, typography.

  - utitily class (do one thing only)
    examples:
    ```css
      .flow > *:where(:not(:first-child)) {
        margin-top: var(--flow-space, 1rem);
      }
      ```

  - component (observe all design pages and identify the elements that used multiple times)
    example:
    ```css
      .underline-indicators > * {
        cursor: pointer;
        padding: var(--underline-gap, 1rem) 0;
        border: 0;
        border-bottom: .2rem solid hsl( var(--clr-white) / 0 );
      }
    ```
### CSS files in React project
  - index.css: imported in main.jsx
  - app.css: imported in App.jsx
considering the import sequence, it's logical to put more general CSS styles in index.css, like CSS reset, variables, utilities. And put CSS for specific classes or components in App.css

### CSS
  #### apply graphical effects to the area behind an element
    backdrop-filter: blue(10px)

  #### background image to fill all viewport
    background-repeat: no-repeat;
    background-size: cover;

  #### <picture></picuture> to add multiple format

### HTML attribute:
- hidden
- role: define context, javascript querySelectorAll("role=xxx")
- data attribute: cooridinate in javascript and css file.

### React
  #### 2 methods to use local images in react
  - 1. import image first
  ```
    import logo from "../assets/logo.svg"
    <img src={logo}>
  ```
  - 2. put folder which contains images in public/
  ```js
    const logo = "/assets/logo.svg"
    <img src={logo}>
  ```

### Hamburger icon for mobile device
hamburger icon can be set as background image of a button

Navbar.jsx
- html element
        <button
            className="mobile-nav-toggle"                         aria-controls="primary-navigation"
            onClick={toggleMenu} >
            <span className="sr-only" aria-expanded="false">Menu</span>
        </button>
<ul id="primary-navigation" data-visible="false">

- javascript function
```js
  const toggleMenu = () => {
    const menu = document.querySelector(".primary-navigation")
    const navToggle = document.querySelector(".mobile-nav-toggle")

    const visible = menu.dataset.visible

    if (visible === "false") {
        menu.dataset.visible = "true"
        navToggle.setAttribute("aria-expanded", true)
    } else {
        menu.dataset.visible = "false"
        navToggle.setAttribute("aria-expanded", false)
    }
  }
```

- App.css
```css
.mobile-nav-toggle {
    display: none;
}

@media (max-width: 35rem) {
    .mobile-nav-toggle {
    display: block;
    cursor: pointer;

    position: absolute;
    z-index: 2000;
    right: 1rem;
    top: 2rem;

    width: 1.5rem;
    aspect-ratio: 1;

    border: 0;
    background: transparent;
    background-image: url("/assets/shared/icon-hamburger.svg");
    background-repeat: no-repeat;
    background-position: center;
  }

  .primary-navigation[data-visible="true"] {
    transform: translateX(0);
    transition: transform 500ms ease-in-out;
  }
  .primary-navigation[data-visible="false"] {
    transform: translateX(100%);
    transition: transform 500ms ease-in-out;
  }
}
```

### Accessibility
aria-hidden="true|false"
aria-expanded="true|false"
aria-controls="primary-navigation" (nav bar's id)

customized class "sr-only" to only show text "menu" for hamburger menu to screen reader

/* Screen reader only */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

### Misc
- fixing picuture/text jump due to different size of content inside grid
.grid-container--dest picture {
  grid-area: image;
  max-width: 60%;
  align-self: start;
}

- in Technology page, image is in portrait style for desktop, and landscape for tablet and mobile device.
use Javascript to reach mediaquery
        var x = window.matchMedia("(min-width: 45em)")
        x.addEventListener('change', checkIsDesktop)
  in context.jsx:
  ```js
    const [isDesktop, setIsDesktop] = useState(window.matchMedia("(min-width: 45em)").matches)

    const checkIsDesktop = (x) => {
        setIsDesktop(x.matches)
    }

    useEffect( () => {
        var x = window.matchMedia("(min-width: 45em)")
        x.addEventListener('change', checkIsDesktop)
    },[])
  ```

  in Image.jsx:
  ```js
    imgSrc = info.images.landscape

    if (isDesktop) {
      imgSrc = imgSrc.replace("landscape", "portrait")
    }
  ```js