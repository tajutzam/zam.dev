"use client";

import Image from "next/image";

export default function ProjectSection({
  src,
  alt,
  category,
  nameApps,
  company,
  description,
  url,
}) {
  return (
    <>
      <div className="flex w-full flex-col gap-6 my-2">
        <Image
          loading="lazy"
          src={src}
          width={500}
          height={500}
          layout="responsive"
          alt="avatar"
          style={{
            borderRadius: "20px",
          }}
          className="bg-secondary"
        />
        <h2>
          <strong>{category}</strong> |{" "}
          <a href={url} target="_blank">
            {nameApps}
          </a>
        </h2>
        <h2>
          <strong>{company}</strong>
        </h2>
        <p>{description}</p>
        <hr></hr>
      </div>
    </>
  );
}
