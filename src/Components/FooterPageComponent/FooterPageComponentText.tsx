import "./style.css";

type Props = {
  title: string;
  children: React.ReactNode;
};

export function FooterPageComponentText({ title, children }: Props) {
  return (
    <div className="FooterPageComponentText-container">
      <div className="container">
        <h2 className="footer-page-text-title">{title}</h2>
        <div className="footer-page-text-content">{children}</div>
      </div>
    </div>
  );
}
