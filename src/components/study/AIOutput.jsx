import { Brain, Copy } from "lucide-react";

function AIOutput({ output, loading }) {
  const copyText = () => {
    navigator.clipboard.writeText(output);
  };

  return (
    <div className="bg-white rounded-3xl shadow-lg border border-pink-100 p-8">

      <div className="flex justify-between items-center">

        <div className="flex items-center gap-3">

          <Brain className="text-pink-500" />

          <h2 className="text-2xl font-bold">
            AI Output
          </h2>

        </div>

        <button
          onClick={copyText}
          className="flex items-center gap-2 bg-pink-100 text-pink-600 px-4 py-2 rounded-xl"
        >
          <Copy size={18} />
          Copy
        </button>

      </div>

      <div className="mt-8 bg-pink-50 rounded-2xl p-8 min-h-[350px]">

        {loading ? (
          <div className="text-center text-pink-500 text-xl animate-pulse">

            🤖 LifeOS AI is thinking...

          </div>
        ) : (
          <pre className="whitespace-pre-wrap font-sans text-gray-700 leading-8">

            {output || "Upload a PDF and click Generate Summary."}

          </pre>
        )}

      </div>

    </div>
  );
}

export default AIOutput;