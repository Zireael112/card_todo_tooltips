const tooltips = document.querySelectorAll('.has-tooltip')

function setTooltipActive() {
    const tooltip = document.getElementsByClassName('tooltip_active')[0]
  
    event.preventDefault(); 
  
    if (tooltip !== undefined) {
        tooltip.classList.remove('tooltip_active')
            if (tooltip.textContent == this.title) {
                return false;
              }
            }
  
    const createEl = document.createElement('div')
    createEl.classList.add('tooltip', 'tooltip_active')
    createEl.textContent = this.getAttribute('title')
    const position= this.getBoundingClientRect()
    createEl.style.top = position.bottom + 3 + 'px'
    createEl.style.left = position.left + 'px'
    document.body.append(createEl); 
  }

for (let element of tooltips) {
    element.addEventListener('click', setTooltipActive)
}
