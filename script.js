
    var categoriaSelect = document.getElementById('categoria');
    var unidadeOrigemSelect = document.getElementById('unidadeOrigem');
    var unidadeDestinoSelect = document.getElementById('unidadeDestino');
    var escolhaSelect = document.getElementById('escolha');

    
    categoriaSelect.addEventListener('change', function() {
      var categoria = categoriaSelect.value;
      
      if (categoria === 'comprimento') {
        populateOptions(['Metro (m)', 'Centímetros (cm)', 'Polegadas (in)']);
      } else if (categoria === 'peso') {
        populateOptions(['Quilogramas (kg)', 'Gramas (g)', 'Libras (lb)']);
      } else if (categoria === 'temperatura') {
        populateOptions(['Celsius (°C)', 'Fahrenheit (°F)', 'Kelvin (°K)']);
      }else if (categoria === 'escolha') {
        populateOptions(['Selecione uma categoria'])
      }
    });
    
    function populateOptions(options) {
      unidadeOrigemSelect.innerHTML = '';
      unidadeDestinoSelect.innerHTML = '';
      
      options.forEach(function(option) {
        var optionElement = document.createElement('option');
        optionElement.value = option;
        optionElement.textContent = option;
        
        unidadeOrigemSelect.appendChild(optionElement);
        unidadeDestinoSelect.appendChild(optionElement.cloneNode(true));
      });
    }


    // Seletor do botão de converter
var converterBtn = document.querySelector('.converter-btn');

/// Adicionar ouvinte de evento ao botão
converterBtn.addEventListener('click', function() {
  // Obter os valores digitados e selecionados
  var valor = document.getElementById('valor').value;
  var categoria = categoriaSelect.value;
  var unidadeOrigem = unidadeOrigemSelect.value;
  var unidadeDestino = unidadeDestinoSelect.value;
  
  // Verificar se o campo "valor" está vazio
  if (valor === '') {
    // Exibir mensagem de erro
    alert( document.getElementById('area-resultado').value = 'Por favor, insira um valor.');
  } else {
    // Verificar se algum dos outros campos está vazio
    if (categoria === '' || unidadeOrigem === '' || unidadeDestino === '') {
      // Exibir mensagem de erro
      alert(document.getElementById('area-resultado').value = 'Por favor, preencha todos os campos.');
    } else {
      // Realizar a conversão
      var resultado = realizarConversao(valor, categoria, unidadeOrigem, unidadeDestino);
      
      // Exibir o resultado na caixa de texto
      document.getElementById('area-resultado').value = resultado;
    }
  }
});

// Adicionar ouvinte de evento para a tecla Enter pressionada em qualquer lugar selecionado da tela
document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    // Disparar o evento de clique no botão Converter
    converterBtn.click();
  }
})

// Função para realizar a conversão
function realizarConversao(valor, categoria, unidadeOrigem, unidadeDestino) {
  if (unidadeOrigem === unidadeDestino) {
    return parseFloat(valor);
  }

  // CONVERSÕES DE MASSA/PESO 
  if (categoria === 'peso') {
    if (unidadeOrigem === 'Quilogramas (kg)' && unidadeDestino === 'Gramas (g)') {
      return (valor * 1000).toFixed(2);
    } else if (unidadeOrigem === 'Gramas (g)' && unidadeDestino === 'Quilogramas (kg)') {
      return (valor / 1000).toFixed(2);
    } else if (unidadeOrigem === 'Libras (lb)' && unidadeDestino === 'Quilogramas (kg)') {
      return (valor * 0.453592).toFixed(2);
    } else if (unidadeOrigem === 'Quilogramas (kg)' && unidadeDestino === 'Libras (lb)') {
      return (valor * 2.20462).toFixed(2);
    } else if (unidadeOrigem === 'Gramas (g)' && unidadeDestino === 'Libras (lb)') {
      return (valor / 453.592).toFixed(2);
    } else if (unidadeOrigem === 'Libras (lb)' && unidadeDestino === 'Gramas (g)') {
      return (valor * 453.592).toFixed(2);
    }

    // CONVERSÕES DE COMPRIMENTO 
  } else if (categoria === 'comprimento') {
    if (unidadeOrigem === 'Metro (m)' && unidadeDestino === 'Centímetros (cm)') {
      return (valor * 100).toFixed(2);
    } else if (unidadeOrigem === 'Centímetros (cm)' && unidadeDestino === 'Metro (m)') {
      return (valor / 100).toFixed(2);
    } else if (unidadeOrigem === 'Polegadas (in)' && unidadeDestino === 'Centímetros (cm)') {
      return (valor * 2.54).toFixed(2);
    } else if (unidadeOrigem === 'Centímetros (cm)' && unidadeDestino === 'Polegadas (in)') {
      return (valor / 2.54).toFixed(2);
    } else if (unidadeOrigem === 'Metro (m)' && unidadeDestino === 'Polegadas (in)') {
      return (valor * 39.37).toFixed(2);
    } else if (unidadeOrigem === 'Polegadas (in)' && unidadeDestino === 'Metro (m)') {
      return (valor / 39.37).toFixed(2);
    }

    // CONVERSÕES DE TEMPERATURA 
  } else if (categoria === 'temperatura') {
    if (unidadeOrigem === 'Celsius (°C)' && unidadeDestino === 'Fahrenheit (°F)') {
      return ((valor * 9/5) + 32).toFixed(2);
    } else if (unidadeOrigem === 'Fahrenheit (°F)' && unidadeDestino === 'Celsius (°C)') {
      return ((valor - 32) * 5/9).toFixed(2);
    } else if (unidadeOrigem === 'Celsius (°C)' && unidadeDestino === 'Kelvin (°K)') {
      return (parseFloat(valor) + 273.15).toFixed(2);
    } else if (unidadeOrigem === 'Kelvin (°K)' && unidadeDestino === 'Celsius (°C)') {
      return (parseFloat(valor) - 273.15).toFixed(2);
    } else if (unidadeOrigem === 'Fahrenheit (°F)' && unidadeDestino === 'Kelvin (°K)') {
      return ((parseFloat(valor) + 459.67) * 5/9).toFixed(2);
    } else if (unidadeOrigem === 'Kelvin (°K)' && unidadeDestino === 'Fahrenheit (°F)') {
      return ((parseFloat(valor) * 9/5) - 459.67).toFixed(2);
    }
  }

  
  return "Conversão inválida";
}

