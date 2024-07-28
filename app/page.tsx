import PatientForm from "@/components/forms/PatientForm";
import Image from "next/image";
import Link from "next/link";
import icon from "../public/assets/icons/logo-full.svg";
import onboarding from "../public/assets/images/onboarding-img.jpeg";
export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Image
            src={icon}
            alt="patient"
            width={1000}
            height={1000}
            className="mb-12 h-10 w-fit"
          />
          <PatientForm />
          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left ">
              © 2024 carePulse
            </p>
            <Link href="?admin=true" className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>
      <Image
        src={onboarding}
        alt="patient"
        width={1000}
        height={1000}
        className="side-img max-w-[50%]"
      />
    </div>
  );
}
