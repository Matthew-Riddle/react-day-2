// const contactModalLink = document.getElementById('contactModalLink')

// const showModal = () => {
//   contactModal.classList.add('is-active')
// }

// const hideModal = () => {
//   contactModal.classList.remove('is-active')
// }

document.addEventListener('DOMContentLoaded', function () {
  const contactModal = document.getElementById('contactModal')

  // Get all "navbar-burger" elements
  const navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll('.navbar-burger'),
    0
  )

  // Get all modal elements
  const modalButtons = Array.prototype.slice.call(
    document.querySelectorAll('.modal-button'),
    0
  )

  // const contactModal = document.getElementById('contactModal')

  // Check if there are any navbar burgers
  if (navbarBurgers.length > 0) {
    // Add a click event on each of them
    navbarBurgers.forEach(button => {
      button.addEventListener('click', () => {
        // Get the target from the "data-target" attribute
        const target = button.dataset.target
        const menu = document.getElementById(target)

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        button.classList.toggle('is-active')
        menu.classList.toggle('is-active')
      })
    })
  }

  if (modalButtons.length > 0) {
    modalButtons.forEach(button => {
      button.addEventListener('click', () => {
        contactModal.classList.toggle('is-active')
      })
    })
  }
})
