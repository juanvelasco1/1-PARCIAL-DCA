export { characters };

fetch('https://hp-api.onrender.com/api/characters')
	.then((response) => response.json())
	.then((characters) => {
		const container = document.getElementById('characters-container');

		characters.forEach((character) => {
			const card = document.createElement('div');
			card.classList.add('character-card');

			const name = document.createElement('h2');
			name.textContent = `Nombre principal: ${character.name}`;
			card.appendChild(name);

			const alternateNameButton = document.createElement('button');
			alternateNameButton.textContent = 'Mostrar nombre alternativo';
			alternateNameButton.addEventListener('click', () => {
				name.textContent = `Nombre alternativo: ${character.alternate_name}`;
			});
			card.appendChild(alternateNameButton);

			const specie = document.createElement('p');
			specie.textContent = `Especie: ${character.species}`;
			card.appendChild(specie);

			const gender = document.createElement('p');
			gender.textContent = `Género: ${character.gender}`;
			card.appendChild(gender);

			const house = document.createElement('p');
			house.textContent = `Casa: ${character.house}`;
			card.appendChild(house);

			const yearOfBirth = document.createElement('p');
			yearOfBirth.textContent = `Año de nacimiento: ${character.yearOfBirth}`;
			card.appendChild(yearOfBirth);

			container.appendChild(card);
		});
	})
	.catch((error) => console.error('Error al obtener los datos:', error));
