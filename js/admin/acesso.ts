document.getElementById('notification-form')?.addEventListener('submit', function (event: Event): void {
  event.preventDefault(); // Evita o envio padrão do formulário

  // Obtém os valores dos campos do formulário
  const dateInput = (document.getElementById('data') as HTMLInputElement)?.value;
  const enderecoInput = (document.getElementById('endereco') as HTMLInputElement)?.value;

  // Obtém os elementos de exibição de confirmação
  const confirmationMessage = document.getElementById('confirmation-message') as HTMLDivElement;
  const confirmedDate = document.getElementById('confirmed-date') as HTMLParagraphElement;
  const confirmedEndereco = document.getElementById('confirmed-endereco') as HTMLParagraphElement;

  if (dateInput && enderecoInput) {
    // Atualiza a data e o endereço confirmados
    confirmedDate.textContent = `Data Confirmada: ${dateInput}`;
    confirmedEndereco.textContent = `Endereço Confirmado: ${enderecoInput}`;
    confirmationMessage?.classList.remove('d-none'); // Exibe a mensagem de confirmação

    // Limpa os campos do formulário
    (document.getElementById('data') as HTMLInputElement).value = '';
    (document.getElementById('endereco') as HTMLInputElement).value = '';
  } else {
    alert('Por favor, preencha todos os campos antes de confirmar.');
  }
});
