# atualiza-usuario
código busca dados de usuários a partir de uma solicitação AJAX e atualiza o conteúdo de uma página HTML com esses dados. Também atualiza dois inputs HTML com informações adicionais quando um usuário é selecionado em uma tag HTML específica.

<hr>

JavaScript que utiliza a biblioteca jQuery. Ele faz duas coisas principais:

1) Realiza uma solicitação AJAX para o arquivo "lista-users.php" no servidor. Isso é feito usando a função "jQuery.ajax". Essa função recebe vários parâmetros, incluindo a URL da solicitação (no caso, "/lista-users.php"), o tipo de solicitação (no caso, "POST"), e um objeto "data" vazio. A função também tem uma função de callback "success", que é executada quando a solicitação é concluída com sucesso. O código dentro dessa função de callback é responsável por atualizar o conteúdo da tag HTML com o ID "usuario" com os dados retornados pela solicitação.

2) Adiciona um evento "change" à tag HTML com o ID "usuario". Quando o valor selecionado dessa tag é alterado, a função anônima dentro do método "jQuery(document).on('change', '#usuario', function(e){})" é executada. Essa função busca o valor selecionado e dois atributos personalizados (data-email e data-name) do elemento selecionado, e os insere em inputs HTML com os nomes "email" e "nome", respectivamente. Isso é feito usando a função "jQuery", que seleciona elementos HTML usando seletores CSS e manipula seus atributos ou conteúdo.

<hr>

<b>Detalhes:</b>

<details>

<summary>Passo 1:</summary>

```javascript

jQuery(document).ready(function(){
		
    jQuery.ajax({
        url: '/lista-users.php',
        type: 'POST',
        data: {},
        success: function(data){
            jQuery('#usuario').html(data);		
       
        }
    });
    
```

A solicitação AJAX é feita para o arquivo "lista-users.php" no servidor, usando o método HTTP POST. O objeto "data" está vazio, indicando que não há parâmetros adicionais sendo enviados na solicitação.

Quando a solicitação é bem-sucedida, a função de callback "success" é acionada, que recebe o parâmetro "data". A função então atualiza o conteúdo da tag HTML com o ID "usuario" com os dados retornados pela solicitação, utilizando a função "html()" da biblioteca jQuery.

</details>

<details>

<summary>Passo 2:</summary>

```javascript
jQuery(document).ready(function()
```

o evento que é executado quando o documento HTML é carregado e pronto para ser manipulado pelo JavaScript. Ele utiliza a biblioteca jQuery para selecionar o documento HTML e executar uma função anônima quando o documento estiver pronto.

A função anônima é executada quando o evento "ready" é acionado, e ela pode conter um conjunto de instruções em JavaScript que manipulam o conteúdo do documento HTML. Normalmente, esse evento é usado para executar código JavaScript que depende do carregamento completo do documento HTML, como selecionar elementos HTML, adicionar ou remover elementos, ou executar solicitações AJAX para carregar dados adicionais.

<i>Em resumo, esse código define um evento que é executado quando o documento HTML é carregado e pronto para ser manipulado pelo JavaScript, permitindo que o código manipule o conteúdo do documento com segurança.</i>

</details>

<details>

<summary>Passo 3:</summary>

```javascript
jQuery('#usuario').html(data);
```
função de callback que é executada quando uma solicitação AJAX é concluída com sucesso.

A função recebe um parâmetro "data" que contém os dados que foram retornados pelo servidor na resposta da solicitação AJAX.

Dentro da função, a biblioteca jQuery é usada para selecionar um elemento HTML com o ID "usuario" e atualizar seu conteúdo com os dados retornados na solicitação AJAX, usando a função html().

<i>Em resumo, esse código atualiza dinamicamente o conteúdo de um elemento HTML com os dados retornados de uma solicitação AJAX, sem a necessidade de recarregar toda a página.</i>

</details>

<details>

<summary>Passo 4</summary>

```javascript
jQuery(document).on('change', '#usuario', function(e)
```
define um evento que é acionado quando o valor selecionado em um elemento HTML com o ID "usuario" é alterado.

O método on() da biblioteca jQuery é usado para vincular um manipulador de eventos a um ou mais elementos HTML. Ele recebe vários parâmetros, incluindo o tipo de evento a ser tratado (neste caso, "change"), o seletor do elemento HTML que deve ser afetado (neste caso, "#usuario"), e uma função de retorno de chamada que é executada quando o evento é acionado.

Quando o valor selecionado no elemento HTML com o ID "usuario" é alterado, a função de retorno de chamada é acionada e recebe um objeto "e" que contém informações sobre o evento que foi acionado. Dentro da função, o código seleciona o valor e os atributos de dados do item selecionado usando o seletor de jQuery, e define os valores de dois elementos HTML input com os dados recuperados.

<i>Em resumo, esse código define um manipulador de eventos para o elemento HTML com o ID "usuario" que é acionado quando o valor selecionado é alterado, e atualiza dinamicamente os valores de dois elementos HTML input com os dados selecionados.</i>

</details>

<details>

<summary>Passo 5</summary>

```javascript
var id = jQuery("#usuario option").filter(':selected').val();
```
Seleciona o valor do item selecionado em um elemento HTML select com o ID "usuario" e armazena o valor em uma variável chamada "id".

A função jQuery() é usada para selecionar um elemento HTML e a função option() é usada para selecionar todos os elementos option dentro desse elemento select. O método filter() é usado para filtrar os elementos selecionados com base em um seletor (neste caso, ':selected'), que seleciona apenas o item selecionado no momento. A função val() é usada para retornar o valor do elemento selecionado.

<i>Em resumo, esse código seleciona o valor do item selecionado em um elemento HTML select com o ID "usuario" e o armazena na variável "id", que é usada posteriormente para atualizar dinamicamente o conteúdo de outros elementos HTML na página.</i>

</details>

<details>

<summary>Passo 6</summary>

```javascript
var email = jQuery("#usuario option").filter(':selected').attr('data-email');
	var name = jQuery("#usuario option").filter(':selected').attr('data-name');
	jQuery("input[name='email']").val(email);
	jQuery("input[name='nome']").val(name);
```
seleciona os atributos de dados personalizados ("data-email" e "data-name") do item selecionado em um elemento HTML select com o ID "usuario" e os usa para atualizar dinamicamente o valor de dois elementos HTML input na página.

Primeiro, a função jQuery() é usada para selecionar o elemento HTML select com o ID "usuario", em seguida, a função option() é usada para selecionar todos os elementos option dentro desse elemento select. O método filter() é usado para filtrar os elementos selecionados com base em um seletor (neste caso, ':selected'), que seleciona apenas o item selecionado no momento. Os métodos attr() são usados para selecionar os valores dos atributos de dados personalizados ("data-email" e "data-name") do elemento option selecionado e armazená-los nas variáveis "email" e "name", respectivamente.

Em seguida, a função jQuery() é usada novamente para selecionar dois elementos HTML input com os nomes "email" e "nome", e a função val() é usada para definir o valor desses elementos com os valores armazenados nas variáveis "email" e "name", respectivamente. Isso atualiza dinamicamente o conteúdo dos elementos input na página com os valores recuperados do elemento select.

<i>Em resumo, esse código usa os atributos de dados personalizados do elemento selecionado em um elemento HTML select com o ID "usuario" para atualizar dinamicamente o conteúdo de dois elementos HTML input na página. Isso permite que o conteúdo da página seja atualizado dinamicamente conforme o usuário seleciona diferentes opções no elemento select.</i>

</details>


<b>Créditos</b>
Adaptação: https://gist.github.com/dantetesta
<br>Explicação: Felipe Carvalho
