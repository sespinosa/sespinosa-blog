import { Link } from "@nextui-org/react";

const Experiments = () => {
  return (
    <div className="w-full">
      <h1 className="mt-4 text-xl mb-4">Experiments</h1>
      <ul>
        <li>
          <Link href="/experiments/md-editor">
            MD Editor
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Experiments;