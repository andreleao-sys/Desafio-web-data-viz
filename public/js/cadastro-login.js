const imagem_de_fundo = document.getElementById("imagem_de_fundo");
const sair_icone = document.getElementById("sair_icone");
const cad_sucesso = document.getElementById("div_cad_sucesso");
const main = document.querySelector(" main");
const text_nome = document.getElementById(`texto_nome_usuario`);
const text_senha = document.getElementById(`texto_senha`);
const nome_login = document.getElementById(`ipt_nome_usuario`);
const senha_login = document.getElementById(`ipt_senha`);
const titulo_erro = document.getElementById("titulo_erro");
const mensagem_erro = document.getElementById("mensagem_erro");
const div_alerta = document.getElementById("div_alerta");
const div_cad = document.getElementById("div_cad_sucesso");
const titulo_cad = document.getElementById("titulo_cad");
const mensagem_cad = document.getElementById("mensagem_cad");
const bottom_mensagem_cad = document.getElementById("bottom_mensagem_cad");
const caracteresEspeciais = "!@#$%^&*()_+-=[]{};':|,.<>/?";
const numeros = "0123456789";
const letrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
const letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const especiais = "!#$%&'()*+,-:;<=>?@[]^_`{|}~´`^~¨§ªº°";
const senha = document.getElementById("ipt_senha");
const icone = document.getElementById("icone_senha_log");
let senha_log_visivel = false;
let senha_visivel = false;
let listaEmpresasCadastradas = []
function digitando_cad(x) {
    let texto_x = document.getElementById(`texto_${x}`);
    let ipt_x = document.getElementById(`ipt_${x}`);
    texto_x.style.color = "black";
    texto_x.style.position = "relative";
    texto_x.style.transform = "translate(-2.4vw, -6vh)";
    texto_x.style.transition = "0.7s ease-in-out";
    ipt_x.style.borderBottom = "solid 4pxrgba(199, 21, 199, 0.6)";
    if (x == 'nome_usuario_cad') {
        procurar_nome()
    }
    if (x == 'senha_cad') {
        digitando_senha()
    }
}
function digitando_login(x) {
    let texto_x = document.getElementById(`texto_${x}`);
    let ipt_x = document.getElementById(`ipt_${x}`);
    texto_x.style.color = "black";
    texto_x.style.position = "relative";
    texto_x.style.transform = "translate(-2.4vw, -6vh)";
    texto_x.style.transition = "0.7s ease-in-out";
    ipt_x.style.borderBottom = "solid 4px black";
}
function trocar_login() {
    imagem_de_fundo.style.transform = "translateX(100%)"
    imagem_de_fundo.style.backgroundSize = "cover"
    sair_icone.src = "assets/svg/sair.svg"
}
function trocar_cadastro() {
    sair_icone.src = "assets/svg/sair_branco.svg"
    imagem_de_fundo.style.transform = "translateX(0%)"
    imagem_de_fundo.style.backgroundSize = "cover"

}
function tirar_alerta() {
    div_alerta.style = "display:none"
    main.style = "filter: blur(0px);  "
}
function trocar_login_alerta() {
    imagem_de_fundo.style.background = "url('./assets/img/fundo_nephis.png')"
    imagem_de_fundo.style.transform = "translateX(100%)"
    imagem_de_fundo.style.backgroundSize = "cover"
    cad_sucesso.style.display = "none"
    main.style = "filter: blur(0px);  "
}
function cadastrar() {
    let nome_usuario = ipt_nome_do_usario_cad.value
    let email = ipt_email.value
    let senha = ipt_senha_cad.value
    let conf_senha = ipt_conf_senha.value
    let codigo = ipt_nome_usuario_cad.value
    let valido = false;
    let contem_Maiuscula = false;
    let contem_Minuscula = false;
    let contem_Numero = false;
    let contem_Especial = false;
    let i = 0

    let caracter = 0


    for (i; i < senha.length; i++) {
        caracter = senha[i];
        if (letrasMaiusculas.includes(caracter)) {
            contem_Maiuscula = true;
        }
        if (letrasMinusculas.includes(caracter)) {
            contem_Minuscula = true;
        }
        if (numeros.includes(caracter)) {
            contem_Numero = true;
        }
        if (caracteresEspeciais.includes(caracter)) {
            contem_Especial = true;
        }
    }
    var umarroba = false
    var arroba_invalido = false
    for (let i = 1; i <= email.lenght; i++) {
        if (email[i] == '@' && umarroba == false) {
            umarroba = true
            break
        }
        if (email[i] == '@' && umarroba == true) {
            arroba_invalido = true
        }
    }
    let idEmpresaVincular = 0
    let empresa = false  // Verificando se o código de ativação é de alguma empresa cadastrada
    for (let i = 0; i < listaEmpresasCadastradas.length; i++) {
        if (listaEmpresasCadastradas[i].codigo_ativacao == codigo) {
            idEmpresaVincular = listaEmpresasCadastradas[i].id
            console.log("Código de ativação válido.");
            empresa = true
            break;
        } else {
            empresa = false
        }
    }

    div_alerta.style = "display:1"
    main.style = "filter: blur(2.4px); "
    while (valido == false) {
        if (senha == '' && nome_usuario == '' && conf_senha == '' && email == '' && codigo == '') {
            titulo_erro.innerHTML = "Campos vazios"
            mensagem_erro.innerHTML = "Porfavor, precha os campos vazios"
            break
        }
        if (nome_usuario == '') {
            titulo_erro.innerHTML = "Campo de usuário vazio"
            mensagem_erro.innerHTML = "Porfavor, digita o seu nome"
            break
        }
        if (email == '') {
            titulo_erro.innerHTML = "E-mail vazio"
            mensagem_erro.innerHTML = "Porfavor, digita o seu e-mail"
            break
        }
        if (arroba_invalido == true) {
            titulo_erro.innerHTML = "E-mail invalido"
            mensagem_erro.innerHTML = "Porafavor, verifique seu e-mail."
            break
        }
        if (senha == '') {
            titulo_erro.innerHTML = "Campo de senha vazio"
            mensagem_erro.innerHTML = "Porfavor, digite a sua senha"
            break
        }
        if (senha.length < 8) {
            titulo_erro.innerHTML = "Senha Curta"
            mensagem_erro.innerHTML = "Senha curta, digite mais carateres"
            break
        }
        if (!contem_Maiuscula) {
            titulo_erro.innerHTML = "Senha sem maiuscula"
            mensagem_erro.innerHTML = "Porfavor, insira pelo menos uma letra maiúscula."
            break
        }
        if (!contem_Minuscula) {
            titulo_erro.innerHTML = "Senha sem minuscula"
            mensagem_erro.innerHTML = "Porfavor, adicione uma letra minúscula à sua senha."
            break
        }
        if (!contem_Numero) {
            titulo_erro.innerHTML = "Senha sem número"
            mensagem_erro.innerHTML = "Porfavor, insira pelo menos um número na sua senha"
            break
        }
        if (!contem_Especial) {
            titulo_erro.innerHTML = "Senha sem caratere especial"
            mensagem_erro.innerHTML = "Sua senha carece de caos. Adicione um caratere especial: ! @ # $ % ..."
            break
        }
        if (senha != conf_senha) {
            titulo_erro.innerHTML = "As senhas não coincidem"
            mensagem_erro.innerHTML = "Porfavor, verifique os campos de sua senha e confirmação"
            break
        }
        if (empresa == false) {
            titulo_erro.innerHTML = "Codigo de ativação invalido"
            mensagem_erro.innerHTML = "Porfavor, verifique o campo de codigo de empresa"
            break
        }
        if (contem_Maiuscula && contem_Especial && contem_Minuscula && contem_Numero && (senha == conf_senha)) {
            valido = true
            div_alerta.style.display = "none"
        }

    }
    if (valido) {
        fetch("/usuarios/cadastrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                idEmpresaVincularServer: idEmpresaVincular,
                nomeServer: nome_usuario,
                emailServer: email,
                senhaServer: senha,
            }),
        })
            .then(function (resposta) {
                console.log("resposta: ", resposta);
                if (resposta.ok) {
                    cad_sucesso.style.display = "flex"
                    main.style.filter = "blur(2px)"
                    ipt_nome_usuario.value = email;
                    ipt_senha.value = senha;
                    text_nome.style.color = "black";
                    text_nome.style.position = "relative";
                    text_nome.style.transform = "translate(-2.4vw, -6vh)";
                    text_nome.style.transition = "0.7s ease-in-out";
                    nome_login.style.borderBottom = "solid 4px black";
                    text_senha.style.color = "black";
                    text_senha.style.position = "relative";
                    text_senha.style.transform = "translate(-2.4vw, -6vh)";
                    text_senha.style.transition = "0.7s ease-in-out";
                    senha_login.style.borderBottom = "solid 4px black";
                } else {
                    div_alerta.style.display = "flex"
                    titulo_erro.innerHTML = "Opa, algo deu errado no cadastro "
                    mensagem_erro.innerHTML = "Houve um erro ao tentar realizar o cadastro!"
                }
            })
            .catch(function (resposta) {
                div_alerta.style.display = "flex"
                titulo_erro.innerHTML = "Opa, algo deu errado no cadastro"
                mensagem_erro.innerHTML = resposta
                console.log(`#ERRO: ${resposta}`);
            });
        return false;
    }
}
function esqueci() {
    placeholder.style = "color: #7aa7a4;top: 0vh;"
    ipt_esqueci_senha.style.borderBottom = "solid 4px #7aa7a4";
}
function activar_esqueci() {
    cartao_esqueci_senha.style = "display:1"
    main.style = "filter: blur(2.4px);  "
    provando.style = "display:none"
}

function verificar() {
    var usuario = ipt_nome_usuario.value
    var senha = ipt_senha.value
    var verificar = true
    while (verificar == true) {
        div_alerta.style = "display:1"
        main.style = "filter: blur(2.4px); "
        if (usuario == '' && senha == '') {
            titulo_erro.innerHTML = "Campos vazios"
            mensagem_erro.innerHTML = "Nem ao menos tentou. O vazio responde com silêncio."
            break
        }
        if (usuario == '') {
            titulo_erro.innerHTML = "Campo de usuário vazio"
            mensagem_erro.innerHTML = "Nem um nome? Até as sombras têm identidade."
            break
        }
        if (senha == '') {
            titulo_erro.innerHTML = "Campo de senha vazio"
            mensagem_erro.innerHTML = "Sem uma chave, não há porta que se abra. Nem mesmo as escondidas na escuridão."
            break
        }
        div_alerta.style.display = "none"
        verificar = false
    }
    if (verificar == false) {
        console.log("FORM LOGIN: ", usuario);
        console.log("FORM SENHA: ", senha);
        fetch("/usuarios/autenticar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                emailServer: usuario,
                senhaServer: senha
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO entrar()!")
            if (resposta.ok) {
                console.log(resposta);
                resposta.json().then(json => {
                    console.log(json);
                    console.log(JSON.stringify(json));
                    sessionStorage.EMAIL_USUARIO = json.email;
                    sessionStorage.NOME_USUARIO = json.nome;
                    sessionStorage.ID_USUARIO = json.id;
                    sessionStorage.BOTANICAS = JSON.stringify(json.aquarios)
                    setTimeout(function () {
                        window.location = "dashboard/cards.html";
                    }, 2000);
                    div_alerta.style.display = "none"
                    div_cad.style.display = "flex"
                    titulo_cad.innerHTML = "Login com Sucesso"
                    mensagem_cad.innerHTML = ` Bem-vindo de volta, ${json.nome}.`
                    bottom_mensagem_cad.innerHTML = `ENTRANDO...`
                });

            } else {
                div_alerta.style.display = "flex"
                titulo_erro.innerHTML = "Opa, usuario ou senha errados "
                mensagem_erro.innerHTML = "Procure onde você se perdeu. Porque aqui, você não está."

                resposta.text().then(texto => {
                    console.error(texto);
                    div_alerta.style.display = "flex"
                    titulo_erro.innerHTML = "Opa, login invalido"
                    mensagem_erro.innerHTML = texto
                });
            }

        }).catch(function (erro) {
            console.log(erro);
        })
        return false;
    }
}
function mostrar_senha() {
    const senha = document.getElementById("ipt_senha_cad")
    const conf_senha = document.getElementById("ipt_conf_senha")
    const icone = document.getElementById("icone_senha_cad")
    const icone_2 = document.getElementById("icone_senha_cad_conf")
    if (senha_visivel == false) {
        senha.type = "text"
        conf_senha.type = "text"
        icone.src = "assets/svg/icon/ionicons/sharp/eye-sharp.svg"
        icone_2.src = "assets/svg/icon/ionicons/sharp/eye-sharp.svg"
        senha_visivel = true
    } else {
        senha.type = "password"
        conf_senha.type = "password"
        icone.src = "assets/svg/lock-closed.svg"
        icone_2.src = "assets/svg/lock-closed.svg"
        senha_visivel = false
    }
}
function procurar_nome() {
    var nome = document.getElementById('ipt_nome_usuario_cad').value
    if (nome == '') {
        return
    }
    fetch(`/usuarios/verificar_nome/${nome}`, { cache: 'no-store' }).then(function (response) {
        console.log(response)
        if (response.ok) {
            document.getElementById('resultado_nome').style.color = `#5a5a5a`
            document.getElementById('resultado_nome').innerHTML = `Já existe um úsuario com com este nome`
        } else {
            document.getElementById('resultado_nome').style.color = `#7aa7a4`
            document.getElementById('resultado_nome').innerHTML = 'Nome de usuario disponivel';
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados de nome de usuario:  ${error.message}`);
        });
}
function digitando_senha() {
    let senha = document.getElementById('ipt_senha_cad').value;
    let temMaiusculo = false, temMinusculo = false, temNumero = false, temEspecial = false;
    for (let i = 0; i < senha.length; i++) {
        var c = senha[i];
        if (c >= 'A' && c <= 'Z') temMaiusculo = true;
        if (c >= 'a' && c <= 'z') temMinusculo = true;
        if (!isNaN(c)) temNumero = true;
        if (especiais.includes(c)) temEspecial = true;
    }
    document.getElementById('maiusculo').style.color = temMaiusculo ? "black" : "#5a5a5a";
    document.getElementById('minusculo').style.color = temMinusculo ? "black" : "#5a5a5a";
    document.getElementById('numero').style.color = temNumero ? "black" : "#5a5a5a";
    document.getElementById('especial').style.color = temEspecial ? "black" : "#5a5a5a";
    document.getElementById('minimo').style.color = senha.length >= 8 ? "black" : "#5a5a5a";
}
function mostrar_senha_log() {
    if (senha_log_visivel == false) {
        senha.type = "text"
        icone.src = "assets/svg/icon/ionicons/sharp/eye-sharp.svg"
        senha_log_visivel = true
    } else {
        senha.type = "password"
        icone.src = "assets/svg/olho_fechado.svg"
        senha_log_visivel = false
    }
}
// Listando empresas cadastradas
function listar() {
    fetch("/empresas/listar", {
        method: "GET",
    })
        .then(function (resposta) {
            resposta.json().then((empresas) => {
                empresas.forEach((empresa) => {
                    listaEmpresasCadastradas.push(empresa);

                    console.log("listaEmpresasCadastradas")
                    console.log(listaEmpresasCadastradas[0].codigo_ativacao)
                });
            });
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });
}