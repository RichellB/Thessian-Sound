import React from 'react';


class BeatStore extends React.Component {
    render () {
        return (
        <div class="content">
        <ul class="beatstest">
          <li>
            <div class="beattest">
              <img class="beattest-image" src="images/like-that.jpeg" alt="beat" />
              <div class="beat-name">
                <a href="beat.html">Like That</a>
              </div>
              <div class="beat-artist">Tayte</div>
              <div class="beat-price">$200</div>
            </div>
          </li>
          <li>
            <div class="beat">
              <img class="beat-image" src="images/guzu.jpeg" alt="beat" />
              <div class="beat-name">
                <a href="beat.html">Guzu</a>
              </div>
              <div class="beat-artist">Alfred</div>
              <div class="beat-price">$50</div>
            </div>
          </li>
          <li>
            <div class="beat">
              <img class="beat-image" src="images/valhalla1.jpeg" alt="beat" />
              <div class="beat-name">
                <a href="beat.html">Valhalla</a>
              </div>
              <div class="beat-artist">Dyference</div>
              <div class="beat-price">$190</div>
            </div>
          </li>
          </ul>
          </div>
          );
          }
}

export default BeatStore;