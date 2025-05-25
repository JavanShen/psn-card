import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { useState } from "react";

const CopyCard = ({
  title,
  content,
  copyable = true,
}: {
  title: string;
  content: string;
  copyable?: boolean;
}) => {
  const [finalTitle, setFinalTitle] = useState(title);

  return (
    <Card
      className="gap-2 py-2 cursor-pointer"
      onClick={() => {
        if (copyable) {
          navigator.clipboard.writeText(content);
          setFinalTitle("Copied!");
          setTimeout(() => {
            setFinalTitle(title);
          }, 2000);
        }
      }}
    >
      <CardHeader className="flex justify-end px-4">
        <span className="opacity-60 text-sm">{finalTitle}</span>
      </CardHeader>
      <CardContent className="px-4 break-all">{content}</CardContent>
    </Card>
  );
};

export default CopyCard;
