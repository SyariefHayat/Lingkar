import {
    IconBook,
    IconBuildingFactory,
    IconCurrencyDollar,
    IconFileText,
    IconHelp,
    IconHistory,
    IconHome,
    IconPackageImport,
    IconReport,
    IconSettings,
    IconUser,
    IconBuildingWarehouse,
} from "@tabler/icons-react"

export const LIST_PARTNER_NAVBAR_DB = {
    user: {
        name: "umkm-daur-ulang",
        email: "umkm@example.com",
        avatar: "/avatars/umkm.jpg",
    },
    navMain: [
        {
            title: "Beranda",
            url: "/partner/dashboard",
            icon: IconHome,
            description: "Ringkasan sampah masuk, harga material, dan laporan singkat",
        },
        {
            title: "Sampah Masuk",
            url: "/partner/incoming",
            icon: IconPackageImport,
            description: "Daftar kiriman sampah dari kurir atau masyarakat",
        },
        {
            title: "Stok Material",
            url: "/partner/inventory",
            icon: IconBuildingWarehouse,
            description: "Lihat dan kelola stok material berdasarkan jenis sampah",
        },
        {
            title: "Harga Material",
            url: "/partner/pricing",
            icon: IconCurrencyDollar,
            description: "Atur harga beli sampah dari user dan harga jual ke industri",
        },
        {
            title: "Laporan",
            url: "/partner/reports",
            icon: IconReport,
            description: "Laporan penjualan, pembelian, dan keuntungan usaha",
        },
        {
            title: "Profil Usaha",
            url: "/partner/profile",
            icon: IconBuildingFactory,
            description: "Informasi usaha, alamat, jam operasional, dan kontak",
        },
    ],
    navSecondary: [
        {
            title: "Pengaturan",
            url: "/partner/settings",
            icon: IconSettings,
        },
        {
            title: "Bantuan",
            url: "/partner/help",
            icon: IconHelp,
        },
    ],
    documents: [
        {
            name: "Panduan Mitra",
            url: "/docs/partner-guide",
            icon: IconBook,
        },
        {
            name: "Kebijakan & Ketentuan",
            url: "/docs/terms",
            icon: IconFileText,
        },
    ],
}