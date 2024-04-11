import React, {useContext, useState} from "react"
import axios from 'axios'


const BASE_URL = "http://LOCALHOST:5000/api/v1/";

const GlobalContext = React.createContext()


export const GlobalProvider = ({children})=>{

    const [incomes, setIncomes] = useState([])
    const [expenses, setExpenses] = useState([])
    const[error, setError] = useState([null])
   
    //calculate Expenses
     
    const addIncome =async (income) => {
        const response = await axios.post(`${BASE_URL}add-income`, income)
        .catch((err) => {
            setError(err.response.data.message)
        })
        getExpenses()
    }
    const getIncomes = async () =>{
        const response = await axios.get('${BASE_URL}get-incomes')
        setExpenses(response.data) 
        console.log(response.data)

    }

    const deleteIncome = async (id) => {
        const res = await axios.delete('${BASE_URL}delete-income/${id}')
        getExpenses()
    }

    const totalIncome = () => {
        let totalIncome = 0;
        Expenses.forEach((income) => {
            totalIncome = totalIncome + income.amount
        })
        return totalIncome();
    }

     //calculate Expenses
     
     const addExpense = async (expense) => {
        const response = await axios.post(`${BASE_URL}add-expense`, expense)
        .catch((err) => {
            setError(err.response.data.message)
        })
        getExpenses()
    }
    const getExpenses = async () =>{
        const response = await axios.get('${BASE_URL}get-expenses')
        setExpenses(response.data) 
        console.log(response.data)

    }

    const deleteExpense = async (id) => {
        const res = await axios.delete('${BASE_URL}delete-expense/${id}')
        getExpenses()
    }

    const totalExpenses = () => {
        let totalIncome = 0;
        expenses.forEach((income) => {
            totalexpense = totalExpense + income.amount
        })
        return totalIncome();
    }

    const totalBalance = () => {
        return totalIncome() - totalExpenses()
    }

    const transactionHistory = () => {
        const history = [ ...incomes, ...expenses]
        history.sort((a, b)=>{
            return new Date(b.createdAt) - new Date(a.createdAt)
        })

        return history.slice(0, 3)
    }

    return (
        <GlobalContext.Provider value={{
            addIncome,
            getExpenses,
            incomes,
            deleteIncome,
            totalIncome,
            addExpense,
            expenses,
            getExpenses,
            deleteExpense,
            totalExpenses,
            totalBalance,
            transactionHistory,
            error,
            setError

        }}>
            {children}
        </GlobalContext.Provider>
    ) 
}
export const useGlobalCntext= () => {
    return useContext(GlobalContext)
}