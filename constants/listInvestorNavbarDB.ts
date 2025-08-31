import {
    IconBook,
    IconChartBar,
    IconFileText,
    IconHelp,
    IconHome,
    IconReport,
    IconSettings,
    IconTrendingUp,
    IconUsers,
    IconRecycle,
    IconBuildingFactory,
} from "@tabler/icons-react"

export const LIST_INVESTOR_NAVBAR_DB = {
    user: {
        name: "investor-eco",
        email: "investor@example.com",
        avatar: "/avatars/investor.jpg",
    },
    navMain: [
        {
            title: "Beranda",
            url: "/investor/dashboard",
            icon: IconHome,
            description: "Ringkasan investasi, laporan singkat, dan highlight terbaru",
        },
        {
            title: "Perkembangan Bisnis",
            url: "/investor/growth",
            icon: IconTrendingUp,
            description: "Grafik perkembangan user, kurir, dan mitra pengelola sampah",
        },
        {
            title: "Dampak Lingkungan",
            url: "/investor/impact",
            icon: IconRecycle,
            description: "Jumlah sampah yang berhasil diolah dan jejak karbon yang dihemat",
        },
        {
            title: "Laporan Keuangan",
            url: "/investor/reports",
            icon: IconReport,
            description: "Pendapatan, biaya operasional, dan proyeksi keuntungan",
        },
        {
            title: "Portofolio Mitra",
            url: "/investor/partners",
            icon: IconBuildingFactory,
            description: "Daftar UMKM/industri mitra yang dibiayai dan performa mereka",
        },
        {
            title: "Profil Investor",
            url: "/investor/profile",
            icon: IconUsers,
            description: "Data investor, preferensi investasi, dan keamanan akun",
        },
    ],
    navSecondary: [
        {
            title: "Pengaturan",
            url: "/investor/settings",
            icon: IconSettings,
        },
        {
            title: "Bantuan",
            url: "/investor/help",
            icon: IconHelp,
        },
    ],
    documents: [
        {
            name: "Panduan Investor",
            url: "/docs/investor-guide",
            icon: IconBook,
        },
        {
            name: "Laporan Tahunan",
            url: "/docs/annual-report",
            icon: IconFileText,
        },
    ],
}