import React from "react";

interface Props {
    remSize: string;
}

export default function TeamIcon({ remSize }: Props) {
    return (
        <svg
            width={remSize}
            height={remSize}
            viewBox="0 0 76 75"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M38.1255 44.8438C39.688 38.625 45.938 34 53.3755 34C62.0005 34 69.0005 40.2188 69.0005 47.875C62.8442 49.2813 57.4692 49.625 53.3755 49.625C48.8442 49.625 44.8442 49.1875 41.5005 48.625C40.5942 47.2188 39.4692 45.9375 38.1255 44.8438Z"
                fill="#FF7373"
            />
            <path
                d="M53.375 31.625C57.6897 31.625 61.1875 28.1272 61.1875 23.8125C61.1875 19.4978 57.6897 16 53.375 16C49.0603 16 45.5625 19.4978 45.5625 23.8125C45.5625 28.1272 49.0603 31.625 53.375 31.625Z"
                fill="#FF7373"
            />
            <path
                d="M44 56.9062C36.625 58.5938 30.1562 59 25.25 59C17.6562 59 11.25 58 6.5 56.9062C6.5 47.7187 14.9062 40.25 25.25 40.25C35.5938 40.25 44 47.7187 44 56.9062Z"
                fill="#5699E9"
            />
            <path
                d="M25.25 37.875C30.4277 37.875 34.625 33.6777 34.625 28.5C34.625 23.3223 30.4277 19.125 25.25 19.125C20.0723 19.125 15.875 23.3223 15.875 28.5C15.875 33.6777 20.0723 37.875 25.25 37.875Z"
                fill="#5699E9"
            />
        </svg>
    );
}