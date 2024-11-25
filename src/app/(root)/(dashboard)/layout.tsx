import { redirect } from "next/navigation";

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="flex max-lg:flex-col text-grey-1">
			<div className="flex-1 z-20">{children}</div>
		</div>
	);
};
export default MainLayout;
