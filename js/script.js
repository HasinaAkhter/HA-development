//window object
window.onload = function() {
	let emailModal = document.getElementsByClassName('email-modal')[0];
	let closeButton = document.getElementsByClassName('email-modal__close-btn')[0];
	let emailInput = document.getElementsByClassName('email-modal__input')[0];
	let emailButton = document.getElementsByClassName('email-modal__button')[0];
	let thankContainer = document.getElementsByClassName('email-thank')[0];
    let declineOffer = document.getElementsByClassName('email-modal__decline-offer')[0];
	let emailState = false;

	let showModal = () => {
		if (emailState == false) {
			emailModal.classList.add('email-modal--visible');
			emailState = true;
		}
	};

	let closeModal = () => {
		emailModal.classList.remove('email-modal--visible');
	};

	let addErrors = () => {
		document.getElementsByClassName('email-modal__form-group')[0].classList.add('email-modal__form-group--error');
		document
			.getElementsByClassName('email-modal__error-message')[0]
			.classList.add('email-modal__error-message--active');
	};

	let removeErrors = () => {
		document
			.getElementsByClassName('email-modal__form-group')[0]
			.classList.remove('email-modal__form-group--error');
		document
			.getElementsByClassName('email-modal__error-message')[0]
			.classList.remove('email-modal__error-message--active');
	};

	let thankMessage = () => {
		thankContainer.classList.add('email-thank--success');
        setTimeout(
            ()=>{
          closeModal();
        }, 3000)
	};

	function emailValid(email) {
		return /\S+@\S+\.\S+/.test(email);
	}

	emailInput.addEventListener('click', () => {
		removeErrors();
	});

	emailButton.addEventListener('click', () => {
		if (emailValid(emailInput.value)) {
			thankMessage();
		} else addErrors();
	});

    declineOffer.addEventListener('click', () => {
		closeModal();
	});

	closeButton.addEventListener('click', () => {
		closeModal();
	});

	document.body.addEventListener('mouseleave', () => {
		showModal();
	});

	console.log(document);
};
