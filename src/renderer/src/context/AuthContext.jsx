import { createContext, useState } from "react"

export const AuthContext = createContext("")

export default function AuthContext({children}){
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
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

    function hapusPesanan(idPesanan) {
        const temp = orders.filter((e) => e.id != idPesanan)
        setOrders(temp)
    }

    function checkout(userId, metodeBayar, alamatKirim, barang) {
        const idBaru = orders.length == 0 ? 1 : orders[orders.length - 1].id + 1
        const nomorBaru = "SRK-" + String(idBaru).padStart(4, '0')
        let subtotal = 0
        for(let i = 0; i < barang.length; i++) {
            subtotal += Number(barang[i].jumlah) * Number(barang[i].harga)
        }
        const ongkir = 10000
        const total = Number(subtotal) + ongkir
        const pesananBaru = {
            "id": idBaru,
            "nomor": nomorBaru,
            "userId": userId,
            "tanggal": new Date().toLocaleDateString('en-CA'),
            "status": "Ditinjau",
            "metodePembayaran": metodeBayar,
            "items": barang,
            "subtotal": subtotal,
            "ongkir": ongkir,
            "total": total,
            "alamatPengiriman": alamatKirim
        }
        setOrders([...orders, pesananBaru])
    }

    function addToCart(kode, jumlah) {
        const cariBarang = products.find((e) => e.kode == kode)
        if (jumlah > cariBarang.varian[0].stok) {
            alert("Stok tidak cukup")
            return
        }
        
        const barangAkanDitambahkan = {
            "kode": kode,
            "nama": cariBarang.nama,
            "warna": cariBarang.varian[0].warna,
            "jumlah": jumlah,
            "harga": cariBarang.harga,
            "gambar": cariBarang.images
        }
        setCart([...cart, barangAkanDitambahkan])
    }

    const auth = {
        editBarang, 
        tambahAlamat,
        ubahStatusPesanan,
        hapusBarang,
        hapusPesanan,
        checkout
    }
    

    return <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
}