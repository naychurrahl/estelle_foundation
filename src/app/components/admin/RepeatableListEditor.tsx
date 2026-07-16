import { Card, CardContent } from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Plus, Trash2 } from "lucide-react";
import { IconPicker } from "./IconPicker";
import { StringListEditor } from "./StringListEditor";

export type FieldSchema<T> = {
  key: keyof T & string;
  label: string;
  type: "text" | "textarea" | "number" | "url" | "icon" | "string-list";
};

// Generic add/remove list-of-cards editor driven by a field schema - powers
// every homepage section that's a flat array of similarly-shaped objects
// (Hero slides use a small adapter for their nested CTAs; everything else
// plugs straight in).
export function RepeatableListEditor<T extends Record<string, unknown>>({
  items,
  fields,
  onChange,
  emptyItem,
  itemLabel,
}: {
  items: T[];
  fields: FieldSchema<T>[];
  onChange: (items: T[]) => void;
  emptyItem: T;
  itemLabel?: (item: T, index: number) => string;
}) {
  const updateItem = (index: number, patch: Partial<T>) => {
    onChange(items.map((item, i) => (i === index ? { ...item, ...patch } : item)));
  };

  const removeItem = (index: number) => {
    onChange(items.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <Card key={index}>
          <CardContent className="space-y-3 pt-6">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-slate-500">
                {itemLabel ? itemLabel(item, index) : `Item ${index + 1}`}
              </span>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => removeItem(index)}
              >
                <Trash2 className="size-4" />
              </Button>
            </div>

            {fields.map((field) => (
              <div key={field.key}>
                <Label>{field.label}</Label>
                {field.type === "textarea" ? (
                  <Textarea
                    value={(item[field.key] as string) ?? ""}
                    onChange={(e) =>
                      updateItem(index, {
                        [field.key]: e.target.value,
                      } as Partial<T>)
                    }
                  />
                ) : field.type === "icon" ? (
                  <IconPicker
                    value={(item[field.key] as string) ?? ""}
                    onChange={(value) =>
                      updateItem(index, { [field.key]: value } as Partial<T>)
                    }
                  />
                ) : field.type === "string-list" ? (
                  <StringListEditor
                    items={(item[field.key] as string[]) ?? []}
                    onChange={(value) =>
                      updateItem(index, { [field.key]: value } as Partial<T>)
                    }
                  />
                ) : (
                  <Input
                    type={field.type === "number" ? "number" : "text"}
                    value={(item[field.key] as string | number) ?? ""}
                    onChange={(e) =>
                      updateItem(index, {
                        [field.key]:
                          field.type === "number"
                            ? Number(e.target.value)
                            : e.target.value,
                      } as Partial<T>)
                    }
                  />
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      ))}

      <Button
        type="button"
        variant="outline"
        onClick={() => onChange([...items, emptyItem])}
      >
        <Plus className="mr-2 size-4" />
        Add item
      </Button>
    </div>
  );
}
