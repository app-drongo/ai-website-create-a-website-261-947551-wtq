'use client';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Hero() {
  const router = useRouter();

  // ACTION_PLACEHOLDER_START
  // Primary CTA - main conversion action
  const handlePrimaryAction = () => {
    router.push('/'); // Navigate to home for demo
  };

  // Secondary CTA - engagement action
  const handleSecondaryAction = () => {
    router.push('/'); // Navigate to home for features
  };

  // Scroll action - smooth scroll to next section
  const handleScrollAction = () => {
    const nextSection = document.getElementById('next-section');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };
  // ACTION_PLACEHOLDER_END

  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Eyebrow text */}
          <p className="text-sm font-medium text-primary mb-4 tracking-wide uppercase">
            Next-Generation Technology
          </p>

          {/* Main headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-foreground mb-6 leading-[0.9]">
            Build
            <br />
            faster <span className="text-muted-foreground">smarter</span>
          </h1>

          {/* Supporting text */}
          <p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-2xl leading-relaxed">
            Revolutionary development platform that accelerates your workflow with AI-powered
            automation and cloud-native architecture.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="group text-base px-6" onClick={handlePrimaryAction}>
              Launch Platform
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="text-base px-6"
              onClick={handleSecondaryAction}
            >
              View Architecture
            </Button>
          </div>

          {/* Metadata */}
          <div className="mt-16 pt-16 border-t border-border">
            <div className="grid grid-cols-3 gap-8 max-w-md">
              <div>
                <p className="text-3xl font-bold text-foreground">10x</p>
                <p className="text-sm text-muted-foreground mt-1">Performance</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">99.9%</p>
                <p className="text-sm text-muted-foreground mt-1">Uptime</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">50k+</p>
                <p className="text-sm text-muted-foreground mt-1">Developers</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll prompt */}
      <button
        onClick={handleScrollAction}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-3 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
        aria-label="Scroll to next section"
      >
        <ArrowDown className="size-5 animate-bounce" />
      </button>
    </section>
  );
}
