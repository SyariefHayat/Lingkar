import {
    IconBook,
    IconBuildingFactory,
    IconCurrencyDollar,
    IconFileText,
    IconHelp,
    IconHistory,
    IconHome,
    IconRecycle,
    IconSettings,
    IconUser,
    IconWallet,
} from "@tabler/icons-react"

export const LIST_USER_NAVBAR_DB = {
    user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
    },
    navMain: [
        {
            title: "Beranda",
            url: "/dashboard",
            icon: IconHome,
            description: "Ringkasan saldo, riwayat, dan aktivitas terbaru",
        },
        {
            title: "Setor Sampah",
            url: "/setor",
            icon: IconRecycle,
            description: "Input jenis sampah, lihat estimasi harga, dan request penjemputan",
        },
        {
            title: "Harga Sampah",
            url: "/harga",
            icon: IconCurrencyDollar,
            description: "Lihat daftar harga sampah terbaru berdasarkan jenis material",
        },
        {
            title: "Mitra Penerima",
            url: "/mitra",
            icon: IconBuildingFactory,
            description: "Daftar UMKM, industri, atau bank sampah penerima sampah",
        },
        {
            title: "Riwayat",
            url: "/riwayat",
            icon: IconHistory,
            description: "Catatan transaksi sampah yang sudah disetorkan",
        },
        {
            title: "Dompet",
            url: "/wallet",
            icon: IconWallet,
            description: "Lihat saldo hasil penjualan sampah dan tarik ke e-wallet/bank",
        },
        {
            title: "Profil",
            url: "/profil",
            icon: IconUser,
            description: "Atur data akun, alamat penjemputan, dan preferensi",
        },
    ],
    navSecondary: [
        {
            title: "Pengaturan",
            url: "/settings",
            icon: IconSettings,
        },
        {
            title: "Bantuan",
            url: "/help",
            icon: IconHelp,
        },
    ],
    documents: [
        {
            name: "Panduan Pengguna",
            url: "/docs/user-guide",
            icon: IconBook,
        },
        {
            name: "Kebijakan & Ketentuan",
            url: "/docs/terms",
            icon: IconFileText,
        },
    ],
}