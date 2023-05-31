import {
    LoginButton,
    LogoutButton,
    ProfileButton,
    RegisterButton,
  } from "@/components/buttons";

const loginPage = () => {
  return (
    <div className=" flex flex-col items-center justify-center h-screen">
        <LoginButton />
        <RegisterButton />
        <LogoutButton />
        <ProfileButton />
    </div>
  )
}

export default loginPage