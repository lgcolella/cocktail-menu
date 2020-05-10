import React, { Component } from 'react';

export default class IngredientList extends Component {
    render () {
        let { ingredientNames, selectedIngredient, onSelectIngredient } = this.props

        return (
            <div>
                {ingredientNames && ingredientNames.length ? 
                    <table className="table table-hover">
                        <tbody>
                            {ingredientNames.map(name => {
                                let className = selectedIngredient === name ? 'bg-success text-white' : ''
                                return (
                                    <tr key={name} onClick={() => { onSelectIngredient(name) }}>
                                        <td className={'pointer-on-hover ' + className}>{name}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    :
                    'No available ingredient at the moment :('
                }
            </div>
        )
    }
}
