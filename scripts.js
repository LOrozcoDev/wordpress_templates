fetch('proyectos.json')
    .then(res => res.json())
    .then(data => {
        const grid = document.getElementById('projectGrid');
        data.forEach(project => {
            const card = document.createElement('div');
            card.className = ' bg-dark-bg  dark:bg-white bg-opacity-10 dark:bg-opacity-20 backdrop-blur-[10px] rounded-md border-2 border-dark-bg dark:border-white border-opacity-30 dark:shadow-glass-dark shadow-glass-light  transition-transform hover:scale-105 p-4 rounded-lg shadow border';

            card.innerHTML = `
        ${project.thumbnail ? `<img src="${project.thumbnail}" class="w-full h-40 object-cover rounded mb-2" alt="${project.name}">` : ''}
        <h2 class="text-lg font-bold">${project.name}</h2>
        <a href="${project.url}" class="text-blue-600 underline" target="_blank">Ver proyecto</a>
        `;

            grid.appendChild(card);
        });
    });