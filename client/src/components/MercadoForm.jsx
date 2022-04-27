import React, {useState} from 'react'
import { useDispatch, useSelector } from "react-redux";


export function MercadoForm(props) {
    const [total, setTotal] = useState("");
  
    handleChange = (e) => {
      this.setState({value: e.target.value});
    }
  
    handleSubmit = (e) => {
      e.preventDefault();
    }
  
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Total:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
  }

