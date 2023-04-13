import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useRouter } from "next/router";

export default function Home(): JSX.Element {
  const router = useRouter();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function loginHandler(e: any): void {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const isValid = email === "bat@gmail.com" && password === "123";
    if (isValid) {
      console.log("logged in");
      router.push("/dashboard");
    } else {
      console.log("false");
    }
  }
  return (
    <form
      className="flex flex-col gap-4 w-[500px] mx-auto my-[20%] border p-7 rounded-md shadow "
      onSubmit={(e) => loginHandler(e)}
    >
      <h1 className="text-center border-b pb-2">RECETA.</h1>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Your email" />
        </div>
        <TextInput
          name="email"
          id="email1"
          type="email"
          placeholder="name@flowbite.com"
          required={true}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1" value="Your password" />
        </div>
        <TextInput
          name="password"
          id="password1"
          type="password"
          required={true}
        />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">Remember me</Label>
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
}
