import './App.scss';
import arrowleft from './assets/icon-arrow-left.svg'
import arrowright from './assets/icon-arrow-right.svg'
import amyImg from './assets/image-amy.webp'

import graphicdesign from './assets/pattern-graphic-design.svg'
import apps from './assets/pattern-apps.svg'
import illustrations from './assets/pattern-illustrations.svg'
import Motion from './assets/pattern-motion-graphics.svg'
import Photography from './assets/pattern-photography.svg'
import UI from './assets/pattern-ui-ux.svg'

import logo from './assets/logo.svg'

import Img1 from './assets/image-slide-1.jpg'
import Img2 from './assets/image-slide-2.jpg'
import Img3 from './assets/image-slide-3.jpg'
import Img4 from './assets/image-slide-4.jpg'
import Img5 from './assets/image-slide-5.jpg'
import { useRef } from 'react';



function App() {
	const galleryRef = useRef(null)
	const indexRef = useRef(null)
	const showPrevImage = () => {
		const imgs = document.querySelectorAll(".images li")
		indexRef.current = indexRef.current -1 < 0 ? imgs.length -1 : indexRef.current -1;
		imgs[indexRef.current].scrollIntoView({
			behavior:"smooth",
			block:"nearest",
			inline:"center"
		})

	}
	const showNextImage = () => {
		const imgs = document.querySelectorAll(".images li")
		indexRef.current = indexRef.current + 1 >= imgs.length ? 0 : indexRef.current + 1;
		imgs[indexRef.current].scrollIntoView({
			behavior:"smooth",
			block:"nearest",
			inline:"center"
		})
	}

  return (
    <div className='App'>
      <header>
		<img src={logo} alt=""/>
		<button>Free Consultation</button>
	</header>
	<main>
		<section>
			<div>
				<h2>Design solution made easy</h2>
				<p>With over ten years of experience in various design disciplines, I'm your one-stop shop for your design needs.</p>
			</div>
			<ul>
				<li><img src={graphicdesign} alt=""/>
				<h3>Graphic Design</h3></li>
				<li><img src={UI} alt=""/>
					<h3>UI/UX</h3></li>
				<li><img src={apps} alt=""/>
					<h3>App</h3></li>
				<li><img src={Photography} alt=""/>
					<h3>Photography</h3></li>
				<li><img src={illustrations} alt=""/>
					<h3>Illustrations</h3></li>
				<li><img src={Motion} alt=""/>
					<h3>Motion Graphics</h3></li>
			</ul>
		</section>

		<section className="about-me">
			<img src={amyImg} alt=""/>
			<section>
				<h3>I'm Amy, and I'd love to work on your next project</h3>
				<p>I love working with others to create beautiful design solutions. I've designed everything from brand illustrations to complete mobile apps. I'm also handy with a camera!</p>
				<button className="orange-btn">Free Consultation</button>
			</section>
		</section>

		<section>
			<h3>My Work</h3>
			<ul className="images" ref={galleryRef}>
				<li><img src={Img1} alt=""/></li>
				<li><img src={Img2} alt=""/></li>
				<li><img src={Img3} alt=""/></li>
				<li><img src={Img4} alt=""/></li>
				<li><img src={Img5} alt=""/></li>
			</ul>
			<section className="change-buttons">
				<button id="prev-btn" onClick={showPrevImage} ><img src={arrowleft} alt=""/></button>
				<button id="next-btn" onClick={showNextImage} ><img src={arrowright} alt=""/></button>
			</section>
		</section>
		<section className="book-call">
			<section>
				<h3>Book a call with me</h3>
				<p>I'd love to have a chat to see how I can help you. The best first step is for us to discuss your project during a free consultation. Then we can move forward from there.</p>
			</section>
			<button className="orange-btn">Free Consultation</button>
		</section>
		
	</main>
	<footer>
		<img src={logo} alt=""/>
	<button>Free Consultation</button>
	</footer>
    </div>
  );
}

export default App;
