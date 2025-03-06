$(document).ready(function () {
  $("#myInput").on("keyup", function () {//pesquisar dados
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });

  $('.btn-filter').on('click', function () {//filtrar contas
    var $target = $(this).data('target');
    if ($target != 'all') {
      $('.table tr').css('display', 'none');
      $('.table tr[data-status="' + $target + '"]').fadeIn('slow');
    } else {
      $('.table tr').css('display', 'none').fadeIn('slow');
    }
  });
});

function importarDados() {
  Papa.parse("dados.csv", {
      download: true,
      header: true,
      complete: function (results) {
          let tabela = document.getElementById('myTable');
          let linhas = '';
          results.data.forEach(function (linha) {
              linhas += '<tr>';
              for (let chave in linha) {
                  linhas += '<td>' + linha[chave] + '</td>';
              }
              linhas += '</tr>';
          });
          tabela.innerHTML = linhas;
      }
  });
}

