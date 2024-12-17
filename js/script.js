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

  document.getElementById('reserva-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const areaComum = document.getElementById('area-comum').value;
    const data = document.getElementById('data').value;
    const horario = document.getElementById('horario').value;
  
    const servicosAdicionais = [];
    if (document.getElementById('limpeza').checked) servicosAdicionais.push('Limpeza');
    if (document.getElementById('decoracao').checked) servicosAdicionais.push('Decoração');
    if (document.getElementById('catering').checked) servicosAdicionais.push('Catering');
  
    const dividirReserva = document.getElementById('dividir-reserva').value;
  
    const mensagem = document.getElementById('mensagem');
    mensagem.textContent = `Reserva confirmada para ${areaComum} no dia ${data} às ${horario}.`;
    if (servicosAdicionais.length > 0) {
      mensagem.textContent += ` Serviços adicionais: ${servicosAdicionais.join(', ')}.`;
    }
    if (dividirReserva) {
      mensagem.textContent += ` Reserva dividida com: ${dividirReserva}.`;
    }
    mensagem.className = 'alert alert-success';
  });
  document.getElementById('manutencao-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const area = document.getElementById('area').value;
    const dataManutencao = document.getElementById('data-manutencao').value;
  
    const listaCronograma = document.getElementById('lista-cronograma');
    const manutencaoItem = document.createElement('li');
    manutencaoItem.className = 'list-group-item';
    manutencaoItem.textContent = `Área: ${area}, Data: ${dataManutencao}`;
  
    listaCronograma.appendChild(manutencaoItem);
  });
  document.addEventListener('DOMContentLoaded', () => {
    const toggleThemeButton = document.getElementById('toggle-theme');
        toggleThemeButton.addEventListener('click', () => {
            const htmlElement = document.documentElement;
            if (htmlElement.getAttribute('data-bs-theme') === 'dark') {
                htmlElement.setAttribute('data-bs-theme', 'light');
                toggleThemeButton.textContent = "Modo Escuro";
            } else {
                htmlElement.setAttribute('data-bs-theme', 'dark');
                toggleThemeButton.textContent = "Modo Claro";
            }
        });
  });
