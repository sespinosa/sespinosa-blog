'use client';
import { WASIWorkerHost } from "@runno/wasi";
import { useState } from "react";
import { Input, Button } from "@nextui-org/react";


const getWASIWorker = async (url: string, name: string) => {
  try {
    const wasiWorker = new WASIWorkerHost(url, {
      args: [name],
      stdout: (out: string) => console.log("stdout: ", out),
      sterr: (err: string) => console.error("stderr: ", err),
    });
    console.log("Instance created, trying to start....")
    if(window) {
      // @ts-ignore
      window.wasiWorker = wasiWorker
      // @ts-ignore
      window.WASIWorkerHost = WASIWorkerHost;
    };
    const result = await wasiWorker.start();
    console.log("Wasi Worker Result: ", result);
    return wasiWorker;
  }
  catch(e) {
    console.error(e);
  }
};

const ReverseWASIRUnner = () => {
  const [ wasiWorker, setWasiWorker ] = useState(null);
  const [ name, setName ] = useState("reverse.wasm");
  const [url, setUrl ] = useState("http://localhost:3000/wasm/reverse.wasm");
  
  const createInstance = async () => {
    const ww = await getWASIWorker(url, name);
    if(ww) {
      setWasiWorker(ww);
    }
  };


  return(
    <div className="w-full">
      <div className="flex">
        <Input
          size="sm"
          type="text"
          label="URL"
          value={url}
          onChange={e => setUrl(e.target.value)}
          placeholder="wasm32-wasi binary URL"
          className="mr-2"
        />
        <Input
          size="sm"
          type="text"
          label="name"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="binary name"
        />
      </div>
      <Button
        color="primary"
        className="w-full my-2"
        onClick={() => createInstance()}
      >
        Download and Instantiate
      </Button>
      {
        !!wasiWorker
        &&
        <div>
          Instance created?   
        </div>
      }
    </div>
  );
};

export default ReverseWASIRUnner;