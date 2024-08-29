import Image from "next/image";

const page = () => {
  return (
    <section className="h-screen grid place-items-center">
      <div className="max-w-[450px] w-full mx-auto p-6 border border-gray-700/20 rounded-md">
        <h4 className="font-bold text-2xl">Sign in</h4>
        <form className="login-form">
          <div>
            <label for="email">Email Address</label>
            <input type="email" name="email" id="email" />
          </div>

          <div>
            <label for="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>

          <button type="submit" className="btn-primary w-full mt-4">
            Login
          </button>
        </form>

        <div className="text-center text-xs text-gray-500">or Signup with</div>
        <div className="flex gap-4">
          <button className=" w-full mt-4 py-2 border-gray-600/30 border rounded-md flex items-center gap-2 justify-center">
            <Image src="./assets/fb.png" alt="" />
            <span>Facebook</span>
          </button>
          <button className=" w-full mt-4 py-2 border-gray-600/30 border rounded-md flex items-center gap-2 justify-center">
            <Image src="./assets/google.png" alt="" />
            <span>Google</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default page;
