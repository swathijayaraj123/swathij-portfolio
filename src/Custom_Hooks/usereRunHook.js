import { useEffect, useState } from "react"


function useRun(currency){
// const [firstcountryCode, setfirstcountryCode] = useState('inr')
// const [secondcountryCode, setsecondcountryCode] = useState('usd')
const [data, setData] = useState([])

useEffect(()=>{
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency }.json`)
    .then((res)=> res.json())
    .then((data) => setData(data))
    
}, [currency] )


return data[currency]
}
export default useRun