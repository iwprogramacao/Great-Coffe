
const openMenuButton = document.getElementById('openMenu')
const closeMenuButton = document.getElementById('closeMenu')
const menuItems = document.getElementById('menuItems')

function openMenu() {
  openMenuButton.classList.add("inactive")
  openMenuButton.classList.remove('active')
  closeMenuButton.classList.add('active')
  closeMenuButton.classList.remove('inactive')
  menuItems.classList.add('active')
  menuItems.classList.remove('inactive')
}

function closeMenu() {
  openMenuButton.classList.remove('inactive')
  openMenuButton.classList.add('active')
  closeMenuButton.classList.remove('active')
  closeMenuButton.classList.add('inactive')
  menuItems.classList.add('inactive')
  menuItems.classList.remove('active')
}