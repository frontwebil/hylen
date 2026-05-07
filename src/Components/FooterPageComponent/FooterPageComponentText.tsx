import "./style.css";
import Link from "next/link";

type Props = {
  title: string;
  text: string;
};

function renderRawUrls(value: string, keyPrefix: string) {
  const parts = value.split(/(https?:\/\/[^\s)]+)/g);
  return parts.map((part, index) => {
    if (/^https?:\/\/[^\s)]+$/.test(part)) {
      return (
        <Link
          key={`${keyPrefix}-url-${part}-${index}`}
          href={part}
          target="_blank"
          className="footer-page-text-link"
        >
          {part}
        </Link>
      );
    }
    return <span key={`${keyPrefix}-text-${part}-${index}`}>{part}</span>;
  });
}

function renderWithLinks(value: string) {
  const boldPattern = /\*\*([^*]+)\*\*/g;
  const markdownLinkPattern = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g;
  const chunks: React.ReactNode[] = [];
  let last = 0;
  let match: RegExpExecArray | null = markdownLinkPattern.exec(value);

  while (match) {
    const [fullMatch, label, url] = match;
    const start = match.index;

    if (start > last) {
      const plainPart = value.slice(last, start);
      let boldLast = 0;
      let boldMatch: RegExpExecArray | null = boldPattern.exec(plainPart);
      while (boldMatch) {
        const [fullBold, boldText] = boldMatch;
        const boldStart = boldMatch.index;
        if (boldStart > boldLast) {
          chunks.push(
            ...renderRawUrls(
              plainPart.slice(boldLast, boldStart),
              `before-${start}-plain-${boldStart}`,
            ),
          );
        }
        chunks.push(<strong key={`bold-before-${start}-${boldStart}`}>{boldText}</strong>);
        boldLast = boldStart + fullBold.length;
        boldMatch = boldPattern.exec(plainPart);
      }
      if (boldLast < plainPart.length) {
        chunks.push(
          ...renderRawUrls(plainPart.slice(boldLast), `before-${start}-tail-${boldLast}`),
        );
      }
      boldPattern.lastIndex = 0;
    }

    chunks.push(
      <Link key={`md-${start}-${url}`} href={url} target="_blank" className="footer-page-text-link">
        {label}
      </Link>,
    );

    last = start + fullMatch.length;
    match = markdownLinkPattern.exec(value);
  }

  if (last < value.length) {
    const tail = value.slice(last);
    let boldLast = 0;
    let boldMatch: RegExpExecArray | null = boldPattern.exec(tail);
    while (boldMatch) {
      const [fullBold, boldText] = boldMatch;
      const boldStart = boldMatch.index;
      if (boldStart > boldLast) {
        chunks.push(...renderRawUrls(tail.slice(boldLast, boldStart), `after-${last}-${boldStart}`));
      }
      chunks.push(<strong key={`bold-after-${last}-${boldStart}`}>{boldText}</strong>);
      boldLast = boldStart + fullBold.length;
      boldMatch = boldPattern.exec(tail);
    }
    if (boldLast < tail.length) {
      chunks.push(...renderRawUrls(tail.slice(boldLast), `after-${last}-tail-${boldLast}`));
    }
  }

  return chunks;
}

export function FooterPageComponentText({ title, text }: Props) {
  const paragraphs = text
    .split(/\n{2,}/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <div className="FooterPageComponentText-container">
      <div className="container">
        <h2 className="footer-page-text-title">{title}</h2>
        <div className="footer-page-text-content">
          {paragraphs.map((paragraph, idx) => (
            <p key={`${paragraph.slice(0, 20)}-${idx}`} className="footer-page-text-paragraph">
              {renderWithLinks(paragraph)}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
