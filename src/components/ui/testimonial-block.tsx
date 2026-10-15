export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

/** No renderiza nada hasta que un caso tenga un testimonio real. */
export function TestimonialBlock({ testimonial }: { testimonial: Testimonial | null }) {
  if (!testimonial) return null;
  return (
    <figure className="reveal max-w-3xl">
      <blockquote className="text-display-md text-title font-semibold">“{testimonial.quote}”</blockquote>
      <figcaption className="mt-5 text-ink-soft">
        <span className="font-semibold text-ink">{testimonial.author}</span>, {testimonial.role}
      </figcaption>
    </figure>
  );
}
