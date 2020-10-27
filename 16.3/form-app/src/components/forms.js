import React, { Component } from 'react'


class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      estadoFavorito: '',
      nome: '',
      email: '',
      idade: 0,
      vaiComparecer: false,
      palavraChaveFavorita: ''
    };
  }

  handleChange({ target }) {
    const { name } = target
    const value = target.type === 'checkbox' ? target.checked : target.value
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">
          {/* <label>
            Diga qual o seu Estado favorito! De React ou do Brasil, você decide! =)
              <textarea name="estadoFavorito" value={this.state.estadoFavorito} onChange={this.props.add(this.state.estadoFavorito)} />
          </label> */}
          {/* <label>
            email
            <input name="email" type="email" value={this.state.email} onChange={this.props.add(this.state.email)}/>
          </label> */}

          <label>
            nome
            <input name="name" type="text" value={this.state.name} onChange={this.props.add(this.state.name)}/>
          </label>
        </form>

        {/* <label>
            idade
            <input name="idade" type="number" value={this.state.idade} onChange={this.handleChange}/>
          </label>

          <label>
            vai comparecer á conferência?
            <input name="vai comparecer" type="checkbox" value={this.state.vaiComparecer} onChange={this.handleChange}/>
          </label>

          <label>
            Escolha sua palavra chave favorita:
            <select>
              <option value="estado">Estado</option>
              <option value="evento">Evento</option>
              <option value="props">Props</option>
              <option value="hooks">hooks</option>
            </select>
          </label> */}

      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  add: e => dispatch(addAssignment(e))});
export default connect(null, mapDispatchToProps)(forms);
