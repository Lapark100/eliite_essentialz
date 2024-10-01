import PageHeader from "@/components/page-header";

export default function Layout ({children}) {
return (
<div className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg rounded-xl my-16 px-8">
<PageHeader />
<main>{children}</main>
</div>)
}