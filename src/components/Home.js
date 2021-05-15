// svg
import intro from '../assets/bg-pattern-intro.svg';
import Navbar from './Navbar';

export default function Home() {
  return (
    <div id="home">
      <Navbar />
      <img className="bg-pattern" src={intro} alt="pattern" />
      <div className="container">
        <div className="home-heading">A modern publishing platform</div>
        <div className="home-subheading">
          {' '}
          Grow your audience and build your online brand{' '}
        </div>
        <div className="home-buttons">
          <button className="start">Start for Free</button>
          <button className="learn">Learn More</button>
        </div>
      </div>
    </div>
  );
}
