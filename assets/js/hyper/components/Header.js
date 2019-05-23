import { h, app } from 'hyperapp';

export default function Header({ state, actions }) {
  return (
    <header id="Home">
      <div class="container">
        <div class="logo">Logo</div>
        <div class="nav">
          <label for="toggle">&#9776;</label>
          <input type="checkbox" id="toggle" />
          <div class="menu">
            <a href="#Home">Home</a>
            <a href="#OurStory">Our Story</a>
            <a href="#SpecialMenu">Special Menu</a>
            <a href="#Reviews">Reviews</a>
            <a href="#Contact" id="last-link">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
