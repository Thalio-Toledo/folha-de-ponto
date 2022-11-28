import React, { Component } from 'react'
import axios from 'axios'




const baseUrl = 'http://localhost:3001/pontos'
const initialState = {
    
    list: []
}

export default class FolhaDePontos extends Component {

    state = { ...initialState }

    componentWillMount() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }

    renderRows(){
        return this.state.list.map(ponto=>{
            return(
                 
                <tr key={ponto.id}>
                    <td>{ponto.data}</td>
                    <td>{ponto.entrada}</td>
                    <td>{ponto.saida}</td>
                </tr>
            )
        })
    }

    renderTable() {
        return (
            <div className=' card w-50 mt-5'>
                <h1>Folha de Pontos</h1>
            <table className=" table">
                
                <thead>
                    <tr>
                        
                        <th>Data</th>
                        <th>Entrada</th>
                        <th>Saida</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
            </div>
        )
    }

   
  
    render() {
        return (
            <div >
               
               
               {this.renderTable()}
            </div>
        )
    }
}
