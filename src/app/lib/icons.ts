import {
  Target,
  Lightbulb,
  Rocket,
  Users,
  GraduationCap,
  Heart,
  TreePine,
  HandHeart,
  Gift,
  DollarSign,
  type LucideIcon,
} from "lucide-react";

// Content is stored as an icon *name* (serializable JSON, stored in the
// site_content table), resolved through this map wherever it needs to
// render as a component.
export const ICON_OPTIONS: Record<string, LucideIcon> = {
  Target,
  Lightbulb,
  Rocket,
  Users,
  GraduationCap,
  Heart,
  TreePine,
  HandHeart,
  Gift,
  DollarSign,
};

export type IconName = keyof typeof ICON_OPTIONS;

export function getIcon(name: string): LucideIcon {
  return ICON_OPTIONS[name] ?? Target;
}
