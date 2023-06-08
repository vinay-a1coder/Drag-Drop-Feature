// Get the containers and the reset button
const container1 = document.getElementById('container1');
const container2 = document.getElementById('container2');
const resetBtn = document.getElementById('resetBtn');

// Add event listeners for drag and drop events
container1.addEventListener('dragstart', handleDragStart);
container2.addEventListener('dragover', handleDragOver);
container2.addEventListener('drop', handleDrop);
resetBtn.addEventListener('click', resetContainers);

// Event handler for dragstart event
function handleDragStart(event) {
  event.dataTransfer.setData('text/plain', event.target.innerHTML);
  event.currentTarget.style.opacity = '0.4';
}

// Event handler for dragover event
function handleDragOver(event) {
  event.preventDefault();
}

// Event handler for drop event
// Event handler for drop event
function handleDrop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData('text/plain');
    const newItem = document.createElement('div');
    newItem.classList.add('item');
    newItem.innerHTML = data;
    event.currentTarget.appendChild(newItem);
    container1.removeChild(container1.querySelector('.item.dragged'));
    event.currentTarget.classList.add('success');
    
    // Display success message
    const successMessage = document.createElement('p');
    successMessage.innerText = 'Item dropped successfully!';
    successMessage.classList.add('success');
    container2.appendChild(successMessage);
  }
  

// Event handler for reset button click event
function resetContainers() {
    container1.innerHTML = `
      <ul>
        <li class="item" draggable="true">Item 1</li>
        <li class="item" draggable="true">Item 2</li>
        <li class="item" draggable="true">Item 3</li>
      </ul>
    `;
    container2.innerHTML = '';
    container2.classList.remove('success');
  }
  