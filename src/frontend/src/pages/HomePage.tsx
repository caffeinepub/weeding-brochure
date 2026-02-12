import { useNavigate } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Heart, Mail } from 'lucide-react';
import { useEffect } from 'react';

export default function HomePage() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Weeding Brochure - Beautiful Wedding Invitation Cards';
  }, []);

  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50/50 via-amber-50/30 to-background" />
        <div className="container relative py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-100 text-rose-700 text-sm font-medium">
                <Sparkles className="h-4 w-4" />
                <span>Elegant Wedding Invitations</span>
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Create Your Perfect Wedding Invitation
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Discover our stunning collection of wedding invitation designs. Browse our gallery, customize your favorite design, and bring your dream invitation to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  onClick={() => navigate({ to: '/gallery' })}
                  className="gap-2 text-base"
                >
                  View Gallery
                  <ArrowRight className="h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => navigate({ to: '/customize' })}
                  className="gap-2 text-base"
                >
                  <Heart className="h-5 w-5" />
                  Customize Now
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-200/20 to-amber-200/20 rounded-3xl blur-3xl" />
              <img
                src="/assets/generated/weeding-brochure-hero.dim_1600x700.png"
                alt="Beautiful Wedding Invitation Cards"
                className="relative rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground">
              Three simple steps to create your perfect wedding invitation
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-8 shadow-sm border border-border/50 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center font-bold text-xl mb-4">
                1
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">Browse Gallery</h3>
              <p className="text-muted-foreground">
                Explore our curated collection of elegant wedding invitation designs, from traditional to modern styles.
              </p>
            </div>
            <div className="bg-card rounded-xl p-8 shadow-sm border border-border/50 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-xl mb-4">
                2
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">Customize Details</h3>
              <p className="text-muted-foreground">
                Select your favorite design and share your wedding details and special requirements with us.
              </p>
            </div>
            <div className="bg-card rounded-xl p-8 shadow-sm border border-border/50 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold text-xl mb-4">
                3
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">Get Hardcopy</h3>
              <p className="text-muted-foreground">
                Contact our designer to finalize your order and receive beautiful printed invitations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="bg-gradient-to-br from-rose-50 to-amber-50 rounded-3xl p-8 md:p-12 text-center">
            <Mail className="h-12 w-12 text-rose-600 mx-auto mb-4" />
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Browse our gallery of beautiful designs or start customizing your invitation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => navigate({ to: '/gallery' })}
                className="gap-2"
              >
                Explore Designs
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate({ to: '/contact' })}
              >
                Contact Designer
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
