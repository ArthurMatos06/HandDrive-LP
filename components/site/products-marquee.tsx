import Image from "next/image";
import { products } from "@/lib/products";

function ProductCard({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <li className="w-[280px] shrink-0 md:w-[320px]">
      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            sizes="320px"
            className="object-cover"
          />
        </div>
        <div className="p-5">
          <h3 className="font-display text-base font-semibold leading-snug text-foreground text-balance">
            {title}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </li>
  );
}

export function ProductsMarquee() {
  // Duplicate the list so the -50% translate loops seamlessly.
  const loop = [...products, ...products];

  return (
    <section
      aria-label="Nossos produtos"
      className="border-y border-border bg-secondary/40 py-14 md:py-20"
    >
      <div className="mx-auto mb-10 max-w-7xl px-4 text-center md:px-6">
        <span className="inline-block rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground">
          Nossos Equipamentos
        </span>
        <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
          Confira o que oferecemos para você
        </h2>
        <p className="mt-3 text-muted-foreground">
          Soluções desenvolvidas e homologadas para cada tipo de necessidade.
        </p>
      </div>

      <div
        className="group relative w-full overflow-hidden"
        style={{ ["--marquee-duration" as string]: "80s" }}
      >
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-secondary/80 to-transparent md:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-secondary/80 to-transparent md:w-28" />

        <ul className="animate-marquee flex w-max gap-6 px-6 group-hover:[animation-play-state:paused]">
          {loop.map((product, index) => (
            <ProductCard
              key={`${product.title}-${index}`}
              title={product.title}
              description={product.description}
              image={product.image}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
