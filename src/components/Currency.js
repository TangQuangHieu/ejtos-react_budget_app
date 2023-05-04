import {React,useContext,useState} from 'react';
import {AppContext} from '../context/AppContext';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
const Budget=()=>{
    let options = ['$Dollar','£Pound','€Euro','₹Ruppee'];
    let optionSymbols=['$','£','€','₹'];
    //SET_BUDGET
    const {currency,dispatch}=useContext(AppContext);
    const [cur,setCur]=useState(options[0]);
    //const [newBudget,setNewBudget]=useState(budget.toString());
    //setNewBudget(budget);
        
    //['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Danger']
    
    let variant = 'Success';
    let handleSelect = (eventKey)=>{
        console.log(eventKey);
        let index = parseInt(eventKey);
        setCur(options[index]);
        dispatch({
            type:'CHG_CURRENCY',
            payload:optionSymbols[index],
        });
    }
    return (
        <DropdownButton
            as={ButtonGroup}
            key='Currency'
            id='dropdown-Currency'
            variant={variant.toLowerCase()}
            title={cur}
            onSelect = {handleSelect}
        >
        <Dropdown.Item eventKey="0">{options[0]}</Dropdown.Item>
        <Dropdown.Item eventKey="1">{options[1]}</Dropdown.Item>
        <Dropdown.Item eventKey="2">{options[2]}</Dropdown.Item>
        <Dropdown.Item eventKey="3">{options[3]}</Dropdown.Item>
        {/* <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item> */}
      </DropdownButton>

    )
}
export default Budget;
