import {React,useContext,useState} from 'react';
import {AppContext} from '../context/AppContext';
const Budget=()=>{
        //SET_BUDGET
        const {currency,budget,expenses,dispatch}=useContext(AppContext);
        const [newBudget,setNewBudget]=useState(budget.toString());
        //setNewBudget(budget);
        let handleChange = (data) => {
            setNewBudget(data);
            let tempBudget = parseInt(data);
            const totalExpenses = expenses.reduce((total, item) => {
                return (total = total + item.cost);
            }, 0);
            if(tempBudget>20000){
                alert("The value cannot exceed 20000");
                setNewBudget(budget.toString());
                return;
            }else if(tempBudget<totalExpenses){
                alert("You cannot reduce the budget value lower than the spending");
                setNewBudget(budget.toString());
                return;
            }
 
            dispatch({
                type:'SET_BUDGET',
                payload:tempBudget,
            });
            
            //event.persist();
        }
    
    //let optimisedHandleChange = debounce(handleChange,500);
    return (
        <div className='alert alert-secondary'>
            <span>Budget:{currency}
                    <input required='required' type='number' 
                        id='cost' value={newBudget} style={{marginLeft:'2rem',size:10}} step={10}
                        onChange={(event)=>handleChange(event.target.value)}>
                    </input>
            </span>
        </div>

    )
}
export default Budget;
