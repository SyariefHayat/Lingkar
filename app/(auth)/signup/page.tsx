"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronDownIcon } from "lucide-react";

import { 
    Popover, 
    PopoverContent, 
    PopoverTrigger 
} from "@/components/ui/popover";

import { 
    Select, 
    SelectContent, 
    SelectItem, 
    SelectTrigger, 
    SelectValue 
} from "@/components/ui/select";

import EachUtils from "@/utils/EachUtils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { LIST_ROLE } from "@/constants/listRole";
import { Calendar } from "@/components/ui/calendar";

// Mapping role ke dashboard URL
const ROLE_DASHBOARD_MAP = {
    "Masyarakat": "/dashboard/user",
    "Kurir Sampah": "/dashboard/courier", 
    "UMKM / Industri Pengelola": "/dashboard/partner",
    "Investor": "/dashboard/investor"
};

export default function SignupPage() {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [date, setDate] = useState<Date | undefined>(undefined);
    const [selectedRole, setSelectedRole] = useState<string | null>(null);
    const [selectedGender, setSelectedGender] = useState<string>("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (!selectedRole) {
            alert("Silakan pilih peran terlebih dahulu!");
            return;
        }

        setIsLoading(true);

        try {
            const formData = new FormData(e.currentTarget);
            const userData = {
                role: selectedRole,
                firstName: formData.get('firstName'),
                lastName: formData.get('lastName'),
                email: formData.get('email'),
                password: formData.get('password'),
                gender: selectedGender,
                birthDate: date?.toISOString(),
            };

            // Simulasi API call (ganti dengan implementasi API yang sebenarnya)
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            console.log('User data:', userData);
            
            // Redirect ke dashboard sesuai role
            const dashboardUrl = ROLE_DASHBOARD_MAP[selectedRole as keyof typeof ROLE_DASHBOARD_MAP];
            if (dashboardUrl) {
                router.push(dashboardUrl);
            } else {
                // Fallback ke dashboard umum jika role tidak ditemukan
                router.push("/dashboard");
            }

        } catch (error) {
            console.error('Signup error:', error);
            alert("Terjadi kesalahan saat mendaftar. Silakan coba lagi.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="w-full min-h-screen flex flex-col md:flex-row gap-6 bg-gradient-to-br from-gray-50 to-gray-100 px-4 sm:px-8 py-6 sm:py-16">
            <div className="w-full md:w-[40%] flex flex-col items-start py-6">
                <h1 className="text-2xl font-bold mb-4 text-gray-800 leading-tight">Bergabung Bersama Kami</h1>
                <p className="text-base sm:text-lg leading-relaxed text-gray-600 font-medium">Kami menghubungkan masyarakat, kurir, UMKM, industri, dan investor untuk membangun ekosistem pengelolaan sampah yang lebih baik dan berkelanjutan.</p>
            </div>

            <div className="w-full md:w-[60%] flex flex-col py-6">
                <h2 className="text-xl sm:text-2xl font-bold mb-6 text-gray-800">Pilih Peran Anda</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
                    <EachUtils 
                        of={LIST_ROLE}
                        render={(item, index) => (
                            <button
                                key={index}
                                type="button"
                                onClick={() => setSelectedRole(item.title)}
                                disabled={isLoading}
                                className={`p-6 rounded-2xl text-left shadow-md flex flex-col gap-3 border transition-all duration-300 ${
                                    selectedRole === item.title 
                                        ? "bg-green-600 text-white border-green-700 shadow-lg scale-[1.02]" 
                                        : "bg-white text-gray-800 border-gray-200 hover:border-green-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
                                } ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
                            >
                                <span className="text-3xl">{item.icon}</span>
                                <h3 
                                    className={`text-lg font-bold ${selectedRole === item.title ? "text-white" : "text-gray-800"}`}
                                >
                                    {item.title}
                                </h3>
                                <p
                                    className={`text-sm ${
                                    selectedRole === item.title ? "text-gray-100" : "text-gray-600"
                                    }`}
                                >
                                    {item.desc}
                                </p>
                            </button>
                        )}
                    />
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">Informasi Pendaftaran</h3>

                    <input type="hidden" name="role" value={selectedRole ?? ""} />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <Label className="text-sm font-medium text-gray-700">Nama Depan</Label>
                            <Input
                                name="firstName"
                                type="text"
                                placeholder="Masukkan nama depan"
                                disabled={isLoading}
                            />
                        </div>
                        <div>
                            <Label className="text-sm font-medium text-gray-700">Nama Belakang</Label>
                            <Input
                                name="lastName"
                                type="text"
                                placeholder="Masukkan nama belakang"
                                disabled={isLoading}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <Label className="text-sm font-medium text-gray-700 mb-1 block">
                                Jenis Kelamin
                            </Label>
                            <Select onValueChange={setSelectedGender} disabled={isLoading}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Pilih jenis kelamin" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="laki-laki">Laki-laki</SelectItem>
                                    <SelectItem value="perempuan">Perempuan</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="flex flex-col gap-3">
                            <Label htmlFor="date" className="px-1">
                                Tanggal Lahir
                            </Label>
                            <Popover open={open} onOpenChange={setOpen}>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant="outline"
                                        id="date"
                                        type="button"
                                        disabled={isLoading}
                                        className="w-full justify-between font-normal"
                                    >
                                        {date ? date.toLocaleDateString() : "Pilih Tanggal"}
                                        <ChevronDownIcon />
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                                    <Calendar
                                        mode="single"
                                        selected={date}
                                        captionLayout="dropdown"
                                        onSelect={(date) => {
                                            setDate(date);
                                            setOpen(false);
                                        }}
                                        disabled={(date) => 
                                            date > new Date() || date < new Date("1900-01-01")
                                        }
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <Label className="text-sm font-medium text-gray-700">Email</Label>
                        <Input
                            name="email"
                            type="email"
                            placeholder="contoh@email.com"
                            disabled={isLoading}
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <Label className="text-sm font-medium text-gray-700">Password</Label>
                        <Input
                            name="password"
                            type="password"
                            placeholder="Minimal 8 karakter"
                            minLength={8}
                            disabled={isLoading}
                        />
                    </div>

                    <Button
                        type="submit"
                        disabled={!selectedRole || isLoading}
                        className={`font-bold py-3 transition-all duration-300 transform shadow-md ${
                            selectedRole && !isLoading
                                ? "bg-gradient-to-r from-green-600 to-green-700 text-white hover:scale-[1.02] active:scale-[0.98] hover:shadow-lg cursor-pointer"
                                : "bg-gray-300 text-gray-500 cursor-not-allowed"
                        }`}
                    >
                        {isLoading ? (
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                Mendaftar...
                            </div>
                        ) : selectedRole ? (
                            "Daftar Sekarang"
                        ) : (
                            "Pilih Peran Terlebih Dahulu"
                        )}
                    </Button>
                </form>
            </div>
        </div>
    );
}