import { SigninForm } from "@/app/components/auth/signin-form";
import Link from "next/link";
import { FaHandsPraying } from "react-icons/fa6";

export default function PageLogIn() {
  return (
    <div className="max-w-lg mx-auto mt-12 px-6">
      <FaHandsPraying size={56} />
      <h1 className="mt-10 text-2xl ">Entre na sua conta</h1>

      <div className="mt-10 mb-14 flex flex-col gap-6">
        <SigninForm />
      </div>

      <div className="flex flex-col justify-center items-center gap-1 md:flex-row">
        <small className="text-gray-400">Ainda não tem uma conta?</small>
        <Link href="/signup" className="hover:underline">
          Cadastre-se
        </Link>
      </div>
    </div>
  );
}
