export default function toast(message: string) {
  const el = document.createElement("div");
  el.innerText = message;
  el.className =
    "fixed bottom-6 left-1/2 -translate-x-1/2 rounded-xl bg-slate-900 text-slate-100 px-6 py-3 text-sm shadow-lg border border-white/10 z-50 transition";
  document.body.appendChild(el);

  setTimeout(() => el.classList.add("opacity-0"), 2200);
  setTimeout(() => document.body.removeChild(el), 2600);
}