export function BackgroundEffects() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden -z-10">
      <div 
        className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-primary/10 blur-[120px] vz-drift opacity-50"
        style={{ animationDuration: '24s' }}
      />
      <div 
        className="absolute top-[30%] -right-[20%] w-[60vw] h-[60vw] rounded-full bg-foreground/5 blur-[140px] vz-drift opacity-60"
        style={{ animationDuration: '32s', animationDelay: '-5s' }}
      />
      <div 
        className="absolute -bottom-[20%] left-[10%] w-[70vw] h-[70vw] rounded-full bg-primary/10 blur-[150px] vz-drift opacity-50"
        style={{ animationDuration: '28s', animationDelay: '-12s' }}
      />
    </div>
  );
}
