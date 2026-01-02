const Footer = () => {
  return (
    <section className="flex flex-col sm:flex-wrap sm:items-center justify-between gap-4 sm:gap-5 pb-3 text-xs sm:text-sm text-neutral-400 c-space">
      <div className="mb-4 bg-linear-to-r from-transparent via-neutral-700 to-transparent h-px w-full" />
      <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>
      <p className="text-center sm:text-right w-full sm:w-auto">© 2025 AKNCODES. All rights reserved.</p>
    </section>
  );
};

export default Footer;