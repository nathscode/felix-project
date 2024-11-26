import LeftSideBar from "@/components/layouts/LeftSideBar";
import TopBar from "@/components/layouts/TobBar";

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="flex max-lg:flex-col">
			<LeftSideBar />
			<TopBar />
			<div className="flex-1 z-20">{children}</div>
		</div>
	);
};
export default MainLayout;
