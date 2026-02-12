import { useState, useEffect } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import DesignSelect from '@/components/DesignSelect';
import SubmissionStatus from '@/components/SubmissionStatus';
import { useSubmitCustomization } from '@/hooks/useQueries';
import { Loader2 } from 'lucide-react';

export default function CustomizePage() {
  const navigate = useNavigate();
  const [brideName, setBrideName] = useState('');
  const [groomName, setGroomName] = useState('');
  const [weddingDate, setWeddingDate] = useState('');
  const [venue, setVenue] = useState('');
  const [requirements, setRequirements] = useState('');
  const [selectedDesignId, setSelectedDesignId] = useState<string>('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const submitMutation = useSubmitCustomization();

  useEffect(() => {
    document.title = 'Customize - Weeding Brochure';
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(false);
    setShowError(false);

    const details = `
Bride: ${brideName}
Groom: ${groomName}
Wedding Date: ${weddingDate}
Venue: ${venue}
Additional Requirements: ${requirements}
    `.trim();

    try {
      await submitMutation.mutateAsync({
        designIdentifier: selectedDesignId || null,
        details,
      });
      setShowSuccess(true);
      // Reset form
      setBrideName('');
      setGroomName('');
      setWeddingDate('');
      setVenue('');
      setRequirements('');
      setSelectedDesignId('');
    } catch (error) {
      setShowError(true);
    }
  };

  return (
    <div className="py-12 md:py-16">
      <div className="container max-w-3xl">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Customize Your Invitation
          </h1>
          <p className="text-lg text-muted-foreground">
            Share your wedding details and requirements. We'll help bring your vision to life.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="font-serif text-2xl">Wedding Details</CardTitle>
            <CardDescription>
              Fill in your information below. All fields are required unless marked optional.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="brideName">Bride's Name</Label>
                  <Input
                    id="brideName"
                    value={brideName}
                    onChange={(e) => setBrideName(e.target.value)}
                    placeholder="Enter bride's name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="groomName">Groom's Name</Label>
                  <Input
                    id="groomName"
                    value={groomName}
                    onChange={(e) => setGroomName(e.target.value)}
                    placeholder="Enter groom's name"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="weddingDate">Wedding Date</Label>
                <Input
                  id="weddingDate"
                  type="date"
                  value={weddingDate}
                  onChange={(e) => setWeddingDate(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="venue">Venue</Label>
                <Input
                  id="venue"
                  value={venue}
                  onChange={(e) => setVenue(e.target.value)}
                  placeholder="Enter wedding venue"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="design">Select Design (Optional)</Label>
                <DesignSelect value={selectedDesignId} onChange={setSelectedDesignId} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="requirements">Additional Requirements</Label>
                <Textarea
                  id="requirements"
                  value={requirements}
                  onChange={(e) => setRequirements(e.target.value)}
                  placeholder="Share any special requests, color preferences, or additional details..."
                  rows={5}
                  required
                />
              </div>

              {showSuccess && (
                <SubmissionStatus
                  type="success"
                  message="Your customization request has been submitted successfully! Our designer will review your details and contact you soon."
                />
              )}

              {showError && (
                <SubmissionStatus
                  type="error"
                  message="Failed to submit your request. Please try again or contact us directly."
                />
              )}

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  type="submit"
                  size="lg"
                  disabled={submitMutation.isPending}
                  className="flex-1"
                >
                  {submitMutation.isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Submit Request
                </Button>
                <Button
                  type="button"
                  size="lg"
                  variant="outline"
                  onClick={() => navigate({ to: '/contact' })}
                >
                  Contact Designer
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
