import { profile } from '../data/profile';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:px-8 lg:px-10">
        <p>
          &copy; {year} {profile.name}. All rights reserved.
        </p>
        <p>Built with React, TypeScript &amp; Tailwind CSS.</p>
      </div>
    </footer>
  );
}

export default Footer;
