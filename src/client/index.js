import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

export { checkForName }
export{handleSubmit}

//Event listener to get things done taken from: https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event, https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector and https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    document.querySelector('form').addEventListener('submit', handleSubmit)
});
