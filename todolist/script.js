// document.getElementById('taskInput').addEventListener('keydown', function(event) {
//     if (event.key === 'Enter') {
//         addTask();
//     }
// });

// function addTask() {
//     const taskInput = document.getElementById('taskInput');
//     const taskList = document.getElementById('taskList');
    
//     if (taskInput.value.trim() !== "") {
//         const li = document.createElement('li');
//         li.innerHTML = `${taskInput.value} <button class="remove-btn" onclick="removeTask(this)">&#10060;</button>`;
//         li.addEventListener('click', function() {
//             li.classList.toggle('completed');
//         });
//         taskList.appendChild(li);
//         taskInput.value = "";
//     }
// }

// function removeTask(button) {
//     const li = button.parentElement;
//     li.remove();
// }
// const matrix = document.createElement('div');
//     matrix.classList.add('matrix');
//     document.body.appendChild(matrix);

//     const columns = 40;  // Number of columns of binary numbers
//     for (let i = 0; i < columns; i++) {
//         const column = document.createElement('div');
//         column.style.left = `${i * 2.5}%`;
//         column.style.setProperty('--i', Math.random());
//         matrix.appendChild(column);

//         for (let j = 0; j < 20; j++) {
//             const binary = document.createElement('span');
//             binary.innerText = Math.floor(Math.random() * 2);
//             column.appendChild(binary);
//         }
//     }
document.getElementById('taskInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

document.getElementById('taskInput').addEventListener('touchend', function() {
    addTask();
});

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    
    if (taskInput.value.trim() !== "") {
        const li = document.createElement('li');
        li.innerHTML = `${taskInput.value} <button class="remove-btn" onclick="removeTask(this)">&#10060;</button>`;
        
        li.addEventListener('click', function() {
            li.classList.toggle('completed');
        });
        
        li.addEventListener('touchend', function() {
            li.classList.toggle('completed');
        });

        let startX = 0;
        li.addEventListener('touchstart', function(event) {
            startX = event.touches[0].clientX;
        });

        li.addEventListener('touchmove', function(event) {
            const moveX = event.touches[0].clientX;
            const diffX = moveX - startX;
            if (diffX > 100) {
                removeTask(li.querySelector('.remove-btn'));
            }
        });

        taskList.appendChild(li);
        taskInput.value = "";
    }
}

function removeTask(button) {
    const li = button.parentElement;
    li.remove();
}


const matrix = document.createElement('div');
matrix.classList.add('matrix');
document.body.appendChild(matrix);

const columns = 40;  
for (let i = 0; i < columns; i++) {
    const column = document.createElement('div');
    column.style.left = `${i * 2.5}%`;
    column.style.setProperty('--i', Math.random());
    matrix.appendChild(column);

    for (let j = 0; j < 20; j++) {
        const binary = document.createElement('span');
        binary.innerText = Math.floor(Math.random() * 2);
        column.appendChild(binary);
    }
}
