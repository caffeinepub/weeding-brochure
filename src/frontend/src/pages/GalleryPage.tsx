import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { invitations } from '@/data/invitations';
import InvitationPreviewDialog from '@/components/InvitationPreviewDialog';
import type { Invitation } from '@/data/invitations';

export default function GalleryPage() {
  const [selectedInvitation, setSelectedInvitation] = useState<Invitation | null>(null);

  useEffect(() => {
    document.title = 'Gallery - Weeding Brochure';
  }, []);

  return (
    <div className="py-12 md:py-16">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Invitation Gallery
          </h1>
          <p className="text-lg text-muted-foreground">
            Browse our collection of beautiful wedding invitation designs. Click on any design to view it in detail.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {invitations.map((invitation) => (
            <Card
              key={invitation.id}
              className="group cursor-pointer overflow-hidden hover:shadow-lg transition-all duration-300 border-border/50"
              onClick={() => setSelectedInvitation(invitation)}
            >
              <CardContent className="p-0">
                <div className="aspect-[3/4] overflow-hidden bg-muted">
                  <img
                    src={invitation.imagePath}
                    alt={invitation.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-serif font-semibold text-lg text-foreground mb-1">
                    {invitation.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{invitation.style}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <InvitationPreviewDialog
        invitation={selectedInvitation}
        open={!!selectedInvitation}
        onOpenChange={(open) => !open && setSelectedInvitation(null)}
      />
    </div>
  );
}
