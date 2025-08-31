export default function UserDashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            <main>{children}</main>
        </div>
    )
}