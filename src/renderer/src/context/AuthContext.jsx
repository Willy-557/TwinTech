import { useState } from "react"

export default function AuthContext(){
    const [products, setProducts] = useState([])
    const [users, setUsers] = useState([])
    const [userNow, setUserNow] = useState(null)

    function editBarang(id, namaProduk, harga, deskripsi, kategori) {
        const map = products.map((f) => f.id == id ? {...f, nama: namaProduk, harga: harga, kategori: kategori, deskripsi: deskripsi} : {...f})
        setProducts(map)
        
    }   

    return (<>
        
    </>)
}