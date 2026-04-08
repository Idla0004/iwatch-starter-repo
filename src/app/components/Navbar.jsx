const Navbar = () => {
  return (
    <nav>
      <ul className="col-start-2 flex flex-row gap-[clamp(2rem,0.9375rem+4.25cqi,4.125rem)] text-[clamp(0.8333rem,0.7rem+0.5333vw,1.7rem)]">
        <li className="rounded-full px-4 hover:cursor-pointer hover:bg-(--color-foreground) hover:px-4 hover:text-[#b6ccda]">
          Mac
        </li>
        <li className="rounded-full px-4 hover:cursor-pointer hover:bg-(--color-foreground) hover:px-4 hover:text-[#b6ccda]">
          iPhone
        </li>
        <li className="rounded-full px-4 hover:cursor-pointer hover:bg-(--color-foreground) hover:px-4 hover:text-[#b6ccda]">
          iPad
        </li>
        <li className="rounded-full px-4 hover:cursor-pointer hover:bg-(--color-foreground) hover:px-4 hover:text-[#b6ccda]">
          Watch
        </li>
        <li className="rounded-full px-4 hover:cursor-pointer hover:bg-(--color-foreground) hover:px-4 hover:text-[#b6ccda]">
          Support
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
