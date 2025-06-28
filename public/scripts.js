fetch('proyectos.json')
    .then(res => res.json())
    .then(data => {
        const grid = document.getElementById('projectGrid');
        data.forEach(project => {
            const card = document.createElement('div');
            card.className = 'bg-white p-4 rounded-lg shadow border';

            card.innerHTML = `
        ${project.thumbnail ? `<img src="${project.thumbnail}" class="w-full h-40 object-cover rounded mb-2" alt="${project.name}">` : ''}
        <h2 class="text-lg font-bold">${project.name}</h2>
        <a href="${project.url}" class="text-blue-600 underline" target="_blank">Ver proyecto</a>
        `;

            grid.appendChild(card);
        });
    });