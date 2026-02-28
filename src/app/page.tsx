import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/site/container";
import { Section } from "@/components/site/section";
import { SectionHeading } from "@/components/site/section-heading";
import { ProductCard } from "@/components/site/product-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="flex flex-col items-center justify-center text-center pt-32 pb-24 sm:pt-48 sm:pb-32">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h1 className="text-5xl font-bold tracking-tight sm:text-7xl text-foreground">
              In Pursuit of Better.
            </h1>
            <p className="mt-8 text-xl leading-8 text-muted-foreground">
              Building focused products for operations, commerce, and modern workflows.
              Quietly ambitious. Restless against mediocrity.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" asChild>
                <Link href="#contact">Get in touch</Link>
              </Button>
              <Link href="#products" className="text-sm font-semibold leading-6 text-foreground hover:opacity-80 transition-opacity">
                View Products <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* Philosophy Section */}
      <Section id="about" className="bg-muted/30">
        <Container>
          <SectionHeading 
            title="Our Philosophy" 
            description="Engineering is about more than just code. It's about solving real-world problems with precision and clarity."
            centered
          />
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {[
              {
                title: "Intentionality",
                description: "Every feature we build has a purpose. We avoid bloat and prioritize what truly matters to the user."
              },
              {
                title: "Scalability",
                description: "Our systems are designed to grow. From day one, we build for performance and reliability."
              },
              {
                title: "Simplicity",
                description: "Complexity is the enemy of progress. We strive for elegant, minimal solutions to complex problems."
              }
            ].map((principle) => (
              <Card key={principle.title} className="border-border bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-bold">{principle.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {principle.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Products Section */}
      <Section id="products">
        <Container>
          <SectionHeading 
            title="Products" 
            description="Current projects and platforms under development at Meliora Labs."
          />
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <ProductCard 
              title="HOAM"
              description="A comprehensive Homeowner Association Management platform designed to streamline communication, finances, and maintenance for modern communities."
              status="In Development"
            />
            <ProductCard 
              title="Barber Commerce Platform"
              description="An all-in-one commerce solution for barbershops, integrating service booking, product sales, and customer management into a seamless workflow."
              status="In Development"
            />
            <ProductCard 
              title="Fair Pricing"
              description="A community-driven, Reddit-like platform for sharing and comparing prices across all products and services to expose algorithmic price discrimination."
              status="In Development"
            />
            <ProductCard 
              title="Foodie Journal"
              description="A minimalist social platform for culinary enthusiasts to document their food journeys, discover hidden gems, and share authentic reviews."
              status="Upcoming"
            />
          </div>
        </Container>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="border-t border-border bg-muted/20">
        <Container>
          <div className="relative isolate overflow-hidden px-6 py-24 text-center sm:rounded-3xl sm:px-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ready to build something exceptional?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
              We are always open to discussing new projects and collaborations.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" asChild>
                <a href="mailto:hello@melioralabs.io">Contact Us</a>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}