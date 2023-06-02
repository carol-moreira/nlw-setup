const form = document.querySelector('#form-habits'); 
// colocar numa variável o formulário

const nlwSetup = new NLWSetup(form) 
// usar a regra camel case (começar a segunda palavra com letra maiúscula)
// o new cria um novo objeto que neste caso é o NLWSetup

const button = document.querySelector('header button')

button.addEventListener('click', add) 
// quando clicar no botão ele dispara a função criada

form.addEventListener('change', save)
// sempre que o form for mudado ele guarda o save

function add() {
    const today = new Date().toLocaleDateString('pt-br').slice(0, -5)
    //a função slice corta um pedaço do código
    const dayExists = nlwSetup.dayExists(today) 
    // pega a variável "nlwSetup" e verifica se o "today" existe
    //se existir ele retorna true, caso contrário false então não entra no if (que precisa de um valor true)

    if (dayExists) { 
        alert('Dia já incluso') 
        return
    }

    alert('Adicionado com sucesso!')
    // retorna essa mensagem caso o dia não existe pois o valor de dayExists no primeiro momento é false
    nlwSetup.addDay(today)
}

function save() {
    localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
    // localStorage é um objeto que guarda infos na memória do browser
    // stringfy transforma o objeto em string
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {} // || ou - {} objeto vazio
nlwSetup.setData(data)
nlwSetup.load()

