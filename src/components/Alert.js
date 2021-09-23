import React from 'react';
import PropTypes from 'prop-types';
import '../css/popup.css';

export function Alert({objectList,hideForm}){


    return(
        <div id="popup">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>City</th>
                        <th>Dob</th>
                        <th>GPA</th>
                    </tr>
                </thead>
                <tbody>
                    {objectList.map((item) =>{
                            return(
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.city}</td>
                                    <td>{item.dob}</td>
                                    <td>{item.gpa}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <span onClick={hideForm}>X</span>
        </div>
    )
}

Alert.propTypes ={
    objectList:PropTypes.array,
    hideForm:PropTypes.func
}
