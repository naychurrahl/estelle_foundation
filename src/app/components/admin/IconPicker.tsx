import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { ICON_OPTIONS } from "@/app/lib/icons";

export function IconPicker({
  value,
  onChange,
}: {
  value: string;
  onChange: (name: string) => void;
}) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger>
        <SelectValue placeholder="Choose an icon" />
      </SelectTrigger>
      <SelectContent>
        {Object.entries(ICON_OPTIONS).map(([name, Icon]) => (
          <SelectItem key={name} value={name}>
            <div className="flex items-center gap-2">
              <Icon className="size-4" />
              <span>{name}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
