import { createContext, useCallback, useState, useMemo } from "react"
import { converterParaNumero } from "../utils/converterParaNumero"

export const DespesaContext = createContext()

export function DespesaProvider({children}){
    const[expense, setExpense] = useState([])
    const[formEditToggle, setFormEditToggle] = useState(false)
    const[selectedExpense, setSelectedExpense] = useState(null)

    const addExpense = useCallback((newExpense)=>{
        setExpense((prev)=> ([...prev, newExpense]))
    })

    const editExpense = useCallback((id, updateExpense)=>{
        setExpense((prev)=> prev.map((expense)=> expense.id === id ? {...expense, ...updateExpense} : expense))
    }, [])

    const groupedByDate = useMemo(()=>{
        const grouped = expense.reduce((acc, valueGrouped)=>{
          const month = valueGrouped.data.slice(0, 7)
          const valueExpense = converterParaNumero(valueGrouped.valorDespesas)
          
          if (!acc[month]){
            acc[month] = 0
          }
    
          acc[month] += valueExpense;
          return acc
    
        }, {})
    
        const arrayGrouped = Object.entries(grouped)
        
        return arrayGrouped;
    
      }, [expense])

    return(
        <DespesaContext.Provider value={{expense, selectedExpense, groupedByDate, formEditToggle, setFormEditToggle, setSelectedExpense, addExpense, editExpense}}>
            {children}
        </DespesaContext.Provider>
    )
}