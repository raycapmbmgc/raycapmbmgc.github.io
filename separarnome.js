<!DOCTYPE html>
<html>
<head>
    <title>Copiar e Separar Nome</title>
</head>
<body>
    <h1>Copiar e Separar Nome</h1>
    <label for="nomeCompleto">Digite o nome completo:</label>
    <input type="text" id="nomeCompleto">
    <button onclick="copiarESepararNome()">>></button>

    <label for="nome">Nome:</label>
    <input type="text" id="nome" disabled>
    <label for="sobrenome">Sobrenome:</label>
    <input type="text" id="sobrenome" disabled>

    <script>
        function copiarESepararNome() {
            var nomeCompleto = document.getElementById("nomeCompleto").value;
            var partes = nomeCompleto.split(" ");
            var nome = partes[0];
            var sobrenome = partes.slice(1).join(" ");
            document.getElementById("nome").value = nome;
            document.getElementById("sobrenome").value = sobrenome;
        }
    </script>
</body>
</html>
