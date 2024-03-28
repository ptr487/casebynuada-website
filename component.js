import { GetIcon } from "../lib/icons";

export default function Icon({ link, type, slug, text }) {
  const icon = GetIcon(slug).svg;
  return (
    <div className="text-center my-3">
      {type === "url" ? (
        <div className="flex justify-center">
          <GetIcon slug={slug} />
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            data-tip={text}
          >
            <svg
              className="w-6 h-6 fill-current mx-2 transform hover:scale-125 duration-200 ease-in"
              data-tip={text}
            >
              <use href={`#icon-${slug}`}></use>
            </svg>
          </a>
        </div>
      ) : (
        <>
          <div className="flex justify-center">
            <GetIcon slug={slug} />
            <svg
              className="w-6 h-6 fill-current mx-2 transform hover:scale-125 duration-200 ease-in"
              data-tip