 document.addEventListener("DOMContentLoaded", function() {
        const form = document.getElementById("pre-matricula");
        const errorMessages = document.getElementById("error-messages");

        form.addEventListener("submit", function (event) {
            event.preventDefault();
            errorMessages.innerHTML = ""; // Clear previous error messages

            const nomeAluno = document.getElementById("nome-aluno").value;
            const dataNascimento = document.getElementById("data-nascimento").value;
            const email = document.getElementById("email").value;
            const ddd = document.getElementById("ddd").value;
            const atividades = document.querySelectorAll("input[name='atividade-extracurricular']:checked");

            if (nomeAluno === "" || dataNascimento === "" || email === "" || atividades.length === 0) {
                errorMessages.innerHTML = "Todos os campos obrigatórios devem ser preenchidos.";
                return;
            }

            if (!isValidDate(dataNascimento)) {
                errorMessages.innerHTML = "Data de Nascimento inválida. Utilize o formato de data correto.";
                return;
            }

            if (!isValidEmail(email)) {
                errorMessages.innerHTML = "O e-mail deve conter '@' e '.' para ser válido.";
                return;
            }

            const validDDDs = ["11", "12", "13", "14", "15", "16", "17", "18", "19", "21", "22", "24", "27", "28", "31", "32", "33", "34", "35", "37", "38", "41", "42", "43", "44", "45", "46", "47", "48", "49", "51", "53", "54", "55", "61", "62", "63", "64", "65", "66", "67", "68", "69", "71", "73", "74", "75", "77", "79", "81", "82", "83", "84", "85", "86", "87", "88", "89", "91", "92", "93", "94", "95", "96", "97", "98", "99"];
            if (validDDDs.indexOf(ddd) === -1) {
                errorMessages.innerHTML = "DDD inválido. Utilize um DDD válido no Brasil.";
                return;
            }

            if (atividades.length > 3) {
                errorMessages.innerHTML = "Apenas até 3 atividades extracurriculares podem ser selecionadas.";
                return;
            }

            alert("Cadastro realizado com sucesso!");
            form.reset();
        });

        function isValidDate(dateString) {
            const pattern = /^\d{4}-\d{2}-\d{2}$/;
            if (!pattern.test(dateString)) return false;
            const date = new Date(dateString);
            return !isNaN(date.getTime());
        }

        function isValidEmail(email) {
            const pattern = /\S+@\S+\.\S+/;
            return pattern.test(email);
        }
    });
