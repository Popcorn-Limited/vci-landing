
import Link from "next/link";
import { useRouter } from "next/router";
import MainActionButton from "./Common/MainActionButton";

export default function DesktopMenu(): JSX.Element {
  const router = useRouter();

  return (
    <>
      <div className="flex flex-row items-center justify-between w-full px-6 smmd:px-8 md:px-12 lglaptop:px-20 z-30 ">
        <div className="flex flex-row items-center">
          <div>
            <Link href={`/`} passHref>
              <img src="/images/icons/popLogo.svg" alt="Logo" className="w-10 h-10" />
            </Link>
          </div>
        </div>
        <div className="flex w-fit">
          <MainActionButton label="Launch app" handleClick={() => router.push("https://app.pop.network/")} />
        </div>
      </div>
    </>
  );
}
