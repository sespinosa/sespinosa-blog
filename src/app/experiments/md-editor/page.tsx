'use client';
import { useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Textarea } from "@nextui-org/react";

const MdEditorPage = () => {
  const [ content, setContent ] = useState('');

  return(
    <div className="grid grid-cols-2">
      <h1 className="text-xl text-center col-span-2 h-fit">Markdown Editor</h1>
      <div
        style={{ minHeight: "calc(100vh - 100px)", maxHeight: "calc(100vh - 100px)" }}
        className="p-[1rem]"
      >
        <Textarea
          value={content}
          onChange={e => setContent(e.target.value)}
          disableAutosize
          classNames={{
            inputWrapper: '!h-[calc(100vh-100px-2rem)]',
            input: '!h-full',
          }}
          style={{
            height: '100% !important',
          }}
        />
      </div>
      <div className="p-[1rem] prose prose-invert overflow-y-auto" style={{ maxHeight: "calc(100vh - 120px)" }}>
        <Markdown remarkPlugins={[remarkGfm]}>
          {content}
        </Markdown>
      </div>
    </div>
  );
};

export default MdEditorPage;