import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { invitations } from '@/data/invitations';

interface DesignSelectProps {
  value: string;
  onChange: (value: string) => void;
}

export default function DesignSelect({ value, onChange }: DesignSelectProps) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger>
        <SelectValue placeholder="Choose a design from gallery" />
      </SelectTrigger>
      <SelectContent>
        {invitations.map((invitation) => (
          <SelectItem key={invitation.id} value={invitation.id}>
            {invitation.name} - {invitation.style}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
