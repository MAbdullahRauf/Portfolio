import React from "react";
import { credly, linkedIn } from "../site";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-paper px-5 py-10 md:px-10 lg:px-14">
      <div className="mx-auto flex max-w-content flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-xl font-medium text-ink">Abdullah Rauf</p>
          <p className="mt-1 text-sm text-muted">DevSecOps Engineer · Lahore</p>
        </div>
        <div className="flex items-center gap-5 text-sm text-muted">
          <a href={linkedIn} target="_blank" rel="noopener noreferrer" className="hover:text-pine">
            LinkedIn
          </a>
          <a href={credly} target="_blank" rel="noopener noreferrer" className="hover:text-pine">
            Credly
          </a>
        </div>
      </div>
      <div className="mx-auto mt-8 flex max-w-content flex-col gap-2 border-t border-line pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {year} Abdullah Rauf</p>
        <p className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-pine" aria-hidden />
          Open to new opportunities
        </p>
      </div>
    </footer>
  );
}

export default Footer;
