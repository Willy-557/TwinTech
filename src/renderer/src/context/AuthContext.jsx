import { createContext, useState } from "react"

export const AuthContext = createContext("")

export default function AuthContext({children}){
    const [products, setProducts] = useState([])
    const [orders, setOrders] = useState([])
    const [users, setUsers] = useState([])
    const [userNow, setUserNow] = useState(null)

    function editBarang(id, namaProduk, harga, deskripsi, kategori) {
        const map = products.map((f) => f.id == id ? {...f, nama: namaProduk, harga: harga, kategori: kategori, deskripsi: deskripsi} : {...f})
        setProducts(map)
        
    }   

    function tambahAlamat(idUser, labelAlamat, namaPenerima, noTelp, detailAlamat) {
        const alamatBaru = {
            "label": labelAlamat,
            "default": false,
            "penerima": namaPenerima,
            "telepon": noTelp,
            "alamat": detailAlamat
        }
        const temp = users.map((e) => e.id === idUser ? {...e, alamat: [...e.alamat, alamatBaru]} : e)
        setUsers(temp)
    }

    function ubahStatusPesanan(idPesanan, statusPesanan) {
        const temp = orders.map((e) => e.id == idPesanan ? {...e, status: statusPesanan} : e)
        setOrders(temp)
    }

    function hapusBarang(idBarang) {
        const temp = products.filter((e) => e.id != idBarang)
        setProducts(temp)
    }

    const auth = {
        editBarang, 
        tambahAlamat,
        ubahStatusPesanan,
        hapusBarang
    }

    return <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
}