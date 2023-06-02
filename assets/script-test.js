const form = document.querySelector('#form-habits'); 
// colocar numa variável o formulário

const nlwSetup = new NLWSetup(form) 
// usar a regra camel case (começar a segunda palavra com letra maiúscula)
// o new cria um novo objeto que neste caso é o NLWSetup

const data = {
    run: ['01-01', '01-02', '01-03'],
    read: ['01-05', '01-09']
    // chave precisa ser o mesmo nome chamado no html
}

nlwSetup.setData (data)
nlwSetup.load()
// o setData espera um objeto