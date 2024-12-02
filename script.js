document.getElementById('add-chamado').addEventListener('click', function() {
    const chamadosList = document.getElementById('chamados-list');
    const chamadoItem = document.createElement('li');
    chamadoItem.className = 'list-group-item d-flex justify-content-between align-items-center';
    chamadoItem.textContent = 'Novo Chamado';
    
    const removeButton = document.createElement('button');
    removeButton.className = 'btn btn-danger btn-sm';
    removeButton.textContent = 'Remover';
    removeButton.addEventListener('click', function() {
      chamadosList.removeChild(chamadoItem);
    });
    
    chamadoItem.appendChild(removeButton);
    chamadosList.appendChild(chamadoItem);
  });