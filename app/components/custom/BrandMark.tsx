interface BrandMarkProps {
  className?: string;
}

export const BrandMark = ({ className = "size-9" }: BrandMarkProps) => {
  return (
    <img src="/favicon.svg" alt="" aria-hidden="true" className={className} />
  );
};
