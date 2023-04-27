export default function NeedHelp() {
  return (
    <div className="bg-[url(/help.png)] bg-cover bg-center h-[500px] bg-[#124822]">
      <div className="pt-[10%] pl-[20%]">
        <p className="text-[46px] font-bold mb-5 text-center">
          Need help getting started?
        </p>
        <div className="flex justify-center">
          <button className="font-bold border rounded-full py-2 px-[4rem] text-[24px]">
            let us help you
          </button>
        </div>
      </div>
    </div>
  );
}
