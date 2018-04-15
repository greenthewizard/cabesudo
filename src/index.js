import './styles/style.scss';
import contentBlock from './contentblock.js';

const $content = document.querySelector('#content');
const $innerWrapper = document.querySelector('#inner-wrapper');
const $tabContent = document.querySelector('#tab-content');
const $navLinks = document.querySelectorAll('nav a');
const $footer = document.querySelector('footer');

let currentPage = 0;
let isAnimating = false;

const pages = [
	contentBlock($tabContent, `
		<article class="hug-left">
			<h3>We're all about Authentic Portuguese Dining &trade;</h3>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
			</p>
			<p>
				Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</p>
		</article>
		<article>
			<h3>Let us know how you "really" feel</h3>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
			</p>
			<p id="contact-cta">
				<a href="#">Contact Us</a>
			</p>
		</article>
	`),
	contentBlock($tabContent, `
		<article class="menu-item">
			<h3>Caldo Verde</h3>
			<p>The <em>most authentic</em> Portuguese soup in the world. Potato based with kale, olive oil, and chourico.</p>
		</article>
		<article class="menu-item">
			<h3>Chicken Livers</h3>
			<p><em>Mind blowing</em> livers cooked with onions, peppers, and finished in a mild cream sauce.</p>
		</article>
		<article class="menu-item">
			<h3>Garlic Bread</h3>
			<p>Lightly toasted Portuguese roll with garlic.</p>
		</article>
	`),
	contentBlock($tabContent, `
		<article>
			<h3>Address</h3>
			<p>123 Definitely A Street, Placeville, AZ 12345</p>
		</article>
		<article>
			<h3>Hours</h3>
			<ul>
				<li>Monday through Friday: 11:00 AM to 10:00 PM</li>
				<li>Saturday: 11:00 AM to 12:00 AM</li>
				<li>Sunday: Closed</li>
			</ul>
		</article>
		<article>
			<h3>Call Us</h3>
			<p>Reach us at (555) 555-5555.</p>
		</article>
	`)
];

$navLinks.forEach(link => {
	// link.addEventListener('click', goToPage);
	link.addEventListener('click', goToPage);
});

function goToPage(e) {
	const $current = document.querySelector('.active');
	const $new = e.target;
	if ($current.dataset.key === $new.dataset.key) { 
		return; //Do nothing if same page.
	}

	$tabContent.addEventListener('transitionend', setNewHeight, { once: true });
	currentPage = $new.dataset.key;

	$tabContent.classList.toggle('hide');
	$footer.classList.toggle('hide');
	$current.classList.remove('active');
	$new.classList.add('active');

}

function setNewHeight(e) {
	e.stopPropagation();
	$content.addEventListener('transitionend', fadeIn, { once: true });
	pages[currentPage].display();
	$content.style.height = $innerWrapper.offsetHeight + "px";
}

function fadeIn(e) {
	console.log('fade in');
	$tabContent.classList.toggle('hide');
	$footer.classList.toggle('hide');
}

const $active = document.querySelector('.active');
pages[$active.dataset.key].display();

//Set initial height;
$content.style.height = $innerWrapper.offsetHeight + "px";