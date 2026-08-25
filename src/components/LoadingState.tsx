export function LoadingState({ label }: { label: string }) {
  return (
    <main className="loading-state" role="status" aria-live="polite">
      <span className="sr-only">{label}</span>
      <div className="loading-line loading-line-wide" />
      <div className="loading-line" />
      <div className="loading-panel" />
    </main>
  );
}
