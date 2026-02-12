import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { CheckCircle2, XCircle } from 'lucide-react';

interface SubmissionStatusProps {
  type: 'success' | 'error';
  message: string;
}

export default function SubmissionStatus({ type, message }: SubmissionStatusProps) {
  return (
    <Alert variant={type === 'error' ? 'destructive' : 'default'}>
      {type === 'success' ? (
        <CheckCircle2 className="h-4 w-4" />
      ) : (
        <XCircle className="h-4 w-4" />
      )}
      <AlertTitle>{type === 'success' ? 'Success!' : 'Error'}</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
}
