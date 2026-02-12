import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useNavigate } from '@tanstack/react-router';
import type { Invitation } from '@/data/invitations';
import { Heart } from 'lucide-react';

interface InvitationPreviewDialogProps {
  invitation: Invitation | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function InvitationPreviewDialog({
  invitation,
  open,
  onOpenChange,
}: InvitationPreviewDialogProps) {
  const navigate = useNavigate();

  if (!invitation) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl">{invitation.name}</DialogTitle>
          <DialogDescription>{invitation.style}</DialogDescription>
        </DialogHeader>
        <div className="space-y-6">
          <div className="rounded-lg overflow-hidden bg-muted">
            <img
              src={invitation.imagePath}
              alt={invitation.name}
              className="w-full h-auto"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              size="lg"
              className="flex-1 gap-2"
              onClick={() => {
                onOpenChange(false);
                navigate({ to: '/customize' });
              }}
            >
              <Heart className="h-5 w-5" />
              Customize This Design
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
