import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/subHeading"
import { Button } from "../components/Button"
import { BottomWarning } from "../components/BottomWarning"
export const Signin=()=>{
    return <div className="bg-slate-600 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label={"Signin"}></Heading>
          <SubHeading label={"Enter your credentials to access your account"}></SubHeading>
          <InputBox placeholder={"vedgupta123@gmail.com"} label={"Email"}></InputBox>
          <InputBox placeholder={"Enter your password"} label={"Password"}></InputBox>
          <div className="pt-4">
          <Button label={"Sign-in"}></Button>
          </div>
          <BottomWarning label={"Don't have an account?"} buttonText={"Signup"} to={"/signup"}></BottomWarning>
        </div>
        </div>

    </div>
}