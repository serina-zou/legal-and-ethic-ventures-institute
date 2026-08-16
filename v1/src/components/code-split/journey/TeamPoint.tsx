export default function TeamPoint({
  text,
  headWord,
}: {
  text: string;
  headWord: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-2 h-2 bg-[#F2784B] rounded-full flex-shrink-0" />
      
      <div className="text-muted-foreground">
        <span className="text-[#F2784B]" >{headWord}</span>
        {text}
      </div>
    </div>
  );
}
