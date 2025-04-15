interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  textColor?: string;
  className?: string;
}

export function PageHeader({
  title,
  subtitle,
  backgroundImage,
  textColor = "text-white",
  className = "",
}: PageHeaderProps) {
  return (
    <div
      className={`relative py-20 px-4 ${className}`}
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${textColor}`}>
          {title}
        </h1>
        {subtitle && (
          <p className={`text-lg md:text-xl max-w-3xl mx-auto ${textColor}`}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
