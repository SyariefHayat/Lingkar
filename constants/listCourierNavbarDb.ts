import {
    IconBook,
    IconFileText,
    IconHelp,
    IconHistory,
    IconHome,
    IconMapPin,
    IconPackage,
    IconSettings,
    IconTruckDelivery,
    IconUser,
} from "@tabler/icons-react"

export const LIST_COURIER_NAVBAR_DB = {
    user: {
        name: "kurir",
        email: "courier@example.com",
        avatar: "/avatars/courier.jpg",
    },
    navMain: [
        {
            title: "Beranda",
            url: "/courier/dashboard",
            icon: IconHome,
            description: "Ringkasan order penjemputan dan status terbaru",
        },
        {
            title: "Order Masuk",
            url: "/courier/orders",
            icon: IconPackage,
            description: "Daftar permintaan penjemputan sampah dari user",
        },
        {
            title: "Dalam Perjalanan",
            url: "/courier/ongoing",
            icon: IconTruckDelivery,
            description: "Lacak status penjemputan & pengiriman ke mitra penerima",
        },
        {
            title: "Peta Lokasi",
            url: "/courier/map",
            icon: IconMapPin,
            description: "Navigasi ke alamat user dan mitra penerima sampah",
        },
        {
            title: "Riwayat",
            url: "/courier/history",
            icon: IconHistory,
            description: "Catatan penjemputan yang sudah selesai",
        },
        {
            title: "Profil",
            url: "/courier/profile",
            icon: IconUser,
            description: "Atur data akun, kendaraan, dan shift kerja",
        },
    ],
    navSecondary: [
        {
            title: "Pengaturan",
            url: "/courier/settings",
            icon: IconSettings,
        },
        {
            title: "Bantuan",
            url: "/courier/help",
            icon: IconHelp,
        },
    ],
    documents: [
        {
            name: "Panduan Kurir",
            url: "/docs/courier-guide",
            icon: IconBook,
        },
        {
            name: "Kebijakan & Ketentuan",
            url: "/docs/terms",
            icon: IconFileText,
        },
    ],
}