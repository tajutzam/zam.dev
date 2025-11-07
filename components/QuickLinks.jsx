"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

import Link from "next/link";
import GitHubRepoCount from "@/app/api/github/GitHubRepoCount";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMdDocument } from "react-icons/io";
const PDFViewerModal = dynamic(() => import("@/components/PDFViewerModal"), {
  ssr: false,
});
export default function QuickLinks() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ul className="space-y-2 animated-list">
        <li>
          <Link
            className="flex gap-3 items-center no-underline"
            href="https://github.com/tajutzam"
            target="_blank"
          >
            <FaGithub className="text-xl" />
            <div className="flex gap-1">
              <h1>
                <GitHubRepoCount username="tajutzam" />
              </h1>
              <span> Repositories</span>
            </div>
          </Link>
        </li>

        <li>
          <Link
            className="flex gap-3 items-center"
            href="https://www.linkedin.com/in/mohammad-tajut-zam-zami"
            target="_blank"
          >
            <FaLinkedin className="w-5 h-5" />
            <div>
              493<span> Connections</span>
            </div>
          </Link>
        </li>

        <li>
          <button
            onClick={() => setIsOpen(true)}
            className="flex gap-3 items-center"
          >
            <IoMdDocument className="w-5 h-5" />
            <span> My Resume</span>
          </button>
        </li>
      </ul>

      <PDFViewerModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
