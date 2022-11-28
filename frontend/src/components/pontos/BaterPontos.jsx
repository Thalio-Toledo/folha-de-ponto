import React, { Component } from 'react'
import axios from 'axios'

const data = new Date().toLocaleDateString()
const baseUrl = 'http://localhost:3001/pontos'
const initialState = {
    ponto: { data: data, entrada: '', saida:'' },
    list:[]
   
}



export default class BaterPontos extends Component {
  
  constructor(props) {
    super(props);
    this.state = { ...initialState }

    this.updateField = this.updateField.bind(this);
    this.save = this.save.bind(this);
  }

  componentWillMount() {
    axios(baseUrl).then(resp => {
        this.setState({ list: resp.data })
    })
}

  save() {
    const ponto = this.state.ponto
    axios.post(baseUrl, ponto)
        .then(resp => {
            this.setState({ ponto: this.state.ponto })
        })
}
updateField(event) {
    const ponto = { ...this.state.ponto }
    ponto[event.target.name] = event.target.value.replace(/^(\d{2})(\d{2}).*/,"$1:$2");
    this.setState({ ponto })
}
renderForm(){
    return (
        
        <form className='card  w-50 mt-5'>
         
  <div class="mb-3 " >
    <h1>Marcar Pontos</h1>
    <label for="exampleInputEmail1" class="form-label">Entrada</label>
    <input name="entrada" value={this.state.ponto.entrada} onChange={e => this.updateField(e)} onInput={e=> this.mascaraHora('entrada')} maxlength="4" type="text" class="form-control"  aria-describedby="emailHelp"></input>
    <div id="emailHelp" class="form-text">Digite o horario de entrada</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Saída</label>
    <div id="emailHelp" class="form-text">Digite o horario de saída</div>
    <input name="saida" value={this.state.ponto.saida} onChange={e => this.updateField(e)}  onInput={e=> this.mascaraHora('saida')} maxlength="4" type="text" class="form-control"  ></input>
  </div>
  
  <button  onClick={e => this.save(e)} class="btn btn-primary">Enviar</button>
</form>
    )
}

render() {
    return (
        <div>
            {this.renderForm()}
        </div>
    )
}

}