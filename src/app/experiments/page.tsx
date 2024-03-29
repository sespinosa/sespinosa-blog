import { Link } from "@nextui-org/react";

const Experiments = () => {
  return (
    <div className="w-full">
      <h1 className="mt-4 text-xl mb-4">Experiments</h1>
      <ul>
        <li>
          <Link href="/experiments/md-editor" color="foreground">
            MD Editor
          </Link>
        </li>
        <li>
          <Link href="/experiments/reverse-wasi" color="foreground">
            reverse wasi
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Experiments;