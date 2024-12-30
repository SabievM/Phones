import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const FetchCategories = () => {
    const [dataCat, setDataCat] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const { slug } = useParams()
    useEffect(() => {
        const fetchData = async () => {
            try{
                setIsLoading(true)
                const resp = await axios.get("http://127.0.0.1:8000/api/categories")
                setDataCat(resp.data)
            } catch(err) {
                console.log("error",err)
            }
            setIsLoading(false)
        }
        fetchData();
    }, [slug])
    const mediaUrl = "http://127.0.0.1:8000/api/media/products/"
    return {dataCat, isLoading, mediaUrl}
}

export default FetchCategories;