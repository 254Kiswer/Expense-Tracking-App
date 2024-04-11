import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/GlobalContext';
import { InnerLayout } from '../../styles/Layouts';
import Form from './Form/Form';
import Expenses from './Expenses';

function Expenses() {
  const {addExpenses, Expenses, getExpensess, deleteExpenses, totalExpenses} = useGlobalContext()

    useEffect(() => {
      getExpenses()
    }, [])
    
  return (
    <ExpenseStyled>
        <InnerLayout>
            <h1>Expenses</h1>
            <h2 className="total-Expenses">Total Expenses<span>${totalExpenses()}</span></h2>
            <div className="Expenses-content">
              <div className="form-container">
                <ExpenseForm/>
              </div>
              <div className="Expensess">
                {expensess.map((Expenses)=>{
                  const {_id, title, amount, date, category, description, type} = Expenses;
                  return <ExpensesItem
                    key={_id}
                    id={_id}
                    title={title}
                    description={description}
                    amount={amount} 
                    date={date}
                    type={type}
                    category={category} 
                    indicatorColor="var(--color-green)"
                    deleteItem= {deleteExpense}
                  
                  />
                   
                })}
              </div>
               </div>

        </InnerLayout>
    </ExpenseStyled>
  )
}
const ExpenseStyled = styled.div`
    display: flex;
    overflow: auto;
    .total-Expenses{
      display: flex;
      justify-content: center;
      align-items: center;
      background: #FCF6F9;
      border: 2px solid #FFFFFF;
      box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
      padding: 1rem;
      margin: 1rem 0;
      font-size: 2rem;
      gap: .5rem;
      span{
        font-size: 2.5rem;
        font-weight: 800;
        color: var(--color-green);
      }

    }
    
    .Expenses-content{
      display: flex;
      gap: 2rem;
      .Expensess{
        flex: 1
      }
    }
`;


export default Expenses