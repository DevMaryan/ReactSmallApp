import React from 'react';
import PropTypes from 'prop-types';
import '../css/loader.css';
import '../css/table.css';

export function Table({listOfItems, deleteItem}){

    console.log(listOfItems)
    return(
        <div id = "table">
            <table>
                <thead>
                    <tr>
                        <th>Day</th>
                        <th>Month</th>
                        <th>Year</th>
                        <th>Delete</th>
                    </tr>
                </thead>          
                <tbody>
                    {listOfItems.length > 0 ?
                        listOfItems.map((item,i)=>{
                            return(
                                <tr key = {item.theId}>
                                    <td>{item.theday}</td>
                                    <td>{item.themonth}</td>
                                    <td>{item.theyear}</td>
                                    <td><button className = 'btn-trash' onClick={() => deleteItem(item.theId)}><i className="fas fa-trash-alt"></i></button></td>
                            </tr>
                            )
                        })
                    : <div className="lds-ripple"><div></div><div></div></div>}
                    

                </tbody>      
            </table>

        </div>
    )
}

Table.propTypes = {
    listOfItems: PropTypes.arrayOf(PropTypes.object).isRequired,
    deleteItem: PropTypes.func,
}