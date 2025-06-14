"use client";

import { useState, useRef } from "react";
import { Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import CopyCard from "@/components/CopyCard";

export default function Home() {
  const [account, setAccount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isGenerated, setIsGenerated] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const generateCode = (type: "url" | "html" | "markdown") => {
    let code = "";
    const host = window.location.origin;

    switch (type) {
      case "url":
        code = `${host}/card/${account}`;
        break;
      case "html":
        code = `<img width="400" height="150" src="${host}/card/${account}" alt="psn-card" />`;
        break;
      case "markdown":
        code = `![psn-card](${host}/card/${account})`;
        break;
    }

    return code;
  };

  const generateSvg = async () => {
    setIsLoading(true);
    const res = await fetch(`/card/${account}`);
    if (containerRef.current) {
      containerRef.current.innerHTML = await res.text();
    }
    setIsLoading(false);

    if (res.status === 200) {
      setIsGenerated(true);
    } else {
      setIsGenerated(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="flex flex-col items-center" style={{ width: 400 }}>
        <h1
          style={{
            backgroundImage: "linear-gradient(45deg, #016AD3, #003C9E)",
            WebkitTextFillColor: "transparent",
          }}
          className="text-5xl font-bold bg-clip-text"
        >
          PSN Profile Card
        </h1>
        <p className="my-4 mb-12 text-xl">Generate your PSN profile card</p>
        <Input
          ref={inputRef}
          placeholder="PSN Online ID"
          onChange={(e) => {
            setAccount(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              generateSvg();
              inputRef.current?.blur();
            }
          }}
        />
        <Button
          size="lg"
          className="my-8 cursor-pointer"
          disabled={isLoading}
          onClick={generateSvg}
        >
          {isLoading && <Loader2 className="animate-spin" />}
          Generate
        </Button>
        <div ref={containerRef}></div>
        {isGenerated && (
          <div className="flex flex-col gap-2 mt-4">
            <CopyCard title="URL" content={generateCode("url")} />
            <CopyCard title="HTML" content={generateCode("html")} />
            <CopyCard title="Markdown" content={generateCode("markdown")} />
          </div>
        )}
      </div>
    </div>
  );
}
