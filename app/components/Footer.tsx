export default function Footer() {
  return (
    <div>
      <hr />
      <nav className="grid lg:grid-cols-3 ">
        <ul className="uppercase text-white">
          <li>about monstercat</li>
          <li>contact us</li>
          <li>careers</li>
          <li>news</li>
          <li>press</li>
        </ul>
        <ul className="uppercase text-white">
          <li>terms of privacy</li>
          <li>privacy policy</li>
        </ul>

        <div className="my-10 lg:mt-0 space-y-4">
          <h3 className="uppercase">monstercat news</h3>
          <p className="text-[14px] font-medium leading-[24.5px] tracking-[1.4px]  lg:max-w-xs lg:pr-3 ">
            Don't miss a thing, stay up to date with the latest news from us
          </p>
          <input
            type="text"
            placeholder="Enter email"
            className="border-b-solid border-b-[1px] h-[40px] px-1 bg-transparent outline-none"
          />
        </div>
      </nav>
      <hr />
    </div>
  );
}
