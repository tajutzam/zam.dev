"use client";
import Link from "next/link";
import GitHubRepoCount from "@/app/api/github/GitHubRepoCount";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMdDocument } from "react-icons/io";

export default function QuickLinks() {
  return (
    <ul className="space-y-2 animated-list">
      <li className="transition-opacity">
        <Link
          className="flex gap-3 items-center no-underline"
          href="https://github.com/tajutzam"
          target="blank"
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
      <li className="transition-opacity">
        <Link
          className="flex gap-3 items-center"
          href="https://www.linkedin.com/in/mohammad-tajut-zam-zami"
          target="blank"
        >
          <FaLinkedin className="w-5 h-5" />
          <div>
            493
            <span> Connections</span>
          </div>
        </Link>
      </li>
      <li className="transition-opacity">
        <Link
          className="flex gap-3 items-center"
          href="https://drive.google.com/file/d/144O4ByKYyLHSu38_qw9mxslbp0HuEu59/view?usp=sharing"
          target="blank"
        >
          <IoMdDocument className="w-5 h-5" />
          <div>
            <span> My Resume</span>
          </div>
        </Link>
      </li>
    </ul>
  );
}
