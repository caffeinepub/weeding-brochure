import { useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  useEffect(() => {
    document.title = 'Contact - Weeding Brochure';
  }, []);

  return (
    <div className="py-12 md:py-16">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-muted-foreground">
            Ready to order hardcopy invitations? Contact our designer to discuss your requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="font-serif text-2xl">Contact Information</CardTitle>
              <CardDescription>
                Reach out to our Gharpic designer owner for personalized assistance
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                  <a
                    href="tel:9824469590"
                    className="text-lg text-muted-foreground hover:text-foreground transition-colors"
                  >
                    9824469590
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">
                    Click to call on mobile devices
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">Designer</h3>
                  <p className="text-lg text-muted-foreground">Gharpic Designer Owner</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Professional graphic design services
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">Availability</h3>
                  <p className="text-muted-foreground">Monday - Saturday</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Call during business hours for fastest response
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-serif text-2xl">What to Expect</CardTitle>
              <CardDescription>
                When you contact us for hardcopy printing
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center flex-shrink-0 text-sm font-semibold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Design Review</h4>
                    <p className="text-sm text-muted-foreground">
                      We'll review your customization request and discuss any modifications
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center flex-shrink-0 text-sm font-semibold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Quote & Timeline</h4>
                    <p className="text-sm text-muted-foreground">
                      Receive pricing details and estimated delivery timeline
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 text-green-700 flex items-center justify-center flex-shrink-0 text-sm font-semibold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Proof Approval</h4>
                    <p className="text-sm text-muted-foreground">
                      Review and approve the final design before printing
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 text-sm font-semibold">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Printing & Delivery</h4>
                    <p className="text-sm text-muted-foreground">
                      High-quality printing and delivery of your invitations
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button asChild size="lg" className="w-full">
                  <a href="tel:9824469590">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
