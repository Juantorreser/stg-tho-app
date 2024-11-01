import Image from "next/image";

export default function LoginCard() {
  return (
    <div id="loginCard">
      <div className="w-full  text-center py-3 border-b-black/50 border-b-2">
        <h1 className="text-black/60 font-medium uppercase">Ingrese a su cuenta</h1>
      </div>
      <div className="w-full flex-grow flex flex-col items-center justify-center pt-4 pb-8">
        <Image src="/images/userIcon.png" alt="userIcon" width={110} height={110} />
        <button className="btn btn-primary">Iniciar Sesión</button>
      </div>
    </div>
  );
}
