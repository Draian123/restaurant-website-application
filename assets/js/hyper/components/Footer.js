import { h, app } from 'hyperapp';

export default function Footer({ state, actions }) {
  return (
    <footer id="Contact">
      <div class="container">
        <nav class="menu">
          <a href="#Home">Home</a>
          <a href="#OurStory">Our Story</a>
          <a href="#Reviews">Reviews</a>
          <a href="#SpecialMenu">Special Menu</a>
          <a href="#Contact">Contact Us</a>
        </nav>

        <ul class="social-media">
          <li>
            <a href="http://www.facebook.com" target="new">
              <i class="fab fa-facebook-square" />
            </a>
          </li>
          <li>
            <a href="http://www.twitter.com" target="new">
              <i class="fab fa-twitter" />
            </a>
          </li>
          <li>
            <a href="http://www.google.com" target="new">
              <i class="fab fa-google-plus-g" />
            </a>
          </li>
          <li>
            <a href="http://www.youtube.com" target="new">
              <i class="fab fa-youtube" />
            </a>
          </li>
        </ul>
        <div class="copyright">© 2019 Copyright</div>
      </div>
    </footer>
  );
}
