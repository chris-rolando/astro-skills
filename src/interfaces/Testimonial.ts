// Testimonial.ts
// This file defines the Testimonial interface, it is used to represent a testimonial with a name, message, image, and rating.

interface Testimonial {
  name: string;
  message: string;
  image: string;
  rating: number;
}

export type TestimonialsData = Testimonial[];
