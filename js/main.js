(function() {
	const navToggle = document.getElementById('navToggle');
	const siteNav = document.getElementById('siteNav');
	if (navToggle && siteNav) {
		navToggle.addEventListener('click', () => {
			const isOpen = siteNav.classList.toggle('open');
			navToggle.setAttribute('aria-expanded', String(isOpen));
		});
	}

	const year = document.getElementById('year');
	if (year) {
		year.textContent = new Date().getFullYear();
	}

	const quizForm = document.getElementById('quizForm');
	const quizResult = document.getElementById('quizResult');
	if (quizForm && quizResult) {
		quizForm.addEventListener('submit', (e) => {
			e.preventDefault();
			const answer = new FormData(quizForm).get('q1');
			if (answer === 'b') {
				quizResult.textContent = 'إجابة صحيحة: الوسائط المتعددة تمزج نصًا، صورة، صوتًا وفيديو.';
				quizResult.style.color = '#16a34a';
			} else {
				quizResult.textContent = 'إجابة غير صحيحة، حاول مرة أخرى.';
				quizResult.style.color = '#dc2626';
			}
		});
	}

	// Enable reveal only after JS is active
	document.documentElement.classList.add('reveal-init');

	// Scroll reveal animations
	const animated = document.querySelectorAll('.animate-on-scroll');
	if (animated.length && window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('is-visible');
					observer.unobserve(entry.target);
				}
			});
		}, { threshold: 0.12 });
		animated.forEach((el, idx) => {
			el.style.setProperty('--i', String(idx));
			observer.observe(el);
		});
	}
})();


