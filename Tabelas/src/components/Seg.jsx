import React from 'react';
import './Seg.css'

export function Seg() {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>HORARIOS</th>
            <th>SEGUNDA</th>
            <th>TERCA</th>
            <th>QUARTA</th>
            <th>QUINTA</th>
          </tr>
        </thead>
        <tbody>
        <tr>
          <th>19:00</th>
          <th>Modelagem de Dados</th>
          <th>---</th>
          <th>---</th>
          <th>---</th>
        </tr>
        <tr>
          <th>19:45</th>
          <th>Modelagem de Dados</th>
          <th>Front-end</th>
          <th>Front-end</th>
          <th>Redes de comp.</th>
        </tr>
        <tr>
          <th>20:45</th>
          <th>Estrutura de Dados</th>
          <th>Front-end</th>
          <th>Modelagem de Dados</th>
          <th>Redes de comp.</th>
        </tr>
        <tr>
          <th>21:30</th>
          <th>Estrutura de Dados</th>
          <th>Engenharia de Softw.</th>
          <th>Engenharia de Softw.</th>
          <th>Redes de comp.</th>
        </tr>
        <tr>
          <th>22:15</th>
          <th>Estrutura de Dados</th>
          <th>Engenharia de Softw.</th>
          <th>Engenharia de Softw.</th>
        </tr>
        </tbody>     
      </table>
    </div>
  );
}

export default Seg()