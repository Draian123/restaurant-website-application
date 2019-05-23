import { h, app } from 'hyperapp';

export default function OutStory({ state, actions }) {
  return (
    <section id="OurStory">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h5 class="comp-title">Our Story</h5>
            <h2>Cooking is the art of adjustment</h2>
            <p>
              Lorem ipsum dolor amet vHS lomo pour-over everyday carry, hell of
              austin jianbing succulents poke next level affogato migas
              williamsburg lo-fi kitsch. Flexitarian meditation portland
              ethical, squid mlkshk palo santo cray fingerstache direct trade
              snackwave pok pok ramps. Actually pour-over artisan mumblecore
              ennui. Fam fixie subway tile kale chips.
            </p>
            <div class="quote">
              "The best steak in the town Huntington"-{' '}
              <div class="strong">Thomas Eggsy</div>
            </div>
            <a href="#" class="reserve-btn">
              Reserve
            </a>
          </div>
          <div class="col-md-6">
            <div class="video-img" />
          </div>
        </div>
      </div>
    </section>
  );
}
