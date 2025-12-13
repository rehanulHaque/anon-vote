import { OptionType } from "@/types";
import Toggle from "./Toggle";

export default function OptionEditor({
  title,
  type,
  setType,
  value,
  setValue,
}: {
  title: string;
  type: OptionType;
  setType: (t: OptionType) => void;
  value: string;
  setValue: (v: string) => void;
}) {
  return (
    <div className="space-y-4">
      <h3 className="font-medium">{title}</h3>

      <div className="flex gap-3">
        <Toggle active={type === "text"} onClick={() => setType("text")}>
          Text
        </Toggle>
        <Toggle active={type === "image"} onClick={() => setType("image")}>
          Image
        </Toggle>
      </div>

      {type === "text" ? (
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full rounded-xl bg-slate-800 border border-white/10 px-4 py-3 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Enter text"
        />
      ) : (
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full rounded-xl bg-slate-800 border border-white/10 px-4 py-3 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Paste image URL"
        />
      )}
    </div>
  );
}